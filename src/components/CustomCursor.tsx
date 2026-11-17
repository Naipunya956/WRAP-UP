import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [mode, setMode] = useState<'default' | 'drag' | 'peel' | 'action'>('default');

  useEffect(() => {
    if (prefersReducedMotion) return;
    const media = window.matchMedia('(pointer: fine)');
    if (!media.matches) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement | null;
      const custom = target?.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (custom === 'drag' || custom === 'peel') {
        setMode(custom);
      } else if (target?.closest('a, button')) {
        setMode('action');
      } else {
        setMode('default');
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [prefersReducedMotion]);

  if (!enabled || prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      animate={{
        x: pos.x - (mode === 'default' ? 10 : 22),
        y: pos.y - (mode === 'default' ? 10 : 22),
        width: mode === 'default' ? 20 : 44,
        height: mode === 'default' ? 20 : 44,
      }}
      transition={{ type: 'spring', stiffness: 480, damping: 32, mass: 0.25 }}
      className="pointer-events-none fixed top-0 left-0 z-50 hidden items-center justify-center rounded-full border border-[#57252E]/55 bg-[#F3C9D5]/25 backdrop-blur-[0.5px] lg:flex"
    >
      {mode === 'drag' && (
        <span className="font-hand text-xs font-semibold text-[#57252E]">
          drag
        </span>
      )}
      {mode === 'peel' && (
        <span className="font-hand text-xs font-semibold text-[#57252E]">
          pop!
        </span>
      )}
    </motion.div>
  );
}
