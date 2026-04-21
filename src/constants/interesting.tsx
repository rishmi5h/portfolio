// ┌──────────────────────────────────────────────────────────────────┐
// │ How to add an interesting find:                                  │
// │                                                                  │
// │   Prepend an entry to the `raw` array below:                     │
// │     {                                                            │
// │       date: '2026-04-22',   // optional — use for dated essays,  │
// │                             //   skip for evergreen sites/refs   │
// │       title: 'What you want to surface',                         │
// │       url:  'https://...'   // optional — include if it's a link │
// │       note: 'Why it grabbed you.'   // optional short commentary │
// │     }                                                            │
// │                                                                  │
// │   Entries with no date sort to the top as "evergreen" picks.     │
// │   Dated entries follow, newest first.                            │
// │   Tags (optional) show as chips.                                 │
// └──────────────────────────────────────────────────────────────────┘

export type InterestingItem = {
  date?: string;
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
  // Evergreen resources (no publication date — always-on references)
  {
    note: "The free online edition of Eric Jorgenson's curation of Naval Ravikant's writing on wealth, happiness, and judgment.",
    tags: ['life', 'wealth', 'happiness'],
    title:
      'Eric Jorgenson — The Almanack of Naval Ravikant (free online edition)',
    url: 'https://www.navalmanack.com/almanack-of-naval-ravikant/table-of-contents',
  },
  {
    note: 'A curated reader of long-form essays worth your time — one piece on screen at a time, nothing else competing for your attention.',
    tags: ['essays', 'reading'],
    title: 'Read Something Wonderful',
    url: 'https://readsomethingwonderful.com',
  },
  {
    note: "Farnam Street's evergreen compendium of mental models — a structured vocabulary for thinking across disciplines.",
    tags: ['mental-models', 'thinking'],
    title:
      'Farnam Street — Mental Models: The Best Way to Make Intelligent Decisions',
    url: 'https://fs.blog/mental-models/',
  },
  {
    note: "Paras Chopra's blog — a wide-ranging mix of writing on startups, first-principles thinking, AI, and consciousness.",
    tags: ['blog', 'thinking'],
    title: 'Paras Chopra — Inverted Passion',
    url: 'https://invertedpassion.com/',
  },
  {
    note: 'Morgan Housel and others at Collaborative Fund writing on investing, behavioural finance, and long-term thinking.',
    tags: ['investing', 'behavioural-finance', 'essay'],
    title: 'Collaborative Fund — Collab Blog',
    url: 'https://collabfund.com/blog/',
  },
  {
    note: "James Clear's running collection of three-sentence book summaries — handy for deciding whether a book is worth reading in full.",
    tags: ['books', 'reading', 'summaries'],
    title: 'James Clear — Book Summaries',
    url: 'https://jamesclear.com/book-summaries',
  },

  // Dated essays (sorted newest first by the render logic)
  {
    date: '2026-02-09',
    note: 'Matt Shumer argues AI has hit an inflection point where models can do real professional work autonomously, and that knowledge workers should engage with these tools now rather than wait.',
    tags: ['ai', 'essay'],
    title: 'Matt Shumer — Something Big Is Happening',
    url: 'https://shumer.dev/something-big-is-happening',
  },
  {
    date: '2026-01-30',
    note: "Kailash Nadh (Zerodha's CTO) on how LLM-assisted coding shifts the valuable skill from writing code to articulating the problem and directing the tool.",
    tags: ['llm', 'engineering', 'essay'],
    title: 'Kailash Nadh — Code is cheap. Show me the talk.',
    url: 'https://nadh.in/blog/code-is-cheap/',
  },
  {
    date: '2015-04-19',
    note: 'Sam Altman on his 30th birthday — 36 short life lessons, the kind of list you re-read every couple of years and notice different ones each time.',
    tags: ['life', 'essay'],
    title: 'Sam Altman — The days are long but the decades are short',
    url: 'https://blog.samaltman.com/the-days-are-long-but-the-decades-are-short',
  },
  {
    date: '2019-06-04',
    note: 'A wide-ranging two-hour conversation with Naval Ravikant covering wealth, happiness, meditation, and reading.',
    tags: ['podcast', 'life', 'wealth'],
    title: 'Joe Rogan Experience #1309 — Naval Ravikant',
    url: 'https://www.youtube.com/watch?v=3qHkcs3kG44',
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
  .sort((a, b) => {
    // Undated (evergreen) entries float to the top in source order.
    if (!a.date && !b.date) return 0;
    if (!a.date) return -1;
    if (!b.date) return 1;
    return a.date < b.date ? 1 : -1;
  });
