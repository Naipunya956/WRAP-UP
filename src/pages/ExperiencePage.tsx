import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Shuffle } from 'lucide-react';
import { BRAND_IMAGES, EXPERIENCE_ITEMS } from '../data/wrapUpContent';
import { GinghamBackground } from '../components/GinghamBackground';
import { ScrapbookPhoto } from '../components/ScrapbookPhoto';
import { PaperCard } from '../components/PaperCard';
import { HandwrittenNote } from '../components/HandwrittenNote';
import { VintageStamp } from '../components/VintageStamp';
import { InteractiveSticker } from '../components/InteractiveSticker';
import { MagneticButton } from '../components/MagneticButton';
import { WaxSealSVG } from '../components/DecorativeMotifs';

const LITTLE_THINGS_STACK = [
  {
    src: BRAND_IMAGES.picnicFilm,
    alt: 'Summer picnic film photograph',
    caption: 'June wildflowers',
  },
  {
    src: BRAND_IMAGES.eveningDinner,
    alt: 'Evening dinner under string lights',
    caption: 'August table',
  },
  {
    src: BRAND_IMAGES.travelWindow,
    alt: 'Coastal train window sunset',
    caption: 'May train home',
  },
];

export function ExperiencePage() {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const [letterUnfolded, setLetterUnfolded] = useState(false);
  const [stackTop, setStackTop] = useState(0);

  const [storybook, canvas, letter, littleThings] = EXPERIENCE_ITEMS;

  return (
    <div className="overflow-x-hidden">
      {/* HEADER SPREAD: Dusty Pink Paper Grain */}
      <GinghamBackground
        variant="dusty-pink"
        className="border-b border-[#57252E]/20 py-16 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#57252E]">
                Chapter III · The Experience
              </span>
              <motion.h1
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-3 font-display text-[clamp(2.65rem,5.2vw,4.6rem)] font-medium leading-[1.02] text-[#3E2624]"
              >
                Not just a box. A whole year.
              </motion.h1>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <HandwrittenNote
                text="Four tactile keepsakes crafted from your twelve months."
                inkColor="burgundy"
                className="text-2xl"
              />
            </div>
          </div>

          {/* 01. THE STORYBOOK — Warm Cream Paper Card overlapping Dusty Pink */}
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-12">
            <div className="relative lg:col-span-7">
              <ScrapbookPhoto
                src={storybook.image}
                alt={storybook.imageAlt}
                caption="Linen-bound annual volume"
                dateStamp={storybook.stampText}
                rotate={-1.5}
                tapeTone="cream"
                tapePosition="top-corners"
                loading="eager"
              />
              {/* Oversized overlapping editorial index */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-7 -left-3 z-20 font-display text-7xl font-bold text-[#57252E] sm:text-8xl"
              >
                01
              </span>
            </div>

            <div className="lg:col-span-5">
              <PaperCard tone="paper" torn paperClip rotate={1}>
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#57252E]/70">
                  {storybook.label}
                </span>
                <h2 className="mt-2 font-serif text-3xl font-medium text-[#3E2624] sm:text-4xl">
                  {storybook.heading}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#3E2624]/82 sm:text-base">
                  {storybook.description}
                </p>
                <p className="mt-4 text-xs tracking-[0.06em] text-[#57252E]/75">
                  {storybook.details}
                </p>
                <HandwrittenNote
                  text={`"${storybook.handwrittenNote}"`}
                  className="mt-5 text-2xl"
                />
              </PaperCard>
            </div>
          </div>
        </div>
      </GinghamBackground>

      {/* 02. THE CANVAS — Deep Burgundy Grid Backdrop */}
      <GinghamBackground
        variant="burgundy-grid"
        className="border-b border-[#F3C9D5]/20 py-20 lg:py-28"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-12 lg:px-8">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <PaperCard tone="cream" rotate={-1.2} tape="blush">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#57252E]">
                  02 · {canvas.label}
                </span>
                <InteractiveSticker kind="flower" rotate={10} />
              </div>
              <h2 className="mt-2 font-serif text-3xl font-medium text-[#3E2624] sm:text-4xl">
                {canvas.heading}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#3E2624]/82 sm:text-base">
                {canvas.description}
              </p>

              {/* Tactile Color Swatch Strip */}
              <div className="mt-6 border border-[#3E2624]/15 bg-[#FFFDF9] p-4">
                <span className="block text-[10px] font-medium tracking-[0.14em] uppercase text-[#57252E]/75">
                  Custom Palette Swatch Study
                </span>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {[
                    { name: 'Cream', hex: '#F7F0E6' },
                    { name: 'Blush', hex: '#F3C9D5' },
                    { name: 'Burgundy', hex: '#57252E' },
                    { name: 'Espresso', hex: '#3E2624' },
                  ].map((sw) => (
                    <div key={sw.name}>
                      <span
                        aria-hidden="true"
                        className="block h-7 w-full border border-[#3E2624]/20"
                        style={{ backgroundColor: sw.hex }}
                      />
                      <span className="mt-1 block text-[10px] text-[#3E2624]/75">
                        {sw.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <HandwrittenNote
                text={canvas.handwrittenNote}
                className="mt-5 text-2xl"
              />
            </PaperCard>
          </div>

          <div className="relative order-1 lg:order-2 lg:col-span-7">
            <div className="mx-auto max-w-md">
              <ScrapbookPhoto
                src={canvas.image}
                alt={canvas.imageAlt}
                caption="Bespoke framed memory canvas"
                dateStamp={canvas.stampText}
                rotate={2}
                aspectClass="aspect-[3/4]"
                tapeTone="chambray"
                paperClip
              />
            </div>
          </div>
        </div>
      </GinghamBackground>

      {/* 03. THE LETTER & 04. THE LITTLE THINGS — Warm Cream Paper */}
      <GinghamBackground variant="cream-paper" className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl space-y-24 px-6 lg:px-8">
          {/* 03. THE LETTER */}
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="relative lg:col-span-6">
              <ScrapbookPhoto
                src={letter.image}
                alt={letter.imageAlt}
                caption="Cotton stationery & wax seal"
                dateStamp={letter.stampText}
                rotate={-2}
                tapeTone="burgundy"
              />
              <WaxSealSVG
                className="absolute -bottom-5 -right-2 z-20 h-16 w-16 drop-shadow-md"
                label="W"
              />
            </div>

            <div className="lg:col-span-6">
              <div className="bg-chambray-fabric border border-[#3E2624]/20 p-6 scrapbook-shadow sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#57252E]">
                      03 · {letter.label}
                    </span>
                    <h2 className="mt-2 font-serif text-3xl font-medium text-[#3E2624] sm:text-4xl">
                      {letter.heading}
                    </h2>
                  </div>
                  <VintageStamp
                    topText="BY HAND"
                    centerText="INK"
                    bottomText="SEALED"
                    variant="espresso"
                    rotate={8}
                    className="hidden sm:inline-flex"
                  />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#3E2624]/85 sm:text-base">
                  {letter.description}
                </p>

                <button
                  type="button"
                  onClick={() => setLetterUnfolded((prev) => !prev)}
                  aria-expanded={letterUnfolded}
                  className="mt-6 inline-flex items-center border border-[#57252E] bg-[#FFFDF9] px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase text-[#57252E] transition-colors hover:bg-[#57252E] hover:text-[#FFFDF9] cursor-pointer"
                >
                  {letterUnfolded ? 'Fold sample letter' : 'Unfold sample letter'}
                </button>

                <AnimatePresence initial={false}>
                  {letterUnfolded && (
                    <motion.div
                      initial={
                        prefersReducedMotion ? false : { opacity: 0, scaleY: 0.7 }
                      }
                      animate={{ opacity: 1, scaleY: 1 }}
                      exit={
                        prefersReducedMotion
                          ? undefined
                          : { opacity: 0, scaleY: 0.7 }
                      }
                      style={{ transformOrigin: 'top center' }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-ledger-paper mt-5 border border-[#57252E]/20 p-6 scrapbook-shadow"
                    >
                      <p className="font-hand text-2xl leading-relaxed text-[#3E2624]">
                        Dearest future self,
                        <br />
                        Remember the Sunday walks, the late-night kitchen talks,
                        and how brave you were when everything felt uncertain in
                        spring. Keep this note close.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* 04. THE LITTLE THINGS — Interactive Photo Shuffle Stack */}
          <div className="grid items-center gap-12 border-t border-[#57252E]/15 pt-20 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#57252E]">
                04 · {littleThings.label}
              </span>
              <h2 className="mt-2 font-serif text-3xl font-medium text-[#3E2624] sm:text-4xl">
                {littleThings.heading}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#3E2624]/82 sm:text-base">
                {littleThings.description}
              </p>
              <HandwrittenNote
                text={littleThings.handwrittenNote}
                className="mt-5 text-2xl"
              />

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setStackTop((curr) => (curr + 1) % LITTLE_THINGS_STACK.length)
                  }
                  className="inline-flex items-center gap-2 border border-[#3E2624]/35 bg-[#FFFDF9] px-4 py-2.5 text-xs font-medium tracking-[0.1em] uppercase text-[#3E2624] hover:border-[#57252E] cursor-pointer"
                >
                  <Shuffle className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Shuffle keepsake prints</span>
                </button>

                <MagneticButton
                  variant="burgundy"
                  onClick={() => navigate('/inside-the-box')}
                >
                  <span>Next: Inside the Box</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </MagneticButton>
              </div>
            </div>

            <div className="relative flex min-h-[380px] items-center justify-center lg:col-span-7">
              {LITTLE_THINGS_STACK.map((card, idx) => {
                const offset =
                  (idx - stackTop + LITTLE_THINGS_STACK.length) %
                  LITTLE_THINGS_STACK.length;
                const rotations = [-2, 6, -7];
                const xOffsets = [0, 26, -24];
                const zIndices = [30, 20, 10];
                return (
                  <motion.div
                    key={card.caption}
                    onClick={() =>
                      setStackTop((curr) => (curr + 1) % LITTLE_THINGS_STACK.length)
                    }
                    animate={{
                      rotate: rotations[offset],
                      x: xOffsets[offset],
                      y: offset * 8,
                      scale: 1 - offset * 0.04,
                      zIndex: zIndices[offset],
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    className="absolute w-64 cursor-pointer border border-[#3E2624]/20 bg-[#FFFDF9] p-3 pb-6 scrapbook-shadow-deep sm:w-80"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#F7F0E6]">
                      <img
                        src={card.src}
                        alt={card.alt}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="mt-3 font-hand text-2xl text-[#3E2624]">
                      {card.caption}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </GinghamBackground>
    </div>
  );
}
