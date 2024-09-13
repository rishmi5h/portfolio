import { useTheme } from '../contexts/ThemeContext.tsx';

const SocialIcon = ({
  Icon,
  link,
  name,
}: {
  Icon: React.ElementType;
  link: string;
  name: string;
}) => {
  const { isDarkMode } = useTheme();
  return (
    <a
      aria-label={`Visit ${name}`}
      className={`block ${isDarkMode ? 'text-white hover:text-pink-400' : 'text-gray-800 hover:text-pink-600'} transition-colors`}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon className="sm:text-2xl" size={20} />
    </a>
  );
};

export default SocialIcon;
