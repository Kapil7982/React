import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About Us</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
};

export default Navbar;
