import React from 'react';
import { Timeline } from '../components/Timeline.tsx';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { timelineEvents } from '../constants/timelineEvents.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const About: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? darkModeColor : lightModeColor
      } transition-colors duration-300`}
      id="about"
      style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
    >
      <div className="flex items-start justify-center">
        <div className="mt-20 w-full space-y-12 pb-20">
          <h1 className={`text-center text-7xl font-bold`}>about me</h1>
          <div className="flex flex-col items-center justify-center space-y-8">
            <Timeline events={timelineEvents} />
          </div>
          <div className="flex items-center justify-center px-4">
            <p
              className={`text-center text-xl sm:text-2xl ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              "Jack of all trades, mastering some"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
