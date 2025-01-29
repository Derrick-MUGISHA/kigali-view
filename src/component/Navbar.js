import React, { useState } from 'react';
import {
    Facebook, Instagram, Twitter, Youtube, Linkedin,
    Search, Heart, Menu, X
} from 'lucide-react';
import './Navbar.css';

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

    const closeMenu = () => setIsMenuOpen(false);

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
                            <Facebook className="social-icon" />
                            <Instagram className="social-icon" />
                            <Twitter className="social-icon" />
                            <Youtube className="social-icon" />
                            <Linkedin className="social-icon" />
                        </div>
                        <div className="actions-container">
                            <div className="favorites">
                                <Heart className="social-icon" />
                                <span className="favorites-count">(0)</span>
                            </div>
                            <Search className="social-icon" />
                        </div>
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Search className="hamburger-icon search-icon" />
                        {isMenuOpen ? <X className="hamburger-icon" /> : <Menu className="hamburger-icon" />}
                    </div>
                </div>

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
                            {/* Main Navigation Items */}
                            {mainNavItems.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="mobile-nav-link"
                                    onClick={closeMenu}
                                >
                                    {item}
                                </a>
                            ))}

                            {/* Top Navigation Items */}
                            {topNavItems.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="mobile-nav-link mobile-top-link"
                                    onClick={closeMenu}
                                >
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
                                <Facebook className="social-icon" />
                                <Instagram className="social-icon" />
                                <Twitter className="social-icon" />
                                <Youtube className="social-icon" />
                                <Linkedin className="social-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;