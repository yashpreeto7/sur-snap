import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Music, Search, X } from 'lucide-react';
import { searchIndianTracks } from '../services/itunes';
import type { CatalogTrack, SearchSuggestion } from '../types/game';
import { normalizeText } from '../utils/matching';

interface GuessInputProps {
  catalog: CatalogTrack[];
  extras?: SearchSuggestion[];
  activeCategory: string;
  roomCode?: string;
  placeholder?: string;
  disabled: boolean;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  onSelectGuess: (suggestion: SearchSuggestion) => void;
}

const MAX_SUGGESTIONS = 8;

export function GuessInput({
  catalog,
  extras = [],
  activeCategory,
  roomCode,
  placeholder = 'Search song title or artist...',
  disabled,
  inputRef: externalRef,
  onSelectGuess,
}: GuessInputProps) {
  const inputId = useId();
  const listboxId = useId();
  const [query, setQuery] = useState('');
  const [remoteResults, setRemoteResults] = useState<SearchSuggestion[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const internalRef = useRef<HTMLInputElement>(null);
  const inputRef = externalRef ?? internalRef;

  const { localMatches, totalLocalCount } = useMemo(() => {
    const q = normalizeText(query);
    if (q.length === 0) {
      return { localMatches: [] as SearchSuggestion[], totalLocalCount: 0 };
    }

    const orderedCatalog =
      activeCategory === 'all-india'
        ? catalog
        : [
            ...catalog.filter((t) => t.category === activeCategory),
            ...catalog.filter((t) => t.category !== activeCategory),
          ];

    const allLocal: SearchSuggestion[] = [
      ...orderedCatalog.map((t) => ({
        id: t.id,
        title: t.title,
        trackName: t.trackName,
        artistName: t.artistName,
        albumName: t.albumName,
        artworkUrl: t.artworkUrl,
      })),
      ...extras,
    ];

    const filtered = allLocal.filter((t) => {
      const hay = normalizeText(`${t.title} ${t.trackName} ${t.artistName} ${t.albumName}`);
      return hay.includes(q);
    });

    return {
      localMatches: filtered.slice(0, MAX_SUGGESTIONS),
      totalLocalCount: filtered.length,
    };
  }, [activeCategory, catalog, extras, query]);

  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) return;

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setIsSearching(true);
      try {
        const roomPromise: Promise<SearchSuggestion[]> = roomCode
          ? fetch(
              `/api/rooms/${encodeURIComponent(roomCode)}/suggest?q=${encodeURIComponent(trimmed)}`,
              { signal: controller.signal },
            )
              .then((r) => (r.ok ? (r.json() as Promise<{ suggestions?: SearchSuggestion[] }>) : null))
              .then((payload) => payload?.suggestions ?? [])
              .catch(() => [])
          : Promise.resolve([]);

        const [roomResults, itunesResults] = await Promise.all([
          roomPromise,
          searchIndianTracks(trimmed, controller.signal).catch(() => [] as SearchSuggestion[]),
        ]);
        setRemoteResults([...roomResults, ...itunesResults]);
      } catch {
        // Ignore aborted or rate-limited remote search errors; local matches stay instant
      } finally {
        if (!controller.signal.aborted) {
          setIsSearching(false);
        }
      }
    }, 350);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [query, roomCode]);

  const combinedSuggestions = useMemo<SearchSuggestion[]>(() => {
    const seen = new Set<string>();
    const merged: SearchSuggestion[] = [];

    for (const item of [...localMatches, ...remoteResults]) {
      const key = `${normalizeText(item.title)}::${normalizeText(item.artistName)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      merged.push(item);
      if (merged.length >= MAX_SUGGESTIONS) break;
    }

    return merged;
  }, [localMatches, remoteResults]);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  const choose = (item: SearchSuggestion) => {
    onSelectGuess(item);
    setQuery('');
    setRemoteResults([]);
    setIsSearching(false);
    setHighlightedIndex(0);
    setIsOpen(false);
  };

  const activeIndex =
    combinedSuggestions.length > 0
      ? Math.min(highlightedIndex, combinedSuggestions.length - 1)
      : 0;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen && query.trim().length >= 1 && combinedSuggestions.length > 0) {
        setIsOpen(true);
      } else if (combinedSuggestions.length > 0) {
        setHighlightedIndex((prev) => (prev + 1) % combinedSuggestions.length);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (combinedSuggestions.length > 0) {
        setHighlightedIndex((prev) =>
          prev === 0 ? combinedSuggestions.length - 1 : prev - 1,
        );
      }
    } else if (e.key === 'Enter') {
      if (isOpen && combinedSuggestions[activeIndex]) {
        e.preventDefault();
        choose(combinedSuggestions[activeIndex]);
      }
    } else if (e.key === 'Escape') {
      if (isOpen) {
        e.stopPropagation();
        setIsOpen(false);
      }
    }
  };

  const showDropdown = isOpen && query.trim().length >= 1 && !disabled;
  const totalCount = Math.max(totalLocalCount, combinedSuggestions.length);
  const remaining = Math.max(0, totalCount - combinedSuggestions.length);

  return (
    <div className="w-full max-w-[580px] mx-auto relative" ref={containerRef}>
      <label htmlFor={inputId} className="visually-hidden">
        Search song title or artist
      </label>

      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <Search
            size={15}
            className="text-slate-400 group-focus-within:text-cyanNeon-400 transition-colors"
            aria-hidden="true"
          />
        </div>

        <input
          ref={inputRef}
          id={inputId}
          type="text"
          value={query}
          disabled={disabled}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck={false}
          placeholder={placeholder}
          role="combobox"
          aria-expanded={showDropdown}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-activedescendant={
            showDropdown && combinedSuggestions[activeIndex]
              ? `${listboxId}-opt-${activeIndex}`
              : undefined
          }
          onChange={(e) => {
            const nextValue = e.target.value;
            setQuery(nextValue);
            setHighlightedIndex(0);
            if (nextValue.trim().length < 2) {
              setRemoteResults([]);
              setIsSearching(false);
            }
            setIsOpen(nextValue.trim().length >= 1);
          }}
          onFocus={() => {
            if (query.trim().length >= 1) {
              setIsOpen(true);
            }
          }}
          onKeyDown={handleKeyDown}
          className="w-full pl-10 pr-18 py-2.5 rounded-xl bg-[#0A0C12] border border-white/[0.1] focus:border-cyanNeon-400/60 focus:ring-4 focus:ring-cyanNeon-500/10 text-sm text-white placeholder-slate-500 outline-none transition-all shadow-inner disabled:opacity-50"
        />

        <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1.5">
          {isSearching && (
            <span
              className="w-3.5 h-3.5 rounded-full border-2 border-white/15 border-t-cyanNeon-400 animate-spin"
              aria-hidden="true"
            />
          )}
          {query.length > 0 && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => {
                setQuery('');
                setRemoteResults([]);
                setIsSearching(false);
                setHighlightedIndex(0);
                setIsOpen(false);
                inputRef.current?.focus();
              }}
              className="text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer"
            >
              <X size={14} aria-hidden="true" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center justify-center w-5 h-5 text-[10px] font-mono text-slate-400 bg-white/[0.05] border border-white/10 rounded-md">
            /
          </kbd>
        </div>
      </div>

      {showDropdown && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] rounded-2xl bg-[#10141F]/98 backdrop-blur-xl border border-cyanNeon-400/25 shadow-[0_24px_64px_rgba(0,0,0,0.92)] z-40 p-2">
          {combinedSuggestions.length === 0 ? (
            <div className="px-4 py-3 text-xs text-slate-400 text-center">
              {isSearching ? (
                <span>Searching Indian catalog…</span>
              ) : (
                <span>
                  No matching Indian tracks found for &ldquo;
                  <span className="text-white">{query}</span>&rdquo;
                </span>
              )}
            </div>
          ) : (
            <>
              <ul
                id={listboxId}
                role="listbox"
                aria-label="Matching songs"
                className="flex flex-col gap-0.5 max-h-[272px] overflow-y-auto custom-scroll"
              >
                {combinedSuggestions.map((song, idx) => {
                  const isHighlighted = idx === activeIndex;
                  return (
                    <li
                      key={`${song.id}-${idx}`}
                      id={`${listboxId}-opt-${idx}`}
                      role="option"
                      aria-selected={isHighlighted}
                      onMouseEnter={() => setHighlightedIndex(idx)}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        choose(song);
                      }}
                      className={`w-full px-2.5 py-1.5 rounded-xl text-left flex items-center justify-between gap-2.5 transition cursor-pointer ${
                        isHighlighted
                          ? 'bg-cyanNeon-500/15 ring-1 ring-cyanNeon-400/45'
                          : 'hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {song.artworkUrl ? (
                          <img
                            src={song.artworkUrl}
                            alt=""
                            loading="lazy"
                            className="w-8 h-8 rounded-lg object-cover shrink-0 bg-white/[0.05] border border-white/[0.08]"
                          />
                        ) : (
                          <span
                            className="w-8 h-8 rounded-lg shrink-0 bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-400"
                            aria-hidden="true"
                          >
                            <Music size={14} />
                          </span>
                        )}

                        <div className="flex flex-col min-w-0">
                          <span
                            className={`text-xs font-semibold truncate ${
                              isHighlighted ? 'text-cyanNeon-300' : 'text-white'
                            }`}
                          >
                            {song.title}
                          </span>
                          <span className="text-[11px] text-slate-400 truncate">
                            {song.artistName}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded border shrink-0 ${
                          isHighlighted
                            ? 'text-cyanNeon-300 bg-cyanNeon-500/15 border-cyanNeon-400/40 font-semibold'
                            : 'text-slate-500 bg-white/[0.03] border-white/[0.06]'
                        }`}
                      >
                        ↵
                      </span>
                    </li>
                  );
                })}
              </ul>

              {remaining > 0 && (
                <div className="mt-1 pt-1 border-t border-white/[0.06] px-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>
                    Showing {combinedSuggestions.length} of {totalCount} matches
                  </span>
                  <span>Keep typing to narrow {remaining} more</span>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
