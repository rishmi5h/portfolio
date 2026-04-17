import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../constants/blogPosts.tsx';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

// Render the simple markdown-ish content: paragraphs split by blank lines, with **bold** and *italic*.
const renderInline = (text: string, isDarkMode: boolean) => {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  // Combined regex: **bold** or *italic*
  const pattern = /\*\*([^*]+)\*\*|\*([^*]+)\*/;
  while (remaining.length > 0) {
    const match = pattern.exec(remaining);
    if (!match) {
      parts.push(remaining);
      break;
    }
    if (match.index > 0) {
      parts.push(remaining.slice(0, match.index));
    }
    if (match[1] !== undefined) {
      parts.push(
        <strong
          key={key++}
          className={isDarkMode ? 'text-gray-100' : 'text-gray-900'}
        >
          {match[1]}
        </strong>,
      );
    } else if (match[2] !== undefined) {
      parts.push(
        <em key={key++} className="italic">
          {match[2]}
        </em>,
      );
    }
    remaining = remaining.slice(match.index + match[0].length);
  }
  return parts;
};

const renderContent = (content: string, isDarkMode: boolean) => {
  const blocks = content.split(/\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();

    // Bulleted list: lines starting with "- "
    if (trimmed.split('\n').every((l) => l.trim().startsWith('- '))) {
      const items = trimmed
        .split('\n')
        .map((l) => l.trim().replace(/^-\s+/, ''));
      return (
        <ul
          key={i}
          className={`list-disc space-y-2 pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
        >
          {items.map((item, j) => (
            <li key={j}>{renderInline(item, isDarkMode)}</li>
          ))}
        </ul>
      );
    }

    return (
      <p
        key={i}
        className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
      >
        {renderInline(trimmed, isDarkMode)}
      </p>
    );
  });
};

const BlogPost: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div
        className={`flex min-h-screen flex-col items-center justify-center gap-4 transition-colors duration-300 ${isDarkMode ? darkModeColor : lightModeColor}`}
      >
        <h1
          className={`text-4xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
        >
          Post not found
        </h1>
        <Link
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            isDarkMode
              ? 'bg-white/10 text-gray-100 hover:bg-white/20'
              : 'bg-black/5 text-gray-900 hover:bg-black/10'
          }`}
          to="/blog"
        >
          ← back to blog
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${isDarkMode ? darkModeColor : lightModeColor}`}
    >
      {/* Subtle background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: isDarkMode
            ? 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)'
            : 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`orb orb-2 ${isDarkMode ? 'opacity-20' : 'opacity-10'}`}
        />
      </div>

      <motion.article
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 mx-auto max-w-2xl px-6 py-16"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Link
          className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
            isDarkMode
              ? 'text-gray-400 hover:text-blue-300'
              : 'text-gray-500 hover:text-blue-600'
          }`}
          to="/blog"
        >
          ← all posts
        </Link>

        <header className="mt-8 space-y-4">
          <div
            className={`flex flex-wrap items-center gap-3 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
          >
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1
            className={`text-4xl font-bold tracking-tight sm:text-5xl ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2">
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
          </div>

          <div
            className={`h-px w-full ${isDarkMode ? 'bg-white/10' : 'bg-black/10'}`}
          />
        </header>

        <div className="mt-10 space-y-6">
          {renderContent(post.content, isDarkMode)}
        </div>

        <footer className="mt-16">
          <div
            className={`h-px w-full ${isDarkMode ? 'bg-white/10' : 'bg-black/10'}`}
          />
          <div className="mt-6 flex items-center justify-between">
            <Link
              className={`text-sm font-medium transition-colors ${
                isDarkMode
                  ? 'text-gray-400 hover:text-blue-300'
                  : 'text-gray-500 hover:text-blue-600'
              }`}
              to="/blog"
            >
              ← all posts
            </Link>
            <span
              className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}
            >
              — rishabh
            </span>
          </div>
        </footer>
      </motion.article>
    </div>
  );
};

export default BlogPost;
