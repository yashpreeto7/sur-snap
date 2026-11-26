import { useEffect, useId, useRef, useState } from 'react';
import { Link2, Loader2, Sparkles, X } from 'lucide-react';
import {
  importAndResolvePlaylist,
  type ImportProgress,
} from '../services/playlistImportClient';
import type { CustomPlaylist } from '../types/game';

interface ImportPlaylistDialogProps {
  open: boolean;
  existingPlaylists: CustomPlaylist[];
  initialTargetId: string | null;
  onClose: () => void;
  onImported: (playlist: CustomPlaylist, mergeIntoId: string | null) => void;
}

export function ImportPlaylistDialog({
  open,
  existingPlaylists,
  initialTargetId,
  onClose,
  onImported,
}: ImportPlaylistDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const urlInputId = useId();
  const targetSelectId = useId();
  const nameInputId = useId();
  const abortRef = useRef<AbortController | null>(null);

  const [url, setUrl] = useState('');
  const [customName, setCustomName] = useState('');
  const [selectedTarget, setSelectedTarget] = useState<string>('__new__');
  const [isImporting, setIsImporting] = useState(false);
  const [progress, setProgress] = useState<ImportProgress | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // Sync destination when dialog is opened for a specific pack
  const resolvedTarget =
    selectedTarget !== '__new__' &&
    existingPlaylists.some((p) => p.id === selectedTarget)
      ? selectedTarget
      : initialTargetId &&
          existingPlaylists.some((p) => p.id === initialTargetId)
        ? initialTargetId
        : '__new__';

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
      if (pressedOutside && isOutside(e) && !isImporting) {
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
  }, [isImporting]);

  const handleCancelImport = () => {
    abortRef.current?.abort();
    abortRef.current = null;
    setIsImporting(false);
    setProgress(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || isImporting) return;

    setError(null);
    setIsImporting(true);
    const controller = new AbortController();
    abortRef.current = controller;

    const mergeIntoId = resolvedTarget === '__new__' ? null : resolvedTarget;

    try {
      const playlist = await importAndResolvePlaylist(
        url.trim(),
        mergeIntoId ? '' : customName,
        (prog) => setProgress(prog),
        controller.signal,
      );
      setUrl('');
      setCustomName('');
      setSelectedTarget('__new__');
      setProgress(null);
      setIsImporting(false);
      onImported(playlist, mergeIntoId);
      dialogRef.current?.close();
    } catch (err) {
      if (controller.signal.aborted) return;
      setIsImporting(false);
      setProgress(null);
      setError(
        err instanceof Error ? err.message : 'Unable to import playlist.',
      );
    }
  };

  const targetPack = existingPlaylists.find((p) => p.id === resolvedTarget);

  return (
    <dialog
      ref={dialogRef}
      className="sursnap-dialog"
      aria-labelledby="import-dialog-title"
      {...({ closedby: isImporting ? 'none' : 'any' } as Record<string, string>)}
      onClose={() => {
        handleCancelImport();
        setSelectedTarget('__new__');
        setError(null);
        if (dialogRef.current) {
          dialogRef.current.returnValue = '';
        }
        onClose();
      }}
    >
      <div className="w-full rounded-3xl bg-[#111520] p-6 border border-cyanNeon-400/20 shadow-2xl text-[#F4F5F8]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-cyanNeon-500/15 border border-cyanNeon-400/35 flex items-center justify-center text-cyanNeon-300">
              <Link2 size={15} aria-hidden="true" />
            </span>
            <h1 id="import-dialog-title" className="font-display font-bold text-lg text-white">
              {targetPack ? `Add Songs to ${targetPack.name}` : 'Import Playlist Link'}
            </h1>
          </div>

          <form method="dialog">
            <button
              type="submit"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition cursor-pointer"
              aria-label="Close import modal"
              value="close"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </form>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed mb-4">
          Paste any public <strong className="text-slate-200">YouTube / YT Music</strong>{' '}
          (supports 500–1,000+ songs),{' '}
          <strong className="text-slate-200">Apple Music</strong>, or{' '}
          <strong className="text-slate-200">Spotify</strong> playlist link.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label
              htmlFor={urlInputId}
              className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
            >
              Playlist URL
            </label>
            <input
              id={urlInputId}
              type="url"
              required
              autoFocus
              disabled={isImporting}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://music.youtube.com/playlist?list=... or apple.com/..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0C12] border border-white/[0.1] focus:border-cyanNeon-400/60 focus:ring-4 focus:ring-cyanNeon-500/10 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition disabled:opacity-60"
            />
          </div>

          {existingPlaylists.length > 0 && (
            <div>
              <label
                htmlFor={targetSelectId}
                className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
              >
                Destination
              </label>
              <select
                id={targetSelectId}
                disabled={isImporting}
                value={resolvedTarget}
                onChange={(e) => setSelectedTarget(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0C12] border border-white/[0.1] focus:border-cyanNeon-400/60 text-xs sm:text-sm text-white outline-none transition disabled:opacity-60"
              >
                <option value="__new__">Create a new pack</option>
                {existingPlaylists.map((pl) => (
                  <option key={pl.id} value={pl.id}>
                    Add to: {pl.name} ({pl.tracks.length} tracks)
                  </option>
                ))}
              </select>
            </div>
          )}

          {targetPack ? (
            <p className="text-[11px] text-slate-400 bg-white/[0.03] border border-white/[0.06] rounded-xl px-3 py-2">
              New tracks from this link will be merged into{' '}
              <strong className="text-slate-200">{targetPack.name}</strong> with
              duplicates automatically skipped.
            </p>
          ) : (
            <div>
              <label
                htmlFor={nameInputId}
                className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
              >
                Pack Name <span className="text-slate-600">(Optional)</span>
              </label>
              <input
                id={nameInputId}
                type="text"
                disabled={isImporting}
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                placeholder="Leave blank to use playlist title"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0C12] border border-white/[0.1] focus:border-cyanNeon-400/60 focus:ring-4 focus:ring-cyanNeon-500/10 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition disabled:opacity-60"
              />
            </div>
          )}

          {progress && (
            <div className="rounded-xl bg-white/[0.03] border border-cyanNeon-400/20 p-3 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-cyanNeon-300 font-medium flex items-center gap-2">
                  <Loader2 size={14} className="animate-spin" aria-hidden="true" />
                  {progress.stage === 'extracting'
                    ? 'Reading all playlist pages…'
                    : `Preparing tracks (${progress.matched} ready)…`}
                </span>
                {progress.total > 0 && (
                  <span className="font-mono text-[11px] text-slate-400">
                    {progress.processed}/{progress.total}
                  </span>
                )}
              </div>
              {progress.total > 0 && (
                <div className="h-1.5 w-full rounded-full bg-white/[0.08] overflow-hidden">
                  <div
                    className="h-full bg-cyanNeon-400 transition-all duration-200"
                    style={{
                      width: `${Math.min(100, (progress.processed / progress.total) * 100)}%`,
                    }}
                  />
                </div>
              )}
            </div>
          )}

          {error && (
            <p
              role="alert"
              className="rounded-xl bg-rose-500/10 border border-rose-500/30 px-3 py-2.5 text-xs text-rose-300"
            >
              {error}
            </p>
          )}

          <div className="flex items-center justify-end gap-2.5 pt-1">
            {isImporting ? (
              <button
                type="button"
                onClick={handleCancelImport}
                className="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 text-xs sm:text-sm font-semibold cursor-pointer"
              >
                Cancel
              </button>
            ) : (
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-cyanNeon-500 hover:bg-cyanNeon-400 text-[#031419] font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles size={15} aria-hidden="true" />
                <span>{targetPack ? 'Merge & Play' : 'Import & Play'}</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </dialog>
  );
}
