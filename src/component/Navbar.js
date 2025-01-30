import React, { useState } from 'react';
import {
    Facebook, Instagram, Twitter, Youtube, Linkedin,
    Search, Heart, Menu, X
} from 'lucide-react';
import { Link } from 'react-router-dom'; // For navigation in React Router
import './Navbar.css';

const NavigationBar = () => {
    // Main navigation items with subitems for dropdowns
    const mainNavItems = [
        { label: 'EVENTS', subItems: ['Cultural Festivals , KigaliUp', 'Music Concerts', 'Sports Events', 'Food Festivals', 'Art Exhibitions', 'Theatre & Comedy', 'Networking Events', 'Film Festivals'] },
        { label: 'THINGS TO DO', subItems: ['Visit the Kigali Genocide Memorial', 'Explore Nyamirambo Neighborhood', 'Tour the Inema Arts Center','Hike Mount Kigali','Visit the Kimironko Market', 'Relax at Lake Kivu (day trip)', 'See the Kandt House Museum', 'Enjoy local food at Heaven Restaurant', 'Shop at Caplaki Craft Village', 'Visit the Rwanda Art Museum'] },
        { label: 'RESTAURANTS', subItems: ['Heaven Restaurant & Boutique Hotel', 'The Hut', 'Bourbon Coffee', 'La Bonne Adresse', 'Repub Lounge', 'Brachetto Restaurant', 'Khmer Restaurant', 'Soleluna', 'Indian Kadhai Restaurant ', 'The Pot Restaurant'] },
        { label: 'HOTELS', subItems: ['Kigali Serena Hotel', 'Radisson Blu Hotel & Convention Centre ', 'The Retreat by Heaven ', 'Hotel des Mille Collines', 'Gorillas Golf Hotel', 'Park Inn by Radisson Kigali', 'Four Points by Sheraton Kigali', 'Hôtel La Palisse Nyandungu', 'Iris Guest House', 'M Hotel Kigali'] },
        { label: 'NEIGHBORHOODS', subItems: ['Kacyiru', 'Nyamirambo', 'Kigali City Centre', 'Kigali Heights', 'Remera ', 'Nyarutarama', 'Kimironko', 'Gikondo', 'Musanze', 'Kabuye', 'Kibagabaga', 'Kimihurura'] },
        { label: 'EXPLORE KIGALI', subItems: ['The Rwanda Art Museum (former Presidential Palace)', 'Kigali Arena', 'Ivuka Arts Centre ', 'The Kandt House Museum of Natural History', 'Waka Waka Café', 'Sabyinyo Silverback Lodge','Norr Hotel', 'Ubumwe Grande Hotel', 'Gisozi Hill', 'Art World Gallery', 'The Rwanda Cultural Village', 'The New Remera Park'] }
    ];

    // Top navigation items with dropdown sub-items for 'Meeting Planners' and 'Tour & Reunion Planners'
    const topNavItems = [
        { label: 'Meeting Planners', subItems: ['Rwanda Convention Bureau', 'Kigali Conference Services', 'Eventure Rwanda', 'Kigali Event Planners', 'Mice Rwanda', 'Alyson Events & Weddings', 'B-Event Rwanda', 'Pioneer Events Rwanda', 'Rwanda Event Hub', 'Eco Event Solutions'] },
        { label: 'Tour & Reunion Planners', subItems: ['Rwanda Eco-Tours', 'Kigali Cultural Tours', 'Prime Rwanda Tours & Travel', 'Rwandan Adventures', 'Visit Rwanda Tours', 'Kigali Walking Tours', 'Rwanda Tours & Safaris', 'Destination Rwanda', 'Kigali Event & Tour Management', 'Rwanda Travel & Tours'] },
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
                <img className="logo" src="https://i.postimg.cc/Gt063b3p/kigali-view-high-resolution-logo-removebg-preview.png" alt="Kigali View" />

                    {/* Desktop Top Navigation */}
                    <div className="top-nav-right">
                        {topNavItems.map((item) => {
                            if (typeof item === 'string') {
                                return (
                                    <a key={item} href="#" className="top-nav-link">
                                        {item}
                                    </a>
                                );
                            } else {
                                return (
                                    <div className="nav-item" key={item.label}>
                                        <a href="#" className="top-nav-link">{item.label}</a>
                                        <div className="dropdown">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem}
                                                    to={`/${subItem.toLowerCase().replace(' ', '-')}`} // Proper link formatting
                                                    className="dropdown-item"
                                                >
                                                    {subItem}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }
                        })}

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
                            <div className="nav-item" key={item.label}>
                                <a href="#" className="main-nav-link">{item.label}</a>
                                <div className="dropdown">
                                    {item.subItems.map((subItem) => (
                                        <Link
                                            key={subItem}
                                            to={`/${subItem.toLowerCase().replace(' ', '-')}`} // Proper link formatting
                                            className="dropdown-item"
                                        >
                                            {subItem}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-content">
                        <div className="mobile-menu-links">
                            {mainNavItems.map((item) => (
                                <div className="mobile-nav-item" key={item.label}>
                                    <a href="#" className="mobile-nav-link" onClick={closeMenu}>{item.label}</a>
                                    <div className="dropdown">
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem}
                                                to={`/${subItem.toLowerCase().replace(' ', '-')}`} // Proper link formatting
                                                className="dropdown-item"
                                            >
                                                {subItem}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            {topNavItems.map((item) => {
                                if (typeof item === 'string') {
                                    return (
                                        <a key={item} href="#" className="mobile-nav-link mobile-top-link" onClick={closeMenu}>
                                            {item}
                                        </a>
                                    );
                                } else {
                                    return (
                                        <div className="mobile-nav-item" key={item.label}>
                                            <a href="#" className="mobile-nav-link" onClick={closeMenu}>{item.label}</a>
                                            <div className="dropdown">
                                                {item.subItems.map((subItem) => (
                                                    <Link
                                                        key={subItem}
                                                        to={`/${subItem.toLowerCase().replace(' ', '-')}`} // Proper link formatting
                                                        className="dropdown-item"
                                                    >
                                                        {subItem}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                }
                            })}
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

const SearchPopup = ({ setIsSearchOpen }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
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
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleSearch}
                />
            </div>
            <button onClick={() => setIsSearchOpen(false)} className="close-search">X</button>
        </div>
    );
};

export default NavigationBar;
