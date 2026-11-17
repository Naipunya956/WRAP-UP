import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  DoodleFlowerSVG,
  PressedFlowerSVG,
} from './DecorativeMotifs';
import { VintageStamp } from './VintageStamp';
import { WashiTape } from './WashiTape';
import { MagneticButton } from './MagneticButton';
import { scrapbookAudio } from '../utils/scrapbookAudio';

export const INTRO_STORAGE_KEY = 'wrapup_intro_seen';

type IntroPhase =
  | 'sealed'
  | 'cracking'
  | 'flap-opening'
  | 'sliding-letter'
  | 'reading'
  | 'unfolding-out';

interface OpeningLetterExperienceProps {
  isOpen: boolean;
  onComplete: () => void;
}

const LETTER_PARAGRAPHS = [
  'When was the last time you really sat down and looked back at your life?',
  'Not just the big things. The little things, too.',
  "A lot can happen in twelve months. And somehow, we're always so busy living that we forget to keep a little piece of it.",
  "That's why we're here.",
  'We think your year deserves more than a folder of forgotten photographs.',
  'It deserves to be held, read, touched and remembered.',
  'So, consider this our little invitation.',
  "Let's keep your year somewhere a little more special.",
];

export function OpeningLetterExperience({
  isOpen,
  onComplete,
}: OpeningLetterExperienceProps) {
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<IntroPhase>('sealed');

  // Lock background scroll while opening experience is active
  useEffect(() => {
    if (!isOpen) return;
    setPhase('sealed');
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const finishIntro = () => {
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, 'true');
    } catch {
      // Ignore storage access restrictions
    }
    onComplete();
  };

  const handleSkip = () => {
    scrapbookAudio.startAmbience();
    scrapbookAudio.playPaperSlide(0.8);
    if (prefersReducedMotion) {
      finishIntro();
      return;
    }
    setPhase('unfolding-out');
    window.setTimeout(finishIntro, 720);
  };

  const handleOpenEnvelope = () => {
    if (phase !== 'sealed') return;

    scrapbookAudio.playPaperSlide(0.75);

    if (prefersReducedMotion) {
      setPhase('reading');
      return;
    }

    setPhase('cracking');
    window.setTimeout(() => setPhase('flap-opening'), 520);
    window.setTimeout(() => setPhase('sliding-letter'), 1120);
    window.setTimeout(() => setPhase('reading'), 1900);
  };

  const handleEnterWorld = () => {
    scrapbookAudio.startAmbience();
    scrapbookAudio.playPaperSlide(1);
    if (prefersReducedMotion) {
      finishIntro();
      return;
    }
    setPhase('unfolding-out');
    window.setTimeout(finishIntro, 820);
  };

  const isEnvelopeVisible =
    phase === 'sealed' ||
    phase === 'cracking' ||
    phase === 'flap-opening' ||
    phase === 'sliding-letter';

  const isSealCracked = phase !== 'sealed';
  const isFlapOpen =
    phase === 'flap-opening' || phase === 'sliding-letter';
  const isLetterSliding = phase === 'sliding-letter';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="WRAP UP personal invitation letter"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
          className="bg-dusty-paper fixed inset-0 z-50 overflow-y-auto overflow-x-hidden"
        >
          {/* Delicate gingham corner scraps */}
          <div
            aria-hidden="true"
            className="bg-gingham pointer-events-none fixed -top-10 -left-10 h-44 w-56 -rotate-12 border border-[#57252E]/15 opacity-80 scrapbook-shadow sm:h-56 sm:w-72"
          />
          <div
            aria-hidden="true"
            className="bg-gingham pointer-events-none fixed -bottom-10 -right-10 h-44 w-56 -rotate-12 border border-[#57252E]/15 opacity-80 scrapbook-shadow sm:h-56 sm:w-72"
          />

          {/* Subtle floating paper scraps & fine-line floral doodles */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 overflow-hidden"
          >
            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, -8, 0], rotate: [-12, -8, -12] }
              }
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[16%] left-[10%] hidden sm:block"
            >
              <DoodleFlowerSVG className="h-11 w-11 opacity-55" />
            </motion.div>

            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, 9, 0], rotate: [10, 15, 10] }
              }
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-[18%] left-[14%] hidden h-8 w-12 -rotate-6 border border-[#3E2624]/15 bg-[#FFFDF9]/80 scrapbook-shadow md:block"
            />

            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, -10, 0], rotate: [8, 4, 8] }
              }
              transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[20%] right-[12%] hidden sm:block"
            >
              <DoodleFlowerSVG className="h-9 w-9 opacity-45" />
            </motion.div>

            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, 7, 0], rotate: [-6, -2, -6] }
              }
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-[15%] bottom-[24%] hidden h-10 w-8 rotate-12 border border-[#57252E]/15 bg-[#F7F0E6]/85 scrapbook-shadow md:block"
            />
          </div>

          {/* Top Bar inside Intro: Wordmark + Skip Intro */}
          <div className="relative z-30 mx-auto flex max-w-5xl items-center justify-between px-6 pt-5 sm:pt-7">
            <span className="font-display text-sm font-semibold tracking-[0.22em] text-[#57252E]/80">
              WRAP UP
            </span>
            <button
              type="button"
              onClick={handleSkip}
              className="border border-[#57252E]/30 bg-[#FFFDF9]/75 px-3.5 py-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-[#57252E] transition-colors hover:bg-[#FFFDF9] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#57252E]"
            >
              Skip intro
            </button>
          </div>

          {/* Main Interactive Stage */}
          <div className="relative z-20 flex min-h-[calc(100vh-76px)] flex-col items-center justify-center px-4 py-8 sm:px-6">
            <AnimatePresence mode="wait">
              {/* PHASE 1: SEALED / OPENING 3D ENVELOPE */}
              {isEnvelopeVisible && (
                <motion.div
                  key="envelope-stage"
                  initial={{ opacity: 0, y: 16, scale: 0.97 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: isLetterSliding ? 1.04 : 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 36,
                    scale: 0.95,
                    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                  }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="flex w-full max-w-xl flex-col items-center text-center"
                >
                  {/* Top Label */}
                  <p className="text-xs font-medium tracking-[0.26em] uppercase text-[#57252E]">
                    A LITTLE SOMETHING FOR YOU
                  </p>

                  {/* Realistic 3D Cream Envelope */}
                  <div className="box-perspective relative mt-8 mb-8 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={handleOpenEnvelope}
                      disabled={phase !== 'sealed'}
                      aria-label="Open the WRAP UP love letter envelope"
                      className={`group relative h-[220px] w-[310px] sm:h-[260px] sm:w-[390px] ${
                        phase === 'sealed' ? 'cursor-pointer' : 'cursor-default'
                      } focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#57252E]`}
                    >
                      {/* Realistic soft espresso shadow underneath envelope */}
                      <div
                        aria-hidden="true"
                        className="absolute -bottom-5 left-1/2 h-8 w-[90%] -translate-x-1/2 rounded-full bg-[#3E2624]/30 blur-xl transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Inner cream/gingham envelope lining revealed when flap opens */}
                      <div
                        aria-hidden="true"
                        className="bg-gingham absolute inset-0 border border-[#3E2624]/15 shadow-inner"
                      />

                      {/* Sliding Cream Letter peeking & rising out of envelope */}
                      <motion.div
                        aria-hidden="true"
                        initial={{ y: 18, opacity: 0.95 }}
                        animate={
                          isLetterSliding
                            ? { y: -115, scale: 1.03, opacity: 1 }
                            : isFlapOpen
                              ? { y: -14, opacity: 1 }
                              : { y: 18, opacity: 0.95 }
                        }
                        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-cream-paper absolute inset-x-4 top-3 bottom-3 z-10 border border-[#3E2624]/15 p-5 text-left scrapbook-shadow"
                      >
                        <span className="font-hand text-2xl text-[#57252E]">
                          Dear you,
                        </span>
                        <div className="mt-3 space-y-2 opacity-40">
                          <div className="h-1.5 w-4/5 bg-[#3E2624]/25" />
                          <div className="h-1.5 w-3/4 bg-[#3E2624]/25" />
                          <div className="h-1.5 w-2/3 bg-[#3E2624]/25" />
                        </div>
                      </motion.div>

                      {/* Envelope Front Pocket (Side & Bottom Triangular Flaps) */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 z-20 overflow-hidden border border-[#3E2624]/18 bg-[#F7F0E6] shadow-[0_14px_30px_-10px_rgba(62,38,36,0.24)]"
                      >
                        {/* Left fold */}
                        <div
                          className="absolute inset-0 bg-[#EFE6D8]"
                          style={{
                            clipPath: 'polygon(0 0, 52% 54%, 0 100%)',
                          }}
                        />
                        {/* Right fold */}
                        <div
                          className="absolute inset-0 bg-[#ECE2D2]"
                          style={{
                            clipPath: 'polygon(100% 0, 48% 54%, 100% 100%)',
                          }}
                        />
                        {/* Bottom triangular pocket with subtle handmade shadow seam */}
                        <div
                          className="bg-cream-paper absolute inset-0 border-t border-[#3E2624]/15"
                          style={{
                            clipPath: 'polygon(0 100%, 50% 44%, 100% 100%)',
                            boxShadow: 'inset 0 2px 6px rgba(62,38,36,0.08)',
                          }}
                        />

                        {/* Handwritten WRAP UP inscription + tiny pressed flower & heart */}
                        <div className="absolute right-5 bottom-4 z-10 text-right">
                          <span className="block font-hand text-xl leading-none text-[#3E2624] sm:text-2xl">
                            Wrap Up ♡
                          </span>
                          <span className="mt-1 block text-[9px] tracking-[0.16em] uppercase text-[#57252E]/65">
                            Dec · 2026
                          </span>
                        </div>

                        <PressedFlowerSVG className="absolute bottom-2 left-4 h-16 w-12 opacity-75" />
                      </div>

                      {/* 3D Animated Top Envelope Flap */}
                      <motion.div
                        aria-hidden="true"
                        animate={{
                          rotateX: isFlapOpen ? 175 : 0,
                          zIndex: isFlapOpen ? 5 : 30,
                        }}
                        transition={{
                          rotateX: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                          zIndex: { delay: isFlapOpen ? 0.25 : 0 },
                        }}
                        style={{ transformOrigin: 'top center' }}
                        className="preserve-3d pointer-events-none absolute inset-x-0 top-0 h-[58%]"
                      >
                        <div
                          className="bg-cream-paper h-full w-full border border-[#3E2624]/15 drop-shadow-[0_4px_6px_rgba(62,38,36,0.12)]"
                          style={{
                            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                          }}
                        />
                      </motion.div>

                      {/* Splitting Deep Burgundy Wax Seal */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-[53%] left-1/2 z-40 -translate-x-1/2 -translate-y-1/2"
                      >
                        <div className="relative h-14 w-14">
                          {/* Left half of wax seal */}
                          <motion.svg
                            viewBox="0 0 64 64"
                            fill="none"
                            animate={
                              isSealCracked
                                ? { x: -12, y: 4, rotate: -18, opacity: 0 }
                                : { x: 0, y: 0, rotate: 0, opacity: 1 }
                            }
                            transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 h-14 w-14 drop-shadow-md"
                          >
                            <defs>
                              <clipPath id="seal-left">
                                <polygon points="0,0 34,0 29,22 35,40 30,64 0,64" />
                              </clipPath>
                            </defs>
                            <g clipPath="url(#seal-left)">
                              <path
                                d="M32 4C39 4 44 7 49 10C54 13 58 19 59 26C60 33 58 41 53 47C48 53 41 59 33 59C25 59 17 56 12 50C7 44 4 36 5 28C6 20 11 13 17 9C22 5 26 4 32 4Z"
                                fill="#57252E"
                              />
                              <circle
                                cx="32"
                                cy="31"
                                r="18"
                                stroke="#F3C9D5"
                                strokeOpacity="0.4"
                                strokeWidth="1"
                              />
                              <text
                                x="32"
                                y="36"
                                textAnchor="middle"
                                fill="#FFFDF9"
                                fontSize="15"
                                fontFamily="Bodoni Moda, Georgia, serif"
                                fontStyle="italic"
                                fontWeight="600"
                              >
                                W
                              </text>
                            </g>
                          </motion.svg>

                          {/* Right half of wax seal */}
                          <motion.svg
                            viewBox="0 0 64 64"
                            fill="none"
                            animate={
                              isSealCracked
                                ? { x: 12, y: 6, rotate: 18, opacity: 0 }
                                : { x: 0, y: 0, rotate: 0, opacity: 1 }
                            }
                            transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 h-14 w-14 drop-shadow-md"
                          >
                            <defs>
                              <clipPath id="seal-right">
                                <polygon points="34,0 64,0 64,64 30,64 35,40 29,22" />
                              </clipPath>
                            </defs>
                            <g clipPath="url(#seal-right)">
                              <path
                                d="M32 4C39 4 44 7 49 10C54 13 58 19 59 26C60 33 58 41 53 47C48 53 41 59 33 59C25 59 17 56 12 50C7 44 4 36 5 28C6 20 11 13 17 9C22 5 26 4 32 4Z"
                                fill="#57252E"
                              />
                              <circle
                                cx="32"
                                cy="31"
                                r="18"
                                stroke="#F3C9D5"
                                strokeOpacity="0.4"
                                strokeWidth="1"
                              />
                              <text
                                x="32"
                                y="36"
                                textAnchor="middle"
                                fill="#FFFDF9"
                                fontSize="15"
                                fontFamily="Bodoni Moda, Georgia, serif"
                                fontStyle="italic"
                                fontWeight="600"
                              >
                                W
                              </text>
                            </g>
                          </motion.svg>
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Bottom prompt */}
                  <p className="font-serif text-2xl italic text-[#3E2624]">
                    Open when you&apos;re ready ♡
                  </p>

                  <motion.button
                    type="button"
                    onClick={handleOpenEnvelope}
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : { opacity: [0.55, 1, 0.55], y: [0, -2, 0] }
                    }
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="mt-2.5 text-xs font-medium tracking-[0.18em] uppercase text-[#57252E] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#57252E]"
                  >
                    Click to open
                  </motion.button>
                </motion.div>
              )}

              {/* PHASE 2: UNFOLDED HANDWRITTEN LOVE LETTER */}
              {(phase === 'reading' || phase === 'unfolding-out') && (
                <motion.article
                  key="letter-stage"
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { opacity: 0, scale: 0.9, scaleY: 0.45, y: 40 }
                  }
                  animate={
                    phase === 'unfolding-out'
                      ? {
                          x: -60,
                          y: -24,
                          rotate: -4,
                          opacity: 0,
                          transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                        }
                      : { opacity: 1, scale: 1, scaleY: 1, y: 0 }
                  }
                  transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: 'center center' }}
                  className="bg-ledger-paper relative my-4 w-full max-w-2xl border border-[#3E2624]/18 px-6 py-9 text-[#3E2624] scrapbook-shadow-deep sm:px-12 sm:py-12"
                >
                  <WashiTape
                    tone="blush"
                    rotate={-3}
                    className="absolute -top-2.5 left-10 z-20"
                  />

                  {/* Subtle horizontal paper fold crease line across middle */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-[#3E2624]/8 shadow-[0_1px_2px_rgba(62,38,36,0.06)]"
                  />

                  {/* Top metadata: Date Stamp + Pressed Flower */}
                  <div className="flex items-start justify-between gap-4 border-b border-[#57252E]/15 pb-5">
                    <div>
                      <span className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#57252E]/70">
                        Personal Correspondence
                      </span>
                      <motion.p
                        initial={prefersReducedMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="mt-2 font-hand text-3xl text-[#57252E] sm:text-4xl"
                      >
                        Dear you,
                      </motion.p>
                    </div>

                    <div className="flex items-center gap-2">
                      <VintageStamp
                        topText="WRAP UP"
                        centerText="DEC"
                        bottomText="2026"
                        variant="burgundy"
                        rotate={6}
                        className="scale-75 -my-4"
                      />
                      <PressedFlowerSVG className="hidden h-16 w-12 opacity-85 sm:block" />
                    </div>
                  </div>

                  {/* Progressive Letter Copy in Cormorant Garamond */}
                  <div className="mt-6 space-y-4 font-serif text-[1.125rem] leading-[1.68] text-[#3E2624] sm:text-[1.24rem]">
                    {LETTER_PARAGRAPHS.map((paragraph, idx) => (
                      <motion.p
                        key={idx}
                        initial={
                          prefersReducedMotion
                            ? false
                            : { opacity: 0, y: 8 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.45,
                          delay: prefersReducedMotion ? 0 : 0.25 + idx * 0.14,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>

                  {/* Signature & Bottom CTA */}
                  <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: prefersReducedMotion ? 0 : 1.4,
                    }}
                    className="mt-8 flex flex-col justify-between gap-6 border-t border-dashed border-[#57252E]/20 pt-6 sm:flex-row sm:items-end"
                  >
                    <div>
                      <p className="font-hand text-2xl text-[#3E2624]">
                        With love,
                      </p>
                      <p className="font-hand text-3xl font-semibold text-[#57252E]">
                        Wrap Up ♡
                      </p>
                    </div>

                    <MagneticButton variant="burgundy" onClick={handleEnterWorld}>
                      <span>Come inside ♡</span>
                    </MagneticButton>
                  </motion.div>
                </motion.article>
              )}
            </AnimatePresence>
          </div>

          {/* Paper Unfolding Curtain Reveal into the Pink Gingham Homepage */}
          <AnimatePresence>
            {phase === 'unfolding-out' && !prefersReducedMotion && (
              <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 z-50 flex overflow-hidden"
              >
                <motion.div
                  initial={{ x: '0%' }}
                  animate={{ x: '-102%' }}
                  transition={{ duration: 0.78, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-cream-paper h-full w-1/2 border-r border-[#57252E]/20 shadow-2xl"
                />
                <motion.div
                  initial={{ x: '0%' }}
                  animate={{ x: '102%' }}
                  transition={{ duration: 0.78, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-cream-paper h-full w-1/2 border-l border-[#57252E]/20 shadow-2xl"
                />
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
