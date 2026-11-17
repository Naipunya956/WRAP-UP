import { useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PaperClipSVG } from './DecorativeMotifs';
import { WashiTape, type WashiTone } from './WashiTape';

interface ScrapbookPhotoProps {
  src: string;
  alt: string;
  caption?: string;
  dateStamp?: string;
  rotate?: number;
  aspectClass?: string;
  objectPosition?: string;
  tapeTone?: WashiTone;
  tapePosition?: 'top-center' | 'top-left' | 'top-corners';
  paperClip?: boolean;
  draggable?: boolean;
  clipReveal?: boolean;
  className?: string;
  children?: ReactNode;
  onBringToFront?: () => void;
  loading?: 'eager' | 'lazy';
}

export function ScrapbookPhoto({
  src,
  alt,
  caption,
  dateStamp,
  rotate = 0,
  aspectClass = 'aspect-[4/3]',
  objectPosition = '50% 50%',
  tapeTone = 'blush',
  tapePosition = 'top-center',
  paperClip = false,
  draggable = false,
  clipReveal = true,
  className = '',
  children,
  onBringToFront,
  loading = 'lazy',
}: ScrapbookPhotoProps) {
  const [hasError, setHasError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const initialProps =
    clipReveal && !prefersReducedMotion
      ? { opacity: 0, y: 18, rotate: rotate - 1.5, scale: 0.97 }
      : { opacity: 1, y: 0, rotate, scale: 1 };

  return (
    <motion.figure
      initial={initialProps}
      whileInView={{ opacity: 1, y: 0, rotate, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      drag={draggable && !prefersReducedMotion}
      dragElastic={0.14}
      dragMomentum={false}
      whileDrag={{ scale: 1.05, rotate: 0, zIndex: 50 }}
      whileHover={
        draggable
          ? { scale: 1.02, rotate: rotate * 0.4, transition: { duration: 0.2 } }
          : { y: -3, transition: { duration: 0.2 } }
      }
      onPointerDown={onBringToFront}
      data-cursor={draggable ? 'drag' : undefined}
      className={`group relative border border-[#3E2624]/15 bg-[#FFFDF9] p-2.5 pb-4 scrapbook-shadow sm:p-3 sm:pb-5 ${
        draggable ? 'cursor-grab active:cursor-grabbing touch-none select-none' : ''
      } ${className}`}
    >
      {/* Masking tape placement reveal */}
      {tapePosition === 'top-center' && (
        <WashiTape
          tone={tapeTone}
          animateReveal
          rotate={-2}
          className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20"
        />
      )}
      {tapePosition === 'top-left' && (
        <WashiTape
          tone={tapeTone}
          animateReveal
          rotate={-16}
          className="absolute -top-2 -left-3 z-20"
        />
      )}
      {tapePosition === 'top-corners' && (
        <>
          <WashiTape
            tone={tapeTone}
            animateReveal
            rotate={-26}
            className="absolute -top-2 -left-4 w-12 z-20"
          />
          <WashiTape
            tone={tapeTone}
            animateReveal
            rotate={24}
            delay={0.25}
            className="absolute -top-2 -right-4 w-12 z-20"
          />
        </>
      )}

      {paperClip && (
        <PaperClipSVG className="pointer-events-none absolute -top-5 right-5 z-20 h-11 w-5 drop-shadow-xs" />
      )}

      {/* Masked image reveal frame */}
      <div className={`relative overflow-hidden bg-[#F7F0E6] ${aspectClass}`}>
        {hasError ? (
          <div
            role="img"
            aria-label={alt}
            className="flex h-full w-full flex-col items-center justify-center bg-[#F3C9D5]/45 p-4 text-center text-[#57252E]"
          >
            <span className="font-serif text-lg italic">{caption || 'Memory Print'}</span>
          </div>
        ) : (
          <motion.img
            src={src}
            alt={alt}
            loading={loading}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            draggable={false}
            style={{ objectPosition }}
            initial={
              clipReveal && !prefersReducedMotion
                ? { clipPath: 'inset(0 0 100% 0)', scale: 1.08 }
                : { clipPath: 'inset(0 0 0% 0)', scale: 1 }
            }
            whileInView={{ clipPath: 'inset(0 0 0% 0)', scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>

      {/* Caption & Date Stamp */}
      {(caption || dateStamp) && (
        <figcaption className="mt-2.5 flex items-baseline justify-between gap-2 px-0.5">
          {caption && (
            <span className="font-hand text-xl leading-tight text-[#3E2624]">
              {caption}
            </span>
          )}
          {dateStamp && (
            <span className="shrink-0 text-[10px] font-medium tracking-[0.12em] uppercase text-[#57252E]/70 tabular-nums">
              {dateStamp}
            </span>
          )}
        </figcaption>
      )}

      {children}
    </motion.figure>
  );
}
