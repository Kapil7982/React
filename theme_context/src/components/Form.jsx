
import { useTheme } from './ThemeContext';
import '../styles/Form.css'

const Form = () => {
  const { theme } = useTheme();

  return (
    <form style={{ background: theme === 'dark' ? '#222' : '#f0f0f0' }}>
      <input type="text" placeholder="Name" style={{ color: theme === 'dark' ? '#fff' : '#333' }} />
      <button style={{ background: theme === 'dark' ? '#444' : '#ccc', color: theme === 'dark' ? '#fff' : '#333' }}>Submit</button>
    </form>
  );
};

export default Form;
