import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { BRAND_IMAGES } from '../data/wrapUpContent';
import { WaxSealSVG } from './DecorativeMotifs';
import { scrapbookAudio } from '../utils/scrapbookAudio';

type TransitionKind =
  | 'paper-slide'
  | 'page-turn'
  | 'ribbon-sweep'
  | 'photo-expand'
  | 'letter-unfold'
  | 'cross-paper';

function getTransitionKind(fromPath: string, toPath: string): TransitionKind {
  if (fromPath === '/' && toPath === '/our-story') return 'paper-slide';
  if (fromPath === '/our-story' && toPath === '/experience') return 'page-turn';
  if (fromPath === '/experience' && toPath === '/inside-the-box') return 'ribbon-sweep';
  if (fromPath === '/inside-the-box' && toPath === '/club') return 'photo-expand';
  if (fromPath === '/club' && toPath === '/contact') return 'letter-unfold';
  return 'cross-paper';
}

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const prevPathRef = useRef<string>(location.pathname);
  const [activeTransition, setActiveTransition] = useState<{
    id: number;
    kind: TransitionKind;
  } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    const fromPath = prevPathRef.current;
    const toPath = location.pathname;
    prevPathRef.current = toPath;

    if (fromPath === toPath || prefersReducedMotion) {
      return;
    }

    if (scrapbookAudio.getState().isPlaying) {
      scrapbookAudio.playPaperSlide(0.55);
    }

    const kind = getTransitionKind(fromPath, toPath);
    const id = Date.now();
    setActiveTransition({ id, kind });

    const durationMs = kind === 'cross-paper' ? 520 : 880;
    const timer = window.setTimeout(() => {
      setActiveTransition((curr) => (curr?.id === id ? null : curr));
    }, durationMs);

    return () => window.clearTimeout(timer);
  }, [location.pathname, prefersReducedMotion]);

  return (
    <div className="relative min-h-[calc(100vh-70px)]">
      {/* Route View Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={prefersReducedMotion ? false : { opacity: 0.01 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0.01 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Signature Cinematic Page-to-Page Transition Layer */}
      <AnimatePresence>
        {activeTransition && !prefersReducedMotion && (
          <div
            key={activeTransition.id}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
          >
            {/* 1. HOME -> OUR STORY: Large Paper Sheet Slide */}
            {activeTransition.kind === 'paper-slide' && (
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: ['100%', '0%', '-105%'] }}
                transition={{ duration: 0.85, times: [0, 0.45, 1], ease: [0.22, 1, 0.36, 1] }}
                className="torn-paper-card absolute inset-y-0 -left-4 -right-4 flex items-center justify-center bg-[#F7F0E6] border-x border-[#57252E]/25 scrapbook-shadow-deep"
              >
                <div className="text-center">
                  <span className="block text-xs tracking-[0.22em] uppercase text-[#57252E]/65">
                    Chapter II
                  </span>
                  <span className="mt-2 block font-display text-4xl italic text-[#57252E]">
                    Our Story
                  </span>
                </div>
              </motion.div>
            )}

            {/* 2. OUR STORY -> EXPERIENCE: 3D Scrapbook Page Turn */}
            {activeTransition.kind === 'page-turn' && (
              <div className="box-perspective h-full w-full">
                <motion.div
                  initial={{ rotateY: 0, opacity: 1 }}
                  animate={{ rotateY: -102, opacity: [1, 1, 0] }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: 'left center' }}
                  className="preserve-3d absolute inset-0 flex items-center justify-center border-r-4 border-[#3E2624]/25 bg-[#FFFDF9] scrapbook-shadow-deep"
                >
                  <div className="text-center">
                    <span className="font-hand text-3xl text-[#57252E]">
                      Turning the page...
                    </span>
                  </div>
                </motion.div>
              </div>
            )}

            {/* 3. EXPERIENCE -> INSIDE THE BOX: Satin Ribbon Sweep */}
            {activeTransition.kind === 'ribbon-sweep' && (
              <>
                <motion.div
                  initial={{ x: '-105%' }}
                  animate={{ x: ['-105%', '0%', '105%'] }}
                  transition={{ duration: 0.82, times: [0, 0.45, 1], ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-0 top-1/3 h-24 bg-[#57252E] border-y-2 border-[#F3C9D5]/40 shadow-xl"
                />
                <motion.div
                  initial={{ x: '105%' }}
                  animate={{ x: ['105%', '0%', '-105%'] }}
                  transition={{ duration: 0.82, times: [0, 0.45, 1], ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-0 bottom-1/3 h-16 bg-[#F3C9D5] border-y border-[#57252E]/30 shadow-lg"
                />
              </>
            )}

            {/* 4. INSIDE THE BOX -> THE CLUB: Expanding Photograph */}
            {activeTransition.kind === 'photo-expand' && (
              <motion.div
                initial={{ scale: 0.28, opacity: 0.9, rotate: -4 }}
                animate={{ scale: 1.18, opacity: [0.95, 1, 0], rotate: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-full w-full items-center justify-center"
              >
                <div className="h-[80vh] w-[85vw] max-w-4xl border-8 border-[#FFFDF9] bg-[#57252E] p-3 shadow-2xl">
                  <img
                    src={BRAND_IMAGES.burgundyDesk}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            )}

            {/* 5. THE CLUB -> CONTACT: Unfolding Paper Letter */}
            {activeTransition.kind === 'letter-unfold' && (
              <motion.div
                initial={{ scaleY: 0.08, opacity: 0.95 }}
                animate={{ scaleY: [0.08, 1, 1], opacity: [0.95, 1, 0] }}
                transition={{ duration: 0.85, times: [0, 0.55, 1], ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'center center' }}
                className="bg-ledger-paper absolute inset-0 flex flex-col items-center justify-center border-y-4 border-[#57252E]/25"
              >
                <WaxSealSVG className="h-16 w-16 mb-3" label="W" />
                <span className="font-hand text-3xl text-[#57252E]">
                  Unfolding the final note...
                </span>
              </motion.div>
            )}

            {/* 6. Direct jump fallback: Clean dusty-pink paper sweep */}
            {activeTransition.kind === 'cross-paper' && (
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: ['100%', '0%', '-100%'] }}
                transition={{ duration: 0.5, times: [0, 0.45, 1], ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-[#E8B8C4] border-y border-[#57252E]/20"
              />
            )}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
