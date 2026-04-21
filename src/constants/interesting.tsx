// ┌──────────────────────────────────────────────────────────────────┐
// │ How to add an interesting find:                                  │
// │                                                                  │
// │   Prepend an entry to the `raw` array below:                     │
// │     {                                                            │
// │       date: '2026-04-22',                                        │
// │       title: 'What you want to surface',                         │
// │       url:  'https://...'   // optional — include if it's a link │
// │       note: 'Why it grabbed you.'   // optional short commentary │
// │     }                                                            │
// │                                                                  │
// │   Entries are sorted by `date` (newest first). Tags (optional)   │
// │   show as chips.                                                 │
// └──────────────────────────────────────────────────────────────────┘

export type InterestingItem = {
  date: string;
  note?: string;
  slug: string;
  tags?: string[];
  title: string;
  url?: string;
};

const slugify = (s: string): string =>
  s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

type Input = Omit<InterestingItem, 'slug'> & { slug?: string };

const raw: Input[] = [
  {
    date: '2026-04-22',
    note: "Farnam Street's evergreen compendium of mental models — a structured vocabulary for thinking across disciplines.",
    tags: ['mental-models', 'thinking'],
    title:
      'Farnam Street — Mental Models: The Best Way to Make Intelligent Decisions',
    url: 'https://fs.blog/mental-models/',
  },
  {
    date: '2026-04-22',
    note: "Paras Chopra's blog — a wide-ranging mix of writing on startups, first-principles thinking, AI, and consciousness.",
    tags: ['blog', 'thinking'],
    title: 'Paras Chopra — Inverted Passion',
    url: 'https://invertedpassion.com/',
  },
  {
    date: '2015-04-19',
    note: 'Sam Altman on his 30th birthday — 36 short life lessons, the kind of list you re-read every couple of years and notice different ones each time.',
    tags: ['life', 'essay'],
    title: 'Sam Altman — The days are long but the decades are short',
    url: 'https://blog.samaltman.com/the-days-are-long-but-the-decades-are-short',
  },
  {
    date: '2013-07-01',
    note: "A classic Paul Graham essay on the counterintuitive advantage early-stage founders have — doing things that don't scale is how you find what does.",
    tags: ['startups', 'essay'],
    title: "Paul Graham — Do Things That Don't Scale",
    url: 'https://paulgraham.com/ds.html',
  },
];

export const interesting: InterestingItem[] = raw
  .map((item) => ({ ...item, slug: item.slug ?? slugify(item.title) }))
  .sort((a, b) => (a.date < b.date ? 1 : -1));
