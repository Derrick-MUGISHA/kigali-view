import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <img src="logo-placeholder.png" alt="Experience Columbus" className="logo" />
            <p>A Top 10 Best Big City in the U.S.<br />One of the Best Food Cities in the U.S.<br />One of the Friendliest Cities in the U.S.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Media</a></li>
              <li><a href="#">Partnership</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>277 W. Nationwide Blvd., Ste. 125<br />Columbus, OH 43215</p>
            <p>(614) 221-6623 | 800-354-2657</p>
          </div>
        </div>
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaYoutube /></a>
        </div>
        <div className="language-selector">
          <select>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

