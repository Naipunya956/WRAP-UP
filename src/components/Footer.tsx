import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-[#F3C9D5]/20 bg-[#3E2624] py-16 text-[#F7F0E6]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <Link
              to="/"
              className="font-display text-2xl font-semibold tracking-[0.2em] text-[#FFFDF9]"
            >
              WRAP UP
            </Link>
            <p className="mt-3 max-w-sm font-serif text-lg italic text-[#F3C9D5]">
              Every year leaves a story. We&apos;re here to keep it.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-[#F7F0E6]/85"
          >
            <Link to="/" className="hover:text-[#F3C9D5] transition-colors whitespace-nowrap">
              Home
            </Link>
            <span aria-hidden="true" className="text-[#F3C9D5]/35">
              |
            </span>
            <Link
              to="/our-story"
              className="hover:text-[#F3C9D5] transition-colors whitespace-nowrap"
            >
              Our Story
            </Link>
            <span aria-hidden="true" className="text-[#F3C9D5]/35">
              |
            </span>
            <Link
              to="/experience"
              className="hover:text-[#F3C9D5] transition-colors whitespace-nowrap"
            >
              Experience
            </Link>
            <span aria-hidden="true" className="text-[#F3C9D5]/35">
              |
            </span>
            <Link
              to="/inside-the-box"
              className="hover:text-[#F3C9D5] transition-colors whitespace-nowrap"
            >
              Inside the Box
            </Link>
            <span aria-hidden="true" className="text-[#F3C9D5]/35">
              |
            </span>
            <Link to="/club" className="hover:text-[#F3C9D5] transition-colors whitespace-nowrap">
              The Club
            </Link>
            <span aria-hidden="true" className="text-[#F3C9D5]/35">
              |
            </span>
            <Link
              to="/contact"
              className="hover:text-[#F3C9D5] transition-colors whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-[#F3C9D5]/15 pt-7 text-xs text-[#F7F0E6]/65 sm:flex-row sm:items-center">
          <p>Copyright &copy; 2026 WRAP UP.</p>

          <div className="flex items-center gap-6">
            <Link to="/club" className="hover:text-[#F3C9D5] transition-colors">
              Instagram
            </Link>
            <Link to="/our-story" className="hover:text-[#F3C9D5] transition-colors">
              Pinterest
            </Link>
            <Link to="/experience" className="hover:text-[#F3C9D5] transition-colors">
              Journal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
