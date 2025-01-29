import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faTiktok, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import { Si1And1 } from 'react-icons/si';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // New state for dropdown
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen); // Function to toggle dropdown

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
                                <a href="/">Meetings</a>

                                <div className="dropdown">
                                    <a href="/" className="dropdown-toggle">
                                        Why Kigali <i className="fa fa-caret-right"></i>
                                    </a>

                                    <div className="dropdown-content">
                                        <a href="/">Top 10 reasons to chose kIGALI </a>
                                        <a href="/">What's New In KIGALI</a>
                                        <a href="/">Trading Blog</a>
                                        <a href="/">Travel and Transportation In Kigali</a>
                                        <a href="/">District</a>
                                        <a href="/">HOTELS</a>
                                        <a href="/">Parks</a>
                                        <a href="/">R</a>
                                    </div>
                                </div>

                                <div className="dropdown">
                                    <a href="/" className="dropdown-toggle">
                                        Planning Tool Kit <i className="fa fa-caret-right"></i>
                                    </a>

                                    <div className="dropdown-content">
                                        <a href="/">Service Provider</a>
                                        <a href="/">Venue</a>
                                        <a href="/">Housing</a>
                                        <a href="/">Staffing</a>
                                        <a href="/">Green Meetings</a>
                                        <a href="/">Social responsibility</a>
                                        <a href="/">Security</a>
                                        <a href="/">Corporate Events</a>
                                    </div>
                                </div>

                                <div className="dropdown">
                                    <a href="/" className="dropdown-toggle">
                                        Promo Resources <i className="fa fa-caret-right"></i>
                                    </a>

                                    <div className="dropdown-content">
                                        <a href="/">Kigali City Guide</a>
                                        <a href="/">Kigali Attractions</a>
                                        <a href="/">Kigali Restaurants</a>
                                        <a href="/">Kigali Events</a>
                                        <a href="/">Kigali Nightlife</a>
                                    </div>
                                </div>

                                <a href="/">Contact Us</a>
                                <a href="/">Submit your RFP (Request for Proposal)</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="/">Tour & Reunion Planners</a>
                            <div className="dropdown-menu">
                                <div className="dropdown">
                                    <a href="/" className="dropdown-toggle">
                                        Group Tour<i className="fa fa-caret-right"></i>
                                    </a>

                                    <div className="dropdown-content">
                                        <a href="/">Kigali City Tour</a>
                                        <a href="/">Kigali Group Activities</a>
                                        <a href="/">Kigali Historical Sites</a>
                                        <a href="/">Kigali Sightseeing</a>
                                        <a href="/">Kigali Tour Packages</a>
                                    </div>
                                </div>
                                <a href="/">Reunion</a>
                                <div className="dropdown">
                                    <a href="/" className="dropdown-toggle">
                                        Itineraries <i className="fa fa-caret-right"></i>
                                    </a>

                                    <div className="dropdown-content">
                                        <a href="/">Kigali 1-Day Itinerary</a>
                                        <a href="/">Kigali 3-Day Itinerary</a>
                                        <a href="/">Kigali 7-Day Itinerary</a>
                                    </div>
                                </div>
                                <a href="/">Experimentor Tours</a>
                                <a href="/">Accessibility Guide</a>
                                <a href="/">Video</a>
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
                                <a href="/">Kigali Music Festival</a>
                                <a href="/">Kigali International Film Festival</a>
                                <a href="/">Kigali Cultural Fair</a>
                                <a href="/">Kigali Marathon</a>
                                <a href="/">Kigali Food Festival</a>
                                <a href="/">Kigali Art Exhibition</a>
                                <a href="/">Kigali Night Market</a>
                                <a href="/">Kigali Fashion Show</a>
                                <a href="/">Kigali Tech Conference</a>
                                <a href="/">Kigali Wine Tasting Event</a>
                            </div>
                        </li>
                        <li className="nav-item-2">
                            <a href="/">THINGS TO DO</a>
                            <div className="dropdown-menu">
                                <a href="/">Visit Kigali Genocide Memorial</a>
                                <a href="/">Explore Nyamirambo</a>
                                <a href="/">Kigali City Tour</a>
                                <a href="/">Hike Mount Kigali</a>
                                <a href="/">Visit Inema Art Center</a>
                                <a href="/">Kigali Convention Center</a>
                            </div>
                        </li>
                        <li className="nav-item-2">
                            <a href="/">RESTAURANTS</a>
                            <div className="dropdown-menu">
                                <a href="/">The Hut Restaurant</a>
                                <a href="/">Brachetto Restaurant</a>
                                <a href="/">Chez Robert</a>
                                <a href="/">Fusion Restaurant & Lounge</a>
                                <a href="/">Repub Lounge</a>
                                <a href="/">Kigali Serena Hotel Restaurant</a>
                                <a href="/">Bourbon Coffee</a>
                                <a href="/">Zen Restaurant</a>
                            </div>
                        </li>
                        <li className="nav-item-2">
                            <a href="/">HOTELS</a>
                            <div className="dropdown-menu">
                                <a href="/">Kigali Serena Hotel</a>
                                <a href="/">Radisson Blu Hotel Kigali</a>
                                <a href="/">The Manor Hotel</a>
                                <a href="/">Hotel des Mille Collines</a>
                                <a href="/">Amani Boutique Hotel</a>
                                <a href="/">Onomo Hotel Kigali</a>
                            </div>
                        </li>
                        <li className="nav-item-2">
                            <a href="/">NEIGHBORHOODS</a>
                            <div className="dropdown-menu">
                                <a href="/">Kiyovu</a>
                                <a href="/">Nyamirambo</a>
                                <a href="/">Kimihurura</a>
                                <a href="/">Gikondo</a>
                                <a href="/">Nyarutarama</a>
                                <a href="/">Kacyiru</a>
                                <a href="/">Remera</a>
                                <a href="/">Biryogo</a>
                            </div>
                        </li>
                        <li className="nav-item-2">
                            <a href="/">EXPLORE Kigali</a>
                            <div className="dropdown-menu">
                                <a href="/">Mount Kigali Hike</a>
                                <a href="/">Kigali Convention Center</a>
                                <a href="/">Kigali National Museum</a>
                                <a href="/">Kigali's Art Galleries</a>
                                <a href="/">Kigali Nightlife</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
