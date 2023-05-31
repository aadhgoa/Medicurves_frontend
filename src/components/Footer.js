import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-heading">Team</h4>
          <div className="team-section">
            <div className="team-section-name">
              <a href="/" className="footer-link">Archana Uscaicar</a>
              <a href="/" className="footer-link">Artha Naik Dessai</a>
              <a href="/" className="footer-link">KL Rithika</a>
            </div>
            <div className="team-section-name">
              <a href="/" className="footer-link">Aayush Anand</a>
              <a href="/" className="footer-link">Rishi Belani</a>
              <a href="/" className="footer-link">Sashreek Dhaimodkar</a>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Contact</h4>
          <p className="footer-text">123 Street, City</p>
          <p className="footer-text">Email: info@example.com</p>
          <p className="footer-text">Phone: 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="footer-social">
            <a href="#" className="footer-social-icon"><FaFacebookF /></a>
            <a href="#" className="footer-social-icon"><FaTwitter /></a>
            <a href="#" className="footer-social-icon"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
