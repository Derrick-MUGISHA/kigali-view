import React, { useState } from 'react';
import {
    Facebook, Instagram, Twitter, Youtube, Linkedin,
    Search, Heart, Menu, X
} from 'lucide-react';
import './Navbar.css';
// import { FaSearch } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const NavigationBar = () => {
    const mainNavItems = [
        'EVENTS',
        'THINGS TO DO',
        'RESTAURANTS',
        'HOTELS',
        'NEIGHBORHOODS',
        'EXPLORE COLUMBUS'
    ];

    const topNavItems = [
        'Meeting Planners',
        'Tour & Reunion Planners',
        'Partners',
        'Blog',
        'Yes, Columbus'
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Top Navigation */}
                <div className="top-nav">
                    <div className="logo">Kigali View</div>

                    {/* Desktop Top Navigation */}
                    <div className="top-nav-right">
                        {topNavItems.map((item) => (
                            <a key={item} href="#" className="top-nav-link">
                                {item}
                            </a>
                        ))}
                        <div className="social-icons">
                            <a href="http://facebook.com/" target="_blank" rel="noopener noreferrer">
                                <Facebook className="social-icon" />
                            </a>
                            <a href="https://x.com/__derr1ck__?t=P-KqVcqqOZeB5lJUN04PLQ&s=03" target="_blank" rel="noopener noreferrer">
                                <Twitter className="social-icon" />
                            </a>
                            <a href="https://www.instagram.com/d.e.r.r.1.c.k?igsh=ZHYwZTg3M3Q2NDJs" target="_blank" rel="noopener noreferrer">
                                <Instagram className="social-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/mugisha-derrick-479788332/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="social-icon" />
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                <Youtube className="social-icon" />
                            </a>
                        </div>
                        <div className="actions-container">
                            <div className="favorites">
                                <Heart className="social-icon" />
                                <span className="favorites-count">(0)</span>
                            </div>
                            <div className="search-icon" onClick={toggleSearch}>
                                <Search className="social-icon" />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Search className="hamburger-icon search-icon" />
                        {isMenuOpen ? <X className="hamburger-icon" /> : <Menu className="hamburger-icon" />}
                    </div>
                </div>

                {/* Search Bar Popup */}
                {isSearchOpen && <SearchPopup setIsSearchOpen={setIsSearchOpen} />}

                {/* Desktop Main Navigation */}
                <div className="main-nav">
                    <div className="main-nav-links">
                        {mainNavItems.map((item) => (
                            <a key={item} href="#" className="main-nav-link">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-content">
                        <div className="mobile-menu-links">
                            {mainNavItems.map((item) => (
                                <a key={item} href="#" className="mobile-nav-link" onClick={closeMenu}>
                                    {item}
                                </a>
                            ))}
                            {topNavItems.map((item) => (
                                <a key={item} href="#" className="mobile-nav-link mobile-top-link" onClick={closeMenu}>
                                    {item}
                                </a>
                            ))}
                        </div>

                        <div className="mobile-actions">
                            <div className="mobile-favorites">
                                <Heart className="social-icon" />
                                <span className="favorites-count">(0)</span>
                            </div>
                            <div className="social-icons">
                            <a href="http://facebook.com/" target="_blank" rel="noopener noreferrer">
                                <Facebook className="social-icon" />
                            </a>
                            <a href="https://x.com/__derr1ck__?t=P-KqVcqqOZeB5lJUN04PLQ&s=03" target="_blank" rel="noopener noreferrer">
                                <Twitter className="social-icon" />
                            </a>
                            <a href="https://www.instagram.com/d.e.r.r.1.c.k?igsh=ZHYwZTg3M3Q2NDJs" target="_blank" rel="noopener noreferrer">
                                <Instagram className="social-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/mugisha-derrick-479788332/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="social-icon" />
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                <Youtube className="social-icon" />
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// The SearchPopup component can now be defined outside the NavigationBar component

const SearchPopup = ({ setIsSearchOpen }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            // Handle search logic here
            console.log('Searching for:', query);
        }
    };

    return (
        <div className="search-popup">
            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}  // Update query on input change
                    onKeyDown={handleSearch} // Trigger search on "Enter"
                />
                {/* <FaSearch className="search-iconinside" />  */}
            </div>
            <button onClick={() => setIsSearchOpen(false)} className="close-search">X</button>
        </div>
    );
};

export default NavigationBar;
