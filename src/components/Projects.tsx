import React, { useEffect } from 'react';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';
import ProjectCard from './ProjectCard.tsx';

const Projects: React.FC = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      description:
        'Imagery is a image management service that allows you to upload, store and edit your images. ',
      githubLink: 'https://github.com/rishmi5h/image-processing-service',
      imageUrl: 'assets/imagery.webp',
      name: 'Imagery - Image management',
      projectLink: 'https://imagery.rishmi5h.com/',
      techStack: ['Spring Boot', 'React', 'Tailwind CSS', 'MySQL', 'AWS S3'],
    },
    {
      description: 'Portfolio website but themed like a terminal. ',
      githubLink: 'https://github.com/rishmi5h/terminal',
      imageUrl: 'assets/terminal.webp',
      name: 'Terminal - Portfolio',
      projectLink: 'https://terminal.rishmi5h.com/',
      techStack: ['React', 'Tailwind CSS', 'TypeScript', 'Vite', 'Netlify'],
    },
    {
      description:
        'ΣUI is a Component Library that helps in building UI faster and easier. ',
      githubLink: 'https://github.com/rishmi5h/Sigma-UI',
      imageUrl: 'assets/sigma-ui.webp',
      name: 'Sigma UI - Component Library',
      projectLink: 'https://sigma-ui.rishmi5h.com/',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    },
    {
      description: 'A fun website to ask your crush out on a date. ',
      githubLink: 'https://github.com/rishmi5h/doyouwannagooutwithme',
      imageUrl: 'assets/do-you-wanna-go-out.webp',
      name: 'Do you wanna go out with me?',
      projectLink: 'https://doyouwannagooutwith.rishmi5h.com/',
      techStack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      description: 'Created 30 projects in 30 days using vanilla JavaScript. ',
      githubLink: 'https://github.com/rishmi5h/30days-vanilla-js-challenge',
      imageUrl: 'assets/30-days-vanilla-js.webp',
      name: '30 days of vanilla JavaScript',
      projectLink: 'https://vanilla-js-projects-101.netlify.app/',
      techStack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      description:
        'Long short term memory (LSTM) based load forecasting for electricity demand',
      githubLink: 'https://github.com/rishmi5h/final-year-project',
      imageUrl: 'assets/lstm.webp',
      name: 'LSTM based load forecasting',
      projectLink:
        'https://drive.google.com/file/d/1nBQQUfHQqdP92OzcVOUmt2RFXrVNy6Sf/view',
      techStack: ['Machine Learning', 'Python', 'LSTM'],
    },
    {
      description: 'A fun game to test your knowledge of flags emojis.',
      githubLink: 'https://github.com/rishmi5h/know-the-flags',
      imageUrl: 'assets/know-the-flags.webp',
      name: 'Know The Flags',
      projectLink: 'https://flags-emoji.netlify.app/',
      techStack: ['React', 'Tailwind CSS'],
    },
    // Add more projects as needed
  ];

  useEffect(() => {
    projects.forEach((project) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = project.imageUrl;
      document.head.append(link);
    });

    return () => {
      // Clean up preload links when component unmounts
      const preloadLinks = document.head.querySelectorAll(
        'link[rel="preload"][as="image"]',
      );
      preloadLinks.forEach((link) => document.head.removeChild(link));
    };
  });

  return (
    <div
      className={`min-h-screen py-16 ${
        isDarkMode ? darkModeColor : lightModeColor
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <h1
          className={`mb-12 text-center text-4xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          My Projects
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
