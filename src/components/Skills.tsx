import { motion } from 'framer-motion';
import React from 'react';
import {
  FaAws,
  FaCss3,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import {
  SiApachekafka,
  SiGrafana,
  SiKubernetes,
  SiMongodb,
  SiOracle,
  SiPostgresql,
  SiPrometheus,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { useTheme } from '../contexts/ThemeContext.tsx';

interface Skill {
  icon: React.ElementType;
  name: string;
}

const skills: Skill[] = [
  { icon: FaReact, name: 'React' },
  { icon: SiSpring, name: 'Spring Boot' },
  { icon: FaJs, name: 'JavaScript' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: FaAws, name: 'AWS' },
  { icon: FaJava, name: 'Java' },
  { icon: FaDatabase, name: 'SQL' },
  { icon: FaHtml5, name: 'HTML' },
  { icon: FaCss3, name: 'CSS' },
  { icon: FaPython, name: 'Python' },
  { icon: FaDocker, name: 'Docker' },
  { icon: SiKubernetes, name: 'Kubernetes' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiApachekafka, name: 'Kafka' },
  { icon: SiPostgresql, name: 'Postgres' },
  { icon: SiOracle, name: 'Oracle DB' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: FaGithub, name: 'GitHub' },
  { icon: SiGrafana, name: 'Grafana' },
  { icon: SiPrometheus, name: 'Prometheus' },
];

const Skills: React.FC = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="mb-20 mt-20">
      {/* <h2
        className={`mb-12 text-center text-5xl font-bold ${
          isDarkMode ? 'text-blue-300' : 'text-gray-800'
        }`}
      >
        My Toolkit
      </h2> */}
      <div className="flex justify-center">
        <motion.div
          animate="visible"
          className="grid max-w-5xl grid-cols-2 gap-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          initial="hidden"
          variants={containerVariants}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className={`flex flex-col items-center justify-center rounded-lg p-4 transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-white hover:bg-gray-100'
              } shadow-lg hover:shadow-xl`}
              variants={itemVariants}
            >
              <skill.icon
                className={`mb-3 text-5xl ${
                  isDarkMode
                    ? 'text-blue-400 hover:text-blue-300'
                    : 'text-blue-600 hover:text-blue-500'
                }`}
              />
              <span
                className={`text-center text-sm font-semibold ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
