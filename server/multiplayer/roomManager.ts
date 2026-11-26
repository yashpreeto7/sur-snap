import { randomBytes } from 'node:crypto';
import { ATTEMPT_DURATIONS, type GuessStatus } from '../../src/types/game.ts';
import {
  MAX_ROOM_PLAYERS,
  MULTIPLAYER_STEP_POINTS,
  type GuessSubmissionCandidate,
  type PlayerRoundStatus,
  type PublicRoomPlayer,
  type PublicRoomState,
  type RoomMode,
  type RoomPhase,
  type RoomSettingsInput,
  type RoomTrackInput,
  type ServerWsMessage,
} from '../../src/types/multiplayer.ts';
import { evaluateGuess } from '../../src/utils/matching.ts';
import {
  resolveNextRoundTrack,
  sanitizeCustomTracks,
  type ResolvedRoundTrack,
  type RoomTrackResolver,
} from './trackResolver.ts';

const ROOM_CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const TOTAL_STEPS = ATTEMPT_DURATIONS.length; // 6

export const LOADING_ROUND_TIMEOUT_MS = 4_000;
export const SYNC_STEP_DURATION_MS = 12_000;
export const RACE_ROUND_DURATION_MS = 45_000;
export const BUZZ_WINDOW_DURATION_MS = 8_000;
export const ROUND_REVEAL_DURATION_MS = 8_000;
export const BUZZ_PENALTY_POINTS = 150;
export const IDLE_ROOM_TTL_MS = 30 * 60_000;

interface InternalPlayer {
  id: string;
  reconnectToken: string;
  name: string;
  score: number;
  isHost: boolean;
  connected: boolean;
  roundStatus: PlayerRoundStatus;
  attemptIndex: number;
  stepGuessed: boolean;
  roundPointsDelta: number;
  joinedAt: number;
}

export interface InternalRoom {
  code: string;
  mode: RoomMode;
  packId: string;
  packName: string;
  roundCount: number;
  totalRounds: number;
  currentRound: number;
  phase: RoomPhase;
  stepIndex: number;
  phaseEndsAt: number | null;
  buzzedPlayerId: string | null;
  remainingStepMs: number;
  roundGeneration: number;
  customTracks: RoomTrackInput[];
  usedTrackKeys: Set<string>;
  currentRoundData: ResolvedRoundTrack | null;
  lastRevealedTrack: ResolvedRoundTrack['track'] | null;
  notice: string | null;
  players: Map<string, InternalPlayer>;
  activeTimer: ReturnType<typeof setTimeout> | null;
  idleTimer: ReturnType<typeof setTimeout> | null;
}

export interface RoomManagerOptions {
  nowFn?: () => number;
  trackResolver?: RoomTrackResolver;
  onRoomUpdate?: (roomCode: string, state: PublicRoomState, recipientPlayerIds: string[]) => void;
  onPlayerMessage?: (playerId: string, message: ServerWsMessage) => void;
}

function sanitizeNickname(raw: string): string {
  return raw.replace(/\s+/g, ' ').trim().slice(0, 20);
}

function clampRoundCount(raw: number): number {
  if (!Number.isFinite(raw)) return 10;
  return Math.max(1, Math.min(15, Math.round(raw)));
}

function normalizeMode(raw: string): RoomMode {
  if (raw === 'speed-race' || raw === 'buzz-in') return raw;
  return 'classic-sync';
}

function formatCode(raw: string): string {
  return raw.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
}

function buildPublicState(room: InternalRoom, now: number): PublicRoomState {
  const showRevealed = room.phase === 'round-reveal' || room.phase === 'finished';
  const players: PublicRoomPlayer[] = [...room.players.values()].map((p) => ({
    id: p.id,
    name: p.name,
    score: p.score,
    isHost: p.isHost,
    connected: p.connected,
    roundStatus: p.roundStatus,
    attemptIndex: p.attemptIndex,
    roundPointsDelta: p.roundPointsDelta,
  }));

  const audioUrl =
    room.currentRoundData && room.phase !== 'lobby' && room.phase !== 'finished'
      ? `/api/rooms/${room.code}/audio/${room.currentRound}?g=${room.roundGeneration}`
      : null;

  return {
    code: room.code,
    mode: room.mode,
    packId: room.packId,
    packName: room.packName,
    roundCount: room.roundCount,
    currentRound: room.currentRound,
    totalRounds: room.totalRounds,
    phase: room.phase,
    stepIndex: room.stepIndex,
    phaseEndsAt: room.phaseEndsAt,
    serverNow: now,
    audioUrl,
    buzzedPlayerId: room.buzzedPlayerId,
    players,
    revealedTrack: showRevealed ? room.lastRevealedTrack : null,
    notice: room.notice,
  };
}

export class RoomManager {
  private readonly rooms = new Map<string, InternalRoom>();
  private readonly playerRoomIndex = new Map<string, string>();
  private readonly nowFn: () => number;
  private readonly trackResolver: RoomTrackResolver;
  private readonly onRoomUpdate?: (
    roomCode: string,
    state: PublicRoomState,
    recipientPlayerIds: string[],
  ) => void;
  private readonly onPlayerMessage?: (playerId: string, message: ServerWsMessage) => void;

  constructor(options: RoomManagerOptions = {}) {
    this.nowFn = options.nowFn ?? (() => Date.now());
    this.trackResolver = options.trackResolver ?? resolveNextRoundTrack;
    this.onRoomUpdate = options.onRoomUpdate;
    this.onPlayerMessage = options.onPlayerMessage;
  }

  getRoomCount(): number {
    return this.rooms.size;
  }

  getPublicRoomState(code: string): PublicRoomState | null {
    const room = this.rooms.get(formatCode(code));
    return room ? buildPublicState(room, this.nowFn()) : null;
  }

  getRoundAudioUrl(code: string, roundIndex: number): string | null {
    const room = this.rooms.get(formatCode(code));
    if (!room || room.currentRound !== roundIndex || !room.currentRoundData) {
      return null;
    }
    if (
      room.phase !== 'loading-round' &&
      room.phase !== 'playing' &&
      room.phase !== 'buzz-window' &&
      room.phase !== 'round-reveal'
    ) {
      return null;
    }
    return room.currentRoundData.previewUrl;
  }

  getRoomCustomTracks(code: string): RoomTrackInput[] {
    const room = this.rooms.get(formatCode(code));
    return room ? room.customTracks : [];
  }

  getPlayerRoomCode(playerId: string): string | undefined {
    return this.playerRoomIndex.get(playerId);
  }

  private generateRoomCode(): string {
    for (let attempt = 0; attempt < 30; attempt += 1) {
      let code = '';
      for (let i = 0; i < 4; i += 1) {
        const idx = Math.floor(Math.random() * ROOM_CODE_ALPHABET.length);
        code += ROOM_CODE_ALPHABET[idx];
      }
      if (!this.rooms.has(code)) return code;
    }
    return randomBytes(3).toString('hex').toUpperCase().slice(0, 6);
  }

  private clearActiveTimer(room: InternalRoom): void {
    if (room.activeTimer !== null) {
      clearTimeout(room.activeTimer);
      room.activeTimer = null;
    }
  }

  private touchIdleTimer(room: InternalRoom): void {
    if (room.idleTimer !== null) {
      clearTimeout(room.idleTimer);
    }
    room.idleTimer = setTimeout(() => {
      this.destroyRoom(room.code);
    }, IDLE_ROOM_TTL_MS);
  }

  destroyRoom(code: string): void {
    const room = this.rooms.get(code);
    if (!room) return;
    this.clearActiveTimer(room);
    if (room.idleTimer !== null) {
      clearTimeout(room.idleTimer);
      room.idleTimer = null;
    }
    for (const playerId of room.players.keys()) {
      if (this.playerRoomIndex.get(playerId) === code) {
        this.playerRoomIndex.delete(playerId);
      }
    }
    this.rooms.delete(code);
  }

  private sendDirect(playerId: string, msg: ServerWsMessage): void {
    this.onPlayerMessage?.(playerId, msg);
  }

  private broadcastRoom(room: InternalRoom): void {
    if (!this.onRoomUpdate) return;
    const state = buildPublicState(room, this.nowFn());
    const recipients = [...room.players.values()].filter((p) => p.connected).map((p) => p.id);
    this.onRoomUpdate(room.code, state, recipients);
  }

  private sendError(playerId: string, code: string, message: string): void {
    this.sendDirect(playerId, { type: 'error', code, message });
  }

