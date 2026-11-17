import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { BRAND_IMAGES, MONTH_MEMORIES } from '../data/wrapUpContent';
import { GinghamBackground } from '../components/GinghamBackground';
import { ScrapbookPhoto } from '../components/ScrapbookPhoto';
import { PaperCard } from '../components/PaperCard';
import { HandwrittenNote } from '../components/HandwrittenNote';
import { VintageStamp } from '../components/VintageStamp';
import { InteractiveSticker } from '../components/InteractiveSticker';
import { MagneticButton } from '../components/MagneticButton';
import { MonthMotifSVG, PressedFlowerSVG } from '../components/DecorativeMotifs';
import { WashiTape } from '../components/WashiTape';
import { MeetTheCreators } from '../components/MeetTheCreators';

export function OurStoryPage() {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const parallaxRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [activeMonthIdx, setActiveMonthIdx] = useState(2);

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start end', 'end start'],
  });

  const leftPhotoY = useTransform(scrollYProgress, [0, 1], [30, -34]);
  const rightCardY = useTransform(scrollYProgress, [0, 1], [-20, 28]);

  const activeMemory = MONTH_MEMORIES[activeMonthIdx];

  const scrollRail = (dir: 'left' | 'right') => {
    railRef.current?.scrollBy({
      left: dir === 'left' ? -320 : 320,
      behavior: 'smooth',
    });
  };

  return (
    <div className="overflow-x-hidden">
      {/* SECTION 1: Deep Burgundy Grid Scrapbook Spread */}
      <GinghamBackground
        variant="burgundy-grid"
        className="relative py-16 lg:py-24"
      >
        <div ref={parallaxRef} className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left: Cream torn paper philosophy sheet */}
            <div className="relative z-10 lg:col-span-6">
              <div className="flex items-center gap-3 text-xs font-medium tracking-[0.18em] uppercase text-[#F3C9D5]">
                <span>Chapter II</span>
                <span aria-hidden="true">·</span>
                <span>Our Story</span>
              </div>

              <motion.h1
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 font-display text-[clamp(2.5rem,5vw,4.35rem)] font-medium leading-[1.02] text-[#FFFDF9]"
              >
                Life happens in little moments.
              </motion.h1>

              <PaperCard
                tone="ledger"
                torn
                paperClip
                rotate={-1.2}
                className="mt-8"
              >
                <p className="text-base leading-[1.8] text-[#3E2624]">
                  Somewhere between January and December, you become a slightly
                  different person. You learn, you grow, you lose things, you
                  find things, and you make memories you never want to forget.
                </p>
                <p className="mt-4 text-base leading-[1.8] text-[#3E2624]/85">
                  Most of those fragments vanish into camera rolls and forgotten
                  folders. Wrap Up gathers the quiet moments you collected all
                  year and turns them into something tangible.
                </p>

                <div className="mt-6 border-t border-dashed border-[#57252E]/25 pt-5">
                  <p className="font-serif text-2xl italic text-[#57252E]">
                    &ldquo;We don&apos;t just wrap gifts. We wrap up years.&rdquo;
                  </p>
                  <HandwrittenNote
                    text="— Written in the studio, 2026"
                    inkColor="espresso"
                    className="mt-2 text-xl"
                  />
                </div>
              </PaperCard>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <VintageStamp
                  topText="PERSONAL ARCHIVE"
                  centerText="365"
                  bottomText="DAYS KEPT"
                  variant="cream"
                  rotate={6}
                />
                <InteractiveSticker kind="camera" rotate={-7} />
                <HandwrittenNote
                  text="Open a month below to inspect the archive."
                  inkColor="cream"
                  className="text-xl text-[#F3C9D5]"
                />
              </div>
            </div>

            {/* Right: Parallax Layered Scrapbook Photo Collage */}
            <div className="relative lg:col-span-6">
              <div className="relative mx-auto max-w-[520px] pt-4 pb-12">
                <motion.div
                  style={prefersReducedMotion ? undefined : { y: leftPhotoY }}
                  className="relative z-10 w-[85%]"
                >
                  <ScrapbookPhoto
                    src={BRAND_IMAGES.burgundyDesk}
                    alt="Vintage snapshots pinned with brass paper clips and pressed wildflowers on burgundy linen"
                    caption="Remember: every small note counts"
                    dateStamp="ARCHIVE · 04"
                    rotate={2}
                    aspectClass="aspect-[4/3]"
                    tapeTone="blush"
                    tapePosition="top-corners"
                  />
                </motion.div>

                <motion.div
                  style={prefersReducedMotion ? undefined : { y: rightCardY }}
                  className="relative z-20 -mt-16 ml-auto w-[64%] sm:-mt-24"
                >
                  <ScrapbookPhoto
                    src={BRAND_IMAGES.philosophyCafe}
                    alt="Two friends laughing over coffee with an open notebook"
                    caption="March afternoon laughs"
                    dateStamp="18 MAR"
                    rotate={-3.5}
                    aspectClass="aspect-[3/4]"
                    tapeTone="chambray"
                    paperClip
                    draggable
                  />
                </motion.div>

                <PressedFlowerSVG className="pointer-events-none absolute -left-8 bottom-6 z-20 hidden w-20 -rotate-12 sm:block" />
              </div>
            </div>
          </div>
        </div>
      </GinghamBackground>

      {/* SECTION 2: 12 Months Scrapbook Archive */}
      <GinghamBackground
        variant="cream-paper"
        className="border-t border-[#57252E]/20 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-medium tracking-[0.16em] uppercase text-[#57252E]/70">
                12 Months · Member Scrapbook Sample
              </span>
              <h2 className="mt-2 font-display text-4xl font-medium text-[#57252E] sm:text-5xl">
                12 months. Your story.
              </h2>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => scrollRail('left')}
                aria-label="Scroll months left"
                className="inline-flex h-10 w-10 items-center justify-center border border-[#57252E]/30 bg-[#FFFDF9] text-[#57252E] hover:bg-[#F3C9D5]/40 cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollRail('right')}
                aria-label="Scroll months right"
                className="inline-flex h-10 w-10 items-center justify-center border border-[#57252E]/30 bg-[#FFFDF9] text-[#57252E] hover:bg-[#F3C9D5]/40 cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Horizontal miniature scrapbook pages */}
          <div
            ref={railRef}
            className="timeline-scroll mt-10 flex gap-5 overflow-x-auto px-2 pt-4 pb-6 snap-x"
          >
            {MONTH_MEMORIES.map((m, idx) => {
              const active = idx === activeMonthIdx;
              return (
                <button
                  key={m.month}
                  type="button"
                  onClick={() => setActiveMonthIdx(idx)}
                  style={{ transform: `rotate(${active ? 0 : m.rotation}deg)` }}
                  className={`relative flex w-52 shrink-0 snap-center flex-col border p-3 text-left transition-all duration-200 cursor-pointer ${
                    active
                      ? 'border-[#57252E] bg-[#FFFDF9] scrapbook-shadow-deep -translate-y-1.5'
                      : 'border-[#3E2624]/15 bg-[#FFFDF9]/90 scrapbook-shadow hover:-translate-y-1'
                  }`}
                >
                  <WashiTape
                    tone={idx % 2 === 0 ? 'blush' : 'chambray'}
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2"
                  />
                  <div className="flex items-start justify-between pt-1">
                    <div>
                      <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#57252E]/65 tabular-nums">
                        {m.index} / 12
                      </span>
                      <h3 className="font-serif text-xl font-medium text-[#3E2624]">
                        {m.month}
                      </h3>
                    </div>
                    <MonthMotifSVG motif={m.motif} className="h-7 w-7" />
                  </div>
                  <div className="mt-2.5 aspect-[4/3] w-full overflow-hidden bg-[#F7F0E6]">
                    <img
                      src={m.image}
                      alt={m.imageAlt}
                      referrerPolicy="no-referrer"
                      style={{ objectPosition: m.objectPosition }}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="mt-2.5 font-hand text-lg leading-snug text-[#3E2624] line-clamp-2">
                    {m.memory}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Month Detail Spread */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMemory.month}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-8 grid items-center gap-8 border border-[#57252E]/20 bg-[#FFFDF9] p-6 scrapbook-shadow md:grid-cols-12 md:p-8"
            >
              <div className="md:col-span-5">
                <ScrapbookPhoto
                  src={activeMemory.image}
                  alt={activeMemory.imageAlt}
                  objectPosition={activeMemory.objectPosition}
                  caption={activeMemory.title}
                  dateStamp={activeMemory.short}
                  rotate={-1}
                  tapeTone="dusty"
                  clipReveal={false}
                />
              </div>
              <div className="md:col-span-7">
                <div className="flex items-center justify-between border-b border-[#57252E]/15 pb-3">
                  <div>
                    <span className="text-xs font-medium tracking-[0.14em] uppercase text-[#57252E]/70">
                      {activeMemory.meta}
                    </span>
                    <h3 className="mt-1 font-display text-3xl font-medium text-[#57252E]">
                      {activeMemory.month}
                    </h3>
                  </div>
                  <MonthMotifSVG motif={activeMemory.motif} className="h-10 w-10" />
                </div>
                <p className="mt-5 font-hand text-3xl leading-snug text-[#3E2624]">
                  &ldquo;{activeMemory.memory}&rdquo;
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-[#3E2624]/60">
                    Every month becomes a dedicated spread in your December box.
                  </span>
                  <MagneticButton
                    variant="burgundy"
                    onClick={() => navigate('/experience')}
                  >
                    <span>Turn Page: The Experience</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </GinghamBackground>

      {/* Meet the Creators Scrapbook Spread */}
      <MeetTheCreators variant="dusty-pink" />
    </div>
  );
}
