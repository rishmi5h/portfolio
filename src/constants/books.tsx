// ┌──────────────────────────────────────────────────────────────────┐
// │ How to add a book:                                               │
// │                                                                  │
// │   Add an entry to the `books` array below:                       │
// │     { title: 'Title', author: 'Author', read: '2025' }           │
// │                                                                  │
// │   Optional fields:                                               │
// │     author     omit for anonymous/uncertain works                │
// │     favorite   set `favorite: true` to highlight a book — it     │
// │                gets a ★ badge and sorts to the top of its year.  │
// │                Use sparingly (e.g. top 3 per year).              │
// │     cover      manual override URL for the cover image;          │
// │                otherwise Books.tsx auto-fetches from Open        │
// │                Library.                                          │
// │                                                                  │
// │   Books are grouped by `read` year on the page,                  │
// │   newest year first.                                             │
// └──────────────────────────────────────────────────────────────────┘

export type Book = {
  author?: string;
  // Optional manual override for the cover image URL. If omitted,
  // Books.tsx fetches a cover from Open Library based on title + author.
  cover?: string;
  // Mark as a standout pick — gets a highlight on the list.
  favorite?: boolean;
  read: string;
  slug: string;
  title: string;
};

const slugify = (s: string): string =>
  s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // strip diacritics
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

type BookInput = Omit<Book, 'slug'> & { slug?: string };

const raw: BookInput[] = [
  // 2026
  { author: 'Matthew Walker', read: '2026', title: 'Why We Sleep' },

  // 2025
  {
    author: 'Fredrick J. Lovre',
    read: '2025',
    title: 'The Way and the Power: Secrets of Japanese Strategy',
  },
  {
    author: 'Oliver Burkeman',
    favorite: true,
    read: '2025',
    title: 'Four Thousand Weeks',
  },
  { author: 'Albert Camus', read: '2025', title: 'The Stranger' },
  {
    author: 'Paras Chopra',
    favorite: true,
    read: '2025',
    title:
      'The Book of Clarity: Building Your Dream Start-Up Using First Principles Thinking',
  },
  { author: 'Osho', read: '2025', title: 'Fear' },
  { author: 'Osho', favorite: true, read: '2025', title: 'Courage' },
  { author: 'Amish Tripathi', read: '2025', title: 'The Chola Tigers' },
  { author: 'George Orwell', read: '2025', title: 'Animal Farm' },
  { author: 'Franz Kafka', read: '2025', title: 'Metamorphosis' },
  { author: 'George Orwell', read: '2025', title: '1984' },
  { author: 'Fyodor Dostoevsky', read: '2025', title: 'White Nights' },

  // 2024
  {
    author: 'J. Krishnamurti',
    favorite: true,
    read: '2024',
    title: 'As One Is',
  },
  { author: 'Cal Newport', read: '2024', title: 'Slow Productivity' },
  {
    author: 'Baltasar Gracián',
    read: '2024',
    title: 'The Art of Worldly Wisdom',
  },
  {
    author: 'Pulak Prasad',
    read: '2024',
    title: 'What I Learned About Investing from Darwin',
  },
  { author: 'Darren Hardy', read: '2024', title: 'The Compound Effect' },
  { author: 'Chirag Gander', read: '2024', title: 'Think Like the Minimalist' },
  { author: 'Ray Dalio', favorite: true, read: '2024', title: 'Principles' },
  { author: 'Amish Tripathi', read: '2024', title: 'Ram: Scion of Ikshvaku' },
  {
    author: 'Amish Tripathi',
    favorite: true,
    read: '2024',
    title: 'Sita: Warrior of Mithila',
  },
  {
    author: 'Amish Tripathi',
    read: '2024',
    title: 'Raavan: Enemy of Aryavarta',
  },

  // 2023
  {
    author: 'Will & Ariel Durant',
    read: '2023',
    title: 'The Lessons of History',
  },
  {
    author: 'Mystery',
    favorite: true,
    read: '2023',
    title: 'The Mystery Method',
  },
  { author: 'Morgan Housel', read: '2023', title: 'Same as Ever' },
  {
    author: 'Amish Tripathi',
    favorite: true,
    read: '2023',
    title: 'The Immortals of Meluha',
  },
  { author: 'Amish Tripathi', read: '2023', title: 'The Secret of the Nagas' },
  {
    author: 'Amish Tripathi',
    read: '2023',
    title: 'The Oath of the Vayuputras',
  },
  { author: 'Richard D. Lewis', read: '2023', title: 'When Cultures Collide' },
  {
    author: 'Subroto Bagchi',
    read: '2023',
    title: 'The High-Performance Entrepreneur',
  },
  { author: 'Buddha', read: '2023', title: 'The Dhammapada' },
  { author: 'David McRaney', read: '2023', title: 'You Are Not So Smart' },
  { author: 'Robert Sapolsky', read: '2023', title: 'Behave' },
  { author: 'Josh Waitzkin', read: '2023', title: 'The Art of Learning' },
  { author: 'Miyamoto Musashi', read: '2023', title: 'The Book of Five Rings' },
  {
    author: 'Paramahansa Yogananda',
    read: '2023',
    title: 'Autobiography of a Yogi',
  },
  { author: 'Niccolò Machiavelli', read: '2023', title: 'The Prince' },
  { author: 'Friedrich Nietzsche', read: '2023', title: 'The Will to Power' },
  { author: 'Sadhguru', read: '2023', slug: 'karma-sadhguru', title: 'Karma' },
  { author: 'Robert Glover', read: '2023', title: 'No More Mr. Nice Guy' },
  {
    author: 'Chris Voss & Tahl Raz',
    read: '2023',
    title: 'Never Split the Difference',
  },
  { author: 'Leil Lowndes', read: '2023', title: 'How to Talk to Anyone' },
  { author: 'Confucius', read: '2023', title: 'The Analects' },
  {
    author: 'A.C. Bhaktivedanta Swami Prabhupada',
    read: '2023',
    title: 'Bhagavad Gita As It Is',
  },
  {
    author: 'Robert Greene',
    favorite: true,
    read: '2023',
    title: 'The 48 Laws of Power',
  },

  // 2022
  {
    author: 'Parag Parikh',
    favorite: true,
    read: '2022',
    title: 'Stocks to Riches',
  },
  { author: 'Seneca', read: '2022', title: 'Letters to a Stoic' },
  { author: 'Plato', read: '2022', title: 'The Republic' },
  {
    author: 'Jason Fried & David Heinemeier Hansson',
    read: '2022',
    title: 'Rework',
  },
  { author: 'Yuval Noah Harari', read: '2022', title: 'Sapiens' },
  { author: 'William Green', read: '2022', title: 'Richer, Wiser, Happier' },
  { author: 'Josh Kaufman', read: '2022', title: 'The First 20 Hours' },
  {
    author: 'Ichiro Kishimi & Fumitake Koga',
    read: '2022',
    title: 'The Courage to Be Disliked',
  },
  { author: 'Michael S. Sorensen', read: '2022', title: 'I Hear You' },
  {
    author: 'Robert Moore & Douglas Gillette',
    read: '2022',
    title: 'King, Warrior, Magician, Lover',
  },
  {
    author: 'Rafael Nadal & John Carlin',
    read: '2022',
    title: 'Rafa: My Story',
  },
  {
    author: 'Acharya Prashant',
    read: '2022',
    slug: 'karma-acharya-prashant',
    title: 'Karma',
  },
  { author: 'Nicholas Carr', read: '2022', title: 'The Shallows' },
  { author: 'Matt Ridley', read: '2022', title: 'The Red Queen' },
  { author: 'Mitch Albom', read: '2022', title: 'Tuesdays with Morrie' },
  { author: 'Robert Greene', read: '2022', title: 'The Art of Seduction' },
  {
    author: 'David Deida',
    favorite: true,
    read: '2022',
    title: 'The Way of the Superior Man',
  },
  { author: 'Nassim Nicholas Taleb', read: '2022', title: 'Skin in the Game' },
  { author: 'Cal Newport', read: '2022', title: 'Deep Work' },
  { author: 'Alain de Botton', read: '2022', title: 'The Course of Love' },
  {
    author: 'Shunmyo Masuno',
    read: '2022',
    title: 'Zen: The Art of Simple Living',
  },
  {
    author: 'Beth Kempton',
    read: '2022',
    title: 'Wabi Sabi: Japanese Wisdom for a Perfectly Imperfect Life',
  },
  {
    author: 'Cal Newport',
    favorite: true,
    read: '2022',
    title: 'Digital Minimalism',
  },

  // 2021
  { author: 'Marcus Aurelius', read: '2021', title: 'Meditations' },
  { author: 'Sun Tzu', favorite: true, read: '2021', title: 'The Art of War' },
  { author: 'Paulo Coelho', read: '2021', title: 'The Archer' },
  {
    author: 'Monika Halan',
    favorite: true,
    read: '2021',
    title: "Let's Talk Money",
  },
  { author: 'Nassim Nicholas Taleb', read: '2021', title: 'Antifragile' },
  {
    author: 'Seneca',
    favorite: true,
    read: '2021',
    title: 'On the Shortness of Life',
  },
  {
    author: 'Reed Hastings & Erin Meyer',
    read: '2021',
    title: 'No Rules Rules',
  },
  { author: 'Daniel Kahneman', read: '2021', title: 'Thinking, Fast and Slow' },

  // 2020
  { author: 'Peter Thiel', read: '2020', title: 'Zero to One' },
  { author: 'Christian Rudder', read: '2020', title: 'Dataclysm' },
  { author: 'Gautam Baid', read: '2020', title: 'The Joys of Compounding' },
  {
    author: 'James Clear',
    favorite: true,
    read: '2020',
    title: 'Atomic Habits',
  },
  {
    author: 'Morgan Housel',
    favorite: true,
    read: '2020',
    title: 'The Psychology of Money',
  },
  {
    author: 'Eric Jorgenson',
    favorite: true,
    read: '2020',
    title: 'The Almanack of Naval Ravikant',
  },
  {
    author: 'Ben Horowitz',
    read: '2020',
    title: 'The Hard Thing About Hard Things',
  },
  {
    author: 'Héctor García & Francesc Miralles',
    read: '2020',
    title: 'Ikigai',
  },
  { author: 'Paulo Coelho', read: '2020', title: 'The Alchemist' },
];

export const books: Book[] = raw.map((b) => ({
  ...b,
  slug: b.slug ?? slugify(b.title),
}));
