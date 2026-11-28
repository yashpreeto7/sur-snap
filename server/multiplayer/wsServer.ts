import { randomUUID } from 'node:crypto';
import type { IncomingMessage, Server as HttpServer, ServerResponse } from 'node:http';
import type { Duplex } from 'node:stream';
import { WebSocket, WebSocketServer } from 'ws';
import type { ClientWsMessage, ServerWsMessage } from '../../src/types/multiplayer.ts';
import { sendJson } from '../importPlaylistHandler.ts';
import { RoomManager } from './roomManager.ts';
import { suggestRoomTracks } from './trackResolver.ts';

const MAX_WS_PAYLOAD_BYTES = 512 * 1024;
const AUDIO_BUFFER_CACHE_MAX = 24;

export interface MultiplayerRuntime {
  roomManager: RoomManager;
  attachToHttpServer: (
    httpServer: HttpServer,
    options?: { destroyUnknownUpgrades?: boolean },
  ) => void;
  handleHttpRequest: (
    req: IncomingMessage,
    res: ServerResponse,
    parsedUrl: URL,
  ) => Promise<boolean>;
  close: () => void;
}

export function createMultiplayerRuntime(): MultiplayerRuntime {
  const socketsByPlayerId = new Map<string, WebSocket>();
  const audioBufferCache = new Map<string, Buffer>();

  const sendToPlayer = (playerId: string, payload: ServerWsMessage): void => {
    const ws = socketsByPlayerId.get(playerId);
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    ws.send(JSON.stringify(payload));
  };

  const roomManager = new RoomManager({
    onRoomUpdate: (_code, state, recipientPlayerIds) => {
      const encoded = JSON.stringify({ type: 'room_state', state } satisfies ServerWsMessage);
      for (const playerId of recipientPlayerIds) {
        const ws = socketsByPlayerId.get(playerId);
        if (ws && ws.readyState === WebSocket.OPEN) {
          ws.send(encoded);
        }
      }
    },
    onPlayerMessage: sendToPlayer,
  });

  const wss = new WebSocketServer({
    noServer: true,
    maxPayload: MAX_WS_PAYLOAD_BYTES,
  });

  const heartbeatInterval = setInterval(() => {
    for (const ws of wss.clients) {
      if (ws.readyState === WebSocket.OPEN) {
        ws.ping();
      }
    }
  }, 25_000);
  heartbeatInterval.unref?.();

  wss.on('connection', (ws: WebSocket) => {
    const playerId = randomUUID();
    socketsByPlayerId.set(playerId, ws);

    ws.on('message', (raw) => {
      let msg: ClientWsMessage;
      try {
        msg = JSON.parse(raw.toString()) as ClientWsMessage;
      } catch {
        sendToPlayer(playerId, {
          type: 'error',
          code: 'BAD_JSON',
          message: 'Invalid WebSocket payload.',
        });
        return;
      }

      if (!msg || typeof msg !== 'object' || typeof msg.type !== 'string') return;

      switch (msg.type) {
        case 'create_room':
          roomManager.createRoom(playerId, msg.nickname ?? '', msg.settings, msg.customTracks);
          break;
        case 'join_room':
          roomManager.joinRoom(playerId, msg.code ?? '', msg.nickname ?? '', msg.reconnectToken);
          break;
        case 'update_settings':
          roomManager.updateSettings(playerId, msg.settings, msg.customTracks);
          break;
        case 'start_match':
          void roomManager.startMatch(playerId);
          break;
        case 'round_ready':
          roomManager.markRoundReady(playerId, msg.roundIndex);
          break;
        case 'submit_guess':
          if (msg.candidate && typeof msg.candidate === 'object') {
            roomManager.submitGuess(playerId, msg.roundIndex, msg.candidate);
          }
          break;
        case 'player_skip':
          roomManager.playerSkip(playerId, msg.roundIndex);
          break;
        case 'buzz_in':
          roomManager.buzzIn(playerId, msg.roundIndex);
          break;
        case 'next_round':
          roomManager.nextRound(playerId);
          break;
        case 'play_again':
          roomManager.playAgain(playerId);
          break;
        case 'leave_room':
          roomManager.leaveRoom(playerId);
          break;
      }
    });

    ws.on('close', () => {
      socketsByPlayerId.delete(playerId);
      roomManager.handleDisconnect(playerId);
    });
  });

  const attachToHttpServer = (
    httpServer: HttpServer,
    options: { destroyUnknownUpgrades?: boolean } = {},
  ): void => {
    httpServer.on('upgrade', (req: IncomingMessage, socket: Duplex, head: Buffer) => {
      const host = req.headers.host ?? 'localhost';
      let pathname = '/';
      try {
        pathname = new URL(req.url ?? '/', `http://${host}`).pathname;
      } catch {
        if (options.destroyUnknownUpgrades) socket.destroy();
        return;
      }

      if (pathname !== '/ws') {
        if (options.destroyUnknownUpgrades) {
          socket.destroy();
        }
        return;
      }

      wss.handleUpgrade(req, socket, head, (ws) => {
        wss.emit('connection', ws, req);
      });
    });
  };

  const fetchAudioBuffer = async (previewUrl: string): Promise<Buffer> => {
    const cached = audioBufferCache.get(previewUrl);
    if (cached) return cached;

    const resp = await fetch(previewUrl);
    if (!resp.ok) {
      throw new Error(`Audio CDN returned ${resp.status}`);
    }
    const buf = Buffer.from(await resp.arrayBuffer());
    if (audioBufferCache.size >= AUDIO_BUFFER_CACHE_MAX) {
      const oldestKey = audioBufferCache.keys().next().value;
      if (oldestKey) audioBufferCache.delete(oldestKey);
    }
    audioBufferCache.set(previewUrl, buf);
    return buf;
  };

  const handleHttpRequest = async (
    req: IncomingMessage,
    res: ServerResponse,
    parsedUrl: URL,
  ): Promise<boolean> => {
    const audioMatch = /^\/api\/rooms\/([A-Za-z0-9]+)\/audio\/(\d+)$/.exec(parsedUrl.pathname);
    if (audioMatch && (req.method === 'GET' || req.method === 'HEAD')) {
      const code = audioMatch[1].toUpperCase();
      const roundIndex = Number(audioMatch[2]);
      const previewUrl = roomManager.getRoundAudioUrl(code, roundIndex);
      if (!previewUrl) {
        sendJson(res, 404, { error: 'Round audio unavailable.' });
        return true;
      }

      try {
        const buf = await fetchAudioBuffer(previewUrl);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'audio/mp4');
        res.setHeader('Content-Length', String(buf.length));
        res.setHeader('Cache-Control', 'no-store');
        if (req.method === 'HEAD') {
          res.end();
        } else {
          res.end(buf);
        }
      } catch {
        sendJson(res, 502, { error: 'Failed to proxy room audio.' });
      }
      return true;
    }

    const suggestMatch = /^\/api\/rooms\/([A-Za-z0-9]+)\/suggest$/.exec(parsedUrl.pathname);
    if (suggestMatch && req.method === 'GET') {
      const code = suggestMatch[1].toUpperCase();
      const state = roomManager.getPublicRoomState(code);
      if (!state) {
        sendJson(res, 404, { error: 'Room not found.' });
        return true;
      }
      const q = parsedUrl.searchParams.get('q') ?? '';
      const customTracks = roomManager.getRoomCustomTracks(code);
      const suggestions = suggestRoomTracks(customTracks, q, 8);
      sendJson(res, 200, { suggestions });
      return true;
    }

    const previewMatch = /^\/api\/rooms\/([A-Za-z0-9]+)\/preview$/.exec(parsedUrl.pathname);
    if (previewMatch && req.method === 'GET') {
      const code = previewMatch[1].toUpperCase();
      const preview = roomManager.getRoomInvitePreview(code);
      if (!preview) {
        sendJson(res, 404, { error: 'Invite room not found or expired.' });
        return true;
      }
      sendJson(res, 200, { preview });
      return true;
    }

    return false;
  };

  const close = (): void => {
    clearInterval(heartbeatInterval);
    wss.close();
  };

  return {
    roomManager,
    attachToHttpServer,
    handleHttpRequest,
    close,
  };
}
