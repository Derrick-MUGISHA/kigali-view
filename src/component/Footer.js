import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <img src="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" alt="Kigali view" className="logo" />
            <p>A Top 10 Best Big City in the Africa<br />One of the Best Secured Cities in the World<br />One of the Friendliest Cities</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/media">Media</a></li> 
              <li><a href="/partnership">Partnership</a></li> {/* Update with actual route */}
              <li><a href="/about-us">About Us</a></li> {/* Update with actual route */}
              <li><a href="/contact">Contact</a></li> {/* Update with actual route */}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>277 Kabuye St., Kigali, Rwanda<br />Kigali, Rwanda</p>
            <p>
              <p>+250 614 221 662</p> 
                <p> +250 800 354 2657</p>
            </p>
          </div>
        </div>
        <div className="social-icons">
          <a href="http://facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://x.com/__derr1ck__?t=P-KqVcqqOZeB5lJUN04PLQ&s=03" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/d.e.r.r.1.c.k?igsh=ZHYwZTg3M3Q2NDJs" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/mugisha-derrick-479788332/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
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
            <a href="/privacy-policy">Privacy Policy</a> {/* Update with actual URL */}
            <a href="/terms-conditions">Terms & Conditions</a> {/* Update with actual URL */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