  createRoom(
    playerId: string,
    nicknameRaw: string,
    settings: RoomSettingsInput,
    customTracks?: RoomTrackInput[],
  ): PublicRoomState | null {
    const nickname = sanitizeNickname(nicknameRaw);
    if (!nickname) {
      this.sendError(playerId, 'INVALID_NAME', 'Enter a nickname (1–20 characters).');
      return null;
    }

    // Leave any prior room cleanly before creating another
    this.leaveRoom(playerId);

    const code = this.generateRoomCode();
    const token = randomBytes(16).toString('hex');
    const now = this.nowFn();
    const sanitizedCustom = sanitizeCustomTracks(customTracks);
    const packId = typeof settings.packId === 'string' && settings.packId ? settings.packId : 'all-india';
    const packName =
      typeof settings.packName === 'string' && settings.packName.trim()
        ? settings.packName.trim().slice(0, 80)
        : 'All India Mix';

    const room: InternalRoom = {
      code,
      mode: normalizeMode(settings.mode),
      packId,
      packName,
      roundCount: clampRoundCount(settings.roundCount),
      totalRounds: clampRoundCount(settings.roundCount),
      currentRound: 0,
      phase: 'lobby',
      stepIndex: 0,
      phaseEndsAt: null,
      buzzedPlayerId: null,
      remainingStepMs: SYNC_STEP_DURATION_MS,
      roundGeneration: 0,
      customTracks: sanitizedCustom,
      usedTrackKeys: new Set<string>(),
      currentRoundData: null,
      lastRevealedTrack: null,
      notice: null,
      players: new Map(),
      activeTimer: null,
      idleTimer: null,
    };

    room.players.set(playerId, {
      id: playerId,
      reconnectToken: token,
      name: nickname,
      score: 0,
      isHost: true,
      connected: true,
      roundStatus: 'idle',
      attemptIndex: 0,
      stepGuessed: false,
      roundPointsDelta: 0,
      joinedAt: now,
    });

    this.rooms.set(code, room);
    this.playerRoomIndex.set(playerId, code);
    this.touchIdleTimer(room);

    this.sendDirect(playerId, {
      type: 'session_assigned',
      roomCode: code,
      playerId,
      reconnectToken: token,
    });
    this.broadcastRoom(room);
    return buildPublicState(room, now);
  }

  joinRoom(
    playerId: string,
    codeRaw: string,
    nicknameRaw: string,
    reconnectToken?: string,
  ): PublicRoomState | null {
    const code = formatCode(codeRaw);
    const room = this.rooms.get(code);
    if (!room) {
      this.sendError(playerId, 'ROOM_NOT_FOUND', `Room "${code || codeRaw}" was not found.`);
      return null;
    }

    const now = this.nowFn();
    this.touchIdleTimer(room);

    // Reconnect existing slot when matching token is supplied
    if (reconnectToken) {
      const existing = [...room.players.values()].find((p) => p.reconnectToken === reconnectToken);
      if (existing) {
        this.leaveRoom(playerId);
        if (existing.id !== playerId) {
          room.players.delete(existing.id);
          this.playerRoomIndex.delete(existing.id);
          if (room.buzzedPlayerId === existing.id) {
            room.buzzedPlayerId = playerId;
          }
          existing.id = playerId;
        }
        existing.connected = true;
        room.players.set(playerId, existing);
        this.playerRoomIndex.set(playerId, code);

        this.sendDirect(playerId, {
          type: 'session_assigned',
          roomCode: code,
          playerId,
          reconnectToken: existing.reconnectToken,
        });
        this.broadcastRoom(room);
        return buildPublicState(room, now);
      }
    }

    const nickname = sanitizeNickname(nicknameRaw);
    if (!nickname) {
      this.sendError(playerId, 'INVALID_NAME', 'Enter a nickname (1–20 characters).');
      return null;
    }

    if (room.phase !== 'lobby') {
      this.sendError(
        playerId,
        'MATCH_IN_PROGRESS',
        'This match has already started. Wait for the next lobby or ask the host.',
      );
      return null;
    }

    const connectedCount = [...room.players.values()].filter((p) => p.connected).length;
    if (connectedCount >= MAX_ROOM_PLAYERS) {
      this.sendError(playerId, 'ROOM_FULL', `Room is full (max ${MAX_ROOM_PLAYERS} players).`);
      return null;
    }

    const duplicate = [...room.players.values()].some(
      (p) => p.connected && p.name.toLowerCase() === nickname.toLowerCase(),
    );
    if (duplicate) {
      this.sendError(
        playerId,
        'DUPLICATE_NAME',
        `Nickname "${nickname}" is already taken in this room.`,
      );
      return null;
    }

    this.leaveRoom(playerId);

    const token = randomBytes(16).toString('hex');
    const hasConnectedHost = [...room.players.values()].some((p) => p.connected && p.isHost);
    room.players.set(playerId, {
      id: playerId,
      reconnectToken: token,
      name: nickname,
      score: 0,
      isHost: !hasConnectedHost,
      connected: true,
      roundStatus: 'idle',
      attemptIndex: 0,
      stepGuessed: false,
      roundPointsDelta: 0,
      joinedAt: now,
    });

    this.playerRoomIndex.set(playerId, code);
    this.sendDirect(playerId, {
      type: 'session_assigned',
      roomCode: code,
      playerId,
      reconnectToken: token,
    });
    this.broadcastRoom(room);
    return buildPublicState(room, now);
  }

