import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/employees" className={location.pathname === '/employees' ? 'active' : ''}>Employee List</Link></li>
        <li><Link to="/admin" className={location.pathname === '/admin' ? 'active' : ''}>Admin</Link></li>
        {isAuthenticated ? (
          <li><Link to="/logout" onClick={logout}>Logout</Link></li>
        ) : (
          <li><Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
