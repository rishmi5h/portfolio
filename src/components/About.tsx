import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { Timeline } from './Timeline.tsx';

const About: React.FC = () => {
  const { isDarkMode } = useTheme();

  const timelineEvents = [
    {
      description:
        'Developed a quick build tool that reduced development time by 30%. Collaborated and trained other developers on new technologies / architectures.',
      location: 'Hyderabad, India',
      skill:
        'java, springboot, react, docker, airflow, typescript, tailwind, python',
      title: 'Software Engineer - Optum',
      year: '2021/10 - Current',
    },
    {
      description:
        'Build incident management webapp using React and collaborated with backend developers.',
      location: 'Remote',
      skill: 'react, html, css, javascript, tailwind',
      title: 'Software Engineer Trainee - Incture Technologies',
      year: '2021/06 - 2021/09',
    },
    {
      description:
        'Specialization in Electrical Engineering, did internships, projects and organized many events.',
      location: 'Raipur, India',
      skill:
        'electrical engineering, sponsorship, event-management, machine learning',
      title: 'B.Tech - NIT Raipur',
      year: '2017/08 - 2021/05',
    },
  ];

  return (
    <div
      className={`min-h-screen ${isDarkMode ? 'darkModeColor text-white' : 'bg-white text-black'} transition-colors duration-300`}
    >
      <div className="flex items-start justify-center">
        <div className="mt-20 w-full space-y-6">
          <h1 className={`text-center text-7xl font-bold text-blue-600`}>
            about me
          </h1>
          <div className="flex flex-col items-center justify-center space-y-8">
            <Timeline events={timelineEvents} />
          </div>
          <h1 className="text-center text-2xl font-bold">
            checkout my <Link to="/projects">projects</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
