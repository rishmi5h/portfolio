import { motion } from 'framer-motion';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { interesting } from '../constants/interesting.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const formatDate = (iso: string): string => {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

const domainOf = (url: string): string => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};

const Interesting: React.FC = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.08,
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
      {/* Floating orbs background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`orb orb-1 ${isDarkMode ? 'opacity-25' : 'opacity-15'}`}
        />
        <div
          className={`orb orb-2 ${isDarkMode ? 'opacity-20' : 'opacity-10'}`}
        />
      </div>

      {/* Subtle grid overlay */}
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
          className="space-y-12"
          initial="hidden"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.header className="space-y-3" variants={itemVariants}>
            <p
              className={`font-mono text-sm tracking-widest ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
            >
              ./interesting
            </p>
            <h1
              className={`text-5xl font-bold tracking-tight sm:text-6xl ${isDarkMode ? 'gradient-text' : 'gradient-text-light'}`}
            >
              interesting finds
            </h1>
            <p
              className={`max-w-xl text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Links, videos, quotes, and half-formed thoughts I&apos;ve
              collected from around the internet (and sometimes my own head).
            </p>
            <div
              className={`h-px w-32 ${isDarkMode ? 'bg-gradient-to-r from-transparent via-blue-500 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-400 to-transparent'}`}
            />
          </motion.header>

          {/* Now listening — Spotify embed.
              Hidden in prod until the now-playing service is wired up. */}
          {import.meta.env.DEV && (
            <motion.section className="space-y-3" variants={itemVariants}>
              <p
                className={`font-mono text-xs tracking-widest ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
              >
                ./listening
              </p>
              {/* Pin the theme so toggling site light/dark doesn't re-mount
                the iframe and interrupt playback. */}
              <iframe
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                height="352"
                loading="lazy"
                src="https://open.spotify.com/embed/playlist/5qidNlF23wz4MYOsXrn4vs?utm_source=generator&theme=0"
                style={{ borderRadius: 12 }}
                title="Spotify playlist"
                width="100%"
              />
              <p
                className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}
              >
                Spotify only streams 30-second previews for non-Premium
                listeners —{' '}
                <a
                  className={`underline underline-offset-2 transition-colors ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-green-400'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                  href="https://open.spotify.com/playlist/5qidNlF23wz4MYOsXrn4vs"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  open in Spotify
                </a>{' '}
                for full tracks.
              </p>
            </motion.section>
          )}

          {/* Items */}
          <motion.ul className="space-y-5" variants={containerVariants}>
            {interesting.map((item) => {
              const externalTitleClass = `text-xl font-bold tracking-tight transition-colors sm:text-2xl ${
                isDarkMode
                  ? 'text-gray-100 group-hover:text-blue-300'
                  : 'text-gray-900 group-hover:text-blue-600'
              }`;
              const plainTitleClass = `text-xl font-bold tracking-tight sm:text-2xl ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`;

              return (
                <motion.li key={item.slug} variants={itemVariants}>
                  <article
                    className={`rounded-2xl border p-5 transition-all duration-300 sm:p-6 ${
                      isDarkMode
                        ? 'border-white/10 bg-white/5 hover:border-blue-400/30 hover:bg-white/10'
                        : 'border-black/10 bg-white hover:border-blue-400/50 hover:shadow-md'
                    }`}
                  >
                    <div
                      className={`font-mono text-xs tracking-widest ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                    >
                      {item.date ? (
                        <time dateTime={item.date}>
                          {formatDate(item.date).toLowerCase()}
                        </time>
                      ) : (
                        <span
                          className={
                            isDarkMode ? 'text-blue-300/70' : 'text-blue-500/70'
                          }
                        >
                          evergreen
                        </span>
                      )}
                    </div>

                    <div className="mt-2">
                      {item.url ? (
                        <a
                          className="group block"
                          href={item.url}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <h2 className={externalTitleClass}>
                            {item.title}
                            <FaExternalLinkAlt
                              aria-hidden
                              className="ml-2 inline-block -translate-y-0.5 text-sm opacity-60 transition-transform group-hover:translate-x-0.5"
                            />
                          </h2>
                          <span
                            className={`mt-0.5 block font-mono text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}
                          >
                            {domainOf(item.url)}
                          </span>
                        </a>
                      ) : (
                        <h2 className={plainTitleClass}>{item.title}</h2>
                      )}
                    </div>

                    {item.note ? (
                      <p
                        className={`mt-3 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                      >
                        {item.note}
                      </p>
                    ) : null}

                    {item.tags && item.tags.length > 0 ? (
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              isDarkMode
                                ? 'bg-blue-500/15 text-blue-200'
                                : 'bg-blue-100 text-blue-700'
                            }`}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </article>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Interesting;
