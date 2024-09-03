import { FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  darkModeColor,
  darkModeTextColor,
  lightModeColor,
  lightModeTextColor,
} from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav
      className={` ${isDarkMode ? darkModeColor : lightModeColor} transition-colors duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <h1
          className={`text-2xl font-bold hover:text-blue-600 ${isDarkMode ? darkModeTextColor : lightModeTextColor}`}
        >
          <Link to="/">
            rishmi
            <span className="text-blue-600">5</span>h
          </Link>
        </h1>
        <div>
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
