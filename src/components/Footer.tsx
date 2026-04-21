import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';
import SocialIcon from './SocialIcon.tsx';

const Footer = () => {
  const { isDarkMode } = useTheme();
  return (
    <footer
      className={`mt-auto py-4 ${isDarkMode ? darkModeColor : lightModeColor} transition-colors duration-300`}
    >
      <div className="flex justify-center space-x-2 sm:space-x-4">
        <SocialIcon
          Icon={FaGithub}
          link="https://github.com/rishmi5h"
          name="GitHub Profile"
        />
        <SocialIcon
          Icon={FaEnvelope}
          link="mailto:mail@rishmi5h.com"
          name="Email"
        />
      </div>
    </footer>
  );
};

export default Footer;
