import { useEffect, useId, useMemo, useRef, useState } from 'react';
import {
  CheckSquare,
  ListMusic,
  Music,
  Search,
  Square,
  Trash2,
  X,
} from 'lucide-react';
import type { CatalogTrack, CustomPlaylist } from '../types/game';
import { normalizeText } from '../utils/matching';

interface ManagePackDialogProps {
  pack: CustomPlaylist;
  onClose: () => void;
  onSave: (updated: CustomPlaylist) => void;
}

export function ManagePackDialog({
  pack,
  onClose,
  onSave,
}: ManagePackDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const nameInputId = useId();
  const filterInputId = useId();
  const checkboxPrefix = useId();

  const [packName, setPackName] = useState(pack.name);
  const [tracks, setTracks] = useState<CatalogTrack[]>(pack.tracks);
  const [disabledSet, setDisabledSet] = useState<Set<number>>(
    () => new Set(pack.disabledIds ?? []),
  );
  const [filterQuery, setFilterQuery] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
  }, []);

  // Fallback light-dismiss for browsers without <dialog closedby="any"> support
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if ('closedBy' in HTMLDialogElement.prototype) return;

    let pressedOutside = false;
    const isOutside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      );
    };

    const onPointerDown = (e: PointerEvent) => {
      pressedOutside = isOutside(e);
    };
    const onPointerUp = (e: PointerEvent) => {
      if (pressedOutside && isOutside(e)) {
        dialog.close();
      }
      pressedOutside = false;
    };

    dialog.addEventListener('pointerdown', onPointerDown);
    dialog.addEventListener('pointerup', onPointerUp);
    return () => {
      dialog.removeEventListener('pointerdown', onPointerDown);
      dialog.removeEventListener('pointerup', onPointerUp);
    };
  }, []);

  const filteredTracks = useMemo(() => {
    const q = normalizeText(filterQuery);
    if (!q) return tracks;
    return tracks.filter((t) => {
      const hay = normalizeText(`${t.title} ${t.trackName} ${t.artistName}`);
      return hay.includes(q);
    });
  }, [filterQuery, tracks]);

  const activeCount = useMemo(
    () => tracks.filter((t) => !disabledSet.has(t.id)).length,
    [disabledSet, tracks],
  );
  const mutedCount = tracks.length - activeCount;

  const toggleTrack = (trackId: number) => {
    setValidationError(null);
    setDisabledSet((prev) => {
      const next = new Set(prev);
      if (next.has(trackId)) {
        next.delete(trackId);
      } else {
        next.add(trackId);
      }
      return next;
    });
  };

  const handleSelectAllVisible = () => {
    setValidationError(null);
    setDisabledSet((prev) => {
      const next = new Set(prev);
      for (const t of filteredTracks) {
        next.delete(t.id);
      }
      return next;
    });
  };

  const handleDeselectAllVisible = () => {
    setValidationError(null);
    setDisabledSet((prev) => {
      const next = new Set(prev);
      for (const t of filteredTracks) {
        next.add(t.id);
      }
      return next;
    });
  };

  const handleRemoveSingle = (trackId: number) => {
    setValidationError(null);
    setTracks((prev) => prev.filter((t) => t.id !== trackId));
    setDisabledSet((prev) => {
      if (!prev.has(trackId)) return prev;
      const next = new Set(prev);
      next.delete(trackId);
      return next;
    });
  };

  const handleRemoveUnchecked = () => {
    setValidationError(null);
    setTracks((prev) => prev.filter((t) => !disabledSet.has(t.id)));
    setDisabledSet(new Set());
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = packName.trim();
    if (!trimmedName) {
      setValidationError('Pack name cannot be empty.');
      return;
    }
    if (tracks.length === 0) {
      setValidationError('Keep at least 1 track in the pack (or delete the pack from the sidebar).');
      return;
    }
    if (activeCount === 0) {
      setValidationError('Select at least 1 active song so rounds have something to play.');
      return;
    }

    onSave({
      ...pack,
      name: trimmedName,
      tracks,
      disabledIds: Array.from(disabledSet),
    });
    dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className="sursnap-dialog sursnap-dialog--wide"
      aria-labelledby="manage-pack-title"
      {...({ closedby: 'any' } as Record<string, string>)}
      onClose={() => {
        if (dialogRef.current) {
          dialogRef.current.returnValue = '';
        }
        onClose();
      }}
    >
      <div className="w-full rounded-3xl bg-[#111520] p-5 sm:p-6 border border-cyanNeon-400/20 shadow-2xl text-[#F4F5F8] flex flex-col max-h-[86dvh]">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-4 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-cyanNeon-500/15 border border-cyanNeon-400/35 flex items-center justify-center text-cyanNeon-300">
              <ListMusic size={16} aria-hidden="true" />
            </span>
            <div>
              <h1 id="manage-pack-title" className="font-display font-bold text-lg text-white leading-tight">
                Manage Pack
              </h1>
              <p className="text-[11px] font-mono text-slate-400">
                {activeCount} active &middot; {mutedCount} muted &middot; {tracks.length} total
              </p>
            </div>
          </div>

          <form method="dialog">
            <button
              type="submit"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition cursor-pointer"
              aria-label="Close pack manager"
              value="close"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </form>
        </div>

        <form onSubmit={handleSave} className="flex flex-col min-h-0 flex-1 gap-3">
          {/* Rename Pack */}
          <div className="shrink-0">
            <label
              htmlFor={nameInputId}
              className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1"
            >
              Pack Name
            </label>
            <input
              id={nameInputId}
              type="text"
              value={packName}
              onChange={(e) => {
                setValidationError(null);
                setPackName(e.target.value);
              }}
              className="w-full px-3.5 py-2 rounded-xl bg-[#0A0C12] border border-white/[0.1] focus:border-cyanNeon-400/60 text-sm text-white outline-none transition"
            />
          </div>

          {/* Filter & Bulk Controls */}
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <div className="relative flex-1">
              <label htmlFor={filterInputId} className="visually-hidden">
                Filter songs in this pack
              </label>
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id={filterInputId}
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder={`Filter ${tracks.length} songs by title or artist...`}
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#0A0C12] border border-white/[0.1] focus:border-cyanNeon-400/60 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition"
              />
              {filterQuery && (
                <button
                  type="button"
                  aria-label="Clear filter"
                  onClick={() => setFilterQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5 cursor-pointer"
                >
                  <X size={13} aria-hidden="true" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={handleSelectAllVisible}
                className="px-2.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-[11px] font-semibold text-slate-200 inline-flex items-center gap-1.5 transition cursor-pointer"
              >
                <CheckSquare size={13} className="text-cyanNeon-400" aria-hidden="true" />
                <span>Select All</span>
              </button>
              <button
                type="button"
                onClick={handleDeselectAllVisible}
                className="px-2.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-[11px] font-semibold text-slate-300 inline-flex items-center gap-1.5 transition cursor-pointer"
              >
                <Square size={13} className="text-slate-400" aria-hidden="true" />
                <span>Deselect All</span>
              </button>
              {mutedCount > 0 && (
                <button
                  type="button"
                  onClick={handleRemoveUnchecked}
                  title="Permanently remove all unchecked songs"
                  className="px-2.5 py-2 rounded-xl bg-rose-500/12 hover:bg-rose-500/20 border border-rose-500/35 text-[11px] font-semibold text-rose-300 inline-flex items-center gap-1 transition cursor-pointer"
                >
                  <Trash2 size={13} aria-hidden="true" />
                  <span>Remove Muted ({mutedCount})</span>
                </button>
              )}
            </div>
          </div>

          {/* Track List */}
          <ul
            aria-label="Tracks in pack"
            className="flex-1 min-h-[180px] overflow-y-auto custom-scroll rounded-2xl bg-[#0A0C12]/80 border border-white/[0.07] p-1.5 divide-y divide-white/[0.04]"
          >
            {filteredTracks.length === 0 ? (
              <li className="py-8 text-center text-xs text-slate-500">
                No tracks match &ldquo;{filterQuery}&rdquo;.
              </li>
            ) : (
              filteredTracks.map((track) => {
                const isEnabled = !disabledSet.has(track.id);
                const cbId = `${checkboxPrefix}-${track.id}`;
                return (
                  <li
                    key={track.id}
                    className={`flex items-center justify-between gap-2.5 px-2.5 py-2 rounded-xl transition ${
                      isEnabled ? 'hover:bg-white/[0.04]' : 'opacity-55 hover:bg-white/[0.03]'
                    }`}
                  >
                    <label
                      htmlFor={cbId}
                      className="flex items-center gap-2.5 min-w-0 flex-1 cursor-pointer"
                    >
                      <input
                        id={cbId}
                        type="checkbox"
                        checked={isEnabled}
                        onChange={() => toggleTrack(track.id)}
                        className="w-4 h-4 rounded shrink-0 cursor-pointer"
                      />

                      {track.artworkUrl ? (
                        <img
                          src={track.artworkUrl}
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

                      <div className="min-w-0 flex flex-col">
                        <span
                          className={`text-xs font-semibold truncate ${
                            isEnabled ? 'text-white' : 'text-slate-400 line-through'
                          }`}
                        >
                          {track.title}
                        </span>
                        <span className="text-[11px] text-slate-400 truncate">
                          {track.artistName}
                        </span>
                      </div>
                    </label>

                    <button
                      type="button"
                      aria-label={`Remove ${track.title} from pack`}
                      title="Remove from pack"
                      onClick={() => handleRemoveSingle(track.id)}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition shrink-0 cursor-pointer"
                    >
                      <Trash2 size={14} aria-hidden="true" />
                    </button>
                  </li>
                );
              })
            )}
          </ul>

          {validationError && (
            <p
              role="alert"
              className="rounded-xl bg-rose-500/10 border border-rose-500/30 px-3 py-2 text-xs text-rose-300 shrink-0"
            >
              {validationError}
            </p>
          )}

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-2.5 pt-1 shrink-0">
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 text-xs sm:text-sm font-semibold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-cyanNeon-500 hover:bg-cyanNeon-400 text-[#031419] font-bold text-xs sm:text-sm transition cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
