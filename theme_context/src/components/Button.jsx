
import { useTheme } from './ThemeContext';
import '../styles/Buttons.css'

const Buttons = () => {
  const { theme } = useTheme();

  return (
    <div>
      <button style={{ background: theme === 'dark' ? '#444' : '#ccc', color: theme === 'dark' ? '#fff' : '#333' }}>Button 1</button>
      <button style={{ background: theme === 'dark' ? '#444' : '#ccc', color: theme === 'dark' ? '#fff' : '#333' }}>Button 2</button>
    </div>
  );
};

export default Buttons;
