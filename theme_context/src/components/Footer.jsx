
import { useTheme } from './ThemeContext';
import '../styles/Footer.css'

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer style={{ background: theme === 'dark' ? '#333' : '#f0f0f0', color: theme === 'dark' ? '#fff' : '#333' }}>
      This is the footer.
    </footer>
  );
};

export default Footer;