  updateSettings(
    playerId: string,
    settings: RoomSettingsInput,
    customTracks?: RoomTrackInput[],
  ): void {
    const room = this.requireHostInPhase(playerId, ['lobby']);
    if (!room) return;

    room.mode = normalizeMode(settings.mode);
    room.packId = typeof settings.packId === 'string' && settings.packId ? settings.packId : room.packId;
    room.packName =
      typeof settings.packName === 'string' && settings.packName.trim()
        ? settings.packName.trim().slice(0, 80)
        : room.packName;
    room.roundCount = clampRoundCount(settings.roundCount);
    if (customTracks !== undefined) {
      room.customTracks = sanitizeCustomTracks(customTracks);
    }
    this.touchIdleTimer(room);
    this.broadcastRoom(room);
  }

  async startMatch(playerId: string): Promise<void> {
    const room = this.requireHostInPhase(playerId, ['lobby']);
    if (!room) return;

    // Remove disconnected ghost players when starting a fresh match
    for (const [id, player] of room.players.entries()) {
      if (!player.connected) {
        room.players.delete(id);
        this.playerRoomIndex.delete(id);
      } else {
        player.score = 0;
        player.roundStatus = 'idle';
        player.attemptIndex = 0;
        player.stepGuessed = false;
        player.roundPointsDelta = 0;
      }
    }

    if (room.players.size === 0) return;

    room.usedTrackKeys.clear();
    room.lastRevealedTrack = null;
    room.notice = null;
    room.currentRound = 0;

    const availableCustomCount = room.packId.startsWith('custom:')
      ? room.customTracks.length
      : room.roundCount;
    room.totalRounds = Math.max(1, Math.min(room.roundCount, availableCustomCount || room.roundCount));

    await this.beginRound(room, 0);
  }

  markRoundReady(playerId: string, roundIndex: number): void {
    const room = this.getRoomForPlayer(playerId);
    if (!room || room.phase !== 'loading-round' || room.currentRound !== roundIndex) return;
    if (!room.currentRoundData) return;

    const player = room.players.get(playerId);
    if (!player || !player.connected) return;

    if (player.roundStatus !== 'ready') {
      player.roundStatus = 'ready';
      this.broadcastRoom(room);
    }

    const allReady = [...room.players.values()]
      .filter((p) => p.connected)
      .every((p) => p.roundStatus === 'ready');

    if (allReady) {
      this.enterPlayingPhase(room);
    }
  }

