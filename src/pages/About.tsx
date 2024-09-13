import React from 'react';
import Skills from '../components/Skills.tsx';
import { Timeline } from '../components/Timeline.tsx';
import { timelineEvents } from '../constants/timelineEvents.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const About: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-[80vh] ${
        isDarkMode ? 'darkModeColor text-white' : 'bg-white text-black'
      } transition-colors duration-300`}
      id="about"
    >
      <div className="flex items-start justify-center">
        <div className="mt-20 w-full space-y-12">
          <h1 className={`text-center text-7xl font-bold`}>about me</h1>
          <div className="flex flex-col items-center justify-center space-y-8">
            <Timeline events={timelineEvents} />
          </div>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
