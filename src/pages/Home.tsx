import React, { useState } from 'react';
import { FiEye, FiX } from 'react-icons/fi';
import { HashLink as Link } from 'react-router-hash-link';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const Home = () => {
  const { isDarkMode } = useTheme();
  const [showPopup, setShowPopup] = useState(false);
  const [roast, setRoast] = useState<string>('');
  const [loadingRoast, setLoadingRoast] = useState<boolean>(false);

  const handleButtonClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

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
          <h2
            className={`text-2xl font-light ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
            <Link
              className="border-b border-dotted border-current transition-colors duration-300 hover:text-blue-600"
              to="#about"
            >
              who am i ?
            </Link>
          </h2>
          <h1 className="text-6xl font-bold text-blue-600 sm:text-7xl">
            rishabh mishra
          </h1>
          <p
            className={`text-xl font-medium sm:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
            software engineer - India
          </p>
          <button
            aria-label="View Resume"
            className="inline-flex items-center rounded-full bg-pink-600 px-6 py-3 font-bold text-white transition-colors duration-300 hover:bg-pink-700"
            onClick={handleButtonClick}
          >
            <span className="mr-2">resume</span>
            <FiEye className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-16">
          <a className="block animate-bounce" href="#about">
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

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div
            className={`rounded-lg p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} w-full max-w-3xl`}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Resume</h2>
              <button
                className="text-gray-500 transition-colors duration-300 hover:text-gray-700"
                onClick={handleClosePopup}
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>
            <iframe
              className="h-[70vh] w-full"
              src="/assets/resume.pdf"
              title="Resume PDF"
            ></iframe>
          </div>
        </div>
      )}

      {/* Roast Section */}
      <div
        className={`flex min-h-screen flex-col items-center justify-center transition-colors duration-300 ${isDarkMode ? darkModeColor : lightModeColor}`}
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
