import React, { useState } from 'react';
import { FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';
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
      >
        <div className="flex min-h-[88vh] items-center justify-center">
          <div className="space-y-6 text-center">
            <h2
              className={`text-2xl font-light ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              <Link
                className="border-b border-dotted border-current hover:text-blue-600"
                to="/about"
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
              className="inline-flex items-center rounded-full bg-pink-600 px-4 py-2 font-bold text-white hover:bg-pink-700"
              onClick={handleButtonClick}
            >
              <span className="mr-2">resume</span>
              <FiEye className="h-4 w-4 font-bold" />
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className={`rounded-lg p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} w-full max-w-lg md:max-w-2xl`}
          >
            <h2 className="mb-4 text-center text-2xl font-bold">Resume</h2>
            <iframe
              allow="autoplay"
              height="400"
              src="https://drive.google.com/file/d/1Ib1pmRoX6d3bR9HPcJvQVNQBlI2Qe73j/preview"
              width="100%"
            ></iframe>
            <div className="mt-4 flex justify-center">
              <button
                className="mt-4 inline-flex items-center rounded-full bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700"
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
