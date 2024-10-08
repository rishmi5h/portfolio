import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
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
          Icon={FaLinkedin}
          link="https://www.linkedin.com/in/rishmi5h/"
          name="LinkedIn Profile"
        />
        <SocialIcon
          Icon={FaInstagram}
          link="https://www.instagram.com/rishmi5h/"
          name="Instagram Profile"
        />
        <SocialIcon
          Icon={FaTwitter}
          link="https://twitter.com/rishmi5h"
          name="Twitter Profile"
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
