import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface HelpDialogProps {
  open: boolean;
  onClose: () => void;
}

export function HelpDialog({ open, onClose }: HelpDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // Fallback light-dismiss for browsers without <dialog closedby="any"> support (e.g. Safari)
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

  return (
    <dialog
      ref={dialogRef}
      className="sursnap-dialog"
      aria-labelledby="help-dialog-title"
      {...({ closedby: 'any' } as Record<string, string>)}
      onClose={() => {
        if (dialogRef.current) {
          dialogRef.current.returnValue = '';
        }
        onClose();
      }}
    >
      <div className="w-full rounded-3xl bg-[#111520] p-6 border border-cyanNeon-400/20 shadow-2xl text-[#F4F5F8]">
        <div className="flex items-center justify-between mb-4">
          <h1 id="help-dialog-title" className="font-display font-bold text-lg text-white">
            How to Play SurSnap
          </h1>
          <form method="dialog">
            <button
              type="submit"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition cursor-pointer"
              aria-label="Close help"
              value="close"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </form>
        </div>

        <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
          <p>Guess the Indian hit track in the shortest possible audio burst:</p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start gap-2.5 bg-white/[0.03] p-3 rounded-xl border border-white/[0.06]">
              <span className="px-1.5 py-0.5 rounded bg-cyanNeon-500/20 text-cyanNeon-300 font-mono font-bold shrink-0">
                1
              </span>
              <span>
                Hit the cyan <strong>Play</strong> button (or{' '}
                <kbd className="px-1 py-0.5 bg-white/10 rounded font-mono text-[10px]">
                  Space
                </kbd>
                ) to hear the active snippet starting at <strong>0.1s</strong>.
              </span>
            </li>
            <li className="flex items-start gap-2.5 bg-white/[0.03] p-3 rounded-xl border border-white/[0.06]">
              <span className="px-1.5 py-0.5 rounded bg-cyanNeon-500/20 text-cyanNeon-300 font-mono font-bold shrink-0">
                2
              </span>
              <span>
                Search the song title or artist below Play (press{' '}
                <kbd className="px-1 py-0.5 bg-white/10 rounded font-mono text-[10px]">
                  /
                </kbd>
                ) and pick your guess. <strong>Amber</strong> tiles mean you nailed
                the artist on a different song!
              </span>
            </li>
            <li className="flex items-start gap-2.5 bg-white/[0.03] p-3 rounded-xl border border-white/[0.06]">
              <span className="px-1.5 py-0.5 rounded bg-cyanNeon-500/20 text-cyanNeon-300 font-mono font-bold shrink-0">
                3
              </span>
              <span>
                Need more audio? Click <strong>Skip</strong> (or{' '}
                <kbd className="px-1 py-0.5 bg-white/10 rounded font-mono text-[10px]">
                  S
                </kbd>
                ) to unlock{' '}
                <span className="font-mono text-white">
                  1s → 3s → 7s → 15s → 30s
                </span>
                , or click <strong>Give Up</strong> to reveal the answer.
              </span>
            </li>
          </ul>
        </div>

        <form method="dialog">
          <button
            type="submit"
            autoFocus
            value="ok"
            className="mt-5 w-full py-3 rounded-xl bg-cyanNeon-500 hover:bg-cyanNeon-400 text-[#031419] font-bold text-sm transition cursor-pointer"
          >
            Got It
          </button>
        </form>
      </div>
    </dialog>
  );
}
