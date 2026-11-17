import type { MonthMotif } from '../data/wrapUpContent';

export function PaperClipSVG({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 60"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M9 18V44C9 50.6 19 50.6 19 44V13C19 5.5 7 5.5 7 13V42"
        stroke="#A48253"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M9 18V44C9 50.6 19 50.6 19 44V13C19 5.5 7 5.5 7 13V42"
        stroke="#FFFDF9"
        strokeOpacity="0.45"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleFlowerSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <circle cx="32" cy="18" r="8" fill="#F3C9D5" stroke="#57252E" strokeWidth="1.5" />
      <circle cx="45" cy="28" r="8" fill="#FFFDF9" stroke="#57252E" strokeWidth="1.5" />
      <circle cx="40" cy="43" r="8" fill="#F3C9D5" stroke="#57252E" strokeWidth="1.5" />
      <circle cx="24" cy="43" r="8" fill="#FFFDF9" stroke="#57252E" strokeWidth="1.5" />
      <circle cx="19" cy="28" r="8" fill="#F3C9D5" stroke="#57252E" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="7" fill="#57252E" />
      <circle cx="30" cy="30" r="1.5" fill="#FFFDF9" />
    </svg>
  );
}

export function DoodleStarSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path
        d="M24 4L28.2 18.8L43 23L28.2 27.2L24 42L19.8 27.2L5 23L19.8 18.8L24 4Z"
        fill="#F3C9D5"
        stroke="#57252E"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RibbonIllustrationSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 72" fill="none" aria-hidden="true" className={className}>
      <path
        d="M58 34C38 10 10 12 12 32C14 50 38 44 58 34Z"
        fill="#57252E"
        stroke="#3E2624"
        strokeWidth="1.4"
      />
      <path
        d="M62 34C82 10 110 12 108 32C106 50 82 44 62 34Z"
        fill="#57252E"
        stroke="#3E2624"
        strokeWidth="1.4"
      />
      <path d="M56 38L38 68L49 65L59 42Z" fill="#57252E" />
      <path d="M64 38L82 68L71 65L61 42Z" fill="#57252E" />
      <rect x="53" y="28" width="14" height="13" rx="3" fill="#3E2624" />
    </svg>
  );
}

export function PressedFlowerSVG({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 180"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M58 172C56 135 61 102 64 62"
        stroke="#3E2624"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />
      <path
        d="M60 128C46 122 36 112 33 102C44 104 54 114 60 128Z"
        fill="#F3C9D5"
        fillOpacity="0.6"
        stroke="#3E2624"
        strokeWidth="1.1"
        strokeOpacity="0.65"
      />
      <path
        d="M62 106C76 99 88 90 92 78C80 81 69 91 62 106Z"
        fill="#E8B8C4"
        fillOpacity="0.55"
        stroke="#3E2624"
        strokeWidth="1.1"
        strokeOpacity="0.65"
      />
      <g transform="translate(64 46)">
        <ellipse
          cx="0"
          cy="-18"
          rx="11"
          ry="16"
          fill="#F3C9D5"
          fillOpacity="0.82"
          stroke="#3E2624"
          strokeWidth="1.1"
          strokeOpacity="0.65"
        />
        <ellipse
          cx="17"
          cy="-6"
          rx="11"
          ry="16"
          transform="rotate(68 17 -6)"
          fill="#FFFDF9"
          fillOpacity="0.9"
          stroke="#3E2624"
          strokeWidth="1.1"
          strokeOpacity="0.65"
        />
        <ellipse
          cx="11"
          cy="14"
          rx="11"
          ry="16"
          transform="rotate(142 11 14)"
          fill="#F3C9D5"
          fillOpacity="0.8"
          stroke="#3E2624"
          strokeWidth="1.1"
          strokeOpacity="0.65"
        />
        <ellipse
          cx="-12"
          cy="14"
          rx="11"
          ry="16"
          transform="rotate(-142 -12 14)"
          fill="#E8B8C4"
          fillOpacity="0.75"
          stroke="#3E2624"
          strokeWidth="1.1"
          strokeOpacity="0.65"
        />
        <ellipse
          cx="-17"
          cy="-6"
          rx="11"
          ry="16"
          transform="rotate(-68 -17 -6)"
          fill="#FFFDF9"
          fillOpacity="0.92"
          stroke="#3E2624"
          strokeWidth="1.1"
          strokeOpacity="0.65"
        />
        <circle cx="0" cy="0" r="6" fill="#57252E" />
      </g>
    </svg>
  );
}

