import React, { useState } from 'react';
import './Hottelcheck.css';

const HotelSearch = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert(`Searching for ${guests} guests from ${checkIn} to ${checkOut}`);
    }, 1500);
  };

  return (
    <div className="hotel-search-container">
      <div className="header-section">
        <h2>CHECK HOTEL RATES</h2>
        <p className="sub-header">BOOK WITH EXPERIENCE COLUMBUS FOR EXCLUSIVE OFFERS!</p>
      </div>

      <form onSubmit={handleSubmit} className="search-form">
        <div className="input-group">
          <div className="date-inputs">
            <div className="input-field">
              <label>Check-in</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="input-field">
              <label>Check-out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split('T')[0]}
                required
              />
            </div>
          </div>

          <div className="input-field">
            <label>Guests</label>
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(Math.max(1, e.target.value))}
              min="1"
              max="10"
              required
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="search-btn"
          disabled={loading}
        >
          {loading ? (
            <div className="spinner"></div>
          ) : (
            'SEARCH'
          )}
        </button>
      </form>
    </div>
  );
};

export default HotelSearch;