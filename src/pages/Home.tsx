import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const SCRAMBLE_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';

const useTextScramble = (text: string, delay: number = 0) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;
    let iteration = 0;

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayed(
          text
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' ';
              if (i < iteration) return text[i];
              return SCRAMBLE_CHARS[
                Math.floor(Math.random() * SCRAMBLE_CHARS.length)
              ];
            })
            .join(''),
        );
        iteration += 1 / 3;
        if (iteration >= text.length) {
          setDisplayed(text);
          setDone(true);
          clearInterval(interval);
        }
      }, 30);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return { displayed, done };
};

const Home = () => {
  const { isDarkMode } = useTheme();
  const [roast, setRoast] = useState<string>('');
  const [loadingRoast, setLoadingRoast] = useState<boolean>(false);

  const { displayed: nameText } = useTextScramble('rishabh mishra', 400);
  const { displayed: tagline } = useTextScramble(
    '"Jack of all trades, master of some"',
    1600,
  );

  const handleRoastMe = async () => {
    setLoadingRoast(true);
    try {
      const response = await fetch('https://raas.rishmi5h.com/roast/');
      if (!response.ok) throw new Error('Failed to fetch roast');
      const data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 400));
      setRoast(data.roast || 'No roast returned');
    } catch {
      setRoast('The roast machine is overheating... try again!');
    } finally {
      setLoadingRoast(false);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 },
    },
  };

  return (
    <>
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden transition-colors duration-300 ${isDarkMode ? darkModeColor : lightModeColor}`}
        id="home"
        style={{
          scrollSnapAlign: 'start',
          scrollSnapStop: 'always',
          minHeight: 'calc(100dvh - 72px)',
        }}
      >
        {/* Floating orbs background */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className={`orb orb-1 ${isDarkMode ? 'opacity-30' : 'opacity-20'}`}
          />
          <div
            className={`orb orb-2 ${isDarkMode ? 'opacity-25' : 'opacity-15'}`}
          />
          <div
            className={`orb orb-3 ${isDarkMode ? 'opacity-20' : 'opacity-10'}`}
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

        <motion.div
          className="relative z-10 space-y-4 px-4 text-center sm:space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Tagline */}
          <motion.div
            className="flex items-center justify-center gap-3"
            variants={itemVariants}
          >
            <p
              className={`font-mono text-sm tracking-wide sm:text-lg md:text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
            >
              {tagline || '\u00A0'}
            </p>
          </motion.div>

          {/* Name with gradient + scramble */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.div
              className={`mx-auto h-px w-32 ${isDarkMode ? 'bg-gradient-to-r from-transparent via-blue-500 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-400 to-transparent'}`}
              variants={lineVariants}
            />
            <h1
              className={`text-4xl font-bold tracking-tight sm:text-6xl md:text-8xl ${isDarkMode ? 'gradient-text' : 'gradient-text-light'}`}
            >
              {nameText || '\u00A0'}
            </h1>
            <motion.div
              className={`mx-auto h-px w-32 ${isDarkMode ? 'bg-gradient-to-r from-transparent via-blue-500 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-400 to-transparent'}`}
              variants={lineVariants}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="flex items-center justify-center gap-2"
            variants={itemVariants}
          >
            <p
              className={`text-lg font-medium tracking-wide sm:text-xl md:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              software engineer
            </p>
            <span className="text-lg sm:text-xl">·</span>
            <p
              className={`text-lg font-medium tracking-wide sm:text-xl md:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              India
            </p>
            <span className="text-lg sm:text-xl">🇮🇳</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <a className="group relative block" href="#roast">
            <span
              className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-white/10' : 'bg-black/5'} scroll-indicator-ring`}
              style={{ width: 48, height: 48, left: -4, top: -4 }}
            />
            <motion.svg
              className={`h-10 w-10 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
              />
            </motion.svg>
          </a>
        </motion.div>
      </div>

      {/* Roast Section */}
      <div
        className={`flex min-h-screen flex-col items-center justify-center transition-colors duration-300 ${isDarkMode ? darkModeColor : lightModeColor}`}
        id="roast"
        style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
      >
        <div className="max-w-2xl space-y-8 px-4 py-20 text-center">
          <div className="space-y-4">
            <div className="inline-block">
              <div className="animate-pulse text-6xl">🔥</div>
            </div>
            <h2
              className={`text-5xl font-bold sm:text-6xl ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}
            >
              Feeling Brave?
            </h2>
            <p
              className={`text-xl font-medium sm:text-2xl ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              I have an tool that roasts people. Here, let me show you how it
              works...
            </p>
          </div>

          {!roast ? (
            <div className="space-y-6">
              <button
                disabled={loadingRoast}
                className="inline-flex items-center rounded-full bg-pink-600 px-6 py-3 font-bold text-white transition-colors duration-300 hover:bg-pink-700 disabled:bg-gray-500"
                onClick={handleRoastMe}
              >
                {loadingRoast ? '⏳ Getting roasted...' : '🎤 Bring It On'}
              </button>
              <p
                className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                No worries, it's all in good fun! 😄
              </p>
            </div>
          ) : (
            <div
              className={`space-y-6 rounded-lg p-8 shadow-lg ${
                isDarkMode ? 'bg-gray-700/30' : 'bg-gray-200'
              }`}
            >
              <div className="text-5xl">💬</div>
              <p
                className={`text-lg font-medium italic leading-relaxed ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-900'
                }`}
              >
                "{roast}"
              </p>
              <button
                className="inline-flex items-center rounded-full bg-pink-600 px-6 py-3 font-bold text-white transition-colors duration-300 hover:bg-pink-700 disabled:bg-gray-500"
                onClick={handleRoastMe}
              >
                {loadingRoast ? '⏳ Loading...' : '🔥 More Pain'}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
