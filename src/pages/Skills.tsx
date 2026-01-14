import React from 'react';
import SkillsComponent from '../components/Skills.tsx';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const Skills: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${
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
    </div>
  );
};

export default Skills;
