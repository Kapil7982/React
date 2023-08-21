import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-info">
        If you have any questions, feel free to reach out to us via email or phone.
      </p>
      <p className="contact-info">
        Email: <a className="contact-email" href="mailto:info@example.com">info@example.com</a>
      </p>
      <p className="contact-info">
        Phone: <span className="contact-phone">123-456-7890</span>
      </p>
      <div className="social-icons">
        <a href="https://www.facebook.com/your-facebook-link">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/your-instagram-link">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com/your-twitter-link">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
