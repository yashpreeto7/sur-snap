/**
 * Sample-accurate Web Audio API engine for playing sub-second snippets (0.1s+)
 * and full 30-second iTunes previews without HTMLAudioElement start-latency jitter.
 */
export class AudioEngine {
  private ctx: AudioContext | null = null;
  private source: AudioBufferSourceNode | null = null;
  private gain: GainNode | null = null;
  private rafId: number | null = null;
  private cachedBuffers = new Map<string, AudioBuffer>();

  private ensureContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }
    return this.ctx;
  }

  async loadBuffer(previewUrl: string, signal?: AbortSignal): Promise<AudioBuffer> {
    const existing = this.cachedBuffers.get(previewUrl);
    if (existing) return existing;

    const ctx = this.ensureContext();
    const resp = await fetch(previewUrl, { signal });
    if (!resp.ok) {
      throw new Error(`Audio download failed (${resp.status})`);
    }
    const arrayBuffer = await resp.arrayBuffer();
    const audioBuffer = await ctx.decodeAudioData(arrayBuffer);

    // Keep cache bounded to recent tracks
    if (this.cachedBuffers.size > 15) {
      const oldestKey = this.cachedBuffers.keys().next().value;
      if (oldestKey) this.cachedBuffers.delete(oldestKey);
    }
    this.cachedBuffers.set(previewUrl, audioBuffer);
    return audioBuffer;
  }

  async playSnippet(
    buffer: AudioBuffer,
    durationSec: number,
    onProgress: (elapsedSec: number) => void,
    onEnded: () => void,
  ): Promise<void> {
    this.stop();

    const ctx = this.ensureContext();
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }

    const playDuration = Math.min(durationSec, buffer.duration);
    const source = ctx.createBufferSource();
    source.buffer = buffer;

    const gain = ctx.createGain();
    const now = ctx.currentTime;
    const endTime = now + playDuration;
    const fadeSec = Math.min(0.008, playDuration * 0.15);

    gain.gain.setValueAtTime(1, now);
    gain.gain.setValueAtTime(1, Math.max(now, endTime - fadeSec));
    gain.gain.linearRampToValueAtTime(0, endTime);

    source.connect(gain);
    gain.connect(ctx.destination);

    this.source = source;
    this.gain = gain;

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      if (this.rafId !== null) {
        cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
      if (this.source === source) {
        this.source = null;
        this.gain = null;
      }
      onProgress(0);
      onEnded();
    };

    source.onended = finish;
    source.start(now, 0, playDuration);

    const tick = () => {
      if (finished) return;
      const elapsed = Math.min(playDuration, Math.max(0, ctx.currentTime - now));
      onProgress(elapsed);
      if (elapsed < playDuration) {
        this.rafId = requestAnimationFrame(tick);
      }
    };
    this.rafId = requestAnimationFrame(tick);
  }

  stop(): void {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.source) {
      this.source.onended = null;
      try {
        this.source.stop();
      } catch {
        // Ignore if already stopped
      }
      this.source.disconnect();
      this.source = null;
    }
    if (this.gain) {
      this.gain.disconnect();
      this.gain = null;
    }
  }

  dispose(): void {
    this.stop();
    if (this.ctx) {
      void this.ctx.close();
      this.ctx = null;
    }
  }
}
