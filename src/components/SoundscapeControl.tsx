import { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { scrapbookAudio } from '../utils/scrapbookAudio';

interface SoundscapeControlProps {
  isIntroOpen: boolean;
}

export function SoundscapeControl({ isIntroOpen }: SoundscapeControlProps) {
  const [audioState, setAudioState] = useState(() => scrapbookAudio.getState());

  useEffect(() => {
    return scrapbookAudio.subscribe(() => {
      setAudioState(scrapbookAudio.getState());
    });
  }, []);

  // If visitor returned directly to the main site (intro already seen in sessionStorage),
  // gently start the ambient paper soundscape on their first pointer/key interaction.
  useEffect(() => {
    if (isIntroOpen || audioState.isMuted || audioState.isPlaying) return;

    const unlock = () => {
      scrapbookAudio.startAmbience();
    };

    window.addEventListener('pointerdown', unlock, { once: true, passive: true });
    window.addEventListener('keydown', unlock, { once: true, passive: true });

    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, [isIntroOpen, audioState.isMuted, audioState.isPlaying]);

  if (isIntroOpen) return null;

  const active = audioState.isPlaying && !audioState.isMuted;

  return (
    <button
      type="button"
      onClick={() => scrapbookAudio.toggleMute()}
      aria-label={
        active
          ? 'Mute ambient paper soundscape'
          : 'Enable ambient paper soundscape'
      }
      aria-pressed={active}
      className="fixed right-4 bottom-4 z-30 inline-flex items-center gap-2 border border-[#57252E]/25 bg-[#FFFDF9]/95 px-3.5 py-2 text-[11px] font-medium tracking-[0.12em] uppercase text-[#57252E] backdrop-blur-xs scrapbook-shadow transition-transform duration-150 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#57252E]"
    >
      {active ? (
        <Volume2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      ) : (
        <VolumeX className="h-3.5 w-3.5 shrink-0 opacity-65" aria-hidden="true" />
      )}
      <span className="whitespace-nowrap">
        {active ? 'Paper Sound: On' : 'Paper Sound: Off'}
      </span>
    </button>
  );
}
