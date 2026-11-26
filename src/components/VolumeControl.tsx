import { useId } from 'react';
import { Volume1, Volume2, VolumeX } from 'lucide-react';

interface VolumeControlProps {
  volumePercent: number;
  muted: boolean;
  onChangeVolume: (nextPercent: number) => void;
  onToggleMute: () => void;
}

export function VolumeControl({
  volumePercent,
  muted,
  onChangeVolume,
  onToggleMute,
}: VolumeControlProps) {
  const sliderId = useId();
  const effectivePercent = muted ? 0 : volumePercent;
  const Icon =
    effectivePercent === 0 ? VolumeX : effectivePercent < 50 ? Volume1 : Volume2;

  return (
    <div
      className="px-2.5 py-1 rounded-xl bg-[#131722] border border-white/[0.08] flex items-center gap-2 shadow-md"
      aria-label="Audio volume"
    >
      <button
        type="button"
        onClick={onToggleMute}
        aria-pressed={muted}
        aria-label={muted ? 'Unmute audio' : 'Mute audio'}
        title={muted ? 'Unmute' : 'Mute'}
        className="w-7 h-7 rounded-lg hover:bg-white/[0.07] flex items-center justify-center text-slate-300 hover:text-cyanNeon-300 transition shrink-0 cursor-pointer"
      >
        <Icon
          size={15}
          className={effectivePercent === 0 ? 'text-rose-400' : 'text-cyanNeon-300'}
          aria-hidden="true"
        />
      </button>

      <label htmlFor={sliderId} className="visually-hidden">
        Audio volume percentage
      </label>
      <input
        id={sliderId}
        type="range"
        min={0}
        max={100}
        step={1}
        value={effectivePercent}
        aria-valuetext={muted || effectivePercent === 0 ? 'Muted' : `${effectivePercent}%`}
        style={
          {
            '--attr-min': '0',
            '--attr-max': '100',
            '--control-value': String(effectivePercent),
          } as React.CSSProperties
        }
        onChange={(e) => onChangeVolume(Number(e.target.value))}
        className="sursnap-slider w-16 sm:w-20"
      />

      <span className="hidden sm:inline-block w-8 text-right font-mono text-[11px] font-semibold text-slate-300 tabular-nums">
        {muted || effectivePercent === 0 ? 'Mute' : `${effectivePercent}%`}
      </span>
    </div>
  );
}
