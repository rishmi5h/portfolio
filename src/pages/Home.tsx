import React, { useState } from 'react';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const Home = () => {
  const { isDarkMode } = useTheme();
  const [roast, setRoast] = useState<string>('');
  const [loadingRoast, setLoadingRoast] = useState<boolean>(false);

  const handleRoastMe = async () => {
    setLoadingRoast(true);
    try {
      const response = await fetch('https://raas.rishmi5h.com/roast/');
      if (!response.ok) throw new Error('Failed to fetch roast');
      const data = await response.json();
      setRoast(data.roast || 'No roast returned');
    } catch {
      setRoast('The roast machine is overheating... try again!');
    } finally {
      setLoadingRoast(false);
    }
  };

  return (
    <>
      <div
        className={`flex min-h-screen flex-col items-center justify-center transition-colors duration-300 ${isDarkMode ? darkModeColor : lightModeColor}`}
        id="home"
        style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
      >
        <div className="space-y-8 px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl">✨</span>
            <p
              className={`text-xl font-light sm:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              "Jack of all trades, master of some"
            </p>
            <span className="text-2xl">✨</span>
          </div>

          <div className="space-y-4">
            <div
              className={`mx-auto h-0.5 w-24 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'}`}
            ></div>
            <h1 className="text-6xl font-bold text-blue-600 sm:text-7xl">
              rishabh mishra
            </h1>
            <div
              className={`mx-auto h-0.5 w-24 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'}`}
            ></div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <p
              className={`text-xl font-medium sm:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              software engineer - India
            </p>
            <span className="text-xl">🇮🇳</span>
          </div>
        </div>
        <div className="mt-16">
          <a className="block animate-bounce" href="#roast">
            <svg
              className={`h-10 w-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </a>
        </div>
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
              I have an AI that roasts people. Here, let me show you how it
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