  submitGuess(playerId: string, roundIndex: number, candidate: GuessSubmissionCandidate): void {
    const room = this.getRoomForPlayer(playerId);
    if (!room || room.currentRound !== roundIndex || !room.currentRoundData) return;
    const player = room.players.get(playerId);
    if (!player || !player.connected) return;

    if (player.roundStatus === 'solved' || player.roundStatus === 'locked-out') return;

    if (room.mode === 'buzz-in') {
      if (room.phase !== 'buzz-window' || room.buzzedPlayerId !== playerId) {
        this.sendError(playerId, 'NOT_BUZZED', 'Buzz in first before submitting a guess.');
        return;
      }
    } else if (room.phase !== 'playing') {
      return;
    }

    if (room.mode === 'classic-sync' && player.stepGuessed) {
      this.sendError(playerId, 'ALREADY_GUESSED_STEP', 'Wait for the next snippet length.');
      return;
    }

    if (room.mode === 'speed-race' && player.attemptIndex >= TOTAL_STEPS) {
      return;
    }

    this.touchIdleTimer(room);

    const status: GuessStatus = evaluateGuess(
      {
        id: candidate.id,
        title: candidate.title,
        trackName: candidate.trackName,
        artistName: candidate.artistName,
      },
      room.currentRoundData.track,
    );

    const now = this.nowFn();

    if (status === 'correct') {
      const pointsAwarded = this.calculateRoundPoints(room, player, now);
      player.score += pointsAwarded;
      player.roundPointsDelta += pointsAwarded;
      player.roundStatus = 'solved';
      player.stepGuessed = true;

      this.sendDirect(playerId, {
        type: 'guess_feedback',
        roundIndex,
        status: 'correct',
        message: `Locked in! +${pointsAwarded} pts`,
        pointsAwarded,
      });

      if (room.mode === 'buzz-in') {
        room.buzzedPlayerId = null;
        this.enterRoundReveal(room);
        return;
      }

      if (room.mode === 'classic-sync') {
        const connectedPlayers = [...room.players.values()].filter((p) => p.connected);
        if (connectedPlayers.every((p) => p.roundStatus === 'solved')) {
          this.enterRoundReveal(room);
          return;
        }
        this.maybeAdvanceSyncStep(room);
        return;
      }

      // speed-race
      this.checkRaceCompletion(room);
      return;
    }

    // Wrong or artist-match
    if (room.mode === 'buzz-in') {
      const penalty = Math.min(BUZZ_PENALTY_POINTS, player.score);
      player.score -= penalty;
      player.roundPointsDelta -= penalty;
      player.roundStatus = 'locked-out';

      this.sendDirect(playerId, {
        type: 'guess_feedback',
        roundIndex,
        status,
        message:
          status === 'artist-match'
            ? `Right artist, wrong song — locked out (-${penalty} pts).`
            : `Wrong buzz — locked out for this round (-${penalty} pts).`,
        pointsAwarded: -penalty,
        lockedOut: true,
      });

      this.resumeAfterFailedBuzz(room);
      return;
    }

    player.roundStatus = status;
    player.stepGuessed = true;

    if (room.mode === 'classic-sync') {
      this.sendDirect(playerId, {
        type: 'guess_feedback',
        roundIndex,
        status,
        message:
          status === 'artist-match'
            ? 'Right artist, wrong song! Try again on the next snippet.'
            : 'Miss — listen closely on the next snippet.',
        pointsAwarded: 0,
      });
      this.maybeAdvanceSyncStep(room);
      return;
    }

    // speed-race
    player.attemptIndex += 1;
    if (player.attemptIndex >= TOTAL_STEPS) {
      player.roundStatus = status;
    }
    this.sendDirect(playerId, {
      type: 'guess_feedback',
      roundIndex,
      status,
      message:
        status === 'artist-match'
          ? 'Right artist, wrong song!'
          : player.attemptIndex >= TOTAL_STEPS
            ? 'Out of attempts for this round.'
            : 'Miss — unlocked the next snippet.',
      pointsAwarded: 0,
    });
    this.checkRaceCompletion(room);
  }

  playerSkip(playerId: string, roundIndex: number): void {
    const room = this.getRoomForPlayer(playerId);
    if (!room || room.currentRound !== roundIndex || room.phase !== 'playing') return;
    const player = room.players.get(playerId);
    if (!player || !player.connected) return;
    if (player.roundStatus === 'solved' || player.roundStatus === 'locked-out') return;

    this.touchIdleTimer(room);

    if (room.mode === 'classic-sync') {
      if (player.stepGuessed) return;
      player.stepGuessed = true;
      player.roundStatus = 'skipped';
      this.maybeAdvanceSyncStep(room);
      return;
    }

    if (room.mode === 'speed-race') {
      if (player.attemptIndex >= TOTAL_STEPS) return;
      player.attemptIndex += 1;
      if (player.attemptIndex >= TOTAL_STEPS) {
        player.roundStatus = 'skipped';
      }
      this.checkRaceCompletion(room);
    }
  }

  buzzIn(playerId: string, roundIndex: number): void {
    const room = this.getRoomForPlayer(playerId);
    if (
      !room ||
      room.mode !== 'buzz-in' ||
      room.phase !== 'playing' ||
      room.currentRound !== roundIndex ||
      room.buzzedPlayerId !== null
    ) {
      return;
    }

    const player = room.players.get(playerId);
    if (!player || !player.connected) return;
    if (player.roundStatus === 'solved' || player.roundStatus === 'locked-out') return;

    this.touchIdleTimer(room);
    const now = this.nowFn();
    room.remainingStepMs = Math.max(2500, (room.phaseEndsAt ?? now) - now);
    room.buzzedPlayerId = playerId;
    room.phase = 'buzz-window';
    room.phaseEndsAt = now + BUZZ_WINDOW_DURATION_MS;

    const gen = room.roundGeneration;
    this.clearActiveTimer(room);
    room.activeTimer = setTimeout(() => {
      if (room.roundGeneration !== gen || room.phase !== 'buzz-window') return;
      if (room.buzzedPlayerId !== playerId) return;

      const penalty = Math.min(BUZZ_PENALTY_POINTS, player.score);
      player.score -= penalty;
      player.roundPointsDelta -= penalty;
      player.roundStatus = 'locked-out';
      this.sendDirect(playerId, {
        type: 'guess_feedback',
        roundIndex,
        status: 'wrong',
        message: `Time ran out on your buzz (-${penalty} pts).`,
        pointsAwarded: -penalty,
        lockedOut: true,
      });
      this.resumeAfterFailedBuzz(room);
    }, BUZZ_WINDOW_DURATION_MS);

    this.broadcastRoom(room);
  }

  nextRound(playerId: string): void {
    const room = this.requireHostInPhase(playerId, ['round-reveal']);
    if (!room) return;
    void this.advanceFromReveal(room);
  }

  playAgain(playerId: string): void {
    const room = this.requireHostInPhase(playerId, ['finished']);
    if (!room) return;

    this.clearActiveTimer(room);
    room.roundGeneration += 1;
    room.phase = 'lobby';
    room.stepIndex = 0;
    room.currentRound = 0;
    room.phaseEndsAt = null;
    room.buzzedPlayerId = null;
    room.currentRoundData = null;
    room.lastRevealedTrack = null;
    room.notice = null;

    for (const [id, player] of room.players.entries()) {
      if (!player.connected) {
        room.players.delete(id);
        this.playerRoomIndex.delete(id);
      } else {
        player.score = 0;
        player.roundStatus = 'idle';
        player.attemptIndex = 0;
        player.stepGuessed = false;
        player.roundPointsDelta = 0;
      }
    }

    this.broadcastRoom(room);
  }

  leaveRoom(playerId: string): void {
    const code = this.playerRoomIndex.get(playerId);
    if (!code) return;
    this.playerRoomIndex.delete(playerId);

    const room = this.rooms.get(code);
    if (!room) return;

    const leaving = room.players.get(playerId);
    if (!leaving) return;

    room.players.delete(playerId);
    this.reassignHostIfNeeded(room);

    const hasConnected = [...room.players.values()].some((p) => p.connected);
    if (!hasConnected) {
      this.destroyRoom(code);
      return;
    }

    if (room.phase === 'buzz-window' && room.buzzedPlayerId === playerId) {
      this.resumeAfterFailedBuzz(room);
      return;
    }

    this.broadcastRoom(room);
  }

  handleDisconnect(playerId: string): void {
    const code = this.playerRoomIndex.get(playerId);
    if (!code) return;
    const room = this.rooms.get(code);
    if (!room) return;

    const player = room.players.get(playerId);
    if (!player) return;

    if (room.phase === 'lobby') {
      this.leaveRoom(playerId);
      return;
    }

    player.connected = false;
    this.reassignHostIfNeeded(room);

    const hasConnected = [...room.players.values()].some((p) => p.connected);
    if (!hasConnected) {
      this.destroyRoom(code);
      return;
    }

    if (room.phase === 'buzz-window' && room.buzzedPlayerId === playerId) {
      this.resumeAfterFailedBuzz(room);
      return;
    }

    if (room.phase === 'loading-round') {
      const allReady = [...room.players.values()]
        .filter((p) => p.connected)
        .every((p) => p.roundStatus === 'ready');
      if (allReady && room.currentRoundData) {
        this.enterPlayingPhase(room);
        return;
      }
    } else if (room.phase === 'playing') {
      if (room.mode === 'classic-sync') {
        this.maybeAdvanceSyncStep(room);
        return;
      }
      if (room.mode === 'speed-race') {
        this.checkRaceCompletion(room);
        return;
      }
      if (room.mode === 'buzz-in') {
        const remainingActive = [...room.players.values()].some(
          (p) => p.connected && p.roundStatus !== 'locked-out' && p.roundStatus !== 'solved',
        );
        if (!remainingActive) {
          this.enterRoundReveal(room);
          return;
        }
      }
    }

    this.broadcastRoom(room);
  }

