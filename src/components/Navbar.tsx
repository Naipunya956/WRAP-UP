import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Experience', to: '/experience' },
  { label: 'Inside the Box', to: '/inside-the-box' },
  { label: 'The Club', to: '/club' },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'border-b border-[#57252E]/20 bg-[#FFFDF9]/95 backdrop-blur-md'
          : 'border-b border-[#57252E]/12 bg-[#FFFDF9]/90 backdrop-blur-xs'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-3.5 lg:px-8">
        {/* Zone 1: Single text wordmark */}
        <Link
          to="/"
          className="font-display text-xl font-semibold tracking-[0.18em] text-[#57252E] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#57252E]"
        >
          WRAP UP
        </Link>

        {/* Zone 2: 5 clean single-line nav links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#3E2624]/80"
        >
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#57252E] ${
                  isActive
                    ? 'text-[#57252E] font-semibold'
                    : 'text-[#3E2624]/75 hover:text-[#57252E]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#57252E]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA + mobile drawer button */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center bg-[#57252E] px-5 py-2 text-xs font-medium tracking-[0.1em] uppercase text-[#FFFDF9] whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#3E2624] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#57252E]"
          >
            Join Us
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center border border-[#57252E]/25 bg-[#F7F0E6] text-[#57252E] md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#57252E]"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-[#57252E]/20 bg-[#FFFDF9] px-6 py-5 md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `py-2.5 text-base font-medium border-b border-[#3E2624]/10 ${
                      isActive ? 'text-[#57252E] font-semibold' : 'text-[#3E2624]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center justify-center bg-[#57252E] px-5 py-3 text-xs font-medium tracking-[0.12em] uppercase text-[#FFFDF9]"
              >
                Join Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
