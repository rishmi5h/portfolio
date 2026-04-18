import { motion } from 'framer-motion';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { books, type Book } from '../constants/books.tsx';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

type YearGroup = { books: Book[]; year: string };

const groupByYear = (all: Book[]): YearGroup[] => {
  const byYear = new Map<string, Book[]>();
  for (const book of all) {
    const year = book.read || 'unknown';
    if (!byYear.has(year)) byYear.set(year, []);
    byYear.get(year)!.push(book);
  }
  return [...byYear.entries()]
    .map(([year, list]) => ({
      // Favorites float to the top; otherwise preserve source order.
      books: [...list].sort((a, b) => {
        if (a.favorite === b.favorite) return 0;
        return a.favorite ? -1 : 1;
      }),
      year,
    }))
    .sort((a, b) => (a.year < b.year ? 1 : -1));
};

// ────────────────────────────────────────────────────────────────
// Book cover lookup
//
// Covers come from Open Library's public search API. Cards only
// fire a fetch once they scroll into view, and the URL (or an
// empty string for "no cover found") is cached in localStorage
// so repeat visits are instant.
// ────────────────────────────────────────────────────────────────

const CACHE_PREFIX = 'bookcover:v1:';

const readCachedCover = (slug: string): string | undefined => {
  try {
    const value = localStorage.getItem(CACHE_PREFIX + slug);
    return value === null ? undefined : value;
  } catch {
    return undefined;
  }
};

const writeCachedCover = (slug: string, url: string): void => {
  try {
    localStorage.setItem(CACHE_PREFIX + slug, url);
  } catch {
    // localStorage unavailable / full — ignore
  }
};

const fetchCoverUrl = async (
  title: string,
  author?: string,
): Promise<string> => {
  try {
    const params = new URLSearchParams({ limit: '3', title });
    if (author) params.set('author', author);
    const res = await fetch(
      `https://openlibrary.org/search.json?${params.toString()}`,
    );
    if (!res.ok) return '';
    const data: { docs?: Array<{ cover_i?: number }> } = await res.json();
    const doc = data.docs?.find((d) => typeof d.cover_i === 'number');
    return doc?.cover_i
      ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
      : '';
  } catch {
    return '';
  }
};

const BookCover: React.FC<{ book: Book; isDarkMode: boolean }> = ({
  book,
  isDarkMode,
}) => {
  const [coverUrl, setCoverUrl] = useState<string | undefined>(
    () => book.cover ?? readCachedCover(book.slug),
  );
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Trigger: mark as in-view once the card approaches the viewport.
  useEffect(() => {
    if (coverUrl !== undefined) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            return;
          }
        }
      },
      { rootMargin: '300px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [coverUrl]);

  // Fetch once we're in view and don't already have a value.
  useEffect(() => {
    if (!inView || coverUrl !== undefined) return;
    let cancelled = false;
    fetchCoverUrl(book.title, book.author).then((url) => {
      if (cancelled) return;
      writeCachedCover(book.slug, url);
      setCoverUrl(url);
    });
    return () => {
      cancelled = true;
    };
  }, [inView, coverUrl, book.slug, book.title, book.author]);

  const hasCover = typeof coverUrl === 'string' && coverUrl.length > 0;

  return (
    <div
      ref={ref}
      className={`flex h-20 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md shadow-sm sm:h-24 sm:w-16 ${
        isDarkMode
          ? 'bg-gradient-to-br from-blue-500/10 to-pink-500/10'
          : 'bg-gradient-to-br from-blue-100 to-pink-100'
      }`}
    >
      {hasCover ? (
        <img
          alt={`Cover of ${book.title}`}
          className="h-full w-full object-cover"
          loading="lazy"
          src={coverUrl}
        />
      ) : (
        <span
          aria-hidden
          className={`text-2xl ${isDarkMode ? 'opacity-40' : 'opacity-50'}`}
        >
          📖
        </span>
      )}
    </div>
  );
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
              reading list
            </h1>
            <p
              className={`max-w-xl text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Books I&apos;ve worked my way through over the years, grouped by
              the year I read them.
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
                <div
                  className={`h-px flex-1 ${isDarkMode ? 'bg-white/10' : 'bg-black/10'}`}
                />
              </div>

              <motion.ul className="space-y-4" variants={containerVariants}>
                {group.books.map((book) => (
                  <motion.li key={book.slug} variants={itemVariants}>
                    <article
                      className={`relative flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 sm:gap-5 sm:p-5 ${
                        book.favorite
                          ? isDarkMode
                            ? 'border-yellow-300/40 bg-gradient-to-br from-yellow-500/10 via-white/5 to-pink-500/10 shadow-[0_0_24px_-8px_rgba(253,224,71,0.35)] hover:border-yellow-300/60'
                            : 'border-yellow-400/60 bg-gradient-to-br from-yellow-50 via-white to-pink-50 shadow-md hover:border-yellow-500/80 hover:shadow-lg'
                          : isDarkMode
                            ? 'border-white/10 bg-white/5 hover:border-blue-400/30 hover:bg-white/10'
                            : 'border-black/10 bg-white hover:border-blue-400/50 hover:shadow-md'
                      }`}
                    >
                      {book.favorite ? (
                        <span
                          aria-label="Favorite"
                          className={`absolute right-3 top-3 text-sm ${isDarkMode ? 'text-yellow-300' : 'text-yellow-500'}`}
                          title="Favorite"
                        >
                          ★
                        </span>
                      ) : null}

                      <BookCover book={book} isDarkMode={isDarkMode} />

                      <div className="min-w-0 flex-1 space-y-1">
                        <h3
                          className={`pr-6 text-lg font-bold tracking-tight sm:text-xl ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
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