export function WaxSealSVG({
  className = '',
  label = 'W',
}: {
  className?: string;
  label?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M32 4C39 4 44 7 49 10C54 13 58 19 59 26C60 33 58 41 53 47C48 53 41 59 33 59C25 59 17 56 12 50C7 44 4 36 5 28C6 20 11 13 17 9C22 5 26 4 32 4Z"
        fill="#57252E"
        stroke="#3E2624"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      <circle
        cx="32"
        cy="31"
        r="19"
        fill="#57252E"
        stroke="#F3C9D5"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <circle
        cx="32"
        cy="31"
        r="15.5"
        stroke="#F7F0E6"
        strokeOpacity="0.35"
        strokeWidth="0.75"
        strokeDasharray="2 2"
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
        {label}
      </text>
    </svg>
  );
}

export function HandwrittenArrowSVG({
  className = '',
  color = '#57252E',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 90 42"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 32C24 14 54 10 82 21"
        stroke={color}
        strokeOpacity="0.72"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
      <path
        d="M73 14L83 21.5L72 26"
        stroke={color}
        strokeOpacity="0.78"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MonthMotifSVG({
  motif,
  className = '',
}: {
  motif: MonthMotif;
  className?: string;
}) {
  const common = {
    stroke: '#57252E',
    strokeWidth: 1.35,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (motif) {
    case 'chamomile':
      return (
        <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
          <circle cx="18" cy="15" r="3.2" fill="#F3C9D5" {...common} />
          <path d="M18 18.5V31" {...common} />
          <path d="M18 6V11M18 19V22M9 15H14M22 15H27M11.5 8.5L15 12M21 18L24.5 21.5M24.5 8.5L21 12M15 18L11.5 21.5" {...common} />
        </svg>
      );
    case 'envelope':
      return (
        <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
          <rect x="5" y="9" width="26" height="18" rx="1" fill="#FFFDF9" {...common} />
          <path d="M5 10L18 20L31 10" {...common} />
          <circle cx="18" cy="20" r="2.6" fill="#C98799" stroke="#57252E" strokeWidth="1" />
        </svg>
      );
    case 'leaf':
      return (
        <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
          <path d="M9 28C9 15 17 8 28 8C28 19 21 27 9 28Z" fill="#F3C9D5" fillOpacity="0.65" {...common} />
          <path d="M7 30L23 13" {...common} />
        </svg>
      );
    case 'petal':
      return (
        <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
          <path d="M18 6C24 12 26 20 18 29C10 20 12 12 18 6Z" fill="#F3C9D5" fillOpacity="0.7" {...common} />
          <path d="M18 13V28" {...common} />
        </svg>
      );
    case 'ticket':
      return (
        <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
          <path d="M5 12H31V15.5C29.5 15.5 29.5 20.5 31 20.5V24H5V20.5C6.5 20.5 6.5 15.5 5 15.5V12Z" fill="#FFFDF9" {...common} />
          <path d="M14 13V23" strokeDasharray="2 2" {...common} />
        </svg>
      );
    case 'star':
      return (
        <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
          <path d="M18 5L20.5 15.5L31 18L20.5 20.5L18 31L15.5 20.5L5 18L15.5 15.5L18 5Z" fill="#F3C9D5" fillOpacity="0.7" {...common} />
        </svg>
      );
    case 'moon':
      return (
        <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
          <path d="M23 7C16.5 8.5 12 14.5 13.5 21C14.8 26.5 20 30 25.5 29C20.5 27.5 17.5 22.5 18.5 17C19.3 12.6 21 9.4 23 7Z" fill="#F3C9D5" fillOpacity="0.7" {...common} />
        </svg>
      );
    case 'stamp':
      return (
        <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
          <rect x="7" y="7" width="22" height="22" strokeDasharray="2 2" fill="#FFFDF9" {...common} />
          <rect x="11" y="11" width="14" height="14" fill="#F3C9D5" fillOpacity="0.6" {...common} />
        </svg>
      );
    case 'bookmark':
      return (
        <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
          <path d="M11 6H25V30L18 24L11 30V6Z" fill="#F3C9D5" fillOpacity="0.6" {...common} />
        </svg>
      );
    case 'key':
      return (
        <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
          <circle cx="13" cy="14" r="5" fill="#F3C9D5" fillOpacity="0.6" {...common} />
          <path d="M17 17L28 28M24 24L27 21M21 21L24 18" {...common} />
        </svg>
      );
    case 'seal':
      return (
        <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
          <circle cx="18" cy="18" r="10" fill="#C98799" fillOpacity="0.7" {...common} />
          <circle cx="18" cy="18" r="6" strokeDasharray="1.5 2" {...common} />
        </svg>
      );
    case 'ribbon':
    default:
      return (
        <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
          <path d="M18 16C14 10 7 10 7 15C7 19 14 19 18 16ZM18 16C22 10 29 10 29 15C29 19 22 19 18 16Z" fill="#F3C9D5" fillOpacity="0.8" {...common} />
          <path d="M18 16L12 29M18 16L24 29" {...common} />
        </svg>
      );
  }
}
