import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.instagram.com/your-instagram-link">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/your-facebook-link">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com/your-twitter-link">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div className="footer-links">
        <a href="/faq">FAQ</a>
        <a href="/jobs">Job Opportunities</a>
      </div>
    </footer>
  );
};

export default Footer;
