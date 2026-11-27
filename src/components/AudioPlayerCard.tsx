import { Check, FastForward, Flag, Pause, Play, RotateCw, SkipForward, X } from 'lucide-react';
import {
  ATTEMPT_DURATIONS,
  MAX_PREVIEW_SECONDS,
  getSnippetStartOffset,
  type GuessEntry,
  type RoundPhase,
} from '../types/game';

const SEGMENT_VISUAL_STOPS = [8, 18, 30, 48, 72, 100] as const;

interface AudioPlayerCardProps {
  phase: RoundPhase;
  attemptIndex: number;
  selectedStep: number;
  guesses: GuessEntry[];
  isPlaying: boolean;
  elapsedSec: number;
  playFromCheckpoint: boolean;
  errorMessage: string | null;
  onSelectStep: (stepIdx: number) => void;
  onTogglePlay: () => void;
  onToggleCheckpoint: () => void;
  onSkip: () => void;
  onGiveUp: () => void;
  onRetry: () => void;
}

function formatDurationUpper(sec: number): string {
  return sec === 1 ? '1 SECOND' : `${sec} SECONDS`;
}

export function AudioPlayerCard({
  phase,
  attemptIndex,
  selectedStep,
  guesses,
  isPlaying,
  elapsedSec,
  playFromCheckpoint,
  errorMessage,
  onSelectStep,
  onTogglePlay,
  onToggleCheckpoint,
  onSkip,
  onGiveUp,
  onRetry,
}: AudioPlayerCardProps) {
  const isRoundOver = phase === 'won' || phase === 'lost';
  const activeStep = isRoundOver ? ATTEMPT_DURATIONS.length - 1 : selectedStep;
  const activeStopPct = isRoundOver ? 100 : SEGMENT_VISUAL_STOPS[activeStep];
  const activeCapSec = isRoundOver
    ? MAX_PREVIEW_SECONDS
    : ATTEMPT_DURATIONS[activeStep];
  const checkpointStartSec = isRoundOver
    ? 0
    : getSnippetStartOffset(activeStep, playFromCheckpoint);

  const fraction = activeCapSec > 0 ? Math.min(1, elapsedSec / activeCapSec) : 0;
  const currentFillPct = Math.min(activeStopPct, Math.max(0, fraction * activeStopPct));
  const clampedLeft = Math.min(93, Math.max(7, activeStopPct));

  const lastWrongGuess = [...guesses]
    .reverse()
    .find((g) => g.status === 'wrong' || g.status === 'artist-match');

  return (
    <div className="flex flex-col">
      {/* 6 SQUARE GUESS / SNIPPET BOXES ROW */}
      <div
        className="grid grid-cols-6 gap-2.5 sm:gap-4 w-full max-w-[880px] mx-auto mb-3"
        role="group"
        aria-label="Snippet attempts"
      >
        {ATTEMPT_DURATIONS.map((dur, idx) => {
          const guess = guesses[idx];
          const isCurrent = idx === attemptIndex && !isRoundOver;
          const isUnlocked = idx <= attemptIndex || isRoundOver;
          const isSelectedForReplay =
            !isRoundOver && idx === selectedStep && idx <= attemptIndex;

          let boxClasses = 'bg-[#131722] border-white/[0.08] text-slate-500';
          let labelClasses = 'text-slate-500';
          let tileTitle = `${dur}s locked`;

          if (guess?.status === 'correct') {
            boxClasses =
              'bg-cyanNeon-500/20 border-cyanNeon-400 text-cyanNeon-300 shadow-[0_0_24px_-4px_rgba(6,182,212,0.45)]';
            labelClasses = 'text-cyanNeon-300 font-bold';
            tileTitle = `Solved: ${guess.guessedTitle}`;
          } else if (guess?.status === 'artist-match') {
            boxClasses =
              'bg-amber-500/[0.14] border-amber-400/60 text-amber-300 shadow-[inset_0_0_16px_rgba(245,158,11,0.14)]';
            labelClasses = 'text-amber-300 font-semibold';
            tileTitle = `Right artist! Guessed ${guess.guessedTitle} — ${guess.guessedArtist}`;
          } else if (guess?.status === 'wrong' || guess?.status === 'skipped') {
            boxClasses =
              'bg-rose-500/[0.12] border-rose-500/45 text-rose-400 shadow-[inset_0_0_16px_rgba(244,63,94,0.1)]';
            labelClasses = 'text-rose-400 font-semibold';
            tileTitle =
              guess.status === 'skipped'
                ? `Skipped (${dur}s)`
                : `Missed: ${guess.guessedTitle} — ${guess.guessedArtist}`;
          } else if (isCurrent || isSelectedForReplay) {
            boxClasses =
              'bg-cyanNeon-500/[0.1] border-cyanNeon-400/80 shadow-[0_0_24px_-4px_rgba(6,182,212,0.35),inset_0_0_18px_rgba(6,182,212,0.16)]';
            labelClasses = 'text-white font-bold';
            tileTitle = `Play ${dur}s snippet`;
          }

          return (
            <div key={dur} className="flex flex-col items-center gap-1.5">
              <button
                type="button"
                disabled={!isUnlocked || phase === 'loading' || phase === 'error'}
                title={tileTitle}
                aria-label={tileTitle}
                onClick={() => onSelectStep(idx)}
                className={`w-full h-[64px] sm:h-[74px] rounded-2xl border transition-all duration-200 flex flex-col items-center justify-center relative ${boxClasses} ${
                  isUnlocked && phase !== 'loading' && phase !== 'error'
                    ? 'cursor-pointer hover:brightness-125'
                    : 'cursor-default'
                } ${isCurrent && isPlaying ? 'is-playing' : ''}`}
              >
                {guess?.status === 'correct' ? (
                  <Check size={20} strokeWidth={2.6} aria-hidden="true" />
                ) : guess?.status === 'artist-match' ? (
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 border border-amber-400/40">
                    Artist
                  </span>
                ) : guess?.status === 'wrong' || guess?.status === 'skipped' ? (
                  <X size={18} strokeWidth={2.4} aria-hidden="true" />
                ) : isCurrent || isSelectedForReplay ? (
                  <div className="flex items-end gap-[3px] h-4 text-cyanNeon-300" aria-hidden="true">
                    <span
                      className="mini-eq-bar w-[3px] h-2.5 bg-current rounded-full"
                      style={{ animationDelay: '0s' }}
                    />
                    <span
                      className="mini-eq-bar w-[3px] h-4 bg-current rounded-full"
                      style={{ animationDelay: '0.2s' }}
                    />
                    <span
                      className="mini-eq-bar w-[3px] h-3 bg-current rounded-full"
                      style={{ animationDelay: '0.1s' }}
                    />
                  </div>
                ) : null}
              </button>
              <span className={`font-mono text-xs tabular-nums ${labelClasses}`}>
                {dur}s
              </span>
            </div>
          );
        })}
      </div>

      {/* Subtle feedback strip for the latest guess */}
      {!isRoundOver && lastWrongGuess && (
        <p className="text-center text-xs mb-2 font-medium">
          {lastWrongGuess.status === 'artist-match' ? (
            <span className="text-amber-300">
              Close! Right artist on{' '}
              <strong>{lastWrongGuess.guessedTitle}</strong> ({lastWrongGuess.guessedArtist})
            </span>
          ) : (
            <span className="text-slate-400">
              Last guess: <span className="text-rose-300">{lastWrongGuess.guessedTitle}</span>{' '}
              &mdash; {lastWrongGuess.guessedArtist}
            </span>
          )}
        </p>
      )}

      {/* DYNAMIC FLOATING DURATION TOOLTIP & SEGMENTED TIMELINE BAR */}
      <div className="w-full max-w-[960px] mx-auto mb-4">
        <div className="relative h-7 mb-0.5">
          <div
            style={{ left: `${clampedLeft}%` }}
            className="absolute bottom-0 -translate-x-1/2 transition-all duration-300 ease-out flex flex-col items-center pointer-events-none"
          >
            <div className="px-2.5 py-0.5 rounded-md bg-[#141A26] border border-cyanNeon-400/30 shadow-lg whitespace-nowrap">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-cyanNeon-300">
                {phase === 'loading'
                  ? 'LOADING PREVIEW...'
                  : isRoundOver
                    ? '30 SECONDS FULL PREVIEW'
                    : checkpointStartSec > 0
                      ? `${checkpointStartSec}S → ${ATTEMPT_DURATIONS[activeStep]}S`
                      : formatDurationUpper(ATTEMPT_DURATIONS[activeStep])}
              </span>
            </div>
            <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-cyanNeon-400/40" />
          </div>
        </div>

        {/* Tick Markers */}
        <div className="relative h-2.5 mb-0.5" aria-hidden="true">
          {SEGMENT_VISUAL_STOPS.map((pct, idx) => (
            <span
              key={pct}
              style={{ left: `${pct}%` }}
              className={`absolute bottom-0 -translate-x-1/2 text-[8px] leading-none transition-colors ${
                idx === activeStep ? 'text-cyanNeon-300' : 'text-slate-600'
              }`}
            >
              ▼
            </span>
          ))}
        </div>

        {/* Segmented Horizontal Timeline Track */}
        <div
          className="relative h-2.5 w-full rounded-full bg-[#161B26] border border-white/[0.08] overflow-hidden flex"
          aria-hidden="true"
        >
          <div
            style={{ width: `${activeStopPct}%` }}
            className="absolute inset-y-0 left-0 bg-cyanNeon-400/[0.15] transition-all duration-300"
          />
          <div
            style={{ width: `${currentFillPct}%` }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyanNeon-500 via-cyanNeon-400 to-white shadow-[0_0_12px_rgba(34,211,238,0.9)]"
          />
          {SEGMENT_VISUAL_STOPS.slice(0, 5).map((pct) => (
            <div
              key={pct}
              style={{ left: `${pct}%` }}
              className="absolute inset-y-0 w-px bg-[#090A0F]/85 z-10"
            />
          ))}
        </div>
      </div>

      {/* ERROR STATE OR UNIFIED TRANSPORT CONTROLS ROW */}
      {phase === 'error' ? (
        <div
          role="alert"
          className="flex flex-col items-center justify-center gap-3 mb-4 text-center"
        >
          <p className="text-xs sm:text-sm text-rose-300">
            {errorMessage ?? 'Could not load this audio preview.'}
          </p>
          <button
            type="button"
            onClick={onRetry}
            className="px-4 py-2.5 rounded-xl bg-[#151A25] hover:bg-[#1B2230] border border-white/10 hover:border-cyanNeon-400/35 text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
          >
            <RotateCw size={15} aria-hidden="true" />
            <span>Try Another Track</span>
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-4">
          {/* Tactile 3D Beveled Cyan Play Button */}
          <div className="relative flex items-center justify-center">
            {isPlaying && (
              <div className="play-pulse-ring absolute inset-0 rounded-[18px] bg-cyanNeon-400/35 pointer-events-none" />
            )}
            <button
              type="button"
              onClick={onTogglePlay}
              disabled={phase === 'loading'}
              aria-label={
                phase === 'loading'
                  ? 'Loading audio preview'
                  : isPlaying
                    ? 'Stop playback'
                    : `Play ${activeCapSec} second clip`
              }
              className="tactile-play-btn relative z-10 w-[68px] h-[68px] sm:w-[72px] sm:h-[72px] rounded-[18px] flex items-center justify-center text-[#031419] cursor-pointer disabled:opacity-50 disabled:cursor-wait"
            >
              {phase === 'loading' ? (
                <span
                  className="w-6 h-6 rounded-full border-[3px] border-[#031419]/25 border-t-[#031419] animate-spin"
                  aria-hidden="true"
                />
              ) : isPlaying ? (
                <Pause size={26} fill="currentColor" aria-hidden="true" />
              ) : (
                <Play
                  size={26}
                  fill="currentColor"
                  className="ml-1"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>

          {/* Skip Button */}
          <button
            type="button"
            disabled={isRoundOver || phase === 'loading'}
            onClick={onSkip}
            className="px-4 sm:px-5 py-3 rounded-2xl bg-[#151A25] hover:bg-[#1B2230] active:scale-95 border border-white/10 hover:border-cyanNeon-400/35 text-white font-semibold text-xs sm:text-sm flex items-center gap-2.5 shadow-lg transition-all group cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span>Skip</span>
            <span className="px-1.5 py-0.5 rounded bg-cyanNeon-500/15 border border-cyanNeon-400/25 font-mono text-[11px] text-cyanNeon-300 font-semibold">
              {isRoundOver
                ? 'Done'
                : attemptIndex < ATTEMPT_DURATIONS.length - 1
                  ? `+${ATTEMPT_DURATIONS[attemptIndex + 1]}s`
                  : 'Last'}
            </span>
            <SkipForward
              size={15}
              className="text-slate-300 group-hover:translate-x-0.5 transition-transform"
              aria-hidden="true"
            />
          </button>

          {/* Start From Toggle (0s vs Checkpoint) */}
          <button
            type="button"
            aria-pressed={playFromCheckpoint}
            disabled={isRoundOver || phase === 'loading'}
            onClick={onToggleCheckpoint}
            title={
              playFromCheckpoint
                ? 'Currently playing only from previous checkpoint. Click to play from 0s.'
                : 'Currently playing from 0s. Click to jump straight to new checkpoint audio.'
            }
            className={`px-3.5 sm:px-4 py-3 rounded-2xl border font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              playFromCheckpoint
                ? 'bg-cyanNeon-500/15 border-cyanNeon-400/50 text-cyanNeon-200 hover:bg-cyanNeon-500/25'
                : 'bg-[#151A25] hover:bg-[#1B2230] border-white/10 text-slate-300 hover:text-white'
            }`}
          >
            <FastForward size={14} aria-hidden="true" />
            <span>
              {playFromCheckpoint
                ? checkpointStartSec > 0
                  ? `From ${checkpointStartSec}s`
                  : 'Checkpoint'
                : 'From 0s'}
            </span>
          </button>

          {/* Give Up Button */}
          <button
            type="button"
            disabled={isRoundOver || phase === 'loading'}
            onClick={onGiveUp}
            title="Reveal current track"
            className="px-4 sm:px-5 py-3 rounded-2xl bg-[#151A25] hover:bg-rose-500/12 active:scale-95 border border-white/10 hover:border-rose-500/35 text-slate-300 hover:text-rose-300 font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Flag size={15} className="text-slate-400" aria-hidden="true" />
            <span>Give Up</span>
          </button>
        </div>
      )}
    </div>
  );
}
