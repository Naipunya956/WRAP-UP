import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  DoodleFlowerSVG,
  DoodleStarSVG,
  RibbonIllustrationSVG,
} from './DecorativeMotifs';

export type StickerKind = 'flower' | 'star' | 'ribbon' | 'heart-stamp' | 'camera';

interface InteractiveStickerProps {
  kind: StickerKind;
  label?: string;
  className?: string;
  rotate?: number;
}

export function InteractiveSticker({
  kind,
  label,
  className = '',
  rotate = -8,
}: InteractiveStickerProps) {
  const [popped, setPopped] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const renderArtwork = () => {
    switch (kind) {
      case 'flower':
        return <DoodleFlowerSVG className="h-12 w-12" />;
      case 'star':
        return <DoodleStarSVG className="h-10 w-10" />;
      case 'ribbon':
        return <RibbonIllustrationSVG className="h-10 w-16" />;
      case 'heart-stamp':
        return (
          <div className="flex h-12 w-11 flex-col items-center justify-center border-2 border-dashed border-[#57252E] bg-[#FFFDF9] p-1 shadow-sm">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" aria-hidden="true">
              <path
                d="M10 16.5C10 16.5 2 11 2 5.8C2 3.4 3.9 1.5 6.2 1.5C7.7 1.5 9.1 2.3 10 3.5C10.9 2.3 12.3 1.5 13.8 1.5C16.1 1.5 18 3.4 18 5.8C18 11 10 16.5 10 16.5Z"
                fill="#E8B8C4"
                stroke="#57252E"
                strokeWidth="1.3"
              />
            </svg>
            <span className="mt-0.5 text-[7px] font-semibold tracking-[0.14em] uppercase text-[#57252E]">
              2026
            </span>
          </div>
        );
      case 'camera':
      default:
        return (
          <div className="flex h-11 w-14 items-center justify-center rounded-sm border border-[#57252E] bg-[#F3C9D5] shadow-sm">
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" aria-hidden="true">
              <rect x="2" y="4" width="24" height="14" rx="2" fill="#FFFDF9" stroke="#57252E" strokeWidth="1.3" />
              <path d="M9 4L11 1.5H17L19 4" stroke="#57252E" strokeWidth="1.3" />
              <circle cx="14" cy="11" r="4" fill="#E8B8C4" stroke="#57252E" strokeWidth="1.3" />
              <circle cx="21" cy="7" r="1" fill="#57252E" />
            </svg>
          </div>
        );
    }
  };

  return (
    <motion.button
      type="button"
      onClick={() => setPopped((p) => !p)}
      aria-label={label || `Interactive ${kind} scrapbook sticker`}
      data-cursor="peel"
      initial={{ rotate }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              scale: 1.15,
              rotate: rotate + 12,
              y: -4,
              transition: { type: 'spring', stiffness: 360, damping: 16 },
            }
      }
      whileTap={prefersReducedMotion ? undefined : { scale: 0.92, rotate: rotate - 8 }}
      animate={
        popped && !prefersReducedMotion
          ? { rotate: rotate + 360, scale: [1, 1.25, 1] }
          : { rotate }
      }
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-flex cursor-pointer items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#57252E] ${className}`}
    >
      {renderArtwork()}
    </motion.button>
  );
}
