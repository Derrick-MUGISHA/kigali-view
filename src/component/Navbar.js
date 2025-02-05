import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Search,
  Heart,
  Menu,
  X
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
        <div className="top-nav">
          <Link to="/" className="logo">
            <img
              src="https://i.postimg.cc/Gt063b3p/kigali-view-high-resolution-logo-removebg-preview.png"
              alt="logo"
            />
          </Link>

          {/* Mobile Controls */}
          <div className="mobile-controls">
            <div className="search-icon" onClick={toggleSearch}>
              <Search className="social-icon-search" />
            </div>
            <div className="hamburger-menu" onClick={handleClick}>
              {click ? <X className="hamburger-icon" /> : <Menu className="hamburger-icon" />}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="top-nav-right">
            <Link to="/meeting-planners" className="top-nav-link">
              Meeting Planners
            </Link>
            <Link to="/tour-planners" className="top-nav-link">
              Tour & Reunion Planners
            </Link>
            <Link to="/partners" className="top-nav-link">
              Partners
            </Link>
            <Link to="/blog" className="top-nav-link">
              Blog
            </Link>
          </div>

          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="social-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="social-icon" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="social-icon" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="social-icon" />
            </a>
            <div className="actions-container">
              <div className="favorites">
                <Heart className="social-icon" />
                <span className="favorites-count">(0)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="main-nav">
          <ul className="main-nav-links">
            {[
              { path: "/events", title: "EVENTS", dropdown: Menuitems },
              { path: "/things", title: "THINGS TO DO", dropdown: Thingstodo },
              { path: "/restaurants", title: "RESTAURANTS", dropdown: Restaurants },
              { path: "/hotels", title: "HOTELS", dropdown: Hotels },
              { path: "/neighborhoods", title: "NEIGHBORHOODS", dropdown: NeighBorhoods },
              { path: "/ExploreKigali", title: "EXPLORE KIGALI", dropdown: ExploreKigali }
            ].map((item) => (
              <li
                key={item.path}
                className="nav-item"
                onMouseEnter={() => onMouseEnter(item.title.toLowerCase().replace(/ /g, ''))}
                onMouseLeave={() => onMouseLeave(item.title.toLowerCase().replace(/ /g, ''))}
              >
                <Link to={item.path} className="main-nav-link" onClick={closeMobileMenu}>
                  {item.title}
                </Link>
                {dropdownStates[item.title.toLowerCase().replace(/ /g, '')] && <item.dropdown />}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${click ? "open" : ""}`}>
          <ul className="mobile-menu-links">
            {[
              { path: "/events", title: "EVENTS" },
              { path: "/things", title: "THINGS TO DO" },
              { path: "/restaurants", title: "RESTAURANTS" },
              { path: "/hotels", title: "HOTELS" },
              { path: "/neighborhoods", title: "NEIGHBORHOODS" },
              { path: "/ExploreKigali", title: "EXPLORE KIGALI" },
              { path: "/meeting-planners", title: "MEETING PLANNERS" },
              { path: "/tour-planners", title: "TOUR & REUNION PLANNERS" },
              { path: "/partners", title: "PARTNERS" },
              { path: "/blog", title: "BLOG" }
            ].map((item) => (
              <li key={item.path} className="mobile-nav-item">
                <Link to={item.path} className="mobile-nav-link" onClick={closeMobileMenu}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Search Popup */}
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
      <button onClick={() => setIsSearchOpen(false)} className="close-search">
        X
      </button>
    </div>
  );
};

export default NavigationBar;