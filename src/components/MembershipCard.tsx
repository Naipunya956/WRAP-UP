import { motion, useReducedMotion } from 'motion/react';
import { WaxSealSVG } from './DecorativeMotifs';
import { WashiTape } from './WashiTape';

interface MembershipCardProps {
  memberName?: string;
  memberNo?: string;
  year?: string;
  className?: string;
}

export function MembershipCard({
  memberName = 'Clara Vance',
  memberNo = 'NO. 0428',
  year = '2026',
  className = '',
}: MembershipCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={
        prefersReducedMotion
          ? undefined
          : { rotate: -0.8, y: -4, transition: { duration: 0.25 } }
      }
      className={`relative mx-auto w-full max-w-md border border-[#F3C9D5]/40 bg-[#57252E] p-6 text-[#FFFDF9] scrapbook-shadow-deep sm:p-8 ${className}`}
    >
      <WashiTape
        tone="blush"
        rotate={-4}
        className="absolute -top-2.5 left-8 z-20"
      />

      {/* Fine double-hairline vintage border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-2.5 border border-[#F3C9D5]/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3.5 border border-dashed border-[#F7F0E6]/20"
      />

      <div className="relative z-10">
        {/* Top Row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="block text-[10px] font-medium tracking-[0.22em] uppercase text-[#F3C9D5]">
              Annual Memory Club
            </span>
            <h3 className="mt-1 font-display text-2xl font-semibold tracking-[0.14em] text-[#FFFDF9]">
              WRAP UP
            </h3>
          </div>
          <span className="text-xs font-medium tracking-[0.16em] text-[#F3C9D5] tabular-nums">
            {memberNo}
          </span>
        </div>

        {/* Center Member Name */}
        <div className="my-8 border-y border-[#F3C9D5]/25 py-5">
          <span className="block text-[10px] tracking-[0.16em] uppercase text-[#F7F0E6]/65">
            Kept in the ledger for
          </span>
          <p className="mt-1 font-hand text-3xl text-[#FFFDF9] sm:text-4xl">
            {memberName.trim() || 'Your Name Here'}
          </p>
        </div>

        {/* Bottom Metadata Row */}
        <div className="flex items-end justify-between gap-4">
          <div className="text-[11px] tracking-[0.12em] uppercase text-[#F7F0E6]/75">
            <span>Edition {year}</span>
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            <span>December Box</span>
          </div>
          <WaxSealSVG className="h-11 w-11 shrink-0" label="W" />
        </div>
      </div>
    </motion.div>
  );
}
