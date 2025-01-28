import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar-icon.svg";
import './Hottelcheck.css'; // Make sure the icon path is correct

const HotelCheck = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [showDateDropdown, setShowDateDropdown] = useState(false);
    const [showGuestDropdown, setShowGuestDropdown] = useState(false);
    const [selectedDates, setSelectedDates] = useState({ checkIn: null, checkOut: null });
    const [selectedGuests, setSelectedGuests] = useState({ adults: 1, children: 0 });
  
    // Handle guests count changes (Add/Subtract)
    const handleGuestChange = (type, action) => {
      if (type === "adults") {
        setSelectedGuests(prev => ({
          ...prev,
          adults: action === "add" ? prev.adults + 1 : prev.adults > 1 ? prev.adults - 1 : prev.adults
        }));
      } else if (type === "children") {
        setSelectedGuests(prev => ({
          ...prev,
          children: action === "add" ? prev.children + 1 : prev.children > 0 ? prev.children - 1 : prev.children
        }));
      }
    };
  
    // Handle Apply for dates
    const handleApplyDates = () => {
      setCheckInDate(selectedDates.checkIn);
      setCheckOutDate(selectedDates.checkOut);
      setShowDateDropdown(false); // Close the dropdown after applying
    };
  
    // Handle Apply for guests
    const handleApplyGuests = () => {
      setAdults(selectedGuests.adults);
      setChildren(selectedGuests.children);
      setShowGuestDropdown(false); // Close the dropdown after applying
    };
  
    const handleSearch = () => {
      console.log("Searching for hotels with the following details:", {
        checkInDate,
        checkOutDate,
        adults,
        children,
      });
    };
  
    return (
      <div className="hotel-check-container">
        <h2>Check Hotel Rates</h2>
        <p>Book with Experience Columbus for exclusive offers!</p>
  
        <div className="hotel-check-form">
          <div className="form-row">
            {/* Combined Check-in/Check-out Section */}
            <div className="dates-section">
              <button 
                className="dropdown-btn" 
                onClick={() => setShowDateDropdown(!showDateDropdown)}
              >
                <CalendarIcon className="calendar-icon" />
                <span>
                  {checkInDate && checkOutDate
                    ? `${checkInDate.toLocaleDateString()} - ${checkOutDate.toLocaleDateString()}`
                    : "Select Dates"}
                </span>
              </button>
  
              {/* Date Picker Dropdown */}
              {showDateDropdown && (
                <div className="dropdown-menu">
                  <div className="dropdown-item">
                    <label>Check-in</label>
                    <DatePicker
                      selected={selectedDates.checkIn}
                      onChange={(date) => setSelectedDates(prev => ({ ...prev, checkIn: date }))}
                      selectsStart
                      startDate={selectedDates.checkIn}
                      endDate={selectedDates.checkOut}
                      className="date-picker"
                      placeholderText="Select Check-in"
                    />
                  </div>
                  <div className="dropdown-item">
                    <label>Check-out</label>
                    <DatePicker
                      selected={selectedDates.checkOut}
                      onChange={(date) => setSelectedDates(prev => ({ ...prev, checkOut: date }))}
                      selectsEnd
                      startDate={selectedDates.checkIn}
                      endDate={selectedDates.checkOut}
                      minDate={selectedDates.checkIn}
                      className="date-picker"
                      placeholderText="Select Check-out"
                    />
                  </div>
                  <div className="apply-btn-container">
                    <button className="apply-btn" onClick={handleApplyDates}>Apply</button>
                  </div>
                </div>
              )}
            </div>
  
            {/* Guests Section */}
            <div className="guests-section">
              <button 
                className="dropdown-btn" 
                onClick={() => setShowGuestDropdown(!showGuestDropdown)}
              >
                <span>{adults} Adult(s), {children} Child(ren)</span>
              </button>
  
              {/* Guests Dropdown */}
              {showGuestDropdown && (
                <div className="dropdown-menu">
                  <div className="dropdown-item">
                    <label>Adults</label>
                    <div className="guest-control">
                      <button onClick={() => handleGuestChange("adults", "add")}>+</button>
                      <span>{selectedGuests.adults}</span>
                      <button onClick={() => handleGuestChange("adults", "subtract")}>-</button>
                    </div>
                  </div>
  
                  <div className="dropdown-item">
                    <label>Children</label>
                    <div className="guest-control">
                      <button onClick={() => handleGuestChange("children", "add")}>+</button>
                      <span>{selectedGuests.children}</span>
                      <button onClick={() => handleGuestChange("children", "subtract")}>-</button>
                    </div>
                  </div>
                  <div className="apply-btn-container">
                    <button className="apply-btn" onClick={handleApplyGuests}>Apply</button>
                  </div>
                </div>
              )}
            </div>
  
            {/* Search Button */}
            <div className="search-btn-container">
              <button className="search-btn" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HotelCheck;
