import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  Award,
  BellRing,
  Check,
  Copy,
  Crown,
  ExternalLink,
  LogOut,
  Pause,
  Play,
  RotateCcw,
  SkipForward,
  Trophy,
  Users,
} from 'lucide-react';
import { CATEGORIES, TRACK_CATALOG } from '../../data/catalog';
import { AudioEngine } from '../../services/audioEngine';
import type { GuessFeedbackEvent } from '../../services/multiplayerClient';
import {
  ATTEMPT_DURATIONS,
  MAX_PREVIEW_SECONDS,
  type CustomPlaylist,
  type SearchSuggestion,
} from '../../types/game';
import {
  MULTIPLAYER_STEP_POINTS,
  type PublicRoomPlayer,
  type PublicRoomState,
  type RoomMode,
  type RoomSettingsInput,
  type RoomTrackInput,
} from '../../types/multiplayer';
import { GuessInput } from '../GuessInput';

interface MultiplayerRoomViewProps {
  room: PublicRoomState;
  myPlayerId: string | null;
  clockOffsetMs: number;
  customPlaylists: CustomPlaylist[];
  feedback: GuessFeedbackEvent | null;
  errorMessage: string | null;
  audioEngine: AudioEngine;
  onUpdateSettings: (settings: RoomSettingsInput, customTracks?: RoomTrackInput[]) => void;
  onStartMatch: () => void;
  onRoundReady: (roundIndex: number) => void;
  onSubmitGuess: (roundIndex: number, suggestion: SearchSuggestion) => void;
  onSkipStep: (roundIndex: number) => void;
  onBuzzIn: (roundIndex: number) => void;
  onNextRound: () => void;
  onPlayAgain: () => void;
  onLeaveRoom: () => void;
}

const MODE_LABELS: Record<RoomMode, string> = {
  'classic-sync': 'Classic Sync',
  'speed-race': 'Speed Race',
  'buzz-in': 'Buzz-In',
};

function legacyCopyText(text: string): boolean {
  const previousFocus = document.activeElement as HTMLElement | null;
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.cssText = 'position:fixed;inset-block-start:0;opacity:0';
  document.body.append(field);
  field.select();
  try {
    return document.execCommand('copy');
  } finally {
    field.remove();
    previousFocus?.focus({ preventScroll: true });
  }
}

