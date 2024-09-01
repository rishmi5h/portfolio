import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

const Footer = () => {
  const { isDarkMode } = useTheme();
  return (
    <footer
      className={`mt-auto py-4 ${isDarkMode ? darkModeColor : lightModeColor} transition-colors duration-300`}
    >
      <div className="flex justify-center space-x-2 sm:space-x-4">
        <SocialIcon Icon={FaGithub} link="https://github.com/rishmi5h" />
        <SocialIcon
          Icon={FaLinkedin}
          link="https://www.linkedin.com/in/rishmi5h/"
        />
        <SocialIcon
          Icon={FaInstagram}
          link="https://www.instagram.com/rishmi5h/"
        />
        <SocialIcon Icon={FaTwitter} link="https://twitter.com/rishmi5h" />
        <SocialIcon Icon={FaEnvelope} link="mailto:mail@rishmi5h.com" />
      </div>
    </footer>
  );
};

const SocialIcon = ({
  Icon,
  link,
}: {
  Icon: React.ElementType;
  link: string;
}) => {
  const { isDarkMode } = useTheme();
  return (
    <a
      className={`block ${isDarkMode ? 'text-white hover:text-pink-400' : 'text-gray-800 hover:text-pink-600'} transition-colors`}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon className="sm:text-2xl" size={20} />
    </a>
  );
};

export default Footer;