  private reassignHostIfNeeded(room: InternalRoom): void {
    const connected = [...room.players.values()].filter((p) => p.connected);
    if (connected.some((p) => p.isHost)) return;
    for (const p of room.players.values()) p.isHost = false;
    connected.sort((a, b) => a.joinedAt - b.joinedAt);
    if (connected[0]) {
      connected[0].isHost = true;
    }
  }

  private getRoomForPlayer(playerId: string): InternalRoom | null {
    const code = this.playerRoomIndex.get(playerId);
    if (!code) return null;
    return this.rooms.get(code) ?? null;
  }

  private requireHostInPhase(playerId: string, allowedPhases: RoomPhase[]): InternalRoom | null {
    const room = this.getRoomForPlayer(playerId);
    if (!room) return null;
    const player = room.players.get(playerId);
    if (!player || !player.isHost) {
      this.sendError(playerId, 'HOST_ONLY', 'Only the room host can perform that action.');
      return null;
    }
    if (!allowedPhases.includes(room.phase)) {
      return null;
    }
    return room;
  }

  private async beginRound(room: InternalRoom, roundIndex: number): Promise<void> {
    this.clearActiveTimer(room);
    room.roundGeneration += 1;
    const gen = room.roundGeneration;

    room.currentRound = roundIndex;
    room.phase = 'loading-round';
    room.stepIndex = 0;
    room.phaseEndsAt = null;
    room.buzzedPlayerId = null;
    room.currentRoundData = null;
    room.lastRevealedTrack = null;

    for (const player of room.players.values()) {
      player.roundStatus = 'idle';
      player.attemptIndex = 0;
      player.stepGuessed = false;
      player.roundPointsDelta = 0;
    }

    this.broadcastRoom(room);

    const resolved = await this.trackResolver(room.packId, room.customTracks, room.usedTrackKeys);
    if (!this.rooms.has(room.code) || room.roundGeneration !== gen) return;

    if (!resolved) {
      room.notice = 'Could not load a playable preview for this round; skipping ahead.';
      await this.advanceFromReveal(room);
      return;
    }

    room.currentRoundData = resolved;
    room.phaseEndsAt = this.nowFn() + LOADING_ROUND_TIMEOUT_MS;
    room.activeTimer = setTimeout(() => {
      if (!this.rooms.has(room.code) || room.roundGeneration !== gen || room.phase !== 'loading-round') {
        return;
      }
      this.enterPlayingPhase(room);
    }, LOADING_ROUND_TIMEOUT_MS);

    this.broadcastRoom(room);
  }

  private enterPlayingPhase(room: InternalRoom): void {
    this.clearActiveTimer(room);
    if (!room.currentRoundData) return;

    room.phase = 'playing';
    room.stepIndex = 0;
    room.notice = null;

    for (const player of room.players.values()) {
      if (player.connected) {
        player.roundStatus = 'guessing';
        player.stepGuessed = false;
        player.attemptIndex = 0;
      }
    }

    if (room.mode === 'speed-race') {
      room.phaseEndsAt = this.nowFn() + RACE_ROUND_DURATION_MS;
      const gen = room.roundGeneration;
      room.activeTimer = setTimeout(() => {
        if (room.roundGeneration !== gen || room.phase !== 'playing') return;
        this.enterRoundReveal(room);
      }, RACE_ROUND_DURATION_MS);
      this.broadcastRoom(room);
      return;
    }

    this.scheduleStepWindow(room, SYNC_STEP_DURATION_MS);
    this.broadcastRoom(room);
  }

