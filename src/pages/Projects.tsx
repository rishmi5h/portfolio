import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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

        {/* Closing CTA — visitors who scroll all the way down aren't stuck
            at the footer with nowhere to go. */}
        <div className="mt-32">
          <div className="space-y-3 text-center">
            <h2
              className={`text-3xl font-bold ${isDarkMode ? 'gradient-text' : 'gradient-text-light'}`}
            >
              keep exploring
            </h2>
            <p
              className={`text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
            >
              Two more corners of this site worth poking at.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              className={`group block rounded-2xl border p-6 transition-all duration-300 ${
                isDarkMode
                  ? 'border-white/10 bg-white/5 hover:border-blue-400/40 hover:bg-white/10'
                  : 'border-black/10 bg-white hover:border-blue-400/60 hover:shadow-lg'
              }`}
              to="/interesting"
            >
              <div className="mb-3 text-3xl" aria-hidden>
                🔗
              </div>
              <h3
                className={`text-lg font-bold tracking-tight transition-colors sm:text-xl ${
                  isDarkMode
                    ? 'text-gray-100 group-hover:text-blue-300'
                    : 'text-gray-900 group-hover:text-blue-600'
                }`}
              >
                interesting finds →
              </h3>
              <p
                className={`mt-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Links, essays, and bits from around the internet.
              </p>
            </Link>

            <Link
              className={`group block rounded-2xl border p-6 transition-all duration-300 ${
                isDarkMode
                  ? 'border-white/10 bg-white/5 hover:border-blue-400/40 hover:bg-white/10'
                  : 'border-black/10 bg-white hover:border-blue-400/60 hover:shadow-lg'
              }`}
              to="/books"
            >
              <div className="mb-3 text-3xl" aria-hidden>
                📚
              </div>
              <h3
                className={`text-lg font-bold tracking-tight transition-colors sm:text-xl ${
                  isDarkMode
                    ? 'text-gray-100 group-hover:text-blue-300'
                    : 'text-gray-900 group-hover:text-blue-600'
                }`}
              >
                reading list →
              </h3>
              <p
                className={`mt-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Every book I&apos;ve read, grouped by year.
              </p>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <a
              className={`text-sm transition-colors ${
                isDarkMode
                  ? 'text-gray-500 hover:text-gray-300'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
              href="#home"
            >
              ↑ back to top
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
