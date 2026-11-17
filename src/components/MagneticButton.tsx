import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'burgundy' | 'cream' | 'blush' | 'outline';
  className?: string;
  ariaLabel?: string;
}

const VARIANTS = {
  burgundy:
    'bg-[#57252E] text-[#FFFDF9] border border-[#57252E] hover:bg-[#3E2624]',
  cream:
    'bg-[#FFFDF9] text-[#57252E] border border-[#57252E]/25 hover:bg-[#F3C9D5]',
  blush:
    'bg-[#F3C9D5] text-[#3E2624] border border-[#57252E]/30 hover:bg-[#E8B8C4]',
  outline:
    'bg-transparent text-[#3E2624] border border-[#3E2624]/40 hover:border-[#57252E] hover:bg-[#FFFDF9]/80',
};

export function MagneticButton({
  children,
  onClick,
  type = 'button',
  variant = 'burgundy',
  className = '',
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: relX * 0.18, y: relY * 0.22 });
  };

  const reset = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 320, damping: 20, mass: 0.4 }}
      className={`inline-flex items-center justify-center gap-2.5 rounded-none px-6 py-3.5 text-xs font-medium tracking-[0.12em] uppercase whitespace-nowrap shrink-0 cursor-pointer transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#57252E] ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
