import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  Award,
  Check,
  ExternalLink,
  Flame,
  HelpCircle,
  Menu,
  Plus,
  Radio,
  SlidersHorizontal,
  Trash2,
  Users,
  X,
} from 'lucide-react';
import { AudioPlayerCard } from './components/AudioPlayerCard';
import { GuessInput } from './components/GuessInput';
import { HelpDialog } from './components/HelpDialog';
import { ImportPlaylistDialog } from './components/ImportPlaylistDialog';
import { ManagePackDialog } from './components/ManagePackDialog';
import { MultiplayerLobby } from './components/multiplayer/MultiplayerLobby';
import { MultiplayerRoomView } from './components/multiplayer/MultiplayerRoomView';
import {
  CATEGORIES,
  EXTRA_AUTOCOMPLETE_SONGS,
  TRACK_CATALOG,
} from './data/catalog';
import { AudioEngine } from './services/audioEngine';
import {
  cleanTrackTitle,
  resolveTrackPreview,
  type ResolvedTrackPreview,
} from './services/itunes';
import {
  loadSavedMultiplayerSession,
  MultiplayerClient,
  saveMultiplayerSession,
  type GuessFeedbackEvent,
} from './services/multiplayerClient';
import {
  ATTEMPT_DURATIONS,
  MAX_PREVIEW_SECONDS,
  type CatalogTrack,
  type CategoryId,
  type CustomPlaylist,
  type GuessEntry,
  type PlaylistSource,
  type RoundPhase,
  type SearchSuggestion,
  type SessionStats,
} from './types/game';
import type {
  PublicRoomState,
  RoomSettingsInput,
  RoomTrackInput,
} from './types/multiplayer';
import { dedupeTracksByTitleAndArtist, evaluateGuess } from './utils/matching';

