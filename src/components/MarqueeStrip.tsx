interface MarqueeStripProps {
  tone?: 'burgundy' | 'cream' | 'blush';
}

const ITEMS = [
  'YOUR YEAR. YOUR STORY. YOUR MEMORIES.',
  'WE DON’T JUST WRAP GIFTS. WE WRAP UP YEARS.',
  'YOUR YEAR. YOUR STORY. YOUR MEMORIES.',
  '365 DAYS HELD IN PAPER & INK.',
];

export function MarqueeStrip({ tone = 'burgundy' }: MarqueeStripProps) {
  const styles =
    tone === 'burgundy'
      ? 'bg-[#57252E] text-[#FFFDF9] border-y border-[#F3C9D5]/25'
      : tone === 'blush'
        ? 'bg-[#F3C9D5] text-[#57252E] border-y border-[#57252E]/25'
        : 'bg-[#FFFDF9] text-[#57252E] border-y border-[#57252E]/20';

  return (
    <div
      aria-label="Editorial statement ticker"
      className={`relative overflow-hidden py-3.5 select-none ${styles}`}
    >
      <div className="flex w-max animate-marquee items-center">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center">
            {ITEMS.map((text, idx) => (
              <span
                key={`${dup}-${idx}`}
                className="flex items-center gap-6 px-6 text-xs font-medium tracking-[0.2em] uppercase whitespace-nowrap"
              >
                <span>{text}</span>
                <span aria-hidden="true" className="font-serif text-base italic opacity-75">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
