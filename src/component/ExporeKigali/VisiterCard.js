import React, { useState } from "react";
import { FaTh, FaList } from "react-icons/fa";
import './VisiterCard.css';

const FilterSidebar = () => {
  return (
    <aside className="filter-sidebar">
      <input type="text" placeholder="Search" className="search-bar" />
      <h3>Categories</h3>
      <ul>
        <li><input type="checkbox" /> CVBs (17)</li>
        <li><input type="checkbox" /> Referral Services (5)</li>
        <li><input type="checkbox" /> Libraries (1)</li>
      </ul>
      <h3>Regions</h3>
      <ul>
        <li><input type="checkbox" /> Downtown (4)</li>
        <li><input type="checkbox" /> East (3)</li>
        <li><input type="checkbox" /> North (2)</li>
        <li><input type="checkbox" /> Worthington (2)</li>
      </ul>
    </aside>
  );
};

const listings = [
  { id: 1, name: "Visit Dublin Ohio", location: "9 S. High St.", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
  { id: 2, name: "Experience Columbus Visitor Center - Arena District", location: "277 W. Nationwide Blvd", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
  { id: 3, name: "Columbus Metropolitan Library", location: "96 S. Grant Ave.", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
  { id: 4, name: "Experience Columbus Visitor Center - Easton", location: "188 Easton Town Center", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
  { id: 5, name: "Reynoldsburg Visitor & Community Activities Bureau", location: "1580 Brice Road", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
  { id: 6, name: "Visit Grove City", location: "3995 Broadway", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
  { id: 7, name: "Destination Hilliard", location: "5460 Franklin Street", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
  { id: 8, name: "Experience Worthington", location: "777 High St.", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
];

const ListingsGrid = () => {
  const [view, setView] = useState("grid");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <section>
      <div className="controls">
        <div className="category-filters">
          <button onClick={() => setView("grid")} className={view === "grid" ? "active" : ""}><FaTh /></button>
          <button onClick={() => setView("list")} className={view === "list" ? "active" : ""}><FaList /></button>
        </div>
        <div className="categories">
          <button>CVBs</button>
          <button>Referral Services</button>
          <button>Libraries</button>
          <button>Downtown</button>
          <button>East</button>
          <button>North</button>
          <button>Westerville</button>
        </div>
      </div>
      <div className={`listings-${view}`}>
        {listings.map((listing) => (
          <div key={listing.id} className="listing-card">
            <img src={listing.image} alt={listing.name} />
            <h3>{listing.name}</h3>
            <p>{listing.location}</p>
            <button className="quick-view">Quick View</button>
            <button className="favorite" onClick={() => toggleFavorite(listing.id)}>
              {favorites.includes(listing.id) ? "❤️" : "♡"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="container">
      <ListingsGrid />
    </div>
  );
};

export default App;
