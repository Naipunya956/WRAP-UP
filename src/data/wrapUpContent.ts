export type MonthMotif =
  | 'chamomile'
  | 'stamp'
  | 'star'
  | 'ticket'
  | 'leaf'
  | 'seal'
  | 'ribbon'
  | 'moon'
  | 'bookmark'
  | 'key'
  | 'petal'
  | 'envelope';

export interface MonthMemory {
  index: string;
  month: string;
  short: string;
  title: string;
  memory: string;
  meta: string;
  motif: MonthMotif;
  image: string;
  imageAlt: string;
  objectPosition: string;
  rotation: number;
}

export interface ExperienceItem {
  number: string;
  label: string;
  heading: string;
  description: string;
  details: string;
  handwrittenNote: string;
  image: string;
  imageAlt: string;
  stampText: string;
}

export interface BoxRevealItem {
  id: 'storybook' | 'canvas' | 'letter' | 'photographs';
  number: string;
  title: string;
  caption: string;
  handwritten: string;
  image: string;
  imageAlt: string;
}

export interface DraggablePolaroidData {
  id: string;
  image: string;
  alt: string;
  caption: string;
  dateStamp: string;
  initialRotate: number;
  tapeTone: 'blush' | 'cream' | 'burgundy' | 'chambray';
}

export const BRAND_IMAGES = {
  heroBox: '/src/assets/images/hero_memory_box_1794913399205.jpg',
  philosophyCafe: '/src/assets/images/philosophy_cafe_moment_1794913400393.jpg',
  storybook: '/src/assets/images/experience_storybook_1794913400012.jpg',
  canvas: '/src/assets/images/experience_canvas_art_1794913401127.jpg',
  stationery: '/src/assets/images/experience_stationery_keepsakes_1794913400843.jpg',
  travelWindow: '/src/assets/images/timeline_travel_window_1794913401544.jpg',
  picnicFilm: '/src/assets/images/scrapbook_picnic_film_1794915529596.jpg',
  burgundyDesk: '/src/assets/images/scrapbook_desk_burgundy_1794915530273.jpg',
  eveningDinner: '/src/assets/images/scrapbook_evening_sparklers_1794915530656.jpg',
} as const;

export const HOME_DRAGGABLE_POLAROIDS: DraggablePolaroidData[] = [
  {
    id: 'picnic',
    image: BRAND_IMAGES.picnicFilm,
    alt: 'Sunlit afternoon picnic on pink gingham cloth with vintage books and wildflowers',
    caption: 'Sunday on the gingham blanket',
    dateStamp: '14 JUN · 26',
    initialRotate: -6,
    tapeTone: 'chambray',
  },
  {
    id: 'cafe',
    image: BRAND_IMAGES.philosophyCafe,
    alt: 'Two friends laughing at a sunlit wooden cafe table',
    caption: 'Corner table, two coffees',
    dateStamp: '22 MAR · 26',
    initialRotate: 4.5,
    tapeTone: 'blush',
  },
  {
    id: 'dinner',
    image: BRAND_IMAGES.eveningDinner,
    alt: 'Friends laughing around an outdoor evening dinner under string lights',
    caption: 'Last warm night of August',
    dateStamp: '29 AUG · 26',
    initialRotate: -3.5,
    tapeTone: 'burgundy',
  },
];