function shuffleIds(tracks: CatalogTrack[]): number[] {
  const ids = tracks.map((t) => t.id);
  for (let i = ids.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids;
}

function getActiveCustomTracks(custom: CustomPlaylist): CatalogTrack[] {
  const disabled = new Set(custom.disabledIds ?? []);
  const active = custom.tracks.filter((t) => !disabled.has(t.id));
  return active.length > 0 ? active : custom.tracks;
}

function getPool(packId: string, customPlaylists: CustomPlaylist[]): CatalogTrack[] {
  if (packId === 'all-india') return TRACK_CATALOG;
  const custom = customPlaylists.find((p) => p.id === packId);
  if (custom) return getActiveCustomTracks(custom);
  return TRACK_CATALOG.filter((t) => t.category === packId);
}

const SOURCE_SHORT_TAG: Record<PlaylistSource, string> = {
  'apple-music': 'AM',
  youtube: 'YT',
  spotify: 'SP',
};

const SOURCE_LABEL: Record<PlaylistSource, string> = {
  'apple-music': 'Apple Music import',
  youtube: 'YouTube import',
  spotify: 'Spotify import',
};

const STEP_POINTS = [1000, 800, 650, 500, 350, 250] as const;

function readRoomParamFromUrl(): string {
  try {
    const raw = new URLSearchParams(window.location.search).get('room') ?? '';
    return raw.trim().toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
  } catch {
    return '';
  }
}

export function App() {
  const initialRoomParam = useMemo(() => readRoomParamFromUrl(), []);
  const savedMpSession = useMemo(() => loadSavedMultiplayerSession(), []);

  const [appMode, setAppMode] = useState<'solo' | 'multiplayer'>(() =>
    initialRoomParam || savedMpSession ? 'multiplayer' : 'solo',
  );
  const [mpBusy, setMpBusy] = useState(false);
  const [mpError, setMpError] = useState<string | null>(null);
  const [mpRoom, setMpRoom] = useState<PublicRoomState | null>(null);
  const [mpPlayerId, setMpPlayerId] = useState<string | null>(null);
  const [mpClockOffsetMs, setMpClockOffsetMs] = useState(0);
  const [mpFeedback, setMpFeedback] = useState<GuessFeedbackEvent | null>(null);

  const [customPlaylists, setCustomPlaylists] = useState<CustomPlaylist[]>(() => {
    try {
      const saved = localStorage.getItem('sursnap_custom_playlists_v1');
      if (saved) return JSON.parse(saved) as CustomPlaylist[];
    } catch {
      // Ignore storage failures
    }
    return [];
  });

  const [category, setCategory] = useState<string>('all-india');
  const [roundNumber, setRoundNumber] = useState(1);
  const queuesRef = useRef<Record<string, number[]>>({});
  const [currentTrack, setCurrentTrack] = useState<CatalogTrack>(() => {
    const pool = TRACK_CATALOG;
    return pool[Math.floor(Math.random() * pool.length)];
  });

  const [resolvedPreview, setResolvedPreview] =
    useState<ResolvedTrackPreview | null>(null);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);

  const [phase, setPhase] = useState<RoundPhase>('loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [guesses, setGuesses] = useState<GuessEntry[]>([]);
  const [selectedStep, setSelectedStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedSec, setElapsedSec] = useState(0);
  const [helpOpen, setHelpOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [importTargetId, setImportTargetId] = useState<string | null>(null);
  const [managePackId, setManagePackId] = useState<string | null>(null);
  const [manageSessionKey, setManageSessionKey] = useState(0);
  const [importNotice, setImportNotice] = useState<string | null>(null);
  const autoSkipStreakRef = useRef(0);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(() => {
    try {
      return localStorage.getItem('sursnap_sidebar_collapsed') === 'true';
    } catch {
      return false;
    }
  });
  const [liveAnnouncement, setLiveAnnouncement] = useState('');

  const [stats, setStats] = useState<SessionStats>(() => {
    try {
      const saved = localStorage.getItem('sursnap-stats-v2');
      if (saved) return JSON.parse(saved) as SessionStats;
    } catch {
      // Ignore storage failures
    }
    return { played: 0, won: 0, streak: 0, bestStreak: 0, points: 0 };
  });

  const searchInputRef = useRef<HTMLInputElement>(null);
  const engineRef = useRef<AudioEngine | null>(null);
  const getEngine = useCallback(() => {
    if (!engineRef.current) {
      engineRef.current = new AudioEngine();
    }
    return engineRef.current;
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('sursnap-stats-v2', JSON.stringify(stats));
    } catch {
      // Ignore storage failures
    }
  }, [stats]);

  useEffect(() => {
    try {
      localStorage.setItem(
        'sursnap_custom_playlists_v1',
        JSON.stringify(customPlaylists),
      );
    } catch {
      // Ignore storage failures
    }
  }, [customPlaylists]);

  useEffect(() => {
    try {
      localStorage.setItem('sursnap_sidebar_collapsed', String(sidebarCollapsed));
    } catch {
      // Ignore storage failures
    }
  }, [sidebarCollapsed]);

  const mpClientRef = useRef<MultiplayerClient | null>(null);
  const getMpClient = useCallback(() => {
    if (!mpClientRef.current) {
      mpClientRef.current = new MultiplayerClient();
    }
    return mpClientRef.current;
  }, []);

  const [mpEngine] = useState(() => new AudioEngine());

  useEffect(() => {
    const client = getMpClient();
    client.setHandlers({
      onRoomState: (state, playerId, clockOffsetMs) => {
        setMpBusy(false);
        setMpError(null);
        setMpRoom(state);
        setMpPlayerId(playerId);
        setMpClockOffsetMs(clockOffsetMs);
      },
      onGuessFeedback: (fb) => {
        setMpFeedback(fb);
      },
      onError: (code, message) => {
        setMpBusy(false);
        setMpError(message);
        if (code === 'ROOM_NOT_FOUND') {
          saveMultiplayerSession(null);
        }
      },
    });

    if (savedMpSession && (!initialRoomParam || savedMpSession.roomCode === initialRoomParam)) {
      void client
        .joinRoom(savedMpSession.roomCode, savedMpSession.nickname, savedMpSession.reconnectToken)
        .catch(() => {
          // Allow user to retry or join manually on lobby
        });
    }

    return () => {
      engineRef.current?.dispose();
      mpEngine.dispose();
      mpClientRef.current?.disconnect();
    };
  }, [getMpClient, initialRoomParam, mpEngine, savedMpSession]);

  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryId, number> = {
      'all-india': TRACK_CATALOG.length,
      'old-is-gold': 0,
      'bollywood-classics': 0,
      'modern-bollywood': 0,
      'desi-pop': 0,
      punjabi: 0,
      'dhh-indie': 0,
    };
    for (const track of TRACK_CATALOG) {
      counts[track.category] += 1;
    }
    return counts;
  }, []);

  const searchCatalog = useMemo(() => {
    const customTracks = customPlaylists.flatMap((p) => p.tracks);
    if (customTracks.length === 0) return TRACK_CATALOG;
    const seen = new Set<number>();
    const merged: CatalogTrack[] = [];
    for (const t of [...customTracks, ...TRACK_CATALOG]) {
      if (seen.has(t.id)) continue;
      seen.add(t.id);
      merged.push(t);
    }
    return merged;
  }, [customPlaylists]);

  const drawNextTrack = useCallback(
    (
      targetPackId: string,
      playlistsList: CustomPlaylist[],
      excludeId?: number,
    ): CatalogTrack => {
      const pool = getPool(targetPackId, playlistsList);
      let queue = queuesRef.current[targetPackId];
      if (!queue || queue.length === 0) {
        queue = shuffleIds(pool);
        if (queue.length > 1 && queue[0] === excludeId) {
          [queue[0], queue[queue.length - 1]] = [queue[queue.length - 1], queue[0]];
        }
      }

      const [nextId, ...rest] = queue;
      queuesRef.current[targetPackId] = rest;
      return pool.find((t) => t.id === nextId) ?? pool[0];
    },
    [],
  );

  // Load preview audio whenever currentTrack changes
  useEffect(() => {
    const controller = new AbortController();
    engineRef.current?.stop();

    async function fetchAndDecode() {
      try {
        const resolved = await resolveTrackPreview(
          currentTrack.id,
          `${currentTrack.title} ${currentTrack.artistName}`,
          controller.signal,
        );
        if (controller.signal.aborted) return;

        const buffer = await getEngine().loadBuffer(
          resolved.previewUrl,
          controller.signal,
        );
        if (controller.signal.aborted) return;

        setResolvedPreview(resolved);
        setAudioBuffer(buffer);
        autoSkipStreakRef.current = 0;
        setPhase('playing');
      } catch (err) {
        if (controller.signal.aborted) return;
        const pool = getPool(category, customPlaylists);
        if (
          currentTrack.id < 0 &&
          pool.length > 1 &&
          autoSkipStreakRef.current < 3
        ) {
          autoSkipStreakRef.current += 1;
          setImportNotice(
            `Skipped unavailable preview: "${currentTrack.title}"`,
          );
          const nextTrack = drawNextTrack(
            category,
            customPlaylists,
            currentTrack.id,
          );
          setIsPlaying(false);
          setElapsedSec(0);
          setGuesses([]);
          setSelectedStep(0);
          setResolvedPreview(null);
          setAudioBuffer(null);
          setErrorMessage(null);
          setPhase('loading');
          setCurrentTrack(nextTrack);
          return;
        }
        setErrorMessage(
          err instanceof Error
            ? err.message
            : 'Unable to reach Apple Music India preview.',
        );
        setPhase('error');
      }
    }

    void fetchAndDecode();
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrack, getEngine]);

  const startTrack = useCallback((track: CatalogTrack) => {
    engineRef.current?.stop();
    setIsPlaying(false);
    setElapsedSec(0);
    setGuesses([]);
    setSelectedStep(0);
    setResolvedPreview(null);
    setAudioBuffer(null);
    setErrorMessage(null);
    setPhase('loading');
    setCurrentTrack(track);
  }, []);

  const attemptIndex = Math.min(guesses.length, ATTEMPT_DURATIONS.length - 1);

  const playForStep = useCallback(
    (stepIdx: number) => {
      if (!audioBuffer || phase === 'loading' || phase === 'error') return;
      const isRoundOver = phase === 'won' || phase === 'lost';
      const duration = isRoundOver
        ? MAX_PREVIEW_SECONDS
        : ATTEMPT_DURATIONS[stepIdx] ?? ATTEMPT_DURATIONS[0];

      setIsPlaying(true);
      void getEngine().playSnippet(
        audioBuffer,
        duration,
        (elapsed) => setElapsedSec(elapsed),
        () => {
          setIsPlaying(false);
          setElapsedSec(0);
        },
      );
    },
    [audioBuffer, getEngine, phase],
  );

  const handleTogglePlay = useCallback(() => {
    if (!audioBuffer || phase === 'loading' || phase === 'error') return;

    if (isPlaying) {
      engineRef.current?.stop();
      setIsPlaying(false);
      setElapsedSec(0);
      return;
    }

    playForStep(selectedStep);
  }, [audioBuffer, isPlaying, phase, playForStep, selectedStep]);

  const handleSelectStepTile = useCallback(
    (stepIdx: number) => {
      if (phase === 'loading' || phase === 'error') return;
      if (stepIdx > attemptIndex && phase === 'playing') return;
      engineRef.current?.stop();
      setIsPlaying(false);
      setElapsedSec(0);
      setSelectedStep(stepIdx);
      playForStep(stepIdx);
    },
    [attemptIndex, phase, playForStep],
  );

  const finishRound = useCallback((won: boolean, attemptsUsed: number) => {
    setPhase(won ? 'won' : 'lost');
    setStats((prev) => {
      const nextStreak = won ? prev.streak + 1 : 0;
      const earned = won ? STEP_POINTS[attemptsUsed - 1] ?? 250 : 0;
      return {
        played: prev.played + 1,
        won: prev.won + (won ? 1 : 0),
        streak: nextStreak,
        bestStreak: Math.max(prev.bestStreak, nextStreak),
        points: prev.points + earned,
      };
    });
  }, []);

  const handleSelectGuess = (suggestion: SearchSuggestion) => {
    if (phase !== 'playing') return;
    engineRef.current?.stop();
    setIsPlaying(false);
    setElapsedSec(0);

    const status = evaluateGuess(suggestion, {
      id: resolvedPreview?.trackId ?? currentTrack.id,
      title: currentTrack.title,
      trackName: resolvedPreview?.trackName ?? currentTrack.trackName,
      artistName: resolvedPreview?.artistName ?? currentTrack.artistName,
    });

    const entry: GuessEntry = {
      attemptIndex: guesses.length,
      durationSec: ATTEMPT_DURATIONS[attemptIndex],
      status,
      guessedTitle: suggestion.title,
      guessedArtist: suggestion.artistName,
    };

    const nextGuesses = [...guesses, entry];
    setGuesses(nextGuesses);

    if (status === 'correct') {
      setLiveAnnouncement(
        `Correct! ${currentTrack.title} by ${currentTrack.artistName}.`,
      );
      finishRound(true, nextGuesses.length);
      return;
    }

    if (nextGuesses.length >= ATTEMPT_DURATIONS.length) {
      setLiveAnnouncement(
        `Out of guesses. The song was ${currentTrack.title} by ${currentTrack.artistName}.`,
      );
      finishRound(false, nextGuesses.length);
      return;
    }

    const nextStep = nextGuesses.length;
    setSelectedStep(nextStep);
    const nextSec = ATTEMPT_DURATIONS[nextStep];
    setLiveAnnouncement(
      status === 'artist-match'
        ? `Right artist, wrong song. Unlocked ${nextSec} seconds.`
        : `Wrong guess. Unlocked ${nextSec} seconds.`,
    );
    playForStep(nextStep);
  };

  const handleSkip = useCallback(() => {
    if (phase !== 'playing') return;
    engineRef.current?.stop();
    setIsPlaying(false);
    setElapsedSec(0);

    const entry: GuessEntry = {
      attemptIndex: guesses.length,
      durationSec: ATTEMPT_DURATIONS[attemptIndex],
      status: 'skipped',
    };
    const nextGuesses = [...guesses, entry];
    setGuesses(nextGuesses);

    if (nextGuesses.length >= ATTEMPT_DURATIONS.length) {
      setLiveAnnouncement(
        `Out of snippets. The song was ${currentTrack.title} by ${currentTrack.artistName}.`,
      );
      finishRound(false, nextGuesses.length);
    } else {
      const nextStep = nextGuesses.length;
      setSelectedStep(nextStep);
      const nextSec = ATTEMPT_DURATIONS[nextStep];
      setLiveAnnouncement(`Skipped. Unlocked ${nextSec} seconds.`);
      playForStep(nextStep);
    }
  }, [attemptIndex, currentTrack.artistName, currentTrack.title, finishRound, guesses, phase, playForStep]);

  const handleGiveUp = useCallback(() => {
    if (phase !== 'playing') return;
    engineRef.current?.stop();
    setIsPlaying(false);
    setElapsedSec(0);
    setLiveAnnouncement(
      `Track revealed: ${currentTrack.title} by ${currentTrack.artistName}.`,
    );
    finishRound(false, guesses.length);
  }, [currentTrack.artistName, currentTrack.title, finishRound, guesses.length, phase]);

  const handlePackChange = (nextPackId: string, playlistsOverride?: CustomPlaylist[]) => {
    const activePlaylists = playlistsOverride ?? customPlaylists;
    setMobileSidebarOpen(false);
    setCategory(nextPackId);
    setRoundNumber(1);
    const nextTrack = drawNextTrack(nextPackId, activePlaylists);
    startTrack(nextTrack);
  };

  const handleNextSong = () => {
    setRoundNumber((prev) => prev + 1);
    const nextTrack = drawNextTrack(category, customPlaylists, currentTrack.id);
    startTrack(nextTrack);
  };

  const handleResetCurrentRound = () => {
    engineRef.current?.stop();
    setIsPlaying(false);
    setElapsedSec(0);
    setGuesses([]);
    setSelectedStep(0);
    if (audioBuffer) {
      setPhase('playing');
    }
  };

  const handleImportedPlaylist = (
    playlist: CustomPlaylist,
    mergeIntoId: string | null,
  ) => {
    if (!mergeIntoId) {
      const nextList = [playlist, ...customPlaylists];
      setCustomPlaylists(nextList);
      setImportNotice(
        `Created "${playlist.name}" with ${playlist.tracks.length} tracks.`,
      );
      handlePackChange(playlist.id, nextList);
      return;
    }

    let addedCount = 0;
    let mergedPackName = playlist.name;
    let totalCount = 0;

    const nextList = customPlaylists.map((existing) => {
      if (existing.id !== mergeIntoId) return existing;
      mergedPackName = existing.name;
      const { combined, added } = dedupeTracksByTitleAndArtist(
        existing.tracks,
        playlist.tracks,
      );
      addedCount = added.length;
      totalCount = combined.length;
      return {
        ...existing,
        tracks: combined,
      };
    });

    delete queuesRef.current[mergeIntoId];
    setCustomPlaylists(nextList);
    setImportNotice(
      addedCount > 0
        ? `Added ${addedCount} new songs into "${mergedPackName}" (${totalCount} total).`
        : `All songs from that link were already inside "${mergedPackName}".`,
    );
    handlePackChange(mergeIntoId, nextList);
  };

  const handleDeleteCustomPlaylist = (
    e: React.MouseEvent,
    playlistId: string,
  ) => {
    e.stopPropagation();
    const nextList = customPlaylists.filter((p) => p.id !== playlistId);
    setCustomPlaylists(nextList);
    delete queuesRef.current[playlistId];
    if (managePackId === playlistId) {
      setManagePackId(null);
    }
    if (category === playlistId) {
      handlePackChange('all-india', nextList);
    }
  };

  const openManagePack = (playlistId: string) => {
    setMobileSidebarOpen(false);
    setManageSessionKey((prev) => prev + 1);
    setManagePackId(playlistId);
  };

  const handleSaveManagedPack = (updated: CustomPlaylist) => {
    const nextList = customPlaylists.map((p) =>
      p.id === updated.id ? updated : p,
    );
    delete queuesRef.current[updated.id];
    setCustomPlaylists(nextList);

    const activePool = getActiveCustomTracks(updated);
    const mutedCount = updated.tracks.length - activePool.length;
    setImportNotice(
      mutedCount > 0
        ? `Saved "${updated.name}" (${activePool.length} active, ${mutedCount} muted).`
        : `Saved "${updated.name}" (${activePool.length} active tracks).`,
    );

    if (category === updated.id) {
      const stillPlayable = activePool.some((t) => t.id === currentTrack.id);
      if (!stillPlayable) {
        const nextTrack = drawNextTrack(updated.id, nextList);
        startTrack(nextTrack);
      }
    }
  };

  const manageTargetPack = useMemo(
    () => customPlaylists.find((p) => p.id === managePackId) ?? null,
    [customPlaylists, managePackId],
  );

  // Global Keyboard Shortcuts: Space (Play), S (Skip), / (Search), [ (Sidebar Collapse), Esc (Drawer)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (appMode !== 'solo') return;
      if (helpOpen || importOpen || manageTargetPack !== null) return;
      const target = e.target as HTMLElement | null;
      const isTyping =
        target !== null &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable);

      if (e.key === '/' && !isTyping) {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === '[' && !isTyping && window.innerWidth >= 1024) {
        e.preventDefault();
        setSidebarCollapsed((prev) => !prev);
      } else if (
        e.code === 'Space' &&
        !isTyping &&
        target?.tagName !== 'BUTTON'
      ) {
        e.preventDefault();
        handleTogglePlay();
      } else if ((e.key === 's' || e.key === 'S') && !isTyping) {
        e.preventDefault();
        handleSkip();
      } else if (e.key === 'Escape') {
        setMobileSidebarOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [appMode, handleSkip, handleTogglePlay, helpOpen, importOpen, manageTargetPack]);

  const switchAppMode = (nextMode: 'solo' | 'multiplayer') => {
    if (nextMode === appMode) return;
    if (nextMode === 'multiplayer') {
      getEngine().stop();
      setIsPlaying(false);
    } else {
      mpEngine.stop();
    }
    setAppMode(nextMode);
  };

  const handleMpCreateRoom = async (
    nickname: string,
    settings: RoomSettingsInput,
    customTracks?: RoomTrackInput[],
  ) => {
    setMpBusy(true);
    setMpError(null);
    setMpFeedback(null);
    try {
      await getMpClient().createRoom(nickname, settings, customTracks);
    } catch (err) {
      setMpBusy(false);
      setMpError(err instanceof Error ? err.message : 'Failed to create room.');
    }
  };

  const handleMpJoinRoom = async (code: string, nickname: string) => {
    setMpBusy(true);
    setMpError(null);
    setMpFeedback(null);
    try {
      await getMpClient().joinRoom(code, nickname);
    } catch (err) {
      setMpBusy(false);
      setMpError(err instanceof Error ? err.message : 'Failed to join room.');
    }
  };

  const handleMpLeaveRoom = () => {
    mpEngine.stop();
    getMpClient().leaveRoom();
    setMpRoom(null);
    setMpFeedback(null);
    setMpError(null);
    if (window.location.search.includes('room=')) {
      window.history.replaceState({}, '', window.location.pathname);
    }
  };

  const activeCustom = customPlaylists.find((p) => p.id === category);
  const activeBuiltIn = CATEGORIES.find((c) => c.id === category);
  const activePackName = activeCustom?.name ?? activeBuiltIn?.name ?? 'All India Mix';
  const activeCount = activeCustom
    ? getActiveCustomTracks(activeCustom).length
    : categoryCounts[(activeBuiltIn?.id ?? 'all-india') as CategoryId];
  const activePackDesc = activeCustom
    ? `${SOURCE_LABEL[activeCustom.source]} · ${activeCount}${
        activeCount < activeCustom.tracks.length
          ? `/${activeCustom.tracks.length}`
          : ''
      } playable songs`
    : activeBuiltIn?.tagline ?? '';

  const displayTitle = resolvedPreview
    ? cleanTrackTitle(resolvedPreview.trackName)
    : currentTrack.title;
  const displayArtist = resolvedPreview?.artistName ?? currentTrack.artistName;
  const displayAlbum = resolvedPreview?.albumName ?? currentTrack.albumName;
  const displayArt = resolvedPreview?.artworkUrl || currentTrack.artworkUrl;
  const earnedPoints =
    phase === 'won' ? STEP_POINTS[guesses.length - 1] ?? 250 : 0;

  return (
    <div className="min-h-screen lg:h-[100dvh] lg:overflow-hidden flex flex-col lg:flex-row relative text-[#F4F5F8]">
      <div className="noise-overlay fixed inset-0 pointer-events-none z-0" />

      {/* MOBILE SIDEBAR BACKDROP */}
      {appMode === 'solo' && mobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* 1. LEFT SIDEBAR NAVIGATION (Solo Mode) */}
      {appMode === 'solo' && (
        <aside
          className={`desktop-sidebar custom-scroll fixed lg:static top-0 left-0 z-40 h-[100dvh] w-[260px] shrink-0 bg-[#0D1017]/95 backdrop-blur-xl border-r border-white/[0.07] flex flex-col justify-between p-4 transition-transform duration-300 ease-out lg:translate-x-0 ${
            mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } ${sidebarCollapsed ? 'is-collapsed' : ''}`}
        >
        <div className="flex flex-col gap-4 overflow-y-auto overflow-x-hidden pr-0.5 custom-scroll">
          {/* Brand Identity + Desktop Collapse Toggle */}
          <div className="sidebar-header-row flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={handleResetCurrentRound}
              title="SurSnap — Reset Current Round"
              className="flex items-center gap-2.5 group shrink-0 text-left cursor-pointer"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-cyanNeon-600 to-cyanNeon-300 opacity-40 blur-sm group-hover:opacity-75 transition" />
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyanNeon-400 via-cyanNeon-500 to-cyanNeon-700 flex items-center justify-center border border-white/25 shadow-inner">
                  <span className="font-display font-extrabold text-xs tracking-tight text-[#041318]">
                    0.1s
                  </span>
                </div>
              </div>
              <div className="sidebar-collapsible-text">
                <h1 className="font-display font-extrabold text-base tracking-tight text-white leading-none">
                  SurSnap
                </h1>
                <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.14em] text-cyanNeon-400/80 mt-1">
                  Indian Music
                </p>
              </div>
            </button>

            <button
              type="button"
              title={sidebarCollapsed ? 'Expand Sidebar ([)' : 'Collapse Sidebar ([)'}
              aria-label="Toggle Sidebar Width"
              onClick={() => setSidebarCollapsed((prev) => !prev)}
              className="hidden lg:flex w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-cyanNeon-500/15 border border-white/[0.08] hover:border-cyanNeon-400/35 items-center justify-center text-slate-400 hover:text-cyanNeon-300 transition shrink-0 cursor-pointer"
            >
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  sidebarCollapsed ? 'rotate-180' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <line x1="9" y1="3" x2="9" y2="21" />
                <polyline points="15 9 12 12 15 15" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Close categories"
              onClick={() => setMobileSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          {/* Import Playlist Button */}
          <button
            type="button"
            onClick={() => {
              setMobileSidebarOpen(false);
              setImportTargetId(null);
              setImportOpen(true);
            }}
            title="Import Playlist Link (Apple Music, YouTube, Spotify)"
            className="sidebar-cat-btn w-full px-3 py-2 rounded-xl bg-cyanNeon-500/[0.1] hover:bg-cyanNeon-500/[0.18] border border-cyanNeon-400/30 hover:border-cyanNeon-400/55 text-cyanNeon-300 text-xs font-semibold flex items-center gap-2.5 transition cursor-pointer"
          >
            <span className="w-8 h-8 rounded-lg shrink-0 bg-cyanNeon-500/20 border border-cyanNeon-400/40 flex items-center justify-center">
              <Plus size={16} aria-hidden="true" />
            </span>
            <span className="sidebar-collapsible-text truncate">
              Import Playlist Link
            </span>
          </button>

          {/* Imported Custom Playlists */}
          {customPlaylists.length > 0 && (
            <div>
              <div className="sidebar-collapsible-text flex items-center justify-between px-1.5 mb-2">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Imported
                </span>
                <span className="text-[10px] font-mono text-slate-600">
                  {customPlaylists.length} PACK{customPlaylists.length > 1 ? 'S' : ''}
                </span>
              </div>

              <nav className="flex flex-col gap-1" aria-label="Imported Playlists">
                {customPlaylists.map((pl) => {
                  const isActive = category === pl.id;
                  return (
                    <div
                      key={pl.id}
                      className={`group relative rounded-xl transition-all flex items-center ${
                        isActive
                          ? 'bg-cyanNeon-500/[0.12] border border-cyanNeon-400/40 text-white shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]'
                          : 'border border-transparent hover:bg-white/[0.04] text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <button
                        type="button"
                        aria-pressed={isActive}
                        title={`${pl.name} (${pl.tracks.length} tracks)`}
                        onClick={() => handlePackChange(pl.id)}
                        className="sidebar-cat-btn flex-1 min-w-0 text-left px-3 py-2 flex items-center gap-2.5 cursor-pointer"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center font-mono text-[10px] font-bold tracking-tight transition-all ${
                            isActive
                              ? 'bg-cyanNeon-500/20 text-cyanNeon-300 border border-cyanNeon-400/50'
                              : 'bg-white/[0.04] text-slate-400 border border-white/[0.06] group-hover:text-white'
                          }`}
                        >
                          {SOURCE_SHORT_TAG[pl.source]}
                        </div>
                        <div className="sidebar-collapsible-text truncate">
                          <div
                            className={`text-xs font-semibold truncate ${
                              isActive ? 'text-white' : 'text-slate-300'
                            }`}
                          >
                            {pl.name}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate">
                            {(() => {
                              const activeLen = getActiveCustomTracks(pl).length;
                              return activeLen < pl.tracks.length
                                ? `${activeLen}/${pl.tracks.length} active`
                                : `${pl.tracks.length} tracks`;
                            })()}
                          </div>
                        </div>
                      </button>

                      <div className="sidebar-collapsible-text flex items-center gap-0.5 mr-1.5 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition">
                        <button
                          type="button"
                          aria-label={`Manage songs in ${pl.name}`}
                          title="View, select, or remove songs"
                          onClick={(e) => {
                            e.stopPropagation();
                            openManagePack(pl.id);
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-cyanNeon-300 hover:bg-cyanNeon-500/15 transition cursor-pointer"
                        >
                          <SlidersHorizontal size={13} aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          aria-label={`Add songs to ${pl.name}`}
                          title="Merge another playlist into this pack"
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileSidebarOpen(false);
                            setImportTargetId(pl.id);
                            setImportOpen(true);
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-cyanNeon-300 hover:bg-cyanNeon-500/15 transition cursor-pointer"
                        >
                          <Plus size={13} aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          aria-label={`Remove ${pl.name}`}
                          title="Remove playlist"
                          onClick={(e) => handleDeleteCustomPlaylist(e, pl.id)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition cursor-pointer"
                        >
                          <Trash2 size={13} aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </nav>
            </div>
          )}

          {/* Built-In Categories Section */}
          <div>
            <div className="sidebar-collapsible-text flex items-center justify-between px-1.5 mb-2">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.14em] text-slate-500">
                Categories
              </span>
              <span className="text-[10px] font-mono text-slate-600">
                {CATEGORIES.length} PACKS
              </span>
            </div>

            <nav className="flex flex-col gap-1" aria-label="Music Categories">
              {CATEGORIES.map((cat) => {
                const isActive = cat.id === category;
                const count = categoryCounts[cat.id];
                return (
                  <button
                    key={cat.id}
                    type="button"
                    aria-pressed={isActive}
                    title={`${cat.name} (${count} tracks)`}
                    onClick={() => handlePackChange(cat.id)}
                    className={`sidebar-cat-btn w-full text-left px-3 py-2 rounded-xl transition-all flex items-center justify-between gap-2 group relative cursor-pointer ${
                      isActive
                        ? 'bg-cyanNeon-500/[0.12] border border-cyanNeon-400/40 text-white shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]'
                        : 'border border-transparent hover:bg-white/[0.04] text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center font-mono text-[10px] font-bold tracking-tight transition-all ${
                          isActive
                            ? 'bg-cyanNeon-500/20 text-cyanNeon-300 border border-cyanNeon-400/50 shadow-[0_0_12px_rgba(6,182,212,0.28)]'
                            : 'bg-white/[0.04] text-slate-400 border border-white/[0.06] group-hover:text-white group-hover:border-white/15'
                        }`}
                      >
                        {cat.shortTag}
                      </div>
                      <div className="sidebar-collapsible-text truncate">
                        <div
                          className={`text-xs font-semibold truncate ${
                            isActive ? 'text-white' : 'text-slate-300'
                          }`}
                        >
                          {cat.name}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {cat.subtitle} &middot; {count} tracks
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom Sidebar Status Card & Keyboard Shortcuts */}
        <div className="sidebar-footer-card pt-3 border-t border-white/[0.07] flex flex-col gap-2">
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-xs font-semibold text-white truncate">
                {activePackName}
              </span>
              <span className="text-[11px] font-mono text-cyanNeon-400 shrink-0">
                {activeCount} tracks
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {activePackDesc}
            </p>
            {activeCustom && (
              <button
                type="button"
                onClick={() => openManagePack(activeCustom.id)}
                className="mt-2 w-full py-1.5 px-2.5 rounded-lg bg-cyanNeon-500/10 hover:bg-cyanNeon-500/20 border border-cyanNeon-400/25 text-[11px] font-semibold text-cyanNeon-300 inline-flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <SlidersHorizontal size={12} aria-hidden="true" />
                <span>Manage Tracks</span>
              </button>
            )}
          </div>

          <div className="px-1 flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 font-mono text-[10px] bg-white/[0.06] border border-white/10 rounded text-slate-300">
                Space
              </kbd>
              <span>Play</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 font-mono text-[10px] bg-white/[0.06] border border-white/10 rounded text-slate-300">
                S
              </kbd>
              <span>Skip</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 font-mono text-[10px] bg-white/[0.06] border border-white/10 rounded text-slate-300">
                [
              </kbd>
              <span>Rail</span>
            </div>
          </div>
        </div>
        </aside>
      )}

      {/* RIGHT MAIN WORKSPACE */}
      <div className="relative z-10 flex-1 flex flex-col min-h-screen lg:h-[100dvh] lg:overflow-hidden">
        {/* 2. TOP NAVIGATION BAR */}
        <header className="w-full shrink-0 px-4 sm:px-5 py-2.5 flex flex-wrap items-center justify-between gap-2.5 border-b border-white/[0.06] bg-[#0B0D14]/85 backdrop-blur-md">
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
            {appMode === 'solo' ? (
              <>
                <button
                  type="button"
                  aria-label="Open Categories"
                  onClick={() => setMobileSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-200 hover:bg-white/10 cursor-pointer"
                >
                  <Menu size={16} aria-hidden="true" />
                </button>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyanNeon-500/[0.1] border border-cyanNeon-400/30 shadow-[inset_0_0_16px_rgba(6,182,212,0.08)]">
                  <span className="w-2 h-2 rounded-full bg-cyanNeon-400 shadow-[0_0_8px_#22D3EE]" />
                  <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.11em] text-cyanNeon-300">
                    {activePackName.toUpperCase()} — {activeCount} TRACKS
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#131722] border border-white/[0.08]">
                  <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.11em] text-slate-200">
                    ROUND {roundNumber}
                  </span>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyanNeon-400 via-cyanNeon-500 to-cyanNeon-700 flex items-center justify-center border border-white/25">
                  <span className="font-display font-extrabold text-[11px] tracking-tight text-[#041318]">
                    0.1s
                  </span>
                </div>
                <span className="font-display font-extrabold text-sm tracking-tight text-white">
                  SurSnap
                </span>
              </div>
            )}

            {/* Mode Switcher */}
            <div
              role="group"
              aria-label="Game mode"
              className="inline-flex items-center p-0.5 rounded-xl bg-[#131722] border border-white/[0.08]"
            >
              <button
                type="button"
                aria-pressed={appMode === 'solo'}
                onClick={() => switchAppMode('solo')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition cursor-pointer ${
                  appMode === 'solo'
                    ? 'bg-cyanNeon-500/20 text-cyanNeon-200 border border-cyanNeon-400/40'
                    : 'text-slate-400 hover:text-white border border-transparent'
                }`}
              >
                <Radio size={13} aria-hidden="true" />
                <span>Solo</span>
              </button>
              <button
                type="button"
                aria-pressed={appMode === 'multiplayer'}
                onClick={() => switchAppMode('multiplayer')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition cursor-pointer ${
                  appMode === 'multiplayer'
                    ? 'bg-cyanNeon-500/20 text-cyanNeon-200 border border-cyanNeon-400/40'
                    : 'text-slate-400 hover:text-white border border-transparent'
                }`}
              >
                <Users size={13} aria-hidden="true" />
                <span>Live Rooms</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2.5 ml-auto">
            {appMode === 'solo' && (
              <div
                className="px-3.5 py-1.5 rounded-xl bg-[#131722] border border-white/[0.08] flex items-center gap-3.5 shadow-md"
                aria-label="Session score and streak"
              >
                <div className="flex items-center gap-1.5" title="Current Streak">
                  <Flame
                    size={15}
                    className="text-cyanNeon-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                    aria-hidden="true"
                  />
                  <span className="font-mono font-bold text-xs sm:text-sm text-white">
                    {stats.streak}
                  </span>
                </div>

                <div className="w-px h-3.5 bg-white/10" />

                <div className="flex items-center gap-1.5" title="Total Points">
                  <Award
                    size={15}
                    className="text-cyanNeon-300"
                    aria-hidden="true"
                  />
                  <span className="font-mono font-bold text-xs sm:text-sm text-white">
                    {stats.points}{' '}
                    <span className="text-slate-400 font-normal">pts</span>
                  </span>
                </div>
              </div>
            )}

            <button
              type="button"
              aria-label="How to Play"
              onClick={() => setHelpOpen(true)}
              className="w-9 h-9 rounded-xl bg-[#131722] hover:bg-cyanNeon-500/15 border border-white/[0.09] hover:border-cyanNeon-400/35 flex items-center justify-center text-slate-300 hover:text-cyanNeon-300 transition active:scale-95 cursor-pointer"
            >
              <HelpCircle size={17} aria-hidden="true" />
            </button>
          </div>
        </header>

        {/* 3. FULL-BLEED WORKSPACE STAGE */}
        <main
          className={`flex-1 flex flex-col p-3 sm:p-4 lg:p-4 overflow-y-auto ${
            appMode === 'solo' ? 'lg:overflow-visible' : 'lg:overflow-y-auto'
          }`}
        >
          <div className="w-full max-w-[1360px] mx-auto flex-1 rounded-2xl bg-gradient-to-b from-[#111520]/95 to-[#0C0F17]/98 border border-white/[0.08] shadow-[0_24px_64px_-16px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.06)] px-4 sm:px-8 lg:px-10 pt-4 sm:pt-5 pb-4 flex flex-col justify-start relative">
            <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-cyanNeon-400/50 to-transparent" />

            {appMode === 'multiplayer' ? (
              mpRoom ? (
                <MultiplayerRoomView
                  room={mpRoom}
                  myPlayerId={mpPlayerId}
                  clockOffsetMs={mpClockOffsetMs}
                  customPlaylists={customPlaylists}
                  feedback={mpFeedback}
                  errorMessage={mpError}
                  audioEngine={mpEngine}
                  onUpdateSettings={(settings, customTracks) =>
                    getMpClient().updateSettings(settings, customTracks)
                  }
                  onStartMatch={() => getMpClient().startMatch()}
                  onRoundReady={(roundIdx) => getMpClient().markRoundReady(roundIdx)}
                  onSubmitGuess={(roundIdx, suggestion) =>
                    getMpClient().submitGuess(roundIdx, {
                      id: suggestion.id,
                      title: suggestion.title,
                      trackName: suggestion.trackName,
                      artistName: suggestion.artistName,
                    })
                  }
                  onSkipStep={(roundIdx) => getMpClient().skipStep(roundIdx)}
                  onBuzzIn={(roundIdx) => getMpClient().buzzIn(roundIdx)}
                  onNextRound={() => getMpClient().nextRound()}
                  onPlayAgain={() => getMpClient().playAgain()}
                  onLeaveRoom={handleMpLeaveRoom}
                />
              ) : (
                <MultiplayerLobby
                  customPlaylists={customPlaylists}
                  initialCode={initialRoomParam}
                  initialNickname={savedMpSession?.nickname ?? ''}
                  busy={mpBusy}
                  errorMessage={mpError}
                  onClearError={() => setMpError(null)}
                  onCreateRoom={handleMpCreateRoom}
                  onJoinRoom={handleMpJoinRoom}
                />
              )
            ) : (
              <>

            {importNotice && (
              <div className="w-full max-w-[960px] mx-auto mb-3 px-3.5 py-2 rounded-xl bg-cyanNeon-500/[0.1] border border-cyanNeon-400/30 flex items-center justify-between gap-3 text-xs text-cyanNeon-300">
                <span>{importNotice}</span>
                <button
                  type="button"
                  aria-label="Dismiss notice"
                  onClick={() => setImportNotice(null)}
                  className="text-cyanNeon-300/80 hover:text-white p-0.5 rounded cursor-pointer"
                >
                  <X size={14} aria-hidden="true" />
                </button>
              </div>
            )}

            <AudioPlayerCard
              phase={phase}
              attemptIndex={attemptIndex}
              selectedStep={selectedStep}
              guesses={guesses}
              isPlaying={isPlaying}
              elapsedSec={elapsedSec}
              errorMessage={errorMessage}
              onSelectStep={handleSelectStepTile}
              onTogglePlay={handleTogglePlay}
              onSkip={handleSkip}
              onGiveUp={handleGiveUp}
              onRetry={handleNextSong}
            />

            <GuessInput
              catalog={searchCatalog}
              extras={EXTRA_AUTOCOMPLETE_SONGS}
              activeCategory={category}
              disabled={phase !== 'playing'}
              inputRef={searchInputRef}
              onSelectGuess={handleSelectGuess}
            />

            {(phase === 'won' || phase === 'lost') && (
              <section
                aria-label="Round result"
                className={`w-full max-w-[960px] mx-auto mt-4 rounded-2xl p-4 shadow-xl transition-all border ${
                  phase === 'won'
                    ? 'bg-[#111924] border-cyanNeon-400/40'
                    : 'bg-[#1B1419] border-rose-500/35'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    {displayArt ? (
                      <img
                        src={displayArt}
                        alt={`${displayTitle} album cover`}
                        className="w-14 h-14 rounded-xl object-cover shrink-0 border border-white/10"
                      />
                    ) : (
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-lg shrink-0 border ${
                          phase === 'won'
                            ? 'bg-cyanNeon-500/20 border-cyanNeon-400/45 text-cyanNeon-300'
                            : 'bg-rose-500/15 border-rose-500/35 text-rose-400'
                        }`}
                      >
                        {phase === 'won' ? (
                          <Check size={20} aria-hidden="true" />
                        ) : (
                          <X size={20} aria-hidden="true" />
                        )}
                      </div>
                    )}

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider border ${
                            phase === 'won'
                              ? 'bg-cyanNeon-500/15 text-cyanNeon-300 border-cyanNeon-400/30'
                              : 'bg-rose-500/15 text-rose-400 border-rose-500/30'
                          }`}
                        >
                          {phase === 'won'
                            ? `SOLVED IN ${ATTEMPT_DURATIONS[guesses.length - 1] ?? 0.1}S`
                            : guesses.length >= ATTEMPT_DURATIONS.length
                              ? 'OUT OF SNIPPETS'
                              : 'TRACK REVEALED'}
                        </span>
                        {phase === 'won' && (
                          <span className="font-mono text-xs text-cyanNeon-300 font-bold">
                            +{earnedPoints} pts
                          </span>
                        )}
                      </div>
                      <h2 className="font-display font-bold text-lg text-white mt-1 truncate">
                        {displayTitle}
                      </h2>
                      <p className="text-xs text-slate-400 truncate">
                        {displayArtist}
                        {displayAlbum ? ` • ${displayAlbum}` : ''}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
                    {resolvedPreview?.appleMusicUrl && (
                      <a
                        href={resolvedPreview.appleMusicUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 transition"
                      >
                        <span>Apple Music</span>
                        <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={handleNextSong}
                      className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-cyanNeon-500 hover:bg-cyanNeon-400 text-[#031419] font-bold text-xs sm:text-sm shadow-lg active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Next Track</span>
                      <ArrowRight size={16} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </section>
            )}

            <div className="visually-hidden" aria-live="polite">
              {liveAnnouncement}
            </div>
              </>
            )}
          </div>
        </main>
      </div>

      <HelpDialog open={helpOpen} onClose={() => setHelpOpen(false)} />
      <ImportPlaylistDialog
        open={importOpen}
        existingPlaylists={customPlaylists}
        initialTargetId={importTargetId}
        onClose={() => {
          setImportOpen(false);
          setImportTargetId(null);
        }}
        onImported={handleImportedPlaylist}
      />
      {manageTargetPack && (
        <ManagePackDialog
          key={`${manageTargetPack.id}-${manageSessionKey}`}
          pack={manageTargetPack}
          onClose={() => setManagePackId(null)}
          onSave={handleSaveManagedPack}
        />
      )}
    </div>
  );
}

export default App;