  private scheduleStepWindow(room: InternalRoom, durationMs: number): void {
    this.clearActiveTimer(room);
    room.phaseEndsAt = this.nowFn() + durationMs;
    const gen = room.roundGeneration;
    const stepAtSchedule = room.stepIndex;

    room.activeTimer = setTimeout(() => {
      if (
        !this.rooms.has(room.code) ||
        room.roundGeneration !== gen ||
        room.phase !== 'playing' ||
        room.stepIndex !== stepAtSchedule
      ) {
        return;
      }
      this.advanceStepOrReveal(room);
    }, durationMs);
  }

  private advanceStepOrReveal(room: InternalRoom): void {
    if (room.stepIndex + 1 >= TOTAL_STEPS) {
      this.enterRoundReveal(room);
      return;
    }

    room.stepIndex += 1;
    for (const player of room.players.values()) {
      player.stepGuessed = false;
      if (player.connected && player.roundStatus !== 'solved' && player.roundStatus !== 'locked-out') {
        player.roundStatus = 'guessing';
      }
    }

    this.scheduleStepWindow(room, SYNC_STEP_DURATION_MS);
    this.broadcastRoom(room);
  }

  private maybeAdvanceSyncStep(room: InternalRoom): void {
    const active = [...room.players.values()].filter(
      (p) => p.connected && p.roundStatus !== 'solved',
    );
    if (active.length === 0) {
      this.enterRoundReveal(room);
      return;
    }
    if (active.every((p) => p.stepGuessed)) {
      this.advanceStepOrReveal(room);
      return;
    }
    this.broadcastRoom(room);
  }

  private checkRaceCompletion(room: InternalRoom): void {
    const connected = [...room.players.values()].filter((p) => p.connected);
    const allFinished =
      connected.length > 0 &&
      connected.every((p) => p.roundStatus === 'solved' || p.attemptIndex >= TOTAL_STEPS);
    if (allFinished) {
      this.enterRoundReveal(room);
      return;
    }
    this.broadcastRoom(room);
  }

  private resumeAfterFailedBuzz(room: InternalRoom): void {
    this.clearActiveTimer(room);
    room.buzzedPlayerId = null;

    const remainingActive = [...room.players.values()].some(
      (p) => p.connected && p.roundStatus !== 'locked-out' && p.roundStatus !== 'solved',
    );
    if (!remainingActive) {
      this.enterRoundReveal(room);
      return;
    }

    room.phase = 'playing';
    this.scheduleStepWindow(room, room.remainingStepMs);
    this.broadcastRoom(room);
  }

  private calculateRoundPoints(room: InternalRoom, player: InternalPlayer, now: number): number {
    if (room.mode === 'speed-race') {
      const idx = Math.max(0, Math.min(TOTAL_STEPS - 1, player.attemptIndex));
      const base = MULTIPLAYER_STEP_POINTS[idx];
      const remainingSec = Math.max(0, Math.round(((room.phaseEndsAt ?? now) - now) / 1000));
      return base + Math.min(225, remainingSec * 5);
    }

    const idx = Math.max(0, Math.min(TOTAL_STEPS - 1, room.stepIndex));
    const base = MULTIPLAYER_STEP_POINTS[idx];
    if (room.mode === 'buzz-in') return base;

    const remainingRatio = Math.max(
      0,
      Math.min(1, ((room.phaseEndsAt ?? now) - now) / SYNC_STEP_DURATION_MS),
    );
    return base + Math.round(remainingRatio * 150);
  }

  private enterRoundReveal(room: InternalRoom): void {
    this.clearActiveTimer(room);
    room.phase = 'round-reveal';
    room.buzzedPlayerId = null;
    room.lastRevealedTrack = room.currentRoundData ? room.currentRoundData.track : null;
    room.phaseEndsAt = this.nowFn() + ROUND_REVEAL_DURATION_MS;

    const gen = room.roundGeneration;
    room.activeTimer = setTimeout(() => {
      if (!this.rooms.has(room.code) || room.roundGeneration !== gen || room.phase !== 'round-reveal') {
        return;
      }
      void this.advanceFromReveal(room);
    }, ROUND_REVEAL_DURATION_MS);

    this.broadcastRoom(room);
  }

  private async advanceFromReveal(room: InternalRoom): Promise<void> {
    this.clearActiveTimer(room);
    const nextIdx = room.currentRound + 1;
    if (nextIdx >= room.totalRounds) {
      room.phase = 'finished';
      room.phaseEndsAt = null;
      this.broadcastRoom(room);
      return;
    }
    await this.beginRound(room, nextIdx);
  }
}
