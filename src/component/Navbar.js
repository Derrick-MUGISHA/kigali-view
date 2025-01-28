import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faTiktok, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);    
    const [isSticky, setIsSticky] = useState(false); 

    const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen); 
    };

    const handleScroll = () => {
        // Check scroll position
        if (window.scrollY > 50) { // Adjust this value as needed
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
                {/* Left Side: Logo */}
                <div className="logo">
                    <a href="/" className="logo-link">Logo</a>
                </div>

                {/* Right Side: Hamburger Menu for Mobile */}
                <div className="hamburger-menu" onClick={toggleMobileMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>

                {/* Right Side: Navigation Links */}
                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li className="nav-item">
                            <a href="/">Meeting Planners</a>
                            <div className="dropdown-menu">
                                <a href="/">Event Option 1</a>
                                <a href="/">Event Option 2</a>
                                <a href="/">Event Option 3</a>
                                <a href="/">Event Option 4</a>
                                <a href="/">Event Option 5</a>
                                <a href="/">Event Option 6</a>
                                <a href="/">Event Option 7</a>
                                <a href="/">Event Option 8</a>
                                <a href="/">Event Option 9</a>
                                <a href="/">Event Option 10</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="/">Tour & Reunion Planners</a>
                            <div className="dropdown-menu">
                                <a href="/">Option 1</a>
                                <a href="/">Option 2</a>
                                <a href="/">Option 3</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="/">Partners</a>
                        </li>
                        <li className="nav-item">
                            <a href="/">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a href="/">Yes, Kigali</a>
                        </li>
                        <span className="divider">|</span>

                        {/* Right Side: Social Media Icons */}
                        <div className="social-media">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                        <span className="divider">|</span>

                        {/* Right Side: Search Bar */}
                        <div className="search-bar">
                            <a href="/favorites" className="icon-link">
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                            <a href="/search" className="icon-link">
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                        </div>
                    </ul>
                </div>
            </nav>

            {/* Second Navbar */}
            <nav className={`second-navbar ${isSticky ? 'sticky' : ''}`}>
                <div className="second-nav-links">
                    <ul>
                        <li className="nav-item-2">
                            <a href="/">EVENTS</a>
                            <div className="dropdown-menu">
                                <a href="/">Event Option 1</a>
                                <a href="/">Event Option 2</a>
                                <a href="/">Event Option 3</a>
                                <a href="/">Event Option 4</a>
                                <a href="/">Event Option 5</a>
                                <a href="/">Event Option 6</a>
                                <a href="/">Event Option 7</a>
                                <a href="/">Event Option 8</a>
                                <a href="/">Event Option 9</a>
                                <a href="/">Event Option 10</a>
                            </div>
                        </li>
                        <li className="nav-item-2">
                            <a href="/">THINGS TO DO</a>
                            <div className="dropdown-menu">
                                <a href="/">Option 1</a>
                                <a href="/">Option 2</a>
                                <a href="/">Option 3</a>
                            </div>
                        </li>
                        <li className="nav-item-2">
                            <a href="/">RESTAURANTS</a>
                            <div className="dropdown-menu">
                                <a href="/">Option 1</a>
                                <a href="/">Option 2</a>
                                <a href="/">Option 3</a>
                                <a href="/">Option 4</a>
                                <a href="/">Option 5</a>
                            </div>
                        </li>
                        <li className="nav-item-2">
                            <a href="/">HOTELS</a>
                            <div className="dropdown-menu">
                                <a href="/">Option 1</a>
                                <a href="/">Option 2</a>
                                <a href="/">Option 3</a>
                                <a href="/">Option 4</a>
                                <a href="/">Option 5</a>
                                <a href="/">Option 6</a>
                            </div>
                        </li>
                        <li className="nav-item-2">
                            <a href="/">NEIGHBORHOODS</a>
                            <div className="dropdown-menu">
                                <a href="/">Option 1</a>
                                <a href="/">Option 2</a>
                                <a href="/">Option 3</a>
                                <a href="/">Option 4</a>
                                <a href="/">Option 5</a>
                            </div>
                        </li>
                        <li className="nav-item-2">
                            <a href="/">EXPLORE COLUMBUS</a>
                            <div className="dropdown-menu">
                                <a href="/">Option 1</a>
                                <a href="/">Option 2</a>
                                <a href="/">Option 3</a>
                                <a href="/">Option 4</a>
                                <a href="/">Option 5</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
