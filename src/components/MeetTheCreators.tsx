import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { GinghamBackground } from './GinghamBackground';
import { HandwrittenNote } from './HandwrittenNote';
import { WashiTape, type WashiTone } from './WashiTape';
import { VintageStamp } from './VintageStamp';
import { PaperClipSVG } from './DecorativeMotifs';

interface CreatorProfile {
  id: 'sahasarika' | 'naipunya' | 'aliya';
  number: string;
  name: string;
  role: string;
  handwrittenQuote: string;
  studioNote: string;
  rotate: number;
  tapeTone: WashiTone;
}

const CREATORS: CreatorProfile[] = [
  {
    id: 'sahasarika',
    number: '01',
    name: 'Sahasarika Gowrishetty',
    role: 'Founder',
    handwrittenQuote:
      'Started with a ribbon-tied shoebox & a promise to never lose a single year.',
    studioNote: 'Chief Storykeeper · Letters & Linen Volumes',
    rotate: -2.2,
    tapeTone: 'blush',
  },
  {
    id: 'naipunya',
    number: '02',
    name: 'Naipunya Addula',
    role: 'Co-Founder',
    handwrittenQuote:
      'Always chasing golden-hour film frames & the little details in between.',
    studioNote: 'Visual Direction · Analog Archive & Canvas',
    rotate: 1.6,
    tapeTone: 'chambray',
  },
  {
    id: 'aliya',
    number: '03',
    name: 'Aliya Manal',
    role: 'Co-Founder',
    handwrittenQuote:
      'Turning quiet Sunday memories into wax seals, paper & keepsakes.',
    studioNote: 'Tactile Craft · Stationery & December Boxes',
    rotate: -1.4,
    tapeTone: 'cream',
  },
];

