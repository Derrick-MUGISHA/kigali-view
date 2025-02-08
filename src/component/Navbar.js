import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook, Instagram, Twitter, Youtube, Linkedin, Search, Heart, Menu, X
} from "lucide-react";
import "./Navbar.css";
import { Thingstodo } from "../Dropdown/Thingstodo";
import { Restaurants } from "../Dropdown/Restaurants";
import { Hotels } from "../Dropdown/Hotels";
import { NeighBorhoods } from "../Dropdown/NeighBorhoods";
import { ExploreKigali } from "../Dropdown/ExploreKigali";
import { Menuitems } from "../Dropdown/MenuItems";

const NavigationBar = () => {
  const [click, setClick] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    events: false,
    thingsToDo: false,
    restaurants: false,
    hotels: false,
    neighborhoods: false,
    exploreKigali: false,
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const onMouseEnter = (item) => {
    if (window.innerWidth >= 960) {
      setDropdownStates((prevState) => ({ ...prevState, [item]: true }));
    }
  };

  const onMouseLeave = (item) => {
    setDropdownStates((prevState) => ({ ...prevState, [item]: false }));
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Top Navigation */}
        <div className="top-nav">
          <Link to="/" className="logo">
            <img
              src="https://i.postimg.cc/Gt063b3p/kigali-view-high-resolution-logo-removebg-preview.png"
              alt="logo"
            />
          </Link>
          <div className="top-nav-right">
            <Link to="/meeting-planners" className="top-nav-link" onMouseDown={() => setIsSearchOpen(false)}>Meeting Planners</Link>
            <Link to="/tour-planners" className="top-nav-link">Tour & Reunion Planners</Link>
            <Link to="/partners" className="top-nav-link">Partners</Link>
            <Link to="/blog" className="top-nav-link">Blog</Link>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="social-icon" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="social-icon" /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="social-icon" /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin className="social-icon" /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><Youtube className="social-icon" /></a>
            <div className="actions-container">
              <div className="favorites">
                <Heart className="social-icon" />
                <span className="favorites-count">(0)</span>
              </div>
              <div className="search-icon" onClick={toggleSearch}>
                <Search className="social-icon-search" />
              </div>
            </div>
          </div>
          {/* Mobile Hamburger Menu */}
          <div className="social-icon-search-mobile" onClick={toggleSearch}>
            <Search className="social-icon-search" />
          </div>
          <div className="hamburger-menu" onClick={handleClick}>
            {click ? <X className="hamburger-icon" /> : <Menu className="hamburger-icon" />}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="main-nav">
          <ul className="main-nav-links">
            <li
              className="nav-item"
              onMouseEnter={() => onMouseEnter("events")}
              onMouseLeave={() => onMouseLeave("events")}
            >
              <Link to="/events" className="main-nav-link" onClick={closeMobileMenu}>EVENTS</Link>
              {dropdownStates.events && <Menuitems />}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => onMouseEnter("thingsToDo")}
              onMouseLeave={() => onMouseLeave("thingsToDo")}
            >
              <Link to="/things" className="main-nav-link" onClick={closeMobileMenu}>THINGS TO DO</Link>
              {dropdownStates.thingsToDo && <Thingstodo />}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => onMouseEnter("restaurants")}
              onMouseLeave={() => onMouseLeave("restaurants")}
            >
              <Link to="/restaurants" className="main-nav-link" onClick={closeMobileMenu}>RESTAURANTS</Link>
              {dropdownStates.restaurants && <Restaurants />}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => onMouseEnter("hotels")}
              onMouseLeave={() => onMouseLeave("hotels")}
            >
              <Link to="/hotels" className="main-nav-link" onClick={closeMobileMenu}>HOTELS</Link>
              {dropdownStates.hotels && <Hotels />}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => onMouseEnter("neighborhoods")}
              onMouseLeave={() => onMouseLeave("neighborhoods")}
            >
              <Link to="/neighborhoods" className="main-nav-link" onClick={closeMobileMenu}>NEIGHBORHOODS</Link>
              {dropdownStates.neighborhoods && <NeighBorhoods />}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => onMouseEnter("exploreKigali")}
              onMouseLeave={() => onMouseLeave("exploreKigali")}
            >
              <Link to="/ExploreKigali" className="main-nav-link" onClick={closeMobileMenu}>EXPLORE KIGALI</Link>
              {dropdownStates.exploreKigali && <ExploreKigali />}
            </li>
          </ul>
        </div>


        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${click ? "open" : ""}`}>

          <ul className="mobile-menu-links">
            <li
              className="mobile-nav-item"
              onMouseEnter={() => onMouseEnter("events")}
              onMouseLeave={() => onMouseLeave("events")}
            >
              <Link to="/events" className="mobile-nav-link" onClick={closeMobileMenu}>EVENTS</Link>
              {dropdownStates.events && <Menuitems />}
            </li>
            <li
              className="mobile-nav-item"
              onMouseEnter={() => onMouseEnter("thingsToDo")}
              onMouseLeave={() => onMouseLeave("thingsToDo")}
            >
              <Link to="/things" className="mobile-nav-link" onClick={closeMobileMenu}>THINGS TO DO</Link>
              {dropdownStates.thingsToDo && <Thingstodo />}
            </li>
            <li
              className="mobile-nav-item"
              onMouseEnter={() => onMouseEnter("restaurants")}
              onMouseLeave={() => onMouseLeave("restaurants")}
            >
              <Link to="/restaurants" className="mobile-nav-link" onClick={closeMobileMenu}>RESTAURANTS</Link>
              {dropdownStates.restaurants && <Restaurants />}
            </li>
            <li
              className="mobile-nav-item"
              onMouseEnter={() => onMouseEnter("hotels")}
              onMouseLeave={() => onMouseLeave("hotels")}
            >
              <Link to="/hotels" className="mobile-nav-link" onClick={closeMobileMenu}>HOTELS</Link>
              {dropdownStates.hotels && <Hotels />}
            </li>
            <li
              className="mobile-nav-item"
              onMouseEnter={() => onMouseEnter("neighborhoods")}
              onMouseLeave={() => onMouseLeave("neighborhoods")}
            >
              <Link to="/neighborhoods" className="mobile-nav-link" onClick={closeMobileMenu}>NEIGHBORHOODS</Link>
              {dropdownStates.neighborhoods && <NeighBorhoods />}
            </li>
            <li
              className="mobile-nav-item"
              onMouseEnter={() => onMouseEnter("exploreKigali")}
              onMouseLeave={() => onMouseLeave("exploreKigali")}
            >
              <Link to="/ExploreKigali" className="mobile-nav-link" onClick={closeMobileMenu}>EXPLORE KIGALI</Link>
              {dropdownStates.exploreKigali && <ExploreKigali />}
            </li>
          </ul>
          <div className="top-nav-right-mobile">
            <Link to="/meeting-planners" className="top-nav-link">Meeting Planners</Link>
            <Link to="/tour-planners" className="top-nav-link">Tour & Reunion Planners</Link>
            <Link to="/partners" className="top-nav-link">Partners</Link>
            <Link to="/blog" className="top-nav-link">Blog</Link>
          </div>
          <div className="social-icons-mobile">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="social-icon" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="social-icon" /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="social-icon" /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin className="social-icon" /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><Youtube className="social-icon" /></a>
          </div>
        </div>

      </div>

      {/* Search Bar Popup */}
      {isSearchOpen && <SearchPopup setIsSearchOpen={setIsSearchOpen} />}
    </nav>
  );
};

const SearchPopup = ({ setIsSearchOpen }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log("Searching for:", query);
    }
  };

  return (
    <div className="search-popup">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
      />
      <button onClick={() => setIsSearchOpen(false)} className="close-search">X</button>
    </div>
  );
};

export default NavigationBar;
