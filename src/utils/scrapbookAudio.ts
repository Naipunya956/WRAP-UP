// Procedural Web Audio soundscape generating whisper-quiet archival paper
// rustling and faint pen/pencil scratching on cotton paper—no external audio files needed.

class ScrapbookAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;
  private ambientSource: AudioBufferSourceNode | null = null;
  private rustleTimer: number | null = null;
  private scratchTimer: number | null = null;
  private isPlaying = false;
  private isMuted = false;
  private listeners = new Set<() => void>();

  constructor() {
    try {
      this.isMuted = sessionStorage.getItem('wrapup_sound_muted') === 'true';
    } catch {
      this.isMuted = false;
    }
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn());
  }

  getState() {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
    };
  }

  private ensureContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return null;

    if (!this.ctx) {
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
      this.noiseBuffer = this.createPinkNoiseBuffer(this.ctx, 4);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {
        // Ignore if called outside user gesture
      });
    }

    return this.ctx;
  }

  // Generate warm pink-weighted noise buffer for organic paper & nib textures
  private createPinkNoiseBuffer(ctx: AudioContext, seconds: number): AudioBuffer {
    const length = ctx.sampleRate * seconds;
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const output = buffer.getChannelData(0);

    let b0 = 0;
    let b1 = 0;
    let b2 = 0;
    let b3 = 0;
    let b4 = 0;
    let b5 = 0;
    let b6 = 0;

    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      const pink = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.09;
      b6 = white * 0.115926;
      output[i] = Math.max(-1, Math.min(1, pink));
    }

    return buffer;
  }

  startAmbience() {
    if (this.isMuted) {
      this.isPlaying = false;
      this.notify();
      return;
    }

    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain || !this.noiseBuffer) return;

    if (!this.ambientSource) {
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      src.loop = true;

      // Soft studio paper-room warmth
      const lowpass = ctx.createBiquadFilter();
      lowpass.type = 'lowpass';
      lowpass.frequency.setValueAtTime(950, ctx.currentTime);

      const bedGain = ctx.createGain();
      bedGain.gain.setValueAtTime(0.014, ctx.currentTime);

      src.connect(lowpass);
      lowpass.connect(bedGain);
      bedGain.connect(this.masterGain);
      src.start();
      this.ambientSource = src;
    }

    const now = ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(0.55, now + 1.4);

    if (!this.isPlaying) {
      this.isPlaying = true;
      this.scheduleNextRustle();
      this.scheduleNextScratch();
    }

    this.notify();
  }

  stopAmbience() {
    if (this.rustleTimer !== null) {
      window.clearTimeout(this.rustleTimer);
      this.rustleTimer = null;
    }
    if (this.scratchTimer !== null) {
      window.clearTimeout(this.scratchTimer);
      this.scratchTimer = null;
    }

    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(0, now + 0.35);
    }

    this.isPlaying = false;
    this.notify();
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    try {
      sessionStorage.setItem('wrapup_sound_muted', String(this.isMuted));
    } catch {
      // Ignore storage errors
    }

    if (this.isMuted) {
      this.stopAmbience();
    } else {
      this.startAmbience();
      this.playPaperSlide(0.5);
    }
    this.notify();
  }

  // Faint, organic shifting paper rustle
  private triggerPaperRustle(intensity = 1) {
    if (this.isMuted || !this.ctx || !this.masterGain || !this.noiseBuffer) {
      return;
    }
    if (this.ctx.state !== 'running') return;

    const now = this.ctx.currentTime;
    const duration = 0.45 + Math.random() * 0.45;

    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.playbackRate.setValueAtTime(0.85 + Math.random() * 0.35, now);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    const startFreq = 1100 + Math.random() * 700;
    filter.frequency.setValueAtTime(startFreq, now);
    filter.frequency.exponentialRampToValueAtTime(
      startFreq + 900,
      now + duration * 0.6
    );
    filter.Q.setValueAtTime(1.4, now);

    const gain = this.ctx.createGain();
    const peak = (0.045 + Math.random() * 0.03) * intensity;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(peak, now + duration * 0.25);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    const offset = Math.random() * 2.5;
    src.start(now, offset, duration);
  }

  // Faint nib/pencil scratching micro-strokes on textured cotton paper
  private triggerLightScratch() {
    if (this.isMuted || !this.ctx || !this.masterGain || !this.noiseBuffer) {
      return;
    }
    if (this.ctx.state !== 'running') return;

    const strokes = 2 + Math.floor(Math.random() * 3);
    const baseTime = this.ctx.currentTime;

    for (let i = 0; i < strokes; i++) {
      const start = baseTime + i * (0.09 + Math.random() * 0.06);
      const duration = 0.055 + Math.random() * 0.045;

      const src = this.ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      src.playbackRate.setValueAtTime(1.15 + Math.random() * 0.4, start);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2600 + Math.random() * 1400, start);
      filter.Q.setValueAtTime(2.6, start);

      const gain = this.ctx.createGain();
      const peak = 0.025 + Math.random() * 0.02;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.linearRampToValueAtTime(peak, start + duration * 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

      src.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      src.start(start, Math.random() * 3, duration);
    }
  }

  // Tactile paper turn cue for page transitions & polaroid shuffles
  playPaperSlide(intensity = 0.85) {
    if (this.isMuted) return;
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain || !this.noiseBuffer) return;

    const now = ctx.currentTime;
    if (this.masterGain.gain.value < 0.1) {
      this.masterGain.gain.setValueAtTime(0.55, now);
    }
    this.triggerPaperRustle(intensity);
  }

  private scheduleNextRustle() {
    if (!this.isPlaying || this.isMuted) return;
    const delay = 3600 + Math.random() * 4800;
    this.rustleTimer = window.setTimeout(() => {
      this.triggerPaperRustle(0.9);
      this.scheduleNextRustle();
    }, delay);
  }

  private scheduleNextScratch() {
    if (!this.isPlaying || this.isMuted) return;
    const delay = 4800 + Math.random() * 6200;
    this.scratchTimer = window.setTimeout(() => {
      this.triggerLightScratch();
      this.scheduleNextScratch();
    }, delay);
  }
}

export const scrapbookAudio = new ScrapbookAudioEngine();
