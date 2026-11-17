import { motion, useReducedMotion } from 'motion/react';

export type WashiTone = 'blush' | 'cream' | 'burgundy' | 'chambray' | 'dusty';

interface WashiTapeProps {
  className?: string;
  tone?: WashiTone;
  rotate?: number;
  animateReveal?: boolean;
  delay?: number;
}

const TONE_CLASSES: Record<WashiTone, string> = {
  blush: 'bg-[#F3C9D5]/80 border-[#C98799]/40',
  cream: 'bg-[#FFFDF9]/85 border-[#3E2624]/15',
  burgundy: 'bg-[#57252E]/80 border-[#FFFDF9]/20',
  chambray: 'bg-[#DCE4EC]/85 border-[#3E2624]/18',
  dusty: 'bg-[#E8B8C4]/85 border-[#57252E]/20',
};

export function WashiTape({
  className = '',
  tone = 'blush',
  rotate = -3,
  animateReveal = false,
  delay = 0.15,
}: WashiTapeProps) {
  const prefersReducedMotion = useReducedMotion();

  if (animateReveal && !prefersReducedMotion) {
    return (
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0, opacity: 0, rotate }}
        whileInView={{ scaleX: 1, opacity: 1, rotate }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{
          originX: 0,
          clipPath: 'polygon(2% 0%, 98% 3%, 100% 98%, 0% 95%)',
        }}
        className={`pointer-events-none block h-5 w-16 border shadow-xs ${TONE_CLASSES[tone]} ${className}`}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      style={{
        transform: `rotate(${rotate}deg)`,
        clipPath: 'polygon(2% 0%, 98% 3%, 100% 98%, 0% 95%)',
      }}
      className={`pointer-events-none block h-5 w-16 border shadow-xs ${TONE_CLASSES[tone]} ${className}`}
    />
  );
}
