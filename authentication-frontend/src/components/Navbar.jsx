import React from 'react';
import './Navbar.css';
import logo from '../images/logo.jpg';

const Navbar = ({ setActiveComponent, userInfo, handleLogout}) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item navbar-item-logo">
        <a href="/" onClick={() => setActiveComponent('login')}>
          <img src={logo} alt="Logo" className="navbar-logo" />
          </a>
        </li>
        {userInfo ? (
          <li className="navbar-item navbar-item-right">
            <span className="navbar-user-info">
              {userInfo.first_name} ({userInfo.roles.join(', ')})
            </span>
          </li>
          
        ) : (
          <>
            <li className="navbar-item navbar-item-right">
              <button className="navbar-button" onClick={() => setActiveComponent('login')}>
                Login
              </button>
            </li>
            
          </>
          
        )}
        <li className="navbar-item navbar-item-right">
              <button className="navbar-button" onClick={handleLogout}>
                Logout
              </button>
            </li>
        <li className="navbar-item navbar-item-right">
              <button className="navbar-button" onClick={() => setActiveComponent('register')}>
                Register
              </button>
            </li>
        <li className="navbar-item navbar-item-right">
          <button className="navbar-button" onClick={() => setActiveComponent('productForm')}>
            Add Product
          </button>
        </li>
        <li className="navbar-item navbar-item-right">
          <button className="navbar-button" onClick={() => setActiveComponent('productList')}>
            Product List
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
