import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'


const Navbar = ({ cartItems }) => {

  const cartItemCount = cartItems.length;
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About Us</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/cart" className="cart-link">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-count">{cartItemCount}</span>
      </Link>
    </nav>
  );
};

export default Navbar;