function CopyInviteButton({ roomCode }: { roomCode: string }) {
  const [statusState, setStatusState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const timerRef = useRef<number | null>(null);
  const lastAnnouncementRef = useRef('');

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = async () => {
    const shareUrl = `${window.location.origin}/?room=${roomCode}`;
    let ok = false;
    try {
      await navigator.clipboard.writeText(shareUrl);
      ok = true;
    } catch {
      ok = legacyCopyText(shareUrl);
    }

    if (timerRef.current !== null) window.clearTimeout(timerRef.current);

    let msg = ok ? 'Invite link copied' : 'Copy failed';
    if (msg === lastAnnouncementRef.current) {
      msg += '\u00A0';
    }
    lastAnnouncementRef.current = msg;

    setStatusState(ok ? 'copied' : 'failed');
    setStatusMessage(msg);

    timerRef.current = window.setTimeout(() => {
      setStatusState('idle');
      setStatusMessage('');
    }, 2200);
  };

  return (
    <span className="inline-flex items-center gap-2 relative">
      <button
        type="button"
        onClick={() => void handleCopy()}
        aria-label={`Copy invite link for room ${roomCode}`}
        className="min-h-[38px] px-3 py-1.5 rounded-xl bg-cyanNeon-500/15 hover:bg-cyanNeon-500/25 border border-cyanNeon-400/40 text-xs font-semibold text-cyanNeon-200 inline-flex items-center gap-1.5 transition cursor-pointer"
      >
        {statusState === 'copied' ? (
          <Check size={14} aria-hidden="true" />
        ) : (
          <Copy size={14} aria-hidden="true" />
        )}
        <span>{statusState === 'copied' ? 'Copied!' : 'Copy Invite Link'}</span>
      </button>
      <span
        role="status"
        className={`text-[11px] font-medium transition-opacity duration-150 ${
          statusMessage
            ? statusState === 'failed'
              ? 'text-rose-300 opacity-100'
              : 'text-emerald-300 opacity-100'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {statusMessage}
      </span>
    </span>
  );
}

function renderPlayerStatusBadge(player: PublicRoomPlayer) {
  switch (player.roundStatus) {
    case 'solved':
      return (
        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-400/40 text-emerald-300">
          <Check size={11} aria-hidden="true" />
          Solved
        </span>
      );
    case 'artist-match':
      return (
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-amber-500/15 border border-amber-400/40 text-amber-300">
          Artist ~
        </span>
      );
    case 'locked-out':
      return (
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-rose-500/15 border border-rose-400/40 text-rose-300">
          Step Lock
        </span>
      );
    case 'wrong':
      return (
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-rose-500/10 border border-rose-400/30 text-rose-300">
          Missed
        </span>
      );
    case 'skipped':
      return (
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/15 text-slate-300">
          Skipped
        </span>
      );
    case 'ready':
      return (
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-cyanNeon-500/15 border border-cyanNeon-400/35 text-cyanNeon-300">
          Ready
        </span>
      );
    default:
      return (
        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-slate-400">
          Listening
        </span>
      );
  }
}

export function MultiplayerRoomView({
  room,
  myPlayerId,
  clockOffsetMs,
  customPlaylists,
  feedback,
  errorMessage,
  audioEngine,
  onUpdateSettings,
  onStartMatch,
  onRoundReady,
  onSubmitGuess,
  onSkipStep,
  onBuzzIn,
  onNextRound,
  onPlayAgain,
  onLeaveRoom,
}: MultiplayerRoomViewProps) {
  const myPlayer = useMemo(
    () => room.players.find((p) => p.id === myPlayerId) ?? null,
    [room.players, myPlayerId],
  );
  const isHost = Boolean(myPlayer?.isHost);
  const sortedPlayers = useMemo(
    () => [...room.players].sort((a, b) => b.score - a.score),
    [room.players],
  );

  const [nowTick, setNowTick] = useState(() => Date.now());
  const [loadedAudio, setLoadedAudio] = useState<{ url: string; buffer: AudioBuffer } | null>(
    null,
  );
  const [audioError, setAudioError] = useState<{ url: string; message: string } | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedSec, setElapsedSec] = useState(0);
  const [racePicked, setRacePicked] = useState<{
    round: number;
    atAttempt: number;
    step: number;
  } | null>(null);

  const lastAutoPlayedKeyRef = useRef<string>('');
  const guessInputRef = useRef<HTMLInputElement>(null);

  const audioBuffer =
    room.audioUrl && loadedAudio?.url === room.audioUrl ? loadedAudio.buffer : null;
  const audioLoadError =
    room.audioUrl && audioError?.url === room.audioUrl ? audioError.message : null;
  const unlockedRaceStep = Math.min(5, myPlayer?.attemptIndex ?? 0);
  const raceSelectedStep =
    racePicked &&
    racePicked.round === room.currentRound &&
    racePicked.atAttempt === unlockedRaceStep
      ? Math.min(unlockedRaceStep, racePicked.step)
      : unlockedRaceStep;
  const effectiveIsPlaying =
    isPlaying &&
    room.phase !== 'buzz-window' &&
    room.phase !== 'lobby' &&
    room.phase !== 'finished' &&
    Boolean(audioBuffer);

  // Sync live countdown every 150ms when phaseEndsAt is active
  useEffect(() => {
    if (!room.phaseEndsAt) return;
    const id = window.setInterval(() => setNowTick(Date.now()), 150);
    return () => window.clearInterval(id);
  }, [room.phaseEndsAt]);

  const remainingSeconds = room.phaseEndsAt
    ? Math.max(0, Math.ceil((room.phaseEndsAt - (nowTick + clockOffsetMs)) / 1000))
    : null;

  const fetchAndSyncAudio = useCallback(
    async (audioUrl: string, roundIdx: number, signal?: AbortSignal) => {
      audioEngine.stop();
      try {
        const buffer = await audioEngine.loadBuffer(audioUrl, signal);
        if (signal?.aborted) return;
        setAudioError(null);
        setLoadedAudio({ url: audioUrl, buffer });
        onRoundReady(roundIdx);
      } catch (err) {
        if (signal?.aborted) return;
        setAudioError({
          url: audioUrl,
          message: err instanceof Error ? err.message : 'Failed to load round audio preview.',
        });
      }
    },
    [audioEngine, onRoundReady],
  );

  // Fetch round audio whenever a fresh round audioUrl arrives
  useEffect(() => {
    const audioUrl = room.audioUrl;
    if (!audioUrl || room.phase === 'lobby' || room.phase === 'finished') {
      audioEngine.stop();
      return;
    }

    if (loadedAudio?.url === audioUrl) return;
    const controller = new AbortController();
    const timer = window.setTimeout(() => {
      void fetchAndSyncAudio(audioUrl, room.currentRound, controller.signal);
    }, 0);
    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [room.audioUrl, room.currentRound, room.phase, audioEngine, fetchAndSyncAudio, loadedAudio]);

  // Stop audio immediately when someone buzzes in
  useEffect(() => {
    if (room.phase === 'buzz-window') {
      audioEngine.stop();
    }
  }, [room.phase, audioEngine]);

  const playDuration = useCallback(
    (durationSec: number) => {
      if (!audioBuffer) return;
      setIsPlaying(true);
      setElapsedSec(0);
      void audioEngine
        .playSnippet(
          audioBuffer,
          durationSec,
          (elapsed) => setElapsedSec(elapsed),
          () => {
            setIsPlaying(false);
            setElapsedSec(0);
          },
        )
        .catch(() => {
          setIsPlaying(false);
        });
    },
    [audioBuffer, audioEngine],
  );

  // Auto-play newly unlocked snippet step in synchronized modes
  useEffect(() => {
    if (room.phase !== 'playing' || !audioBuffer) return;
    if (room.mode !== 'classic-sync' && room.mode !== 'buzz-in') return;
    const key = `${room.currentRound}:${room.stepIndex}`;
    if (lastAutoPlayedKeyRef.current === key) return;
    lastAutoPlayedKeyRef.current = key;

    const timer = window.setTimeout(() => {
      playDuration(ATTEMPT_DURATIONS[room.stepIndex] ?? 1);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [room.phase, room.mode, room.currentRound, room.stepIndex, audioBuffer, playDuration]);

  // Focus guess input automatically when current player wins the buzz
  useEffect(() => {
    if (room.phase === 'buzz-window' && room.buzzedPlayerId === myPlayerId) {
      guessInputRef.current?.focus();
    }
  }, [room.phase, room.buzzedPlayerId, myPlayerId]);

  const togglePlayback = () => {
    if (effectiveIsPlaying) {
      audioEngine.stop();
      setIsPlaying(false);
      setElapsedSec(0);
      return;
    }
    if (room.phase === 'round-reveal' || room.phase === 'finished') {
      playDuration(MAX_PREVIEW_SECONDS);
      return;
    }
    const idx =
      room.mode === 'speed-race'
        ? Math.min(5, raceSelectedStep)
        : Math.min(5, room.stepIndex);
    playDuration(ATTEMPT_DURATIONS[idx] ?? 1);
  };

  const handleLobbyPackChange = (nextPackId: string) => {
    const custom = customPlaylists.find((p) => p.id === nextPackId);
    const builtIn = CATEGORIES.find((c) => c.id === nextPackId);
    const customTracks = custom
      ? custom.tracks
          .filter((t) => !(custom.disabledIds ?? []).includes(t.id))
          .map((t) => ({
            id: t.id,
            title: t.title,
            trackName: t.trackName,
            artistName: t.artistName,
            albumName: t.albumName,
            artworkUrl: t.artworkUrl,
          }))
      : undefined;

    onUpdateSettings(
      {
        mode: room.mode,
        packId: nextPackId,
        packName: custom?.name ?? builtIn?.name ?? room.packName,
        roundCount: room.roundCount,
      },
      customTracks,
    );
  };

  const canCurrentPlayerGuess = (() => {
    if (!myPlayer) return false;
    if (myPlayer.roundStatus === 'solved' || myPlayer.roundStatus === 'locked-out') return false;
    if (room.mode === 'buzz-in') {
      return room.phase === 'buzz-window' && room.buzzedPlayerId === myPlayer.id;
    }
    if (room.phase !== 'playing') return false;
    if (room.mode === 'classic-sync') {
      return (
        myPlayer.roundStatus !== 'skipped' &&
        myPlayer.roundStatus !== 'wrong' &&
        myPlayer.roundStatus !== 'artist-match'
      );
    }
    return myPlayer.attemptIndex < ATTEMPT_DURATIONS.length;
  })();

  const activeDurationSec =
    room.phase === 'round-reveal'
      ? MAX_PREVIEW_SECONDS
      : room.mode === 'speed-race'
        ? ATTEMPT_DURATIONS[Math.min(5, raceSelectedStep)]
        : ATTEMPT_DURATIONS[Math.min(5, room.stepIndex)];

  const buzzedPlayerName =
    room.players.find((p) => p.id === room.buzzedPlayerId)?.name ?? 'Another player';

  return (
    <div className="w-full max-w-[1220px] mx-auto flex flex-col gap-4 py-1">
      {/* Top Room Header Bar */}
      <div className="rounded-2xl bg-[#0E121C]/90 border border-white/[0.08] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="px-3 py-1 rounded-xl bg-cyanNeon-500/15 border border-cyanNeon-400/40 font-mono text-sm font-bold tracking-[0.2em] text-cyanNeon-200">
            {room.code}
          </div>
          <CopyInviteButton roomCode={room.code} />
          <span className="text-xs font-semibold text-white bg-white/[0.06] border border-white/10 px-2.5 py-1 rounded-lg">
            {MODE_LABELS[room.mode]}
          </span>
          <span className="text-xs text-slate-300 truncate max-w-[200px]">
            {room.packName}
          </span>
          {room.phase !== 'lobby' && (
            <span className="text-xs font-mono font-semibold text-cyanNeon-300">
              Round {Math.min(room.currentRound + 1, room.totalRounds)} / {room.totalRounds}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2.5">
          {remainingSeconds !== null && room.phase !== 'lobby' && room.phase !== 'finished' && (
            <div
              className={`px-3 py-1 rounded-xl font-mono text-xs font-bold border ${
                remainingSeconds <= 3
                  ? 'bg-rose-500/15 border-rose-400/40 text-rose-300'
                  : 'bg-[#131722] border-white/10 text-cyanNeon-200'
              }`}
              aria-label={`${remainingSeconds} seconds remaining`}
            >
              {remainingSeconds}s
            </div>
          )}

          <button
            type="button"
            onClick={onLeaveRoom}
            className="min-h-[38px] px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-rose-500/15 border border-white/10 hover:border-rose-400/40 text-xs font-semibold text-slate-300 hover:text-rose-200 inline-flex items-center gap-1.5 transition cursor-pointer"
          >
            <LogOut size={14} aria-hidden="true" />
            <span>Leave</span>
          </button>
        </div>
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="rounded-xl bg-rose-500/12 border border-rose-500/40 px-4 py-2.5 text-xs text-rose-200"
        >
          {errorMessage}
        </div>
      )}

      {room.notice && (
        <div
          role="status"
          className="rounded-xl bg-cyanNeon-500/10 border border-cyanNeon-400/30 px-4 py-2.5 text-xs text-cyanNeon-200"
        >
          {room.notice}
        </div>
      )}

      {/* Main Split: Stage + Live Scoreboard */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4 items-start">
        {/* LEFT GAME STAGE */}
        <section className="rounded-2xl bg-[#0E121C]/90 border border-white/[0.08] p-5 sm:p-6 flex flex-col gap-5">
          {room.phase === 'lobby' && (
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Waiting Room
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Share the invite link with friends. Once everyone joins, the host starts the match.
                </p>
              </div>

              {isHost ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-xl bg-[#090B11] border border-white/[0.08] p-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="lobby-mode" className="text-[11px] font-semibold text-slate-300">
                      Mode
                    </label>
                    <select
                      id="lobby-mode"
                      value={room.mode}
                      onChange={(e) =>
                        onUpdateSettings({
                          mode: e.target.value as RoomMode,
                          packId: room.packId,
                          packName: room.packName,
                          roundCount: room.roundCount,
                        })
                      }
                      className="px-3 py-2 rounded-lg bg-[#131722] border border-white/10 text-xs text-white"
                    >
                      <option value="classic-sync">Classic Sync</option>
                      <option value="speed-race">Speed Race</option>
                      <option value="buzz-in">Buzz-In</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="lobby-pack" className="text-[11px] font-semibold text-slate-300">
                      Pack
                    </label>
                    <select
                      id="lobby-pack"
                      value={room.packId}
                      onChange={(e) => handleLobbyPackChange(e.target.value)}
                      className="px-3 py-2 rounded-lg bg-[#131722] border border-white/10 text-xs text-white"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                      {customPlaylists.map((pl) => (
                        <option key={pl.id} value={pl.id}>
                          {pl.name} ({pl.tracks.length})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="lobby-rounds" className="text-[11px] font-semibold text-slate-300">
                      Rounds
                    </label>
                    <select
                      id="lobby-rounds"
                      value={room.roundCount}
                      onChange={(e) =>
                        onUpdateSettings({
                          mode: room.mode,
                          packId: room.packId,
                          packName: room.packName,
                          roundCount: Number(e.target.value),
                        })
                      }
                      className="px-3 py-2 rounded-lg bg-[#131722] border border-white/10 text-xs text-white"
                    >
                      <option value={5}>5 Rounds</option>
                      <option value={10}>10 Rounds</option>
                      <option value={15}>15 Rounds</option>
                    </select>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl bg-[#090B11] border border-white/[0.08] p-4 flex flex-wrap gap-4 text-xs text-slate-300">
                  <div>
                    <span className="text-slate-500">Mode:</span>{' '}
                    <strong className="text-white">{MODE_LABELS[room.mode]}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500">Pack:</span>{' '}
                    <strong className="text-white">{room.packName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500">Rounds:</span>{' '}
                    <strong className="text-white">{room.roundCount}</strong>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between gap-3 pt-1">
                <p className="text-xs text-slate-400">
                  {room.players.length} player{room.players.length === 1 ? '' : 's'} connected.
                </p>
                {isHost ? (
                  <button
                    type="button"
                    onClick={onStartMatch}
                    className="py-3 px-6 rounded-xl tactile-play-btn text-sm font-bold text-[#061018] inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Play size={16} fill="currentColor" aria-hidden="true" />
                    <span>Start Match</span>
                  </button>
                ) : (
                  <span className="text-xs font-mono text-cyanNeon-300">
                    Waiting for host to start...
                  </span>
                )}
              </div>
            </div>
          )}

          {(room.phase === 'loading-round' ||
            room.phase === 'playing' ||
            room.phase === 'buzz-window') && (
            <div className="flex flex-col gap-5">
              {/* Snippet Progress Boxes */}
              <div
                className="grid grid-cols-6 gap-2 sm:gap-3"
                role="group"
                aria-label="Snippet durations"
              >
                {ATTEMPT_DURATIONS.map((dur, idx) => {
                  const unlockedIdx =
                    room.mode === 'speed-race' ? myPlayer?.attemptIndex ?? 0 : room.stepIndex;
                  const isUnlocked = idx <= unlockedIdx;
                  const isActive =
                    room.mode === 'speed-race' ? idx === raceSelectedStep : idx === room.stepIndex;

                  return (
                    <button
                      key={dur}
                      type="button"
                      disabled={!isUnlocked || !audioBuffer}
                      onClick={() => {
                        if (room.mode === 'speed-race') {
                          setRacePicked({
                            round: room.currentRound,
                            atAttempt: unlockedRaceStep,
                            step: idx,
                          });
                        }
                        playDuration(dur);
                      }}
                      className={`h-14 rounded-xl border font-mono text-xs font-bold transition flex flex-col items-center justify-center ${
                        isActive
                          ? 'bg-cyanNeon-500/20 border-cyanNeon-400 text-white shadow-[0_0_20px_-4px_rgba(6,182,212,0.4)]'
                          : isUnlocked
                            ? 'bg-[#131722] border-white/15 text-slate-200 hover:border-cyanNeon-400/50 cursor-pointer'
                            : 'bg-[#0A0C12] border-white/[0.06] text-slate-600 cursor-default'
                      }`}
                    >
                      <span>{dur}s</span>
                      <span className="text-[9px] font-normal text-slate-400">
                        {MULTIPLAYER_STEP_POINTS[idx]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Audio Loader / Player Controls */}
              <div className="rounded-xl bg-[#090B11] border border-white/[0.08] p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                {audioLoadError ? (
                  <div className="flex items-center justify-between gap-3 w-full text-xs text-rose-300">
                    <span>{audioLoadError}</span>
                    {room.audioUrl && (
                      <button
                        type="button"
                        onClick={() => {
                          setAudioError(null);
                          void fetchAndSyncAudio(room.audioUrl!, room.currentRound);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <RotateCcw size={13} aria-hidden="true" />
                        <span>Retry</span>
                      </button>
                    )}
                  </div>
                ) : room.phase === 'loading-round' ? (
                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <span className="w-4 h-4 rounded-full border-2 border-white/15 border-t-cyanNeon-400 animate-spin" />
                    <span>
                      {audioBuffer
                        ? 'Synced! Waiting for room countdown...'
                        : 'Loading encrypted preview for all players...'}
                    </span>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        disabled={!audioBuffer || room.phase === 'buzz-window'}
                        onClick={togglePlayback}
                        aria-label={
                          effectiveIsPlaying ? 'Pause snippet' : `Play ${activeDurationSec}s snippet`
                        }
                        className="w-12 h-12 rounded-full tactile-play-btn flex items-center justify-center text-[#061018] cursor-pointer disabled:opacity-50"
                      >
                        {effectiveIsPlaying ? (
                          <Pause size={20} fill="currentColor" aria-hidden="true" />
                        ) : (
                          <Play size={20} fill="currentColor" className="ml-0.5" aria-hidden="true" />
                        )}
                      </button>
                      <div>
                        <div className="text-xs font-bold text-white">
                          {effectiveIsPlaying
                            ? `Playing ${elapsedSec.toFixed(1)}s / ${activeDurationSec}s`
                            : `${activeDurationSec}s Snippet Ready`}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Worth {MULTIPLAYER_STEP_POINTS[room.mode === 'speed-race' ? Math.min(5, myPlayer?.attemptIndex ?? 0) : room.stepIndex]} base pts
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      {room.mode === 'buzz-in' && (
                        <button
                          type="button"
                          disabled={
                            room.phase !== 'playing' ||
                            myPlayer?.roundStatus === 'locked-out' ||
                            myPlayer?.roundStatus === 'skipped' ||
                            myPlayer?.roundStatus === 'solved'
                          }
                          onClick={() => onBuzzIn(room.currentRound)}
                          className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#140E02] text-sm font-extrabold inline-flex items-center gap-2 shadow-[0_0_24px_-4px_rgba(251,191,36,0.55)] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          <BellRing size={16} aria-hidden="true" />
                          <span>BUZZ IN</span>
                        </button>
                      )}

                      {myPlayer?.roundStatus !== 'solved' &&
                        (() => {
                          const eligiblePlayers = room.players.filter(
                            (p) => p.connected && p.roundStatus !== 'solved',
                          );
                          const skipVotes = eligiblePlayers.filter(
                            (p) => p.roundStatus === 'skipped',
                          ).length;
                          const isSyncOrBuzz =
                            room.mode === 'classic-sync' || room.mode === 'buzz-in';
                          const nextDuration = ATTEMPT_DURATIONS[room.stepIndex + 1];
                          const alreadyActedStep =
                            isSyncOrBuzz &&
                            (myPlayer?.roundStatus === 'skipped' ||
                              myPlayer?.roundStatus === 'locked-out' ||
                              myPlayer?.roundStatus === 'wrong' ||
                              myPlayer?.roundStatus === 'artist-match');

                          return (
                            <button
                              type="button"
                              disabled={
                                room.phase !== 'playing' ||
                                alreadyActedStep ||
                                (room.mode === 'speed-race' && (myPlayer?.attemptIndex ?? 0) >= 6)
                              }
                              onClick={() => onSkipStep(room.currentRound)}
                              className="px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-slate-200 inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-45"
                            >
                              <SkipForward size={14} aria-hidden="true" />
                              <span>
                                {room.mode === 'speed-race'
                                  ? 'Unlock Next Snippet'
                                  : myPlayer?.roundStatus === 'skipped'
                                    ? `Voted Skip (${skipVotes}/${eligiblePlayers.length})`
                                    : nextDuration !== undefined
                                      ? `Skip -> ${nextDuration}s${
                                          skipVotes > 0
                                            ? ` (${skipVotes}/${eligiblePlayers.length})`
                                            : ''
                                        }`
                                      : `Reveal Song${
                                          skipVotes > 0
                                            ? ` (${skipVotes}/${eligiblePlayers.length})`
                                            : ''
                                        }`}
                              </span>
                            </button>
                          );
                        })()}
                    </div>
                  </>
                )}
              </div>

              {/* Buzz Status Banner */}
              {room.mode === 'buzz-in' && room.phase === 'buzz-window' && (
                <div
                  role="status"
                  className={`rounded-xl px-4 py-3 border text-xs sm:text-sm font-semibold flex items-center justify-between ${
                    room.buzzedPlayerId === myPlayerId
                      ? 'bg-cyanNeon-500/15 border-cyanNeon-400/50 text-cyanNeon-200'
                      : 'bg-amber-500/15 border-amber-400/40 text-amber-200'
                  }`}
                >
                  <span>
                    {room.buzzedPlayerId === myPlayerId
                      ? 'You buzzed in! Submit your guess before the timer runs out.'
                      : `${buzzedPlayerName} buzzed in first — waiting on their guess...`}
                  </span>
                </div>
              )}

              {/* Feedback Banner */}
              {feedback && feedback.roundIndex === room.currentRound && (
                <div
                  role="status"
                  className={`rounded-xl px-4 py-2.5 text-xs font-semibold border ${
                    feedback.status === 'correct'
                      ? 'bg-emerald-500/15 border-emerald-400/45 text-emerald-200'
                      : feedback.status === 'artist-match'
                        ? 'bg-amber-500/15 border-amber-400/45 text-amber-200'
                        : 'bg-rose-500/15 border-rose-400/45 text-rose-200'
                  }`}
                >
                  {feedback.message}
                </div>
              )}

              {/* Guess Bar */}
              <GuessInput
                catalog={TRACK_CATALOG}
                activeCategory={room.packId.startsWith('custom:') ? 'all-india' : room.packId}
                roomCode={room.code}
                disabled={!canCurrentPlayerGuess}
                inputRef={guessInputRef}
                placeholder={
                  myPlayer?.roundStatus === 'solved'
                    ? 'You already solved this round!'
                    : myPlayer?.roundStatus === 'locked-out'
                      ? 'Cooldown until next snippet (-250 pts penalty)'
                      : room.mode === 'buzz-in' && room.phase !== 'buzz-window'
                        ? 'Hit BUZZ IN first to answer...'
                        : 'Type song title or artist to guess...'
                }
                onSelectGuess={(suggestion) => onSubmitGuess(room.currentRound, suggestion)}
              />
            </div>
          )}

          {room.phase === 'round-reveal' && room.revealedTrack && (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row items-center gap-4 rounded-xl bg-[#090B11] border border-cyanNeon-400/30 p-4">
                {room.revealedTrack.artworkUrl && (
                  <img
                    src={room.revealedTrack.artworkUrl}
                    alt={`${room.revealedTrack.title} cover art`}
                    className="w-20 h-20 rounded-xl object-cover shrink-0 border border-white/10"
                  />
                )}
                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-cyanNeon-300">
                    Round {room.currentRound + 1} Answer
                  </div>
                  <h2 className="font-display text-xl font-bold text-white truncate mt-0.5">
                    {room.revealedTrack.title}
                  </h2>
                  <p className="text-sm text-slate-300 truncate">{room.revealedTrack.artistName}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {audioBuffer && (
                    <button
                      type="button"
                      onClick={togglePlayback}
                      className="px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-white inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      {effectiveIsPlaying ? (
                        <Pause size={14} aria-hidden="true" />
                      ) : (
                        <Play size={14} aria-hidden="true" />
                      )}
                      <span>{effectiveIsPlaying ? 'Stop' : 'Play 30s'}</span>
                    </button>
                  )}
                  {room.revealedTrack.appleMusicUrl && (
                    <a
                      href={room.revealedTrack.appleMusicUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-cyanNeon-300 inline-flex items-center gap-1.5"
                    >
                      <span>Apple Music</span>
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-slate-400">
                  Next round starts automatically when timer finishes.
                </span>
                {isHost && (
                  <button
                    type="button"
                    onClick={onNextRound}
                    className="py-2.5 px-5 rounded-xl tactile-play-btn text-xs sm:text-sm font-bold text-[#061018] inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>
                      {room.currentRound + 1 >= room.totalRounds ? 'See Final Podium' : 'Next Round'}
                    </span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          )}

          {room.phase === 'finished' && (
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <Trophy size={22} className="text-amber-300" aria-hidden="true" />
                <h1 className="font-display text-2xl font-bold text-white">Final Standings</h1>
              </div>

              <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
                <table className="w-full text-left text-xs sm:text-sm">
                  <caption className="visually-hidden">Final multiplayer room standings</caption>
                  <thead className="bg-[#090B11] text-slate-400 font-mono text-[11px] uppercase">
                    <tr>
                      <th scope="col" className="px-4 py-2.5">Rank</th>
                      <th scope="col" className="px-4 py-2.5">Player</th>
                      <th scope="col" className="px-4 py-2.5 text-right">Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06]">
                    {sortedPlayers.map((player, idx) => (
                      <tr
                        key={player.id}
                        className={player.id === myPlayerId ? 'bg-cyanNeon-500/10' : ''}
                      >
                        <td className="px-4 py-3 font-mono font-bold text-cyanNeon-300">
                          #{idx + 1}
                        </td>
                        <td className="px-4 py-3 font-semibold text-white">
                          {player.name}
                          {player.id === myPlayerId && (
                            <span className="ml-2 text-[10px] font-mono text-cyanNeon-300">
                              (You)
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right font-mono font-bold text-white">
                          {player.score} pts
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onLeaveRoom}
                  className="py-2.5 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-slate-200 cursor-pointer"
                >
                  Back to Lobby
                </button>
                {isHost && (
                  <button
                    type="button"
                    onClick={onPlayAgain}
                    className="py-2.5 px-5 rounded-xl tactile-play-btn text-xs sm:text-sm font-bold text-[#061018] inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw size={15} aria-hidden="true" />
                    <span>Play Again (Keep Room)</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </section>

        {/* RIGHT SCOREBOARD ROSTER */}
        <aside
          aria-label="Room Players and Scores"
          className="rounded-2xl bg-[#0E121C]/90 border border-white/[0.08] p-4 flex flex-col gap-3"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono font-bold uppercase tracking-[0.14em] text-slate-300 flex items-center gap-1.5">
              <Users size={14} className="text-cyanNeon-400" aria-hidden="true" />
              <span>Players ({room.players.length})</span>
            </h2>
            <Award size={14} className="text-cyanNeon-400" aria-hidden="true" />
          </div>

          <ul className="flex flex-col gap-2">
            {sortedPlayers.map((player) => (
              <li
                key={player.id}
                className={`rounded-xl border px-3 py-2.5 flex flex-col gap-1.5 ${
                  player.id === myPlayerId
                    ? 'bg-cyanNeon-500/[0.09] border-cyanNeon-400/35'
                    : 'bg-[#090B11] border-white/[0.07]'
                } ${!player.connected ? 'opacity-55' : ''}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    {player.isHost && (
                      <Crown
                        size={13}
                        className="text-amber-300 shrink-0"
                        aria-label="Host"
                      />
                    )}
                    <span className="text-xs font-semibold text-white truncate">
                      {player.name}
                    </span>
                    {player.id === myPlayerId && (
                      <span className="text-[10px] font-mono text-cyanNeon-300">(you)</span>
                    )}
                  </div>
                  <span className="font-mono text-xs font-bold text-white shrink-0">
                    {player.score}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  {renderPlayerStatusBadge(player)}
                  {player.roundPointsDelta !== 0 && (
                    <span
                      className={`font-mono text-[10px] font-bold ${
                        player.roundPointsDelta > 0 ? 'text-emerald-300' : 'text-rose-300'
                      }`}
                    >
                      {player.roundPointsDelta > 0
                        ? `+${player.roundPointsDelta}`
                        : player.roundPointsDelta}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
