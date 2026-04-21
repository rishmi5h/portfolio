// ┌──────────────────────────────────────────────────────────────────┐
// │ How to add an interesting find:                                  │
// │                                                                  │
// │   Prepend an entry to the `raw` array below:                     │
// │     {                                                            │
// │       date: '2026-04-22',   // optional - use for dated essays,  │
// │                             //   skip for evergreen sites/refs   │
// │       title: 'What you want to surface',                         │
// │       url:  'https://...'   // optional - include if it's a link │
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
  // Evergreen resources (no publication date - always-on references)
  {
    note: "Eric Jorgenson's book on Naval Ravikant, readable free online. Covers wealth, happiness, and judgment.",
    tags: ['life', 'wealth', 'happiness'],
    title:
      'Eric Jorgenson - The Almanack of Naval Ravikant (free online edition)',
    url: 'https://www.navalmanack.com/almanack-of-naval-ravikant/table-of-contents',
  },
  {
    note: 'Serves you one long-form essay at a time. No feed, no tags, no sidebar; just the essay.',
    tags: ['essays', 'reading'],
    title: 'Read Something Wonderful',
    url: 'https://readsomethingwonderful.com',
  },
  {
    note: "Farnam Street's running catalogue of mental models. Useful vocabulary for clearer thinking across fields.",
    tags: ['mental-models', 'thinking'],
    title:
      'Farnam Street - Mental Models: The Best Way to Make Intelligent Decisions',
    url: 'https://fs.blog/mental-models/',
  },
  {
    note: "Paras Chopra's blog. Startups, first-principles thinking, AI, consciousness; it ranges widely.",
    tags: ['blog', 'thinking'],
    title: 'Paras Chopra - Inverted Passion',
    url: 'https://invertedpassion.com/',
  },
  {
    note: 'Morgan Housel and the Collab Fund team on investing, behavioural finance, and long-term thinking.',
    tags: ['investing', 'behavioural-finance', 'essay'],
    title: 'Collaborative Fund - Collab Blog',
    url: 'https://collabfund.com/blog/',
  },
  {
    note: 'Three-sentence summaries of every book James Clear has read. A good filter before you commit to the full thing.',
    tags: ['books', 'reading', 'summaries'],
    title: 'James Clear - Book Summaries',
    url: 'https://jamesclear.com/book-summaries',
  },

  // Dated essays (sorted newest first by the render logic)
  {
    date: '2026-02-09',
    note: 'Matt Shumer argues AI has hit an inflection point where models can do real professional work autonomously, and that knowledge workers should engage with these tools now rather than wait.',
    tags: ['ai', 'essay'],
    title: 'Matt Shumer - Something Big Is Happening',
    url: 'https://shumer.dev/something-big-is-happening',
  },
  {
    date: '2026-01-30',
    note: "Kailash Nadh (Zerodha's CTO) on how LLM-assisted coding shifts the valuable skill from writing code to articulating the problem and directing the tool.",
    tags: ['llm', 'engineering', 'essay'],
    title: 'Kailash Nadh - Code is cheap. Show me the talk.',
    url: 'https://nadh.in/blog/code-is-cheap/',
  },
  {
    date: '2025-07-17',
    note: "Reframes ambition as Nietzsche's will to power: the drive to bend reality through effort. And what takes its place when it goes missing.",
    tags: ['philosophy', 'psychology', 'essay'],
    title: 'Illimitable Man - The Will to Power',
    url: 'https://thesovereigncitadel.com/p/the-will-to-power',
  },
  {
    date: '2015-04-19',
    note: "Sam Altman's 30th-birthday list of 36 short life lessons. The kind you re-read every few years and notice different ones.",
    tags: ['life', 'essay'],
    title: 'Sam Altman - The days are long but the decades are short',
    url: 'https://blog.samaltman.com/the-days-are-long-but-the-decades-are-short',
  },
  {
    date: '2019-06-04',
    note: 'Two hours with Naval Ravikant on wealth, happiness, meditation, and reading.',
    tags: ['podcast', 'life', 'wealth'],
    title: 'Joe Rogan Experience #1309 - Naval Ravikant',
    url: 'https://www.youtube.com/watch?v=3qHkcs3kG44',
  },
  {
    date: '2013-07-01',
    note: "Paul Graham's case that the small unscalable things early founders do by hand are how they find the things that do scale. Short, old, still right.",
    tags: ['startups', 'essay'],
    title: "Paul Graham - Do Things That Don't Scale",
    url: 'https://paulgraham.com/ds.html',
  },
  {
    date: '2013-05-01',
    note: "Angela Duckworth's TED talk arguing that grit (passion and perseverance held over years) predicts success better than IQ or talent.",
    tags: ['video', 'psychology', 'talk'],
    title:
      'Angela Duckworth - Grit: The Power of Passion and Perseverance (TED)',
    url: 'https://www.youtube.com/watch?v=H14bBuluwB8',
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
