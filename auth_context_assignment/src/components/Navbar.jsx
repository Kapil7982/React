import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);

  return (
    <nav>
      <button onClick={toggleAuth}>
        {isAuth ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
};

export default Navbar;
