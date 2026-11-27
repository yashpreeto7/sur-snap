import { useId, useRef, useState } from 'react';
import { Headphones, PlusCircle, Radio, Sparkles, Users, Zap } from 'lucide-react';
import { CATEGORIES } from '../../data/catalog';
import type { CustomPlaylist } from '../../types/game';
import {
  BUZZ_TIME_PRESETS,
  STEP_TIMER_PRESETS,
  type RoomMode,
  type RoomSettingsInput,
  type RoomTrackInput,
} from '../../types/multiplayer';

interface MultiplayerLobbyProps {
  customPlaylists: CustomPlaylist[];
  initialCode?: string;
  initialNickname?: string;
  busy: boolean;
  errorMessage: string | null;
  onClearError: () => void;
  onCreateRoom: (
    nickname: string,
    settings: RoomSettingsInput,
    customTracks?: RoomTrackInput[],
  ) => void;
  onJoinRoom: (code: string, nickname: string) => void;
}

const MODE_OPTIONS: Array<{
  id: RoomMode;
  label: string;
  summary: string;
  icon: typeof Radio;
}> = [
  {
    id: 'classic-sync',
    label: 'Classic Sync',
    summary: 'Shared 0.1s -> 30s steps (60s safety limit, Vote Skip anytime). Faster solves score more.',
    icon: Radio,
  },
  {
    id: 'speed-race',
    label: 'Speed Race',
    summary: 'Same hidden track, 60s clock, play & skip at your own pace.',
    icon: Zap,
  },
  {
    id: 'buzz-in',
    label: 'Buzz-In',
    summary: 'Hit Buzz first for 40s to answer! Miss costs -250 pts (can go negative); Vote Skip anytime.',
    icon: Sparkles,
  },
];

const ROUND_OPTIONS = [5, 10, 15] as const;

function getActiveCustomTracks(custom: CustomPlaylist): RoomTrackInput[] {
  const disabled = new Set(custom.disabledIds ?? []);
  const active = custom.tracks.filter((t) => !disabled.has(t.id));
  const chosen = active.length > 0 ? active : custom.tracks;
  return chosen.map((t) => ({
    id: t.id,
    title: t.title,
    trackName: t.trackName,
    artistName: t.artistName,
    albumName: t.albumName,
    artworkUrl: t.artworkUrl,
  }));
}

