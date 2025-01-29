// Navbar.jsx
import React, { useState } from 'react';
import { Search, Heart, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="top-navigation">
          <div className="logo">
            <img 
              src="/api/placeholder/200/50" 
              alt="Experience Columbus Logo" 
            />
          </div>
          
          <div className="desktop-menu">
            <a href="#">Meeting Planners</a>
            <a href="#">Tour & Reunion Planners</a>
            <a href="#">Partners</a>
            <a href="#">Blog</a>
            <a href="#">Yes, Columbus</a>
          </div>

          <div className="utility-nav">
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
              <a href="#"><i className="fab fa-threads"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
            <div className="wishlist">
              <Heart size={20} />
              <span>({wishlistCount})</span>
            </div>
            <Search size={20} className="cursor-pointer" />
            <button className="menu-button" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className="bottom-navigation">
          <div className="main-menu">
            <a href="#">EVENTS</a>
            <a href="#">THINGS TO DO</a>
            <a href="#">RESTAURANTS</a>
            <a href="#">HOTELS</a>
            <a href="#">NEIGHBORHOODS</a>
            <a href="#">EXPLORE COLUMBUS</a>
          </div>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-menu-section">
              <a href="#">Meeting Planners</a>
              <a href="#">Tour & Reunion Planners</a>
              <a href="#">Partners</a>
              <a href="#">Blog</a>
              <a href="#">Yes, Columbus</a>
            </div>
            <div className="mobile-menu-section">
              <a href="#">EVENTS</a>
              <a href="#">THINGS TO DO</a>
              <a href="#">RESTAURANTS</a>
              <a href="#">HOTELS</a>
              <a href="#">NEIGHBORHOODS</a>
              <a href="#">EXPLORE COLUMBUS</a>
            </div>
            <div className="mobile-social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
              <a href="#"><i className="fab fa-threads"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;