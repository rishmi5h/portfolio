import React from 'react';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';
import ProjectCard from './ProjectCard.tsx';

const Projects: React.FC = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      description:
        'ΣUI is a Component Library that helps in building UI faster and easier. ',
      githubLink: 'https://github.com/rishmi5h/Sigma-UI',
      imageUrl: 'resources/sigma-ui.png',
      name: 'Sigma UI - Component Library',
      projectLink: 'https://sigma-ui.netlify.app/',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    },
    {
      description: 'A fun website to ask your crush out on a date. ',
      githubLink: 'https://github.com/rishmi5h/doyouwannagooutwithme',
      imageUrl: 'resources/do-you-wanna-go-out.png',
      name: 'Do you wanna go out with me?',
      projectLink: 'https://silly-rabanadas-5bebaf.netlify.app/',
      techStack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      description: 'Created 30 projects in 30 days using vanilla JavaScript. ',
      githubLink: 'https://github.com/rishmi5h/30days-vanilla-js-challenge',
      imageUrl: 'resources/30-days-vanilla-js.png',
      name: '30 days of vanilla JavaScript',
      projectLink: 'https://vanilla-js-projects-101.netlify.app/',
      techStack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      description:
        'Long short term memory (LSTM) based load forecasting for electricity demand',
      githubLink: 'https://github.com/rishmi5h/final-year-project',
      imageUrl: 'resources/lstm.png',
      name: 'LSTM based load forecasting',
      projectLink:
        'https://drive.google.com/file/d/1nBQQUfHQqdP92OzcVOUmt2RFXrVNy6Sf/view',
      techStack: ['Machine Learning', 'Python', 'LSTM'],
    },
    // Add more projects as needed
  ];

  return (
    <div
      className={`min-h-screen py-12 ${isDarkMode ? darkModeColor : lightModeColor} transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <h1
          className={`mb-8 text-center text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
        >
          my projects
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;