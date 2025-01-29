import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <img src="logo-placeholder.png" alt="Kigali view" className="logo" />
            <p>A Top 10 Best Big City in the Africa<br />One of the Best Secured Cities in the World<br />One of the Friendliest Cities</p>
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
            <p>277 Kabuye St., Kigali, Rwanda<br />Kigali, Rwanda</p>
            <p>+250 614 221 662 |+250 800 354 2657</p>
          </div>
        </div>
        <div className="social-icons">
          <a href="http://facebook.com/"><FaFacebook /></a>
          <a href="https://x.com/__derr1ck__?t=P-KqVcqqOZeB5lJUN04PLQ&s=03"><FaTwitter /></a>
          <a href="https://www.instagram.com/d.e.r.r.1.c.k?igsh=ZHYwZTg3M3Q2NDJs"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/mugisha-derrick-479788332/"><FaLinkedin /></a>
          <a href="#fgd"><FaYoutube /></a>
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

