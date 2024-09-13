import React, { useState } from 'react';
import { FiEye } from 'react-icons/fi';
import { HashLink as Link } from 'react-router-hash-link';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const Home = () => {
  const { isDarkMode } = useTheme();
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div
        className={` ${isDarkMode ? darkModeColor : lightModeColor} transition-colors duration-300`}
        id="home"
      >
        <div className="flex min-h-[88vh] items-center justify-center">
          <div className="space-y-6 text-center">
            <h2
              className={`text-2xl font-light ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              <Link
                className="border-b border-dotted border-current hover:text-blue-600"
                to="#about"
              >
                who am i ?
              </Link>
            </h2>
            <h1 className={`text-7xl font-bold text-blue-600`}>
              rishabh mishra
            </h1>
            <p
              className={`text-2xl font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              software engineer - India
            </p>
            <button
              aria-label="View Resume"
              className="inline-flex items-center rounded-full bg-pink-600 px-4 py-2 font-bold text-white hover:bg-pink-700"
              onClick={handleButtonClick}
            >
              <span className="mr-2">resume</span>
              <FiEye className="h-4 w-4 font-bold" />
            </button>
          </div>
        </div>
        <div className="mt-2 flex justify-center">
          <a className="animate-bounce" href="#about">
            <svg
              className={`h-10 w-10 text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                fill="none"
                height="21"
                rx="8"
                ry="8"
                stroke="currentColor"
                strokeWidth="2"
                width="16"
                x="4"
                y="2"
              ></rect>
              <circle cx="12" cy="8" fill="currentColor" r="1"></circle>
              <circle cx="12" cy="12" fill="currentColor" r="1"></circle>
              <path
                d="M8 16l4 4 4-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div
            className={`rounded-lg p-4 shadow-lg sm:p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} w-full max-w-sm sm:max-w-lg md:max-w-2xl`}
          >
            <h2 className="mb-2 text-center text-xl font-bold sm:mb-4 sm:text-2xl">
              Resume
            </h2>
            <iframe
              className="h-[300px] w-full sm:h-[400px]"
              src="/assets/resume.pdf"
              title="Resume PDF"
            ></iframe>
            <div className="mt-2 flex justify-center sm:mt-4">
              <button
                className="mt-2 inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white hover:bg-red-700 sm:mt-4 sm:px-4 sm:py-2 sm:text-base"
                onClick={handleClosePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
