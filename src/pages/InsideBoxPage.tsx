import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { BOX_REVEAL_ITEMS, type BoxRevealItem } from '../data/wrapUpContent';
import { GinghamBackground } from '../components/GinghamBackground';
import { ScrapbookPhoto } from '../components/ScrapbookPhoto';
import { HandwrittenNote } from '../components/HandwrittenNote';
import { MagneticButton } from '../components/MagneticButton';
import { InteractiveSticker } from '../components/InteractiveSticker';
import { PressedFlowerSVG, WaxSealSVG } from '../components/DecorativeMotifs';

export function InsideBoxPage() {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<BoxRevealItem>(BOX_REVEAL_ITEMS[0]);

  return (
    <GinghamBackground variant="espresso-linen" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#F3C9D5]">
            Chapter IV · Inside the Box
          </span>
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-3 font-display text-[clamp(2.5rem,5vw,4.35rem)] font-medium leading-[1.04] text-[#FFFDF9]"
          >
            One box. An entire year.
          </motion.h1>
          <HandwrittenNote
            text={
              isOpen
                ? 'Select any keepsake below to examine it up close.'
                : 'Click the blush keepsake box to untie the ribbon & lift the lid.'
            }
            inkColor="cream"
            className="mt-3 text-2xl text-[#F3C9D5]"
          />
        </div>

        {/* Physical Tabletop Stage */}
        <div className="box-perspective relative mt-14 border border-[#F3C9D5]/20 bg-[#F7F0E6] px-4 py-14 text-[#3E2624] scrapbook-shadow-deep sm:px-10 sm:py-18">
          <PressedFlowerSVG className="pointer-events-none absolute -top-6 right-6 hidden w-20 rotate-12 opacity-75 lg:block" />
          <InteractiveSticker
            kind="ribbon"
            rotate={-8}
            className="absolute top-5 left-6 hidden sm:inline-flex"
          />

          <div className="relative flex flex-col items-center">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close the keepsake box' : 'Open the keepsake box'}
              className="group relative cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#57252E]"
            >
              {/* Soft tabletop shadow */}
              <motion.div
                aria-hidden="true"
                animate={{
                  scale: isOpen ? 1.07 : 1,
                  opacity: isOpen ? 0.2 : 0.3,
                }}
                transition={{ duration: 0.6 }}
                className="absolute -bottom-5 left-1/2 h-8 w-[92%] -translate-x-1/2 rounded-full bg-[#3E2624] blur-xl"
              />

              {/* Box Base */}
              <div className="relative h-56 w-72 sm:h-64 sm:w-96">
                <div className="relative h-full w-full overflow-hidden border border-[#57252E]/25 bg-[#E8B8C4] shadow-inner">
                  {/* Tissue paper interior */}
                  <div className="absolute inset-2.5 flex flex-col items-center justify-center border border-[#57252E]/15 bg-[#FFFDF9] p-5 text-center">
                    <WaxSealSVG className="mb-2 h-11 w-11" label="W" />
                    <p className="font-serif text-xl italic text-[#57252E]">
                      Wrapped up for you
                    </p>
                    <p className="mt-1 font-hand text-xl text-[#3E2624]/80">
                      365 days, held in paper &amp; ink
                    </p>
                  </div>
                </div>

                {/* Animated Blush-Pink Box Lid */}
                <motion.div
                  animate={
                    isOpen
                      ? {
                          y: prefersReducedMotion ? -20 : -122,
                          rotateX: prefersReducedMotion ? 0 : 40,
                          scale: 0.94,
                          opacity: 0.92,
                        }
                      : { y: 0, rotateX: 0, scale: 1, opacity: 1 }
                  }
                  transition={{
                    duration: 0.72,
                    delay: isOpen ? 0.16 : 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="preserve-3d absolute -inset-1.5 z-20 flex flex-col items-center justify-center border border-[#57252E]/30 bg-[#F3C9D5] shadow-[0_18px_36px_-12px_rgba(62,38,36,0.3)] transition-transform group-hover:-translate-y-0.5"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-2.5 border border-[#57252E]/18"
                  />

                  <div className="relative z-10 text-center">
                    <span className="font-display text-2xl font-bold tracking-[0.24em] text-[#57252E] sm:text-3xl">
                      WRAP UP
                    </span>
                    <span className="mt-1 block text-[10px] tracking-[0.2em] uppercase text-[#57252E]/75">
                      December Edition
                    </span>
                  </div>

                  {/* Vertical Deep Burgundy Satin Ribbon */}
                  <motion.div
                    aria-hidden="true"
                    animate={
                      isOpen
                        ? { scaleY: 0.2, opacity: 0 }
                        : { scaleY: 1, opacity: 1 }
                    }
                    transition={{ duration: 0.4 }}
                    className="pointer-events-none absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 bg-[#57252E] shadow-md"
                  />

                  {/* Horizontal Deep Burgundy Satin Ribbon */}
                  <motion.div
                    aria-hidden="true"
                    animate={
                      isOpen
                        ? { scaleX: 0.2, opacity: 0 }
                        : { scaleX: 1, opacity: 1 }
                    }
                    transition={{ duration: 0.4 }}
                    className="pointer-events-none absolute inset-x-0 top-1/2 h-8 -translate-y-1/2 bg-[#57252E] shadow-md"
                  />

                  {/* Center Bow */}
                  <motion.div
                    aria-hidden="true"
                    animate={
                      isOpen
                        ? { scale: 0.6, y: -14, opacity: 0 }
                        : { scale: 1, y: 0, opacity: 1 }
                    }
                    transition={{ duration: 0.34 }}
                    className="pointer-events-none relative z-20"
                  >
                    <svg width="116" height="76" viewBox="0 0 116 76" fill="none">
                      <path
                        d="M56 36C38 14 10 14 12 34C14 52 38 48 56 36Z"
                        fill="#57252E"
                        stroke="#3E2624"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M60 36C78 14 106 14 104 34C102 52 78 48 60 36Z"
                        fill="#57252E"
                        stroke="#3E2624"
                        strokeWidth="1.2"
                      />
                      <path d="M55 40L36 70L47 68L57 44Z" fill="#3E2624" />
                      <path d="M61 40L80 70L69 68L59 44Z" fill="#3E2624" />
                      <rect x="51" y="29" width="14" height="14" rx="4" fill="#3E2624" />
                    </svg>
                  </motion.div>

                  {/* Gift Tag */}
                  <motion.div
                    animate={
                      isOpen
                        ? { rotate: 16, x: 14, opacity: 0 }
                        : { rotate: -7, x: 0, opacity: 1 }
                    }
                    transition={{ duration: 0.36 }}
                    className="pointer-events-none absolute -bottom-5 right-6 z-30 w-32 border border-[#57252E]/25 bg-[#FFFDF9] px-3 py-2 text-left scrapbook-shadow"
                  >
                    <span className="block text-[9px] tracking-[0.14em] uppercase text-[#57252E]/65">
                      Dec · 2026
                    </span>
                    <span className="block font-hand text-base text-[#3E2624]">
                      For this year
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </button>

            <div className="mt-10">
              <MagneticButton
                variant="burgundy"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {isOpen ? (
                  <>
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Wrap it back up</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Untie &amp; open the box</span>
                  </>
                )}
              </MagneticButton>
            </div>
          </div>

          {/* Revealed Keepsake Spread */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
                transition={{ duration: 0.5, delay: 0.14 }}
                className="mt-12 border-t border-[#57252E]/15 pt-10"
              >
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {BOX_REVEAL_ITEMS.map((item, idx) => {
                    const active = selectedItem.id === item.id;
                    return (
                      <motion.div
                        key={item.id}
                        initial={
                          prefersReducedMotion
                            ? false
                            : { opacity: 0, y: 22, scale: 0.94 }
                        }
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.45, delay: 0.18 + idx * 0.08 }}
                      >
                        <button
                          type="button"
                          onClick={() => setSelectedItem(item)}
                          className="w-full text-left cursor-pointer"
                        >
                          <ScrapbookPhoto
                            src={item.image}
                            alt={item.imageAlt}
                            caption={`${item.number} · ${item.title}`}
                            rotate={active ? 0 : idx % 2 === 0 ? -2 : 2}
                            tapeTone={idx % 2 === 0 ? 'blush' : 'chambray'}
                            paperClip={active}
                            clipReveal={false}
                            className={
                              active
                                ? 'ring-2 ring-[#57252E]'
                                : 'opacity-90 hover:opacity-100'
                            }
                          />
                        </button>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Selected Item Inspection Note */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedItem.id}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                    className="bg-ledger-paper mt-8 flex flex-col justify-between gap-4 border border-[#57252E]/20 p-6 sm:flex-row sm:items-center"
                  >
                    <div>
                      <span className="text-xs font-medium tracking-[0.14em] uppercase text-[#57252E]/70">
                        Item {selectedItem.number} — {selectedItem.title}
                      </span>
                      <p className="mt-1 text-base text-[#3E2624]">
                        {selectedItem.caption}
                      </p>
                    </div>
                    <p className="font-hand text-2xl text-[#57252E]">
                      &ldquo;{selectedItem.handwritten}&rdquo;
                    </p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Next Chapter CTA */}
        <div className="mt-12 flex justify-center">
          <MagneticButton variant="blush" onClick={() => navigate('/club')}>
            <span>Next: Join The Club</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </MagneticButton>
        </div>
      </div>
    </GinghamBackground>
  );
}
