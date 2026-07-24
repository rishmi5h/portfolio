import { motion } from 'framer-motion';
import React from 'react';
import SkillsComponent from '../components/Skills.tsx';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const Skills: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`relative min-h-screen ${
        isDarkMode ? darkModeColor : lightModeColor
      } transition-colors duration-300`}
      id="skills"
      style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
    >
      <div className="flex items-start justify-center">
        <div className="mt-20 w-full space-y-12">
          <h1 className={`text-center text-7xl font-bold`}>my toolkit</h1>
          <div className="flex flex-col items-center justify-center space-y-8">
            <SkillsComponent />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a className="group relative block" href="#projects">
          <span
            className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-white/10' : 'bg-black/5'} scroll-indicator-ring`}
            style={{ height: 48, left: -4, top: -4, width: 48 }}
          />
          <motion.svg
            animate={{ y: [0, 8, 0] }}
            className={`h-10 w-10 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
            fill="none"
            stroke="currentColor"
            transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
            />
          </motion.svg>
        </a>
      </div>
    </div>
  );
};

export default Skills;
