import React from 'react';
import { Link } from 'react-router-dom';
import Skills from '../components/Skills.tsx';
import { Timeline } from '../components/Timeline.tsx';
import { timelineEvents } from '../constants/timelineEvents.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const About: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-[80vh] ${isDarkMode ? 'darkModeColor text-white' : 'bg-white text-black'} transition-colors duration-300`}
    >
      <div className="flex items-start justify-center">
        <div className="mt-20 w-full space-y-12">
          <h1 className={`text-center text-7xl font-bold`}>about me</h1>
          <div className="flex flex-col items-center justify-center space-y-8">
            <Timeline events={timelineEvents} />
          </div>
          <Skills />
          <h2 className="text-center text-2xl font-bold">
            checkout my{' '}
            <Link className="hover:text-blue-600" to="/projects">
              projects
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
