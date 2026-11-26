import type {
  ClientWsMessage,
  GuessSubmissionCandidate,
  PublicRoomState,
  RoomSettingsInput,
  RoomTrackInput,
  ServerWsMessage,
} from '../types/multiplayer';

const SESSION_STORAGE_KEY = 'sursnap_mp_session_v1';

export interface SavedMultiplayerSession {
  roomCode: string;
  playerId: string;
  reconnectToken: string;
  nickname: string;
}

export function loadSavedMultiplayerSession(): SavedMultiplayerSession | null {
  try {
    const raw = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<SavedMultiplayerSession>;
    if (
      typeof parsed.roomCode === 'string' &&
      typeof parsed.reconnectToken === 'string' &&
      typeof parsed.nickname === 'string'
    ) {
      return {
        roomCode: parsed.roomCode,
        playerId: typeof parsed.playerId === 'string' ? parsed.playerId : '',
        reconnectToken: parsed.reconnectToken,
        nickname: parsed.nickname,
      };
    }
  } catch {
    // Ignore storage read failures
  }
  return null;
}

export function saveMultiplayerSession(session: SavedMultiplayerSession | null): void {
  try {
    if (!session) {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    } else {
      sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
    }
  } catch {
    // Ignore storage write failures
  }
}

export type GuessFeedbackEvent = Extract<ServerWsMessage, { type: 'guess_feedback' }>;

export interface MultiplayerClientHandlers {
  onConnectionChange?: (connected: boolean) => void;
  onRoomState?: (state: PublicRoomState, myPlayerId: string | null, clockOffsetMs: number) => void;
  onGuessFeedback?: (feedback: GuessFeedbackEvent) => void;
  onError?: (code: string, message: string) => void;
  onSessionAssigned?: (session: { roomCode: string; playerId: string; reconnectToken: string }) => void;
}

export class MultiplayerClient {
  private ws: WebSocket | null = null;
  private connectPromise: Promise<void> | null = null;
  private myPlayerId: string | null = null;
  private clockOffsetMs = 0;
  private nicknameHint = '';
  private handlers: MultiplayerClientHandlers = {};

  setHandlers(handlers: MultiplayerClientHandlers): void {
    this.handlers = handlers;
  }

  getPlayerId(): string | null {
    return this.myPlayerId;
  }

  getClockOffsetMs(): number {
    return this.clockOffsetMs;
  }

  isConnected(): boolean {
    return this.ws !== null && this.ws.readyState === WebSocket.OPEN;
  }

  private getWsUrl(): string {
    const proto = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    return `${proto}//${window.location.host}/ws`;
  }

  async ensureConnected(): Promise<void> {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) return;
    if (this.connectPromise) return this.connectPromise;

    this.connectPromise = new Promise<void>((resolve, reject) => {
      const ws = new WebSocket(this.getWsUrl());
      this.ws = ws;

      const cleanupPending = () => {
        this.connectPromise = null;
      };

      ws.onopen = () => {
        cleanupPending();
        this.handlers.onConnectionChange?.(true);
        resolve();
      };

      ws.onerror = () => {
        cleanupPending();
        this.handlers.onConnectionChange?.(false);
        reject(new Error('Could not connect to multiplayer server.'));
      };

      ws.onclose = () => {
        cleanupPending();
        if (this.ws === ws) {
          this.ws = null;
        }
        this.handlers.onConnectionChange?.(false);
      };

      ws.onmessage = (event) => {
        let msg: ServerWsMessage;
        try {
          msg = JSON.parse(String(event.data)) as ServerWsMessage;
        } catch {
          return;
        }

        if (msg.type === 'session_assigned') {
          this.myPlayerId = msg.playerId;
          saveMultiplayerSession({
            roomCode: msg.roomCode,
            playerId: msg.playerId,
            reconnectToken: msg.reconnectToken,
            nickname: this.nicknameHint || 'Player',
          });
          this.handlers.onSessionAssigned?.(msg);
          return;
        }

        if (msg.type === 'room_state') {
          this.clockOffsetMs = msg.state.serverNow - Date.now();
          this.handlers.onRoomState?.(msg.state, this.myPlayerId, this.clockOffsetMs);
          return;
        }

        if (msg.type === 'guess_feedback') {
          this.handlers.onGuessFeedback?.(msg);
          return;
        }

        if (msg.type === 'error') {
          this.handlers.onError?.(msg.code, msg.message);
        }
      };
    });

    return this.connectPromise;
  }

  private send(msg: ClientWsMessage): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      throw new Error('Not connected to multiplayer server.');
    }
    this.ws.send(JSON.stringify(msg));
  }

  async createRoom(
    nickname: string,
    settings: RoomSettingsInput,
    customTracks?: RoomTrackInput[],
  ): Promise<void> {
    this.nicknameHint = nickname.trim();
    await this.ensureConnected();
    this.send({ type: 'create_room', nickname, settings, customTracks });
  }

  async joinRoom(code: string, nickname: string, reconnectToken?: string): Promise<void> {
    this.nicknameHint = nickname.trim();
    await this.ensureConnected();
    this.send({ type: 'join_room', code, nickname, reconnectToken });
  }

  updateSettings(settings: RoomSettingsInput, customTracks?: RoomTrackInput[]): void {
    if (!this.isConnected()) return;
    this.send({ type: 'update_settings', settings, customTracks });
  }

  startMatch(): void {
    this.send({ type: 'start_match' });
  }

  markRoundReady(roundIndex: number): void {
    if (!this.isConnected()) return;
    this.send({ type: 'round_ready', roundIndex });
  }

  submitGuess(roundIndex: number, candidate: GuessSubmissionCandidate): void {
    this.send({ type: 'submit_guess', roundIndex, candidate });
  }

  skipStep(roundIndex: number): void {
    this.send({ type: 'player_skip', roundIndex });
  }

  buzzIn(roundIndex: number): void {
    this.send({ type: 'buzz_in', roundIndex });
  }

  nextRound(): void {
    this.send({ type: 'next_round' });
  }

  playAgain(): void {
    this.send({ type: 'play_again' });
  }

  leaveRoom(): void {
    saveMultiplayerSession(null);
    this.myPlayerId = null;
    if (this.isConnected()) {
      this.send({ type: 'leave_room' });
    }
  }

  disconnect(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}
