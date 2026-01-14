import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard.tsx';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { funProjects, projects } from '../constants/projects.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const Projects: React.FC = () => {
  const { isDarkMode } = useTheme();

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
      className={`min-h-screen py-20 ${
        isDarkMode ? darkModeColor : lightModeColor
      } transition-colors duration-300`}
      id="projects"
      style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
    >
      <div className="container mx-auto px-4">
        <h1
          className={`my-12 text-center text-4xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          my projects
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <h2
          className={`mb-12 mt-32 text-center text-3xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          fun projects
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {funProjects.map((project, index) => (
            <ProjectCard key={`fun-${index}`} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
