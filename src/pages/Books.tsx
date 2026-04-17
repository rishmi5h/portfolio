import { motion } from 'framer-motion';
import React, { useMemo } from 'react';
import { books, type Book } from '../constants/books.tsx';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const initialOf = (title: string) =>
  title
    .replace(/^(The|A|An)\s+/i, '')
    .charAt(0)
    .toUpperCase() || '•';

type YearGroup = { books: Book[]; year: string };

const groupByYear = (all: Book[]): YearGroup[] => {
  const byYear = new Map<string, Book[]>();
  for (const book of all) {
    const year = book.read || 'unknown';
    if (!byYear.has(year)) byYear.set(year, []);
    byYear.get(year)!.push(book);
  }
  return [...byYear.entries()]
    .map(([year, list]) => ({ books: list, year }))
    .sort((a, b) => (a.year < b.year ? 1 : -1));
};

const Books: React.FC = () => {
  const { isDarkMode } = useTheme();
  const groups = useMemo(() => groupByYear(books), []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { filter: 'blur(8px)', opacity: 0, y: 16 },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
      y: 0,
    },
  };

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${isDarkMode ? darkModeColor : lightModeColor}`}
    >
      {/* Orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`orb orb-1 ${isDarkMode ? 'opacity-20' : 'opacity-10'}`}
        />
        <div
          className={`orb orb-3 ${isDarkMode ? 'opacity-20' : 'opacity-10'}`}
        />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: isDarkMode
            ? 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)'
            : 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20">
        <motion.div
          animate="visible"
          className="space-y-16"
          initial="hidden"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.header className="space-y-3" variants={itemVariants}>
            <p
              className={`font-mono text-sm tracking-widest ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
            >
              ./books
            </p>
            <h1
              className={`text-5xl font-bold tracking-tight sm:text-6xl ${isDarkMode ? 'gradient-text' : 'gradient-text-light'}`}
            >
              books that left a mark
            </h1>
            <p
              className={`max-w-xl text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Not a reading list. Just the ones that actually changed something
              about how I think or work.
            </p>
            <div
              className={`h-px w-32 ${isDarkMode ? 'bg-gradient-to-r from-transparent via-blue-500 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-400 to-transparent'}`}
            />
          </motion.header>

          {/* Year groups */}
          {groups.map((group) => (
            <motion.section
              key={group.year}
              className="space-y-6"
              variants={itemVariants}
            >
              <div className="flex items-baseline gap-4">
                <h2
                  className={`font-mono text-3xl font-bold tracking-tight sm:text-4xl ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
                >
                  {group.year}
                </h2>
                <span
                  className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}
                >
                  {group.books.length} book
                  {group.books.length === 1 ? '' : 's'}
                </span>
                <div
                  className={`h-px flex-1 ${isDarkMode ? 'bg-white/10' : 'bg-black/10'}`}
                />
              </div>

              <motion.ul className="space-y-4" variants={containerVariants}>
                {group.books.map((book) => (
                  <motion.li key={book.slug} variants={itemVariants}>
                    <article
                      className={`flex gap-4 rounded-xl border p-4 transition-all duration-300 sm:gap-5 sm:p-5 ${
                        isDarkMode
                          ? 'border-white/10 bg-white/5 hover:border-blue-400/30 hover:bg-white/10'
                          : 'border-black/10 bg-white hover:border-blue-400/50 hover:shadow-md'
                      }`}
                    >
                      {/* Initial tile */}
                      <div
                        aria-hidden
                        className={`flex h-12 w-10 shrink-0 items-center justify-center rounded-md font-serif text-xl font-bold sm:h-14 sm:w-11 sm:text-2xl ${
                          isDarkMode
                            ? 'bg-gradient-to-br from-blue-500/20 to-pink-500/20 text-blue-200'
                            : 'bg-gradient-to-br from-blue-100 to-pink-100 text-blue-700'
                        }`}
                      >
                        {initialOf(book.title)}
                      </div>

                      <div className="min-w-0 flex-1 space-y-1">
                        <h3
                          className={`text-lg font-bold tracking-tight sm:text-xl ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
                        >
                          {book.title}
                        </h3>
                        {book.author ? (
                          <p
                            className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                          >
                            {book.author}
                          </p>
                        ) : null}
                      </div>
                    </article>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Books;
