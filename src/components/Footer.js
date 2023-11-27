// Footer.js

import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>Your company description goes here.</p>
        </div>

        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div className="footer-section">
          <h2>Follow Us</h2>
          <p>Stay connected on social media:</p>
          <div className="social-icons">
            {/* Add your social media icons here */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Your Website Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
