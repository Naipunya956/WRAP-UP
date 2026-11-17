interface VintageStampProps {
  topText?: string;
  centerText?: string;
  bottomText?: string;
  variant?: 'burgundy' | 'espresso' | 'cream';
  className?: string;
  rotate?: number;
}

export function VintageStamp({
  topText = 'WRAP UP ARCHIVE',
  centerText = '2026',
  bottomText = 'DEC · EDITION',
  variant = 'burgundy',
  className = '',
  rotate = -8,
}: VintageStampProps) {
  const strokeColor =
    variant === 'cream'
      ? '#FFFDF9'
      : variant === 'espresso'
        ? '#3E2624'
        : '#57252E';

  return (
    <div
      aria-hidden="true"
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`pointer-events-none inline-flex items-center justify-center select-none ${className}`}
    >
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
        <circle
          cx="48"
          cy="48"
          r="43"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeDasharray="3 2"
          strokeOpacity="0.82"
        />
        <circle
          cx="48"
          cy="48"
          r="36"
          stroke={strokeColor}
          strokeWidth="1"
          strokeOpacity="0.65"
        />
        <line
          x1="16"
          y1="38"
          x2="80"
          y2="38"
          stroke={strokeColor}
          strokeWidth="0.9"
          strokeOpacity="0.55"
        />
        <line
          x1="16"
          y1="58"
          x2="80"
          y2="58"
          stroke={strokeColor}
          strokeWidth="0.9"
          strokeOpacity="0.55"
        />
        <text
          x="48"
          y="31"
          textAnchor="middle"
          fill={strokeColor}
          fillOpacity="0.8"
          fontSize="6.5"
          letterSpacing="1.4"
          fontFamily="DM Sans, sans-serif"
          fontWeight="600"
        >
          {topText}
        </text>
        <text
          x="48"
          y="53"
          textAnchor="middle"
          fill={strokeColor}
          fontSize="14"
          letterSpacing="2"
          fontFamily="Bodoni Moda, Georgia, serif"
          fontWeight="600"
        >
          {centerText}
        </text>
        <text
          x="48"
          y="70"
          textAnchor="middle"
          fill={strokeColor}
          fillOpacity="0.8"
          fontSize="6.5"
          letterSpacing="1.2"
          fontFamily="DM Sans, sans-serif"
          fontWeight="500"
        >
          {bottomText}
        </text>
      </svg>
    </div>
  );
}
