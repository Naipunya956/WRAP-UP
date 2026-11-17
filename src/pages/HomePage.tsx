import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Shuffle } from 'lucide-react';
import {
  BRAND_IMAGES,
  HOME_DRAGGABLE_POLAROIDS,
} from '../data/wrapUpContent';
import { GinghamBackground } from '../components/GinghamBackground';
import { ScrapbookPhoto } from '../components/ScrapbookPhoto';
import { PaperCard } from '../components/PaperCard';
import { HandwrittenNote } from '../components/HandwrittenNote';
import { VintageStamp } from '../components/VintageStamp';
import { InteractiveSticker } from '../components/InteractiveSticker';
import { MagneticButton } from '../components/MagneticButton';
import { MarqueeStrip } from '../components/MarqueeStrip';
import { MeetTheCreators } from '../components/MeetTheCreators';
import {
  HandwrittenArrowSVG,
  PressedFlowerSVG,
} from '../components/DecorativeMotifs';

export function HomePage({ onReplayIntro }: { onReplayIntro?: () => void }) {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const [polaroidOrder, setPolaroidOrder] = useState([0, 1, 2]);
  const [frontId, setFrontId] = useState<string>('picnic');

  const shufflePolaroids = () => {
    setPolaroidOrder((prev) => [prev[2], prev[0], prev[1]]);
  };

  return (
    <div className="overflow-x-hidden">
      {/* HERO COVER: Pink Gingham Scrapbook Cover */}
      <GinghamBackground
        variant="gingham"
        className="relative border-b border-[#57252E]/20 pt-10 pb-20 lg:pt-14 lg:pb-28"
      >
        {/* Top decorative chambray fabric ribbon strip inspired by Reference 1 */}
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="bg-chambray-fabric mb-8 flex flex-wrap items-center justify-between gap-4 border border-[#3E2624]/20 px-4 py-2.5 text-[11px] font-medium tracking-[0.18em] uppercase text-[#3E2624] scrapbook-shadow">
            <span>Issue No. 01 · Annual Memory-Preservation Club</span>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">December 2026 Studio Edition</span>
              {onReplayIntro && (
                <button
                  type="button"
                  onClick={onReplayIntro}
                  className="underline decoration-[#57252E]/50 underline-offset-4 text-[#57252E] hover:text-[#3E2624] cursor-pointer"
                >
                  Re-read letter
                </button>
              )}
            </div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Cover Typography & Editorial Notes */}
            <div className="relative z-20 lg:col-span-6">
              <div className="relative inline-block">
                <InteractiveSticker
                  kind="flower"
                  label="Daisy scrapbook sticker"
                  rotate={-12}
                  className="mb-3"
                />
                <HandwrittenNote
                  text="An invitation to remember — open the cover."
                  inkColor="burgundy"
                  className="text-2xl sm:text-[1.7rem]"
                />
              </div>

              {/* Oversized Bodoni Moda Masthead + Headline */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="mt-3"
              >
                <span className="block font-display text-[clamp(3.2rem,8vw,5.75rem)] font-bold leading-[0.88] tracking-[-0.03em] text-[#57252E]">
                  WRAP UP
                </span>
                <h1 className="mt-4 font-display text-[clamp(2.25rem,4.4vw,3.5rem)] font-medium italic leading-[1.06] text-[#3E2624]">
                  Every year leaves a story.
                </h1>
              </motion.div>

              {/* Overlapping Cream Paper Note Card */}
              <PaperCard
                tone="paper"
                torn
                paperClip
                rotate={-1}
                className="mt-7 max-w-lg"
              >
                <p className="font-serif text-xl font-medium italic text-[#57252E] sm:text-2xl">
                  Let&apos;s make yours something you can hold.
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-[#3E2624]/82 sm:text-base">
                  365 days of friendships, growth, forgotten camera rolls, and
                  quiet milestones—gathered slowly across the year and bound into
                  a physical keepsake box every December.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3.5">
                  <MagneticButton
                    variant="burgundy"
                    onClick={() => navigate('/our-story')}
                  >
                    <span>Explore Our Story</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </MagneticButton>

                  <MagneticButton
                    variant="outline"
                    onClick={() => navigate('/inside-the-box')}
                  >
                    <span>Open the Box</span>
                  </MagneticButton>
                </div>
              </PaperCard>

              <div className="mt-6 flex items-center gap-4">
                <VintageStamp
                  topText="MEMORY CLUB"
                  centerText="DEC"
                  bottomText="EST · 2026"
                  variant="burgundy"
                  rotate={-6}
                />
                <HandwrittenNote
                  text="Psst — try dragging the polaroids on the right!"
                  inkColor="espresso"
                  delay={0.45}
                  className="text-xl max-w-[220px]"
                />
                <HandwrittenArrowSVG className="hidden w-16 sm:block" />
              </div>
            </div>

            {/* Right Interactive Scrapbook Collage & Draggable Polaroid Deck */}
            <div className="relative lg:col-span-6">
              <div className="relative mx-auto min-h-[470px] max-w-[540px] sm:min-h-[540px]">
                {/* Background burgundy grid mat peeking out behind */}
                <div
                  aria-hidden="true"
                  className="bg-burgundy-grid absolute inset-x-4 top-8 bottom-8 rotate-2 border border-[#FFFDF9]/25 scrapbook-shadow"
                />

                {/* Primary Hero Keepsake Box Print */}
                <div className="relative z-10 mx-auto w-[86%] pt-4">
                  <ScrapbookPhoto
                    src={BRAND_IMAGES.heroBox}
                    alt="Blush keepsake box with espresso satin ribbon, film prints, and dried flower"
                    caption="The December parcel"
                    dateStamp="BOX · 01"
                    rotate={1.5}
                    tapeTone="cream"
                    tapePosition="top-corners"
                    loading="eager"
                  />
                </div>

                {/* Draggable Polaroid 1 (Top Left) */}
                <div
                  style={{
                    zIndex:
                      frontId === HOME_DRAGGABLE_POLAROIDS[polaroidOrder[0]].id
                        ? 35
                        : 24,
                  }}
                  className="relative -mt-12 ml-0 w-44 sm:absolute sm:-left-6 sm:top-4 sm:mt-0 sm:w-48"
                >
                  <ScrapbookPhoto
                    src={HOME_DRAGGABLE_POLAROIDS[polaroidOrder[0]].image}
                    alt={HOME_DRAGGABLE_POLAROIDS[polaroidOrder[0]].alt}
                    caption={HOME_DRAGGABLE_POLAROIDS[polaroidOrder[0]].caption}
                    dateStamp={HOME_DRAGGABLE_POLAROIDS[polaroidOrder[0]].dateStamp}
                    rotate={HOME_DRAGGABLE_POLAROIDS[polaroidOrder[0]].initialRotate}
                    aspectClass="aspect-square"
                    tapeTone={HOME_DRAGGABLE_POLAROIDS[polaroidOrder[0]].tapeTone}
                    draggable
                    onBringToFront={() =>
                      setFrontId(HOME_DRAGGABLE_POLAROIDS[polaroidOrder[0]].id)
                    }
                  />
                </div>

                {/* Draggable Polaroid 2 (Bottom Right) */}
                <div
                  style={{
                    zIndex:
                      frontId === HOME_DRAGGABLE_POLAROIDS[polaroidOrder[1]].id
                        ? 35
                        : 26,
                  }}
                  className="relative -mt-14 ml-auto mr-0 w-48 sm:absolute sm:-bottom-4 sm:-right-3 sm:mt-0 sm:w-52"
                >
                  <ScrapbookPhoto
                    src={HOME_DRAGGABLE_POLAROIDS[polaroidOrder[1]].image}
                    alt={HOME_DRAGGABLE_POLAROIDS[polaroidOrder[1]].alt}
                    caption={HOME_DRAGGABLE_POLAROIDS[polaroidOrder[1]].caption}
                    dateStamp={HOME_DRAGGABLE_POLAROIDS[polaroidOrder[1]].dateStamp}
                    rotate={HOME_DRAGGABLE_POLAROIDS[polaroidOrder[1]].initialRotate}
                    aspectClass="aspect-[4/3]"
                    tapeTone={HOME_DRAGGABLE_POLAROIDS[polaroidOrder[1]].tapeTone}
                    paperClip
                    draggable
                    onBringToFront={() =>
                      setFrontId(HOME_DRAGGABLE_POLAROIDS[polaroidOrder[1]].id)
                    }
                  />
                </div>

                {/* Playful Interactive Stickers & Shuffle Control */}
                <div className="mt-5 flex items-center justify-between gap-3 sm:mt-0">
                  <InteractiveSticker
                    kind="star"
                    label="Star sticker"
                    rotate={14}
                    className="sm:absolute sm:-right-4 sm:top-10 sm:z-30"
                  />
                  <InteractiveSticker
                    kind="heart-stamp"
                    label="Postage heart sticker"
                    rotate={-10}
                    className="sm:absolute sm:bottom-10 sm:left-4 sm:z-30"
                  />
                  <button
                    type="button"
                    onClick={shufflePolaroids}
                    className="relative z-30 inline-flex items-center gap-2 border border-[#57252E]/35 bg-[#FFFDF9] px-3.5 py-2 text-xs font-medium tracking-[0.1em] uppercase text-[#57252E] scrapbook-shadow transition-transform hover:-translate-y-0.5 cursor-pointer sm:absolute sm:-bottom-12 sm:left-24"
                  >
                    <Shuffle className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Shuffle Polaroids</span>
                  </button>
                </div>

                <PressedFlowerSVG className="pointer-events-none absolute -right-8 bottom-24 z-10 hidden w-20 opacity-85 sm:block" />
              </div>
            </div>
          </div>
        </div>

        {/* Scalloped Lace Divider edge */}
        <div
          aria-hidden="true"
          className="lace-border-cream pointer-events-none absolute inset-x-0 bottom-0 h-3"
        />
      </GinghamBackground>

      {/* Editorial Marquee */}
      <MarqueeStrip tone="burgundy" />

      {/* Chapter Index Spread on Warm Cream Handmade Paper */}
      <GinghamBackground variant="cream-paper" className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 border-b border-[#57252E]/15 pb-8 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-medium tracking-[0.16em] uppercase text-[#57252E]/70">
                Table of Contents
              </span>
              <h2 className="mt-2 font-display text-4xl font-medium text-[#57252E] sm:text-5xl">
                Inside the Scrapbook
              </h2>
            </div>
            <HandwrittenNote
              text="Turn through every page of the club."
              className="text-2xl"
            />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: '01',
                title: 'Our Story',
                desc: 'Deep burgundy linen, handwritten philosophy & the 12-month archive.',
                img: BRAND_IMAGES.burgundyDesk,
                to: '/our-story',
                rotate: -1.5,
              },
              {
                num: '02',
                title: 'The Experience',
                desc: 'The Storybook, Custom Canvas, Wax-Sealed Letter & Little Things.',
                img: BRAND_IMAGES.storybook,
                to: '/experience',
                rotate: 1.4,
              },
              {
                num: '03',
                title: 'Inside the Box',
                desc: 'Untie the satin ribbon and open the December memory parcel.',
                img: BRAND_IMAGES.heroBox,
                to: '/inside-the-box',
                rotate: -1.2,
              },
              {
                num: '04',
                title: 'The Club',
                desc: 'Preview your vintage membership card and reserve your place.',
                img: BRAND_IMAGES.stationery,
                to: '/club',
                rotate: 1.8,
              },
            ].map((chapter) => (
              <motion.button
                key={chapter.to}
                type="button"
                onClick={() => navigate(chapter.to)}
                whileHover={
                  prefersReducedMotion ? undefined : { y: -6, rotate: 0 }
                }
                style={{ transform: `rotate(${chapter.rotate}deg)` }}
                className="group flex flex-col border border-[#3E2624]/15 bg-[#FFFDF9] p-3.5 text-left scrapbook-shadow transition-shadow hover:scrapbook-shadow-deep cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#57252E]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#F7F0E6]">
                  <img
                    src={chapter.img}
                    alt={chapter.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#57252E]/65 tabular-nums">
                    Page {chapter.num}
                  </span>
                  <ArrowRight
                    className="h-3.5 w-3.5 text-[#57252E] transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-1 font-serif text-2xl font-medium text-[#3E2624]">
                  {chapter.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#3E2624]/75">
                  {chapter.desc}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </GinghamBackground>

      {/* Meet the Creators Scrapbook Spread */}
      <MeetTheCreators variant="burgundy-grid" />
    </div>
  );
}
