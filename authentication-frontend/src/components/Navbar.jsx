import React from 'react';
import './Navbar.css';
import logo from '../images/logo.jpg';

const Navbar = ({ setActiveComponent }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
      <li className="navbar-item navbar-item-logo">
          <img src={logo} alt="Logo" className="navbar-logo" /> {/* Add logo element */}
        </li>
        <li className="navbar-item navbar-item-right">
          <button className="navbar-button" onClick={() => setActiveComponent('login')}>Login</button>
        </li>
        <li className="navbar-item navbar-item-right">
          <button className="navbar-button" onClick={() => setActiveComponent('register')}>Register</button>
        </li>
        <li className="navbar-item navbar-item-right">
          <button className="navbar-button" onClick={() => setActiveComponent('productForm')}>Add Product</button>
        </li>
        <li className="navbar-item navbar-item-right">
          <button className="navbar-button" onClick={() => setActiveComponent('productList')}>Product List</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
