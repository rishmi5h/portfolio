import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

interface ProjectCardProps {
  description: string;
  githubLink: string;
  imageUrl: string;
  name: string;
  projectLink: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  description,
  githubLink,
  imageUrl,
  name,
  projectLink,
  techStack,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${isDarkMode ? darkModeColor : lightModeColor} border-t-4 border-blue-400 dark:border-blue-600`}
    >
      <a href={projectLink} rel="noopener noreferrer" target="_blank">
        <img alt={name} className="h-48 w-full object-cover" src={imageUrl} />
      </a>
      <div className="p-6">
        <h3
          className={`mb-2 text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
        >
          {name}
        </h3>
        <p
          className={`mb-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              className={`rounded-full px-2 py-1 text-xs ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} `}
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <a
            className={`flex items-center ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}
            href={githubLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub className="mr-1" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            className={`flex items-center ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}
            href={projectLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-sm">Live Demo</span>
            <FaExternalLinkAlt className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
