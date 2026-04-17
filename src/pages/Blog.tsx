import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../constants/blogPosts.tsx';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

const Blog: React.FC = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { filter: 'blur(8px)', opacity: 0, y: 24 },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
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
              ./blog
            </p>
            <h1
              className={`text-5xl font-bold tracking-tight sm:text-6xl ${isDarkMode ? 'gradient-text' : 'gradient-text-light'}`}
            >
              thinking out loud
            </h1>
            <p
              className={`max-w-xl text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Notes on engineering, side projects, and whatever else I&apos;m
              chewing on lately.
            </p>
            <div
              className={`h-px w-32 ${isDarkMode ? 'bg-gradient-to-r from-transparent via-blue-500 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-400 to-transparent'}`}
            />
          </motion.header>

          {/* Post list */}
          <motion.ul className="space-y-6" variants={containerVariants}>
            {blogPosts.map((post) => (
              <motion.li key={post.slug} variants={itemVariants}>
                <Link
                  className={`group block rounded-2xl border p-6 transition-all duration-300 ${
                    isDarkMode
                      ? 'border-white/10 bg-white/5 hover:border-blue-400/40 hover:bg-white/10'
                      : 'border-black/10 bg-white hover:border-blue-400/60 hover:shadow-lg'
                  }`}
                  to={`/blog/${post.slug}`}
                >
                  <div
                    className={`flex flex-wrap items-center gap-3 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                  >
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2
                    className={`mt-3 text-2xl font-bold tracking-tight transition-colors sm:text-3xl ${
                      isDarkMode
                        ? 'text-gray-100 group-hover:text-blue-300'
                        : 'text-gray-900 group-hover:text-blue-600'
                    }`}
                  >
                    {post.title}
                  </h2>

                  <p
                    className={`mt-2 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          isDarkMode
                            ? 'bg-blue-500/15 text-blue-200'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                    <span
                      className={`ml-auto text-sm transition-transform duration-300 group-hover:translate-x-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                    >
                      read →
                    </span>
                  </div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
