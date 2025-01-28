import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar-icon.svg";
import './Hottelcheck.css'; // Make sure the icon path is correct

// Importing CSS file

const HotelBooking = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className="hotel-booking-container">
      <h2 className="hotel-booking-title">CHECK HOTEL RATES</h2>
      <p className="hotel-booking-subtitle">BOOK WITH EXPERIENCE KIGALI FOR EXCLUSIVE OFFERS!</p>

      <div className="booking-form">
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          className="booking-input"
        />
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          className="booking-input"
        />
        <select
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
          className="booking-select"
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>{num + 1} Adult</option>
          ))}
        </select>
        <select
          value={children}
          onChange={(e) => setChildren(e.target.value)}
          className="booking-select"
        >
          {[...Array(6).keys()].map((num) => (
            <option key={num} value={num}>{num} Child</option>
          ))}
        </select>
        <button className="booking-button">SEARCH</button>
      </div>
    </div>
  );
};

export default HotelBooking;