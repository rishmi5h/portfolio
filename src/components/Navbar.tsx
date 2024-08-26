import { Link } from 'react-router-dom';
import {
  darkModeColor,
  darkModeTextColor,
  lightModeColor,
  lightModeTextColor,
  navLinkColor,
} from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const NavLink = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => (
  <Link
    className={`${navLinkColor} relative px-3 py-2 text-xl transition-colors hover:text-pink-500 dark:text-gray-500 dark:hover:text-pink-400`}
    to={to}
  >
    {children}
    <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transform bg-pink-500 transition-transform hover:scale-x-100"></span>
  </Link>
);

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
        {/* <div className="flex items-center space-x-8">
          <NavLink to="/">home</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/projects">projects</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </div> */}
        <div>
          <button className="p-2 text-2xl" onClick={toggleTheme}>
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