export function MultiplayerLobby({
  customPlaylists,
  initialCode = '',
  initialNickname = '',
  busy,
  errorMessage,
  onClearError,
  onCreateRoom,
  onJoinRoom,
}: MultiplayerLobbyProps) {
  const nicknameId = useId();
  const nicknameHelpId = useId();
  const nicknameErrId = useId();
  const packSelectId = useId();
  const roomCodeId = useId();
  const roomCodeErrId = useId();
  const createHeadingId = useId();
  const joinHeadingId = useId();

  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const codeInputRef = useRef<HTMLInputElement>(null);

  const [nickname, setNickname] = useState(initialNickname);
  const [nicknameError, setNicknameError] = useState<string | null>(null);
  const [joinCode, setJoinCode] = useState(initialCode.toUpperCase());
  const [joinCodeError, setJoinCodeError] = useState<string | null>(null);
  const [mode, setMode] = useState<RoomMode>('classic-sync');
  const [packId, setPackId] = useState<string>('all-india');
  const [roundCount, setRoundCount] = useState<number>(10);
  const [stepTimerSec, setStepTimerSec] = useState<number>(60);
  const [buzzTimeSec, setBuzzTimeSec] = useState<number>(40);

  const validateNickname = (value: string): boolean => {
    const clean = value.trim();
    if (!clean) {
      setNicknameError('Enter a nickname (1–20 characters) first.');
      return false;
    }
    setNicknameError(null);
    return true;
  };

  const handleCreateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy) return;
    if (!validateNickname(nickname)) {
      nicknameInputRef.current?.focus();
      return;
    }

    const custom = customPlaylists.find((p) => p.id === packId);
    const builtIn = CATEGORIES.find((c) => c.id === packId);
    const packName = custom?.name ?? builtIn?.name ?? 'All India Mix';
    const customTracks = custom ? getActiveCustomTracks(custom) : undefined;

    onCreateRoom(
      nickname.trim(),
      {
        mode,
        packId,
        packName,
        roundCount,
        stepTimerSec,
        buzzTimeSec,
      },
      customTracks,
    );
  };

  const handleJoinSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy) return;
    if (!validateNickname(nickname)) {
      nicknameInputRef.current?.focus();
      return;
    }

    const cleanedCode = joinCode.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (cleanedCode.length < 4) {
      setJoinCodeError('Enter the 4-character room code (e.g. SURS).');
      codeInputRef.current?.focus();
      return;
    }
    setJoinCodeError(null);
    onJoinRoom(cleanedCode, nickname.trim());
  };

  return (
    <div className="w-full max-w-[1040px] mx-auto py-2 flex flex-col gap-5">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-cyanNeon-300 mb-1">
            <Users size={14} aria-hidden="true" />
            <span>Live Multiplayer Rooms</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Play SurSnap Live with Friends
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Private invite rooms — zero login needed. Host chooses any Indian mix or custom imported playlist.
          </p>
        </div>
      </div>

      {/* Shared Nickname Field */}
      <div className="rounded-2xl bg-[#0E121C]/90 border border-white/[0.08] p-4 sm:p-5">
        <div className="flex flex-col gap-1.5 max-w-md">
          <label htmlFor={nicknameId} className="text-xs font-semibold text-slate-200">
            Your Nickname <span aria-hidden="true" className="text-cyanNeon-400">*</span>
          </label>
          <input
            ref={nicknameInputRef}
            id={nicknameId}
            name="nickname"
            type="text"
            required
            maxLength={20}
            autoComplete="nickname"
            autoCorrect="off"
            autoCapitalize="words"
            enterKeyHint="next"
            value={nickname}
            aria-invalid={nicknameError ? 'true' : undefined}
            aria-describedby={nicknameError ? `${nicknameHelpId} ${nicknameErrId}` : nicknameHelpId}
            onChange={(e) => {
              setNickname(e.target.value);
              if (nicknameError) setNicknameError(null);
              if (errorMessage) onClearError();
            }}
            onBlur={() => {
              if (nickname.length > 0) validateNickname(nickname);
            }}
            placeholder="e.g. Yashpreet"
            className="w-full px-3.5 py-2.5 min-h-[44px] rounded-xl bg-[#090B11] border border-white/[0.12] focus:border-cyanNeon-400/70 text-sm text-white placeholder-slate-500 transition"
          />
          <span id={nicknameHelpId} className="text-[11px] text-slate-400">
            Up to 20 characters shown on the room scoreboard.
          </span>
          {nicknameError && (
            <p id={nicknameErrId} role="alert" className="text-xs text-rose-400 font-medium mt-0.5">
              {nicknameError}
            </p>
          )}
        </div>
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="rounded-xl bg-rose-500/12 border border-rose-500/40 px-4 py-3 text-xs sm:text-sm text-rose-200 flex items-center justify-between gap-3"
        >
          <span>{errorMessage}</span>
          <button
            type="button"
            onClick={onClearError}
            className="text-xs font-semibold text-rose-200 hover:text-white underline shrink-0 cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Two Cards: Create vs Join */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] gap-5 items-start">
        {/* CREATE ROOM */}
        <form
          onSubmit={handleCreateSubmit}
          aria-labelledby={createHeadingId}
          noValidate
          className="rounded-2xl bg-[#0E121C]/90 border border-white/[0.08] p-5 flex flex-col gap-5 shadow-lg"
        >
          <div className="flex items-center justify-between gap-2">
            <h2 id={createHeadingId} className="text-base font-bold text-white flex items-center gap-2">
              <PlusCircle size={17} className="text-cyanNeon-400" aria-hidden="true" />
              <span>Create a Private Room</span>
            </h2>
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyanNeon-300 bg-cyanNeon-500/10 border border-cyanNeon-400/25 px-2 py-0.5 rounded-md">
              Host Controls
            </span>
          </div>

          {/* Game Mode Radio Fieldset */}
          <fieldset className="flex flex-col gap-2">
            <legend className="text-xs font-semibold text-slate-200 mb-1.5">Game Mode</legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {MODE_OPTIONS.map((opt) => {
                const Icon = opt.icon;
                const checked = mode === opt.id;
                const radioId = `mp-mode-${opt.id}`;
                return (
                  <label
                    key={opt.id}
                    htmlFor={radioId}
                    className={`rounded-xl border p-3 cursor-pointer transition flex flex-col gap-1.5 focus-within:outline-2 focus-within:outline-cyanNeon-400 focus-within:outline-offset-2 ${
                      checked
                        ? 'bg-cyanNeon-500/[0.12] border-cyanNeon-400/60 text-white shadow-[0_0_20px_-6px_rgba(6,182,212,0.4)]'
                        : 'bg-[#090B11] border-white/[0.08] text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <input
                      id={radioId}
                      type="radio"
                      name="roomMode"
                      value={opt.id}
                      checked={checked}
                      onChange={() => setMode(opt.id)}
                      className="visually-hidden"
                    />
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold flex items-center gap-1.5">
                        <Icon
                          size={14}
                          className={checked ? 'text-cyanNeon-300' : 'text-slate-400'}
                          aria-hidden="true"
                        />
                        <span>{opt.label}</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                          checked ? 'border-cyanNeon-400 bg-cyanNeon-400' : 'border-slate-500'
                        }`}
                      >
                        {checked && <span className="w-1.5 h-1.5 rounded-full bg-[#090B11]" />}
                      </span>
                    </div>
                    <span className="text-[11px] leading-snug text-slate-400">{opt.summary}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {/* Song Pack Select */}
          <div className="grid grid-cols-1 sm:grid-cols-[1.4fr_1fr] gap-4 items-start">
            <div className="flex flex-col gap-1.5">
              <label htmlFor={packSelectId} className="text-xs font-semibold text-slate-200">
                Song Pack
              </label>
              <select
                id={packSelectId}
                name="packId"
                value={packId}
                onChange={(e) => setPackId(e.target.value)}
                className="w-full px-3 py-2.5 min-h-[44px] rounded-xl bg-[#090B11] border border-white/[0.12] focus:border-cyanNeon-400/70 text-sm text-white"
              >
                <optgroup label="Curated Indian Packs">
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </optgroup>
                {customPlaylists.length > 0 && (
                  <optgroup label="Your Imported Playlists (Synced to Room)">
                    {customPlaylists.map((pl) => {
                      const activeCount = getActiveCustomTracks(pl).length;
                      return (
                        <option key={pl.id} value={pl.id}>
                          {pl.name} ({activeCount} tracks)
                        </option>
                      );
                    })}
                  </optgroup>
                )}
              </select>
            </div>

            {/* Rounds Radio Fieldset */}
            <fieldset className="flex flex-col gap-1.5">
              <legend className="text-xs font-semibold text-slate-200 mb-1">Rounds</legend>
              <div className="grid grid-cols-3 gap-2">
                {ROUND_OPTIONS.map((count) => {
                  const checked = roundCount === count;
                  const radioId = `mp-rounds-${count}`;
                  return (
                    <label
                      key={count}
                      htmlFor={radioId}
                      className={`min-h-[44px] rounded-xl border flex items-center justify-center text-xs font-mono font-bold cursor-pointer transition focus-within:outline-2 focus-within:outline-cyanNeon-400 focus-within:outline-offset-2 ${
                        checked
                          ? 'bg-cyanNeon-500/20 border-cyanNeon-400 text-cyanNeon-200'
                          : 'bg-[#090B11] border-white/[0.1] text-slate-400 hover:text-white'
                      }`}
                    >
                      <input
                        id={radioId}
                        type="radio"
                        name="roundCount"
                        value={count}
                        checked={checked}
                        onChange={() => setRoundCount(count)}
                        className="visually-hidden"
                      />
                      <span>{count}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </div>

          {/* Next Skip / Round Timer & Buzz Time Settings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
            <fieldset className="flex flex-col gap-1.5">
              <legend className="text-xs font-semibold text-slate-200 mb-1">
                {mode === 'speed-race' ? 'Round Timer' : 'Auto-Skip Timer'}
              </legend>
              <div className="grid grid-cols-4 gap-2">
                {STEP_TIMER_PRESETS.map((sec) => {
                  const checked = stepTimerSec === sec;
                  const radioId = `mp-step-timer-${sec}`;
                  return (
                    <label
                      key={sec}
                      htmlFor={radioId}
                      className={`min-h-[42px] px-1.5 rounded-xl border flex items-center justify-center text-[11px] font-mono font-bold cursor-pointer transition focus-within:outline-2 focus-within:outline-cyanNeon-400 focus-within:outline-offset-2 ${
                        checked
                          ? 'bg-cyanNeon-500/20 border-cyanNeon-400 text-cyanNeon-200'
                          : 'bg-[#090B11] border-white/[0.1] text-slate-400 hover:text-white'
                      }`}
                    >
                      <input
                        id={radioId}
                        type="radio"
                        name="stepTimerSec"
                        value={sec}
                        checked={checked}
                        onChange={() => setStepTimerSec(sec)}
                        className="visually-hidden"
                      />
                      <span>{sec === 0 ? 'Vote ∞' : `${sec}s`}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {mode === 'buzz-in' && (
              <fieldset className="flex flex-col gap-1.5">
                <legend className="text-xs font-semibold text-slate-200 mb-1">
                  Buzz Guess Time
                </legend>
                <div className="grid grid-cols-5 gap-1.5">
                  {BUZZ_TIME_PRESETS.map((sec) => {
                    const checked = buzzTimeSec === sec;
                    const radioId = `mp-buzz-time-${sec}`;
                    return (
                      <label
                        key={sec}
                        htmlFor={radioId}
                        className={`min-h-[42px] rounded-xl border flex items-center justify-center text-[11px] font-mono font-bold cursor-pointer transition focus-within:outline-2 focus-within:outline-cyanNeon-400 focus-within:outline-offset-2 ${
                          checked
                            ? 'bg-amber-400/20 border-amber-400 text-amber-200'
                            : 'bg-[#090B11] border-white/[0.1] text-slate-400 hover:text-white'
                        }`}
                      >
                        <input
                          id={radioId}
                          type="radio"
                          name="buzzTimeSec"
                          value={sec}
                          checked={checked}
                          onChange={() => setBuzzTimeSec(sec)}
                          className="visually-hidden"
                        />
                        <span>{sec}s</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            )}
          </div>

          <button
            type="submit"
            disabled={busy}
            className="w-full py-3 px-5 rounded-xl tactile-play-btn text-sm font-bold text-[#061018] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            <Headphones size={17} aria-hidden="true" />
            <span>{busy ? 'Creating Room...' : 'Create Room'}</span>
          </button>
        </form>

        {/* JOIN ROOM */}
        <form
          onSubmit={handleJoinSubmit}
          aria-labelledby={joinHeadingId}
          noValidate
          className="rounded-2xl bg-[#0E121C]/90 border border-white/[0.08] p-5 flex flex-col gap-4 shadow-lg"
        >
          <div>
            <h2 id={joinHeadingId} className="text-base font-bold text-white flex items-center gap-2">
              <Users size={17} className="text-cyanNeon-400" aria-hidden="true" />
              <span>Join with Code</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Got a 4-letter code or invite link from a friend? Enter it below.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={roomCodeId} className="text-xs font-semibold text-slate-200">
              Room Code <span aria-hidden="true" className="text-cyanNeon-400">*</span>
            </label>
            <input
              ref={codeInputRef}
              id={roomCodeId}
              name="roomCode"
              type="text"
              required
              maxLength={6}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="characters"
              spellCheck={false}
              enterKeyHint="go"
              value={joinCode}
              aria-invalid={joinCodeError ? 'true' : undefined}
              aria-describedby={joinCodeError ? roomCodeErrId : undefined}
              onChange={(e) => {
                setJoinCode(e.target.value.toUpperCase());
                if (joinCodeError) setJoinCodeError(null);
                if (errorMessage) onClearError();
              }}
              placeholder="SURS"
              className="w-full px-4 py-3 min-h-[48px] rounded-xl bg-[#090B11] border border-white/[0.12] focus:border-cyanNeon-400/70 font-mono text-lg font-bold tracking-[0.25em] uppercase text-white placeholder-slate-600 transition"
            />
            {joinCodeError && (
              <p id={roomCodeErrId} role="alert" className="text-xs text-rose-400 font-medium">
                {joinCodeError}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={busy}
            className="w-full py-3 px-5 rounded-xl bg-white/[0.08] hover:bg-cyanNeon-500/20 border border-white/[0.14] hover:border-cyanNeon-400/50 text-sm font-bold text-white transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            <span>{busy ? 'Joining...' : 'Join Room'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
