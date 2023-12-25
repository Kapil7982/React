import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  logout();
  navigate('/'); // Redirect to the home page after logout

  return null; // Logout component doesn't render any UI
};

export default Logout;
