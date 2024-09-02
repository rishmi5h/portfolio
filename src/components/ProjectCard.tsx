import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
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
      className={`h-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <img
        src={imageUrl}
        alt={name}
        className="h-48 w-full object-cover object-center"
      />
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold">{name}</h3>
        <p
          className={`mb-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className={`rounded-full px-2 py-1 text-xs ${
                isDarkMode
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            } hover:underline`}
          >
            <FaGithub className="mr-1" />
            <span>GitHub</span>
          </a>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            } hover:underline`}
          >
            <span>Live Demo</span>
            <FaExternalLinkAlt className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