export const MONTH_MEMORIES: MonthMemory[] = [
  {
    index: '01',
    month: 'January',
    short: 'JAN',
    title: 'Quiet Beginnings',
    memory:
      'Started a fresh linen notebook by the morning window with cinnamon tea and three gentle intentions.',
    meta: 'Chapter 01 · Winter Light',
    motif: 'chamomile',
    image: BRAND_IMAGES.storybook,
    imageAlt: 'Open linen-bound memory journal beside morning coffee on wood table',
    objectPosition: '50% 45%',
    rotation: -2.4,
  },
  {
    index: '02',
    month: 'February',
    short: 'FEB',
    title: 'Letters Left Unsent',
    memory:
      'Wrote postcards to old friends on thick cotton paper and sealed the quietest afternoon of winter.',
    meta: 'Chapter 02 · Wax & Ink',
    motif: 'envelope',
    image: BRAND_IMAGES.stationery,
    imageAlt: 'Cream cotton envelope sealed with a dusty-rose wax stamp',
    objectPosition: '60% 35%',
    rotation: 1.8,
  },
  {
    index: '03',
    month: 'March',
    short: 'MAR',
    title: 'First Warm Afternoon',
    memory:
      'Took the corner table at our favourite cafe, laughed until dusk, and swore we would write it all down.',
    meta: 'Chapter 03 · Golden Hour',
    motif: 'leaf',
    image: BRAND_IMAGES.philosophyCafe,
    imageAlt: 'Two friends laughing at a sunlit wooden cafe table with instant photos',
    objectPosition: '50% 30%',
    rotation: -1.7,
  },
  {
    index: '04',
    month: 'April',
    short: 'APR',
    title: 'Pressed Petals',
    memory:
      'Tucked a blush ranunculus between pages forty and forty-one after a sudden spring downpour.',
    meta: 'Chapter 04 · Herbarium Note',
    motif: 'petal',
    image: BRAND_IMAGES.burgundyDesk,
    imageAlt: 'Pressed flowers and polaroids pinned with brass paper clips on burgundy linen',
    objectPosition: '50% 45%',
    rotation: 2.3,
  },
  {
    index: '05',
    month: 'May',
    short: 'MAY',
    title: 'The Coastal Train',
    memory:
      'Watched the sea turn rose-gold from a rattling carriage window with headphones sharing one song.',
    meta: 'Chapter 05 · Window Seat',
    motif: 'ticket',
    image: BRAND_IMAGES.travelWindow,
    imageAlt: 'View through a vintage train window looking out over coastal hills at dusk',
    objectPosition: '55% 45%',
    rotation: -2.2,
  },
  {
    index: '06',
    month: 'June',
    short: 'JUN',
    title: 'Gingham Grass',
    memory:
      'Brought paperbacks and wildflowers to the hill and stayed until the light turned honey-gold.',
    meta: 'Chapter 06 · 35mm Roll',
    motif: 'star',
    image: BRAND_IMAGES.picnicFilm,
    imageAlt: 'Afternoon picnic on pink gingham blanket with books and chamomile bouquet',
    objectPosition: '50% 50%',
    rotation: 1.8,
  },
  {
    index: '07',
    month: 'July',
    short: 'JUL',
    title: 'Sunlit Horizons',
    memory:
      'Kept the palette of that coastal weekend—soft blush sky, warm sand, and deep evening quiet.',
    meta: 'Chapter 07 · Painted Memory',
    motif: 'moon',
    image: BRAND_IMAGES.canvas,
    imageAlt: 'Framed abstract canvas horizon painting in blush pink and warm espresso',
    objectPosition: '45% 45%',
    rotation: -1.4,
  },
  {
    index: '08',
    month: 'August',
    short: 'AUG',
    title: 'String Lights & Film',
    memory:
      'Captured everyone around the long wooden table before summer quietly packed its bags.',
    meta: 'Chapter 08 · Field Notes',
    motif: 'stamp',
    image: BRAND_IMAGES.eveningDinner,
    imageAlt: 'Friends celebrating an outdoor evening dinner under string lights',
    objectPosition: '50% 45%',
    rotation: 2.1,
  },
  {
    index: '09',
    month: 'September',
    short: 'SEP',
    title: 'Turning Pages',
    memory:
      'Reread the first half of the year and forgave myself for every plan that changed shape.',
    meta: 'Chapter 09 · New Season',
    motif: 'bookmark',
    image: BRAND_IMAGES.storybook,
    imageAlt: 'Printed pages and photo spreads of a hardcover annual storybook',
    objectPosition: '36% 42%',
    rotation: -1.9,
  },
  {
    index: '10',
    month: 'October',
    short: 'OCT',
    title: 'Amber Dusk',
    memory:
      'Long walks under amber trees, collecting small moments that never made it onto social feeds.',
    meta: 'Chapter 10 · Quiet Streets',
    motif: 'key',
    image: BRAND_IMAGES.burgundyDesk,
    imageAlt: 'Vintage travel snapshots with brass paper clips and handwritten notes',
    objectPosition: '70% 25%',
    rotation: 1.6,
  },
  {
    index: '11',
    month: 'November',
    short: 'NOV',
    title: 'Gathering the Threads',
    memory:
      'Chosen photographs, favourite songs, and honest reflections gathered together before winter settles.',
    meta: 'Chapter 11 · The Archive',
    motif: 'seal',
    image: BRAND_IMAGES.travelWindow,
    imageAlt: 'Golden evening light over calm water through vintage glass',
    objectPosition: '40% 35%',
    rotation: -1.5,
  },
  {
    index: '12',
    month: 'December',
    short: 'DEC',
    title: 'Wrapped Up',
    memory:
      'Untied the espresso ribbon on a cold evening and held an entire year in my hands.',
    meta: 'Chapter 12 · The Gift Box',
    motif: 'ribbon',
    image: BRAND_IMAGES.heroBox,
    imageAlt: 'Blush-pink keepsake box tied with an espresso satin ribbon',
    objectPosition: '48% 50%',
    rotation: 1.3,
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    number: '01',
    label: 'THE STORYBOOK',
    heading: 'Your year, written like a story.',
    description:
      'A linen-bound hardcover volume printed with your photographs, seasonal chapters, and the small milestones that quietly shaped your year.',
    details: 'Linen cover · Archival cotton pages · Custom chapter typography',
    handwrittenNote: 'Every messy, luminous chapter bound in one place.',
    image: BRAND_IMAGES.storybook,
    imageAlt: 'Open linen-bound personalised storybook showing printed photographs and serif pages',
    stampText: 'VOL. 2026',
  },
  {
    number: '02',
    label: 'THE CANVAS',
    heading: 'Your memories, turned into art.',
    description:
      'A framed custom artwork composed from the colours, places, and emotional rhythm of your twelve months—made to live on your wall long after December.',
    details: 'Museum cotton canvas · Espresso hardwood frame · Bespoke palette',
    handwrittenNote: 'Inspired by your July sunset & September mornings.',
    image: BRAND_IMAGES.canvas,
    imageAlt: 'Minimalist framed canvas artwork in blush, muted rose, and warm ivory tones',
    stampText: 'EDITION 01',
  },
  {
    number: '03',
    label: 'THE LETTER',
    heading: "Words you'll want to keep.",
    description:
      'A personal, wax-sealed letter written on heavy deckle-edge stationery—capturing the reflections, gratitude, and notes you wanted your future self to hear.',
    details: 'Hand-folded cotton paper · Muted rose wax seal · Archival ink',
    handwrittenNote: 'Read this on a quiet Sunday next year.',
    image: BRAND_IMAGES.stationery,
    imageAlt: 'Thick cream cotton letter with a muted rose wax seal and handwritten greeting',
    stampText: 'SEALED',
  },
  {
    number: '04',
    label: 'THE LITTLE THINGS',
    heading: 'All the moments in between.',
    description:
      'Square printed film photographs, numbered memory cards tied in twine, pressed botanicals, and tactile keepsakes gathered from the ordinary days.',
    details: 'Printed instant snapshots · Numbered linen cards · Keepsake surprises',
    handwrittenNote: 'Because the smallest details carry the whole story.',
    image: BRAND_IMAGES.burgundyDesk,
    imageAlt: 'Polaroids held with brass paper clips, dried flowers, and handwritten notes on burgundy linen',
    stampText: 'KEEPSAKES',
  },
];

export const BOX_REVEAL_ITEMS: BoxRevealItem[] = [
  {
    id: 'storybook',
    number: '01',
    title: 'Personalised Storybook',
    caption: 'Your twelve chapters typeset on warm archival paper.',
    handwritten: 'Open to page 42 — the late-summer coastal weekend.',
    image: BRAND_IMAGES.storybook,
    imageAlt: 'Personalised linen storybook',
  },
  {
    id: 'photographs',
    number: '02',
    title: 'Printed Photographs',
    caption: 'Tactile film-bordered prints pulled out of forgotten folders.',
    handwritten: 'No longer buried on a screen.',
    image: BRAND_IMAGES.picnicFilm,
    imageAlt: 'Printed nostalgic film photographs',
  },
  {
    id: 'canvas',
    number: '03',
    title: 'Custom Canvas Artwork',
    caption: 'A framed painterly study distilled from your favourite memories.',
    handwritten: 'Tones of warm cream, blush dusk & burgundy.',
    image: BRAND_IMAGES.canvas,
    imageAlt: 'Custom framed canvas artwork',
  },
  {
    id: 'letter',
    number: '04',
    title: 'Handwritten Letter',
    caption: 'Heavy cotton stationery folded and sealed in muted rose wax.',
    handwritten: 'For the version of you opening this in December.',
    image: BRAND_IMAGES.stationery,
    imageAlt: 'Handwritten wax-sealed letter',
  },
];
