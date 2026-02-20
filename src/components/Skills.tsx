import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
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
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showPrompting, setShowPrompting] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 'all', once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowPrompting(true);
      }, 1500); // Switch after 1.5 second - just a glimpse

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced from 0.1 to 0.05
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2, // Reduced from default to 0.2
      },
      y: 0,
    },
  };

  return (
    <div
      ref={ref}
      className="relative mb-20 mt-20 px-4"
      onMouseEnter={() => showPrompting && setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex justify-center">
        <motion.div
          animate={{
            filter: showPrompting && !isHovering ? 'blur(8px)' : 'blur(0px)',
            opacity: showPrompting && !isHovering ? 0.15 : 1,
            scale: showPrompting && !isHovering ? 0.95 : 1,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-8 lg:grid-cols-5">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className={`flex flex-col items-center justify-center rounded-lg p-2 transition-all duration-300 sm:p-4 ${
                  isDarkMode
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-white hover:bg-gray-100'
                } shadow-lg hover:shadow-xl`}
                variants={itemVariants}
              >
                <skill.icon
                  className={`mb-2 text-3xl sm:text-4xl md:text-5xl ${
                    isDarkMode
                      ? 'text-blue-400 hover:text-blue-500'
                      : 'text-blue-600 hover:text-blue-500'
                  }`}
                />
                <span
                  className={`text-center text-xs font-semibold sm:text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: showPrompting && !isHovering ? 1 : 0 }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="max-w-4xl space-y-6 px-4 text-center">
            <motion.div
              animate={{ y: showPrompting ? 0 : 20 }}
              initial={{ y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2
                className={`bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent sm:text-6xl md:text-8xl ${
                  isDarkMode
                    ? 'from-blue-400 via-purple-400 to-pink-400'
                    : 'from-blue-600 via-purple-600 to-pink-600'
                }`}
              >
                Prompting
              </h2>
            </motion.div>
            <motion.div
              animate={{ y: showPrompting ? 0 : 20 }}
              initial={{ y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p
                className={`text-xl font-medium sm:text-2xl md:text-3xl ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}
              >
                is my <span className="font-bold italic">real</span> superpower
              </p>
            </motion.div>
            {/* <motion.div
              animate={{ scale: showPrompting ? 1 : 0.8 }}
              initial={{ scale: 0.8 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p
                className={`text-sm sm:text-base md:text-lg ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                (all those tools i learned before getting into AI)
              </p>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
