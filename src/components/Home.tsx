import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={` ${isDarkMode ? darkModeColor : lightModeColor} transition-colors duration-300`}
    >
      <div className="flex min-h-screen items-center justify-center">
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
          <h1 className={`text-7xl font-bold text-blue-600`}>rishabh mishra</h1>
          <p
            className={`text-2xl font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
            software engineer - India
          </p>
          <button className="inline-flex items-center rounded-full bg-pink-600 px-4 py-2 font-bold text-white hover:bg-pink-700">
            <span className="mr-2">resume</span>
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="fixed bottom-4 left-0 right-0 flex justify-center space-x-4">
        <SocialIcon Icon={FaGithub} link="https://github.com/rishmi5h" />
        <SocialIcon
          Icon={FaLinkedin}
          link="https://www.linkedin.com/in/rishmi5h/"
        />
        <SocialIcon
          Icon={FaInstagram}
          link="https://www.instagram.com/rishmi5h/"
        />
        <SocialIcon Icon={FaTwitter} link="https://twitter.com/rishmi5h" />
      </div>
    </div>
  );
};

const SocialIcon = ({
  Icon,
  link,
}: {
  Icon: React.ElementType;
  link: string;
}) => {
  const { isDarkMode } = useTheme();
  return (
    <a
      className={`block ${isDarkMode ? 'text-white hover:text-pink-400' : 'text-gray-800 hover:text-pink-600'} transition-colors`}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon size={24} />
    </a>
  );
};

export default Home;