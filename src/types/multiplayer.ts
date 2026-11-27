import type { GuessStatus, SearchSuggestion } from './game.ts';

export type RoomMode = 'classic-sync' | 'speed-race' | 'buzz-in';

export type RoomPhase =
  | 'lobby'
  | 'loading-round'
  | 'playing'
  | 'buzz-window'
  | 'round-reveal'
  | 'finished';

export type PlayerRoundStatus =
  | 'idle'
  | 'ready'
  | 'guessing'
  | 'artist-match'
  | 'solved'
  | 'wrong'
  | 'locked-out'
  | 'skipped';

export const MULTIPLAYER_STEP_POINTS = [1000, 800, 650, 500, 350, 250] as const;
export const STEP_TIMER_PRESETS = [30, 60, 90, 0] as const; // 0 = Vote Only (no auto-skip)
export const BUZZ_TIME_PRESETS = [15, 20, 25, 30, 40] as const;

export const MAX_ROOM_CUSTOM_TRACKS = 1500;
export const MAX_ROOM_PLAYERS = 12;

export interface RoomTrackInput {
  id: number;
  title: string;
  trackName: string;
  artistName: string;
  albumName: string;
  artworkUrl: string;
}

export interface RoomSettingsInput {
  mode: RoomMode;
  packId: string;
  packName: string;
  roundCount: number;
  stepTimerSec?: number;
  buzzTimeSec?: number;
}

export interface PublicRoomPlayer {
  id: string;
  name: string;
  score: number;
  isHost: boolean;
  connected: boolean;
  roundStatus: PlayerRoundStatus;
  attemptIndex: number;
  roundPointsDelta: number;
  lastGuessLabel?: string;
}

export interface RevealedTrackInfo {
  id: number;
  title: string;
  trackName: string;
  artistName: string;
  albumName: string;
  artworkUrl: string;
  appleMusicUrl?: string;
}

export interface PublicRoomState {
  code: string;
  mode: RoomMode;
  packId: string;
  packName: string;
  roundCount: number;
  stepTimerSec: number;
  buzzTimeSec: number;
  currentRound: number;
  totalRounds: number;
  phase: RoomPhase;
  stepIndex: number;
  phaseEndsAt: number | null;
  serverNow: number;
  audioUrl: string | null;
  buzzedPlayerId: string | null;
  players: PublicRoomPlayer[];
  revealedTrack: RevealedTrackInfo | null;
  notice: string | null;
}

export interface GuessSubmissionCandidate {
  id?: number;
  title: string;
  trackName?: string;
  artistName: string;
}

export type ClientWsMessage =
  | {
      type: 'create_room';
      nickname: string;
      settings: RoomSettingsInput;
      customTracks?: RoomTrackInput[];
    }
  | {
      type: 'join_room';
      code: string;
      nickname: string;
      reconnectToken?: string;
    }
  | {
      type: 'update_settings';
      settings: RoomSettingsInput;
      customTracks?: RoomTrackInput[];
    }
  | { type: 'start_match' }
  | { type: 'round_ready'; roundIndex: number }
  | { type: 'submit_guess'; roundIndex: number; candidate: GuessSubmissionCandidate }
  | { type: 'player_skip'; roundIndex: number }
  | { type: 'buzz_in'; roundIndex: number }
  | { type: 'next_round' }
  | { type: 'play_again' }
  | { type: 'leave_room' };

export type ServerWsMessage =
  | {
      type: 'session_assigned';
      roomCode: string;
      playerId: string;
      reconnectToken: string;
    }
  | {
      type: 'room_state';
      state: PublicRoomState;
    }
  | {
      type: 'guess_feedback';
      roundIndex: number;
      status: GuessStatus;
      message: string;
      pointsAwarded: number;
      lockedOut?: boolean;
    }
  | {
      type: 'error';
      code: string;
      message: string;
    };

export type RoomSuggestResponse = {
  suggestions: SearchSuggestion[];
};
