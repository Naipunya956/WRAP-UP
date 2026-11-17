import { motion, useReducedMotion } from 'motion/react';

interface HandwrittenNoteProps {
  text: string;
  className?: string;
  delay?: number;
  inkColor?: 'espresso' | 'burgundy' | 'cream' | 'rose';
}

const INK_COLORS = {
  espresso: 'text-[#3E2624]',
  burgundy: 'text-[#57252E]',
  cream: 'text-[#FFFDF9]',
  rose: 'text-[#C98799]',
};

export function HandwrittenNote({
  text,
  className = '',
  delay = 0.1,
  inkColor = 'burgundy',
}: HandwrittenNoteProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <p className={`font-hand leading-snug ${INK_COLORS[inkColor]} ${className}`}>
        {text}
      </p>
    );
  }

  return (
    <motion.p
      initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`font-hand leading-snug ${INK_COLORS[inkColor]} ${className}`}
    >
      {text}
    </motion.p>
  );
}
