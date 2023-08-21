import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Us</h2>
      <p className="about-text">
        Welcome to our online store! We are passionate about providing high-quality products...
      </p>

      <div className="value-prop">
        <h3>Our Unique Value Proposition</h3>
        <p>
          Discover products that are not only stylish and innovative but also crafted with the utmost care and attention to detail.
        </p>
      </div>

      <div className="brand-story">
        <h3>Our Brand Story</h3>
        <p>
          Founded in [year], our brand started with a vision to [share your brand's story and journey].
        </p>
      </div>

      <div className="behind-scenes">
        <h3>Behind the Scenes</h3>
        <p>
          We work tirelessly to source the best materials, design products that resonate with your lifestyle, and create a seamless shopping experience.
        </p>
      </div>
    </div>
  );
};

export default About;