function CreatorDoodleSVG({ id }: { id: CreatorProfile['id'] }) {
  const ink = '#3E2624';
  const burgundy = '#57252E';
  const blush = '#F3C9D5';
  const dusty = '#E8B8C4';

  if (id === 'sahasarika') {
    return (
      <svg
        viewBox="0 0 220 220"
        fill="none"
        aria-label="Hand-drawn ink doodle portrait of Sahasarika Gowrishetty"
        className="h-full w-full"
      >
        {/* Subtle sketchbook paper circle wash */}
        <circle cx="110" cy="112" r="76" fill={blush} fillOpacity="0.35" />

        {/* Decorative doodle stars & flower clip */}
        <path
          d="M42 54L44.5 61L51.5 63.5L44.5 66L42 73L39.5 66L32.5 63.5L39.5 61L42 54Z"
          fill={blush}
          stroke={burgundy}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M174 68C179 62 186 64 185 71C184 78 174 83 174 83C174 83 164 78 163 71C162 64 169 62 174 68Z"
          fill={dusty}
          stroke={burgundy}
          strokeWidth="1.3"
        />

        {/* Hair back layer */}
        <path
          d="M66 96C62 62 84 40 112 42C142 44 158 66 156 102C155 128 164 148 158 164C144 162 142 150 138 144H84C80 152 76 164 62 162C58 145 69 124 66 96Z"
          fill={ink}
        />

        {/* Collar & cozy sweater */}
        <path
          d="M62 196C66 164 84 154 110 154C136 154 154 164 158 196"
          fill="#FFFDF9"
          stroke={ink}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M92 155C98 166 122 166 128 155"
          stroke={burgundy}
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Neck & Face */}
        <path
          d="M100 136V156C100 160 120 160 120 156V136"
          fill="#FFFDF9"
          stroke={ink}
          strokeWidth="2"
        />
        <path
          d="M78 96C78 72 92 60 110 60C128 60 142 72 142 96C142 122 128 140 110 140C92 140 78 122 78 96Z"
          fill="#FFFDF9"
          stroke={ink}
          strokeWidth="2.2"
        />

        {/* Hair front sweep + tucked flower */}
        <path
          d="M76 92C82 70 102 64 116 66C132 68 144 80 144 96C136 84 124 76 108 78C94 80 84 88 76 92Z"
          fill={ink}
        />
        <circle cx="142" cy="84" r="6" fill={blush} stroke={burgundy} strokeWidth="1.4" />
        <circle cx="142" cy="84" r="2.2" fill={burgundy} />

        {/* Blush cheeks */}
        <ellipse cx="90" cy="111" rx="7" ry="4" fill={dusty} fillOpacity="0.7" />
        <ellipse cx="130" cy="111" rx="7" ry="4" fill={dusty} fillOpacity="0.7" />

        {/* Eyes & warm smile */}
        <path d="M92 94C95 92 99 92 102 94" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M118 94C121 92 125 92 128 94" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="97" cy="102" r="2.4" fill={ink} />
        <circle cx="123" cy="102" r="2.4" fill={ink} />
        <path d="M109 104L107 112L111 113" stroke={ink} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M100 121C105 127 115 127 120 121"
          stroke={burgundy}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Fountain pen & tiny open notebook doodle */}
        <rect
          x="136"
          y="156"
          width="36"
          height="28"
          rx="2"
          transform="rotate(-8 136 156)"
          fill={blush}
          stroke={burgundy}
          strokeWidth="1.6"
        />
        <line
          x1="154"
          y1="154"
          x2="158"
          y2="181"
          stroke={burgundy}
          strokeWidth="1.3"
        />
      </svg>
    );
  }

  if (id === 'naipunya') {
    return (
      <svg
        viewBox="0 0 220 220"
        fill="none"
        aria-label="Hand-drawn ink doodle portrait of Naipunya Addula"
        className="h-full w-full"
      >
        <circle cx="110" cy="112" r="76" fill={dusty} fillOpacity="0.32" />

        {/* Doodle sparkles */}
        <path
          d="M175 48L177 54L183 56L177 58L175 64L173 58L167 56L173 54L175 48Z"
          fill="#FFFDF9"
          stroke={burgundy}
          strokeWidth="1.4"
        />

        {/* Hair back layer */}
        <path
          d="M68 94C68 58 88 42 112 42C136 42 154 58 154 96C154 126 150 150 144 162H76C72 150 68 124 68 94Z"
          fill={ink}
        />

        {/* Striped / collared top */}
        <path
          d="M62 196C66 164 84 154 110 154C136 154 154 164 158 196"
          fill="#DCE4EC"
          stroke={ink}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path d="M74 176H146" stroke={burgundy} strokeOpacity="0.35" strokeWidth="1.5" />
        <path d="M68 188H152" stroke={burgundy} strokeOpacity="0.35" strokeWidth="1.5" />

        {/* Neck & Face */}
        <path
          d="M100 136V156C100 160 120 160 120 156V136"
          fill="#FFFDF9"
          stroke={ink}
          strokeWidth="2"
        />
        <path
          d="M78 96C78 72 92 60 110 60C128 60 142 72 142 96C142 122 128 140 110 140C92 140 78 122 78 96Z"
          fill="#FFFDF9"
          stroke={ink}
          strokeWidth="2.2"
        />

        {/* Soft parted bangs */}
        <path
          d="M76 88C84 66 100 62 110 64C122 62 136 68 144 88C134 78 122 76 112 82C102 76 86 78 76 88Z"
          fill={ink}
        />

        {/* Round vintage wireframe glasses */}
        <circle cx="95" cy="103" r="10.5" stroke={burgundy} strokeWidth="1.8" fill="#FFFDF9" fillOpacity="0.35" />
        <circle cx="125" cy="103" r="10.5" stroke={burgundy} strokeWidth="1.8" fill="#FFFDF9" fillOpacity="0.35" />
        <path d="M105.5 103H114.5" stroke={burgundy} strokeWidth="1.8" />
        <circle cx="95" cy="103" r="2.3" fill={ink} />
        <circle cx="125" cy="103" r="2.3" fill={ink} />

        {/* Blush & smile */}
        <ellipse cx="88" cy="116" rx="6.5" ry="3.5" fill={blush} fillOpacity="0.85" />
        <ellipse cx="132" cy="116" rx="6.5" ry="3.5" fill={blush} fillOpacity="0.85" />
        <path d="M109 107L108 113L112 114" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M101 122C106 128 114 128 119 122"
          stroke={burgundy}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Vintage film camera doodle */}
        <g transform="translate(32 148) rotate(-10)">
          <rect x="0" y="6" width="38" height="24" rx="3" fill="#FFFDF9" stroke={burgundy} strokeWidth="1.7" />
          <path d="M10 6L13 1H25L28 6" fill={blush} stroke={burgundy} strokeWidth="1.5" />
          <circle cx="19" cy="18" r="6.5" fill={blush} stroke={burgundy} strokeWidth="1.6" />
          <circle cx="31" cy="11" r="1.5" fill={burgundy} />
        </g>
      </svg>
    );
  }

  // Aliya Manal
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      aria-label="Hand-drawn ink doodle portrait of Aliya Manal"
      className="h-full w-full"
    >
      <circle cx="110" cy="112" r="76" fill={blush} fillOpacity="0.38" />

      {/* Ribbon bow on top hair */}
      <path
        d="M110 46C96 34 82 38 86 48C89 56 102 52 110 46ZM110 46C124 34 138 38 134 48C131 56 118 52 110 46Z"
        fill={blush}
        stroke={burgundy}
        strokeWidth="1.6"
      />
      <circle cx="110" cy="47" r="3.5" fill={burgundy} />

      {/* Curly hair silhouette */}
      <path
        d="M66 96C58 76 72 52 96 48C110 46 124 46 138 52C154 60 160 80 156 102C162 118 156 138 146 146C142 156 134 162 124 158H96C86 162 76 156 72 144C62 136 58 114 66 96Z"
        fill={ink}
      />

      {/* Blush cardigan */}
      <path
        d="M62 196C66 164 84 154 110 154C136 154 154 164 158 196"
        fill={blush}
        stroke={ink}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M110 158V195" stroke={burgundy} strokeWidth="1.5" strokeDasharray="3 4" />

      {/* Neck & Face */}
      <path
        d="M100 136V156C100 160 120 160 120 156V136"
        fill="#FFFDF9"
        stroke={ink}
        strokeWidth="2"
      />
      <path
        d="M78 96C78 72 92 60 110 60C128 60 142 72 142 96C142 122 128 140 110 140C92 140 78 122 78 96Z"
        fill="#FFFDF9"
        stroke={ink}
        strokeWidth="2.2"
      />

      {/* Hair curls framing face */}
      <path
        d="M76 86C84 68 98 62 110 64C122 62 136 68 144 86C134 74 120 74 110 78C100 74 86 74 76 86Z"
        fill={ink}
      />

      {/* Eyes, lashes, blush & smile */}
      <path d="M91 93C94 90 99 90 102 93" stroke={ink} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M118 93C121 90 126 90 129 93" stroke={ink} strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="96" cy="102" r="2.4" fill={ink} />
      <circle cx="124" cy="102" r="2.4" fill={ink} />
      <ellipse cx="89" cy="113" rx="7" ry="4" fill={dusty} fillOpacity="0.8" />
      <ellipse cx="131" cy="113" rx="7" ry="4" fill={dusty} fillOpacity="0.8" />
      <path d="M109 104L108 112L111 113" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M100 121C105 127 115 127 120 121"
        stroke={burgundy}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Wax-sealed letter doodle */}
      <g transform="translate(142 150) rotate(10)">
        <rect x="0" y="0" width="38" height="26" fill="#FFFDF9" stroke={burgundy} strokeWidth="1.6" />
        <path d="M0 0L19 14L38 0" stroke={burgundy} strokeWidth="1.5" />
        <circle cx="19" cy="14" r="4.5" fill={burgundy} />
      </g>

      {/* Tiny botanical doodle */}
      <path d="M44 84C42 74 44 64 49 56" stroke={burgundy} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="49" cy="54" r="4" fill={blush} stroke={burgundy} strokeWidth="1.3" />
    </svg>
  );
}

interface MeetTheCreatorsProps {
  variant?: 'burgundy-grid' | 'dusty-pink';
}

export function MeetTheCreators({
  variant = 'burgundy-grid',
}: MeetTheCreatorsProps) {
  const prefersReducedMotion = useReducedMotion();
  const [activeCreator, setActiveCreator] = useState<string | null>(null);
  const isDark = variant === 'burgundy-grid';

  return (
    <GinghamBackground
      variant={variant}
      className="border-t border-[#57252E]/20 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span
              className={`text-xs font-medium tracking-[0.18em] uppercase ${
                isDark ? 'text-[#F3C9D5]' : 'text-[#57252E]'
              }`}
            >
              The Hands Behind the Paper
            </span>
            <h2
              className={`mt-2 font-display text-[clamp(2.35rem,4.4vw,3.75rem)] font-medium leading-[1.04] ${
                isDark ? 'text-[#FFFDF9]' : 'text-[#3E2624]'
              }`}
            >
              Meet the Creators
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <HandwrittenNote
              text="Three friends who believe every year deserves to be kept."
              inkColor={isDark ? 'cream' : 'burgundy'}
              className={`max-w-xs text-2xl ${isDark ? 'text-[#F3C9D5]' : ''}`}
            />
            <VintageStamp
              topText="STUDIO"
              centerText="03"
              bottomText="CREATORS"
              variant={isDark ? 'cream' : 'burgundy'}
              rotate={7}
              className="hidden sm:inline-flex"
            />
          </div>
        </div>

        {/* 3 Hand-Doodled Scrapbook Creator Cards */}
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {CREATORS.map((creator, idx) => {
            const isSelected = activeCreator === creator.id;
            return (
              <motion.article
                key={creator.id}
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 24, rotate: creator.rotate - 1 }
                }
                whileInView={{ opacity: 1, y: 0, rotate: creator.rotate }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { y: -6, rotate: 0, transition: { duration: 0.2 } }
                }
                transition={{
                  duration: 0.55,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() =>
                  setActiveCreator((curr) =>
                    curr === creator.id ? null : creator.id
                  )
                }
                className="group relative cursor-pointer border border-[#3E2624]/20 bg-[#FFFDF9] p-5 text-[#3E2624] scrapbook-shadow-deep"
              >
                <WashiTape
                  tone={creator.tapeTone}
                  animateReveal
                  rotate={idx % 2 === 0 ? -3 : 3}
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20"
                />
                {idx === 1 && (
                  <PaperClipSVG className="pointer-events-none absolute -top-5 right-5 z-20 h-11 w-5 drop-shadow-xs" />
                )}

                {/* Sketchbook Frame with Hand-Drawn Doodle */}
                <div className="bg-ledger-paper relative aspect-square w-full overflow-hidden border border-[#57252E]/15 p-3">
                  <motion.div
                    whileHover={
                      prefersReducedMotion
                        ? undefined
                        : { scale: 1.04, rotate: -1.5 }
                    }
                    transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                    className="h-full w-full"
                  >
                    <CreatorDoodleSVG id={creator.id} />
                  </motion.div>

                  <span className="absolute bottom-2 right-3 font-hand text-base text-[#57252E]/75">
                    sketch no. {creator.number}
                  </span>
                </div>

                {/* Unboxed Role & Name */}
                <div className="mt-5">
                  <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.15em] uppercase text-[#57252E]">
                    <span className="tabular-nums">{creator.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>{creator.role}</span>
                  </div>

                  <h3 className="mt-1 font-serif text-2xl font-semibold text-[#3E2624]">
                    {creator.name}
                  </h3>

                  <p className="mt-2.5 font-hand text-xl leading-snug text-[#57252E]">
                    &ldquo;{creator.handwrittenQuote}&rdquo;
                  </p>

                  <div className="mt-4 border-t border-dashed border-[#3E2624]/15 pt-3 text-xs text-[#3E2624]/65">
                    {isSelected ? (
                      <span className="font-medium text-[#57252E]">
                        {creator.studioNote}
                      </span>
                    ) : (
                      <span>{creator.studioNote}</span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </GinghamBackground>
  );
}
