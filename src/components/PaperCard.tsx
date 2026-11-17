import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PaperClipSVG } from './DecorativeMotifs';
import { WashiTape, type WashiTone } from './WashiTape';

interface PaperCardProps {
  children: ReactNode;
  className?: string;
  tone?: 'paper' | 'cream' | 'ledger' | 'blush' | 'chambray';
  torn?: boolean;
  paperClip?: boolean;
  tape?: WashiTone;
  rotate?: number;
}

const TONE_MAP = {
  paper: 'bg-[#FFFDF9] text-[#3E2624]',
  cream: 'bg-[#F7F0E6] text-[#3E2624]',
  ledger: 'bg-ledger-paper text-[#3E2624]',
  blush: 'bg-[#F3C9D5] text-[#3E2624]',
  chambray: 'bg-chambray-fabric text-[#3E2624]',
};

export function PaperCard({
  children,
  className = '',
  tone = 'paper',
  torn = false,
  paperClip = false,
  tape,
  rotate = 0,
}: PaperCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18, rotate: rotate - 1 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`relative border border-[#3E2624]/15 p-6 scrapbook-shadow ${TONE_MAP[tone]} ${
        torn ? 'torn-paper-card' : ''
      } ${className}`}
    >
      {tape && (
        <WashiTape
          tone={tape}
          animateReveal
          className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20"
        />
      )}
      {paperClip && (
        <PaperClipSVG className="pointer-events-none absolute -top-5 right-6 z-20 h-12 w-6 drop-shadow-xs" />
      )}
      {children}
    </motion.div>
  );
}
