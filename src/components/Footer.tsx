import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext.tsx';

const Footer = () => {
  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center space-x-4">
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
    </div>
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
      <Icon size={24} />
    </a>
  );
};

export default Footer;
