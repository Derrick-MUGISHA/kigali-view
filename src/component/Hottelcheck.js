import React, { useState } from 'react';
import './Hottelcheck.css';

const HotelSearch = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      alert(`Searching for ${guests} guests from ${checkInDate} to ${checkOutDate}`);
    }, 1500);
  };

  return (
    <div className="hotel-search-container">
      <div className="hotel-search-header">
        <h2>CHECK HOTEL RATES</h2>
        <p className="subtitle">BOOK WITH EXPERIENCE COLUMBUS FOR EXCLUSIVE OFFERS!</p>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <div className="date-inputs">
          <div className="input-group">
            <label htmlFor="check-in">Check-in</label>
            <input
              type="date"
              id="check-in"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="check-out">Check-out</label>
            <input
              type="date"
              id="check-out"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              min={checkInDate || new Date().toISOString().split('T')[0]}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(Math.max(1, e.target.value))}
            min="1"
            max="10"
            required
          />
        </div>

        <button 
          type="submit" 
          className="search-button"
          disabled={isSearching}
        >
          {isSearching ? (
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