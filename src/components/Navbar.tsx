import { FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  darkModeColor,
  darkModeTextColor,
  lightModeColor,
  lightModeTextColor,
} from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { useLogoClickSequence } from './EasterEggs.tsx';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { handleClick, success } = useLogoClickSequence();

  return (
    <nav
      className={` ${isDarkMode ? darkModeColor : lightModeColor} transition-colors duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <h1
          className={`text-2xl font-bold hover:text-blue-600 ${isDarkMode ? darkModeTextColor : lightModeTextColor} ${success ? 'text-rainbow animate-rainbow' : ''}`}
          onClick={handleClick}
        >
          <Link to="/">
            rishmi
            <span className="text-blue-600">5</span>h
          </Link>
        </h1>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors sm:text-base ${
              isDarkMode
                ? 'text-gray-300 hover:bg-white/10 hover:text-white'
                : 'text-gray-700 hover:bg-black/5 hover:text-gray-900'
            }`}
            to="/interesting"
          >
            interesting
          </Link>
          <Link
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors sm:text-base ${
              isDarkMode
                ? 'text-gray-300 hover:bg-white/10 hover:text-white'
                : 'text-gray-700 hover:bg-black/5 hover:text-gray-900'
            }`}
            to="/books"
          >
            books
          </Link>
          <button
            aria-label={
              isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'
            }
            className="p-2 text-2xl text-gray-500"
            onClick={toggleTheme}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
