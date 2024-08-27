import React from 'react';
import { useTheme } from '../contexts/ThemeContext.tsx';

interface TimelineEventProps {
  description: string;
  isLeft: boolean;
  location: string;
  skill: string;
  title: string;
  year: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  description,
  isLeft,
  location,
  skill,
  title,
  year,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`mb-8 flex ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      <div
        className={`w-5/12 ${isLeft ? 'pr-4 text-right' : 'pl-4 text-left'}`}
      >
        <div
          className={`text-lg font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
        >
          {year}
        </div>
        <div
          className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}
        >
          {title}
        </div>
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </div>
        <div
          className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}
        >
          {location}
        </div>
        <div
          className={`text-sm ${isDarkMode ? 'text-blue-300' : 'text-blue-500'} mt-2 flex flex-wrap ${isLeft ? 'justify-end' : 'justify-start'}`}
        >
          {skill.split(', ').map((s, index) => (
            <span
              className={`mb-1 ${isLeft ? 'ml-2' : 'mr-2'} rounded-full px-2 py-1 ${isDarkMode ? 'bg-blue-800 text-blue-200' : 'bg-blue-100 text-blue-800'}`}
              key={index}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="flex w-2/12 justify-center">
        <div
          className={`w-1 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} relative`}
        >
          <div
            className={`absolute h-4 w-4 rounded-full ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} top-0`}
            style={{ [isLeft ? 'right' : 'left']: '-6px' }}
          ></div>
        </div>
      </div>
      <div className="w-5/12"></div>
    </div>
  );
};

interface TimelineProps {
  events: Omit<TimelineEventProps, 'isLeft'>[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">
        {events.map((event, index) => (
          <TimelineEvent key={index} {...event} isLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export { Timeline, TimelineEvent };
