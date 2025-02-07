import React, { useState } from 'react';
import { Grid, List, MapPin, Heart, ChevronLeft, ChevronRight, Rss } from 'lucide-react';
import './EventCalender.css';

const Calendar = ({ selectedDate, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 1));
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const isSelected = (day) => {
    if (!selectedDate) return false;
    return day === selectedDate.getDate() && 
           currentMonth.getMonth() === selectedDate.getMonth() && 
           currentMonth.getFullYear() === selectedDate.getFullYear();
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}>
          <ChevronLeft size={20} />
        </button>
        <div className="month-year">
          {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
        </div>
        <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}>
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="week-days">
        {weekDays.map(day => <div key={day} className="week-day">{day}</div>)}
      </div>

      <div className="days">
        {blanks.map(blank => <div key={`blank-${blank}`} className="blank" />)}
        {days.map(day => (
          <button
            key={day}
            onClick={() => onDateSelect(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
            className={`day ${isSelected(day) ? 'selected' : ''}`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

const Events = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recommended');
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 1, 5));
  const [dateRange, setDateRange] = useState('week');

  const events = [
    {
      id: 1,
      image: "/api/placeholder/400/300",
      title: "Otterbein Men's Basketball vs Marietta College",
      location: "Rike Center",
      recurring: null
    },
    {
      id: 2,
      image: "/api/placeholder/400/300",
      title: "Wanderlights",
      location: "Downtown Columbus",
      recurring: "Recurring daily until February 16, 2025"
    },
    {
      id: 3,
      image: "/api/placeholder/400/300",
      title: "Blues & Beyond: Micah Kesselring - FREE Happening Hour",
      location: "Natalie's Grandview",
      recurring: "Recurring daily until March 5, 2025"
    },
    {
      id: 4,
      image: "/api/placeholder/400/300",
      title: "Columbus Improv Comedy Meetup!",
      location: "Nest Theatre",
      recurring: null
    },
    {
      id: 5,
      image: "/api/placeholder/400/300",
      title: "Gallery Listening Room",
      location: "Wonderlust Studio",
      recurring: null
    },
    {
      id: 6,
      image: "/api/placeholder/400/300",
      title: "Hot Stuff: A Sketch Comedy and Music Show",
      location: "Short North Stage",
      recurring: null
    }
  ];

  return (
    <div className="events-container">
      <div className="sidebar">
        <div className="sidebar-top">
          <Rss size={24} className="rss-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        
        <div className="sidebar-section">
          <h2 className="section-title">SHOW EVENTS FOR</h2>
          <div className="date-range-buttons">
            <button className={`range-button ${dateRange === 'day' ? 'active' : ''}`} onClick={() => setDateRange('day')}>Day</button>
            <button className={`range-button ${dateRange === 'week' ? 'active' : ''}`} onClick={() => setDateRange('week')}>Week</button>
            <button className={`range-button ${dateRange === 'weekend' ? 'active' : ''}`} onClick={() => setDateRange('weekend')}>Weekend</button>
          </div>
          <button className={`range-button ${dateRange === 'month' ? 'active' : ''}`} onClick={() => setDateRange('month')}>Month</button>
        </div>

        <div className="sidebar-section">
          <h2 className="section-title">DATES</h2>
          <div className="date-range">Feb 5th - Feb 11th</div>
          <Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
        </div>

        <div className="sidebar-section">
          <h2 className="section-title">CATEGORIES</h2>
          <div className="category">
            <input type="checkbox" id="music" />
            <label htmlFor="music">Music/Concerts (31)</label>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="view-sort">
          <div className="view-buttons">
            <span>VIEW:</span>
            <button className={`view-button ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')}>
              <Grid size={20} />
            </button>
            <button className={`view-button ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')}>
              <List size={20} />
            </button>
          </div>

          <div className="sort-buttons">
            <span>SORT:</span>
            <button className={`sort-button ${sortBy === 'recommended' ? 'active' : ''}`} onClick={() => setSortBy('recommended')}>
              Recommended
            </button>
            <button className={`sort-button ${sortBy === 'nearMe' ? 'active' : ''}`} onClick={() => setSortBy('nearMe')}>
              Near Me
            </button>
            <button className={`sort-button ${sortBy === 'map' ? 'active' : ''}`} onClick={() => setSortBy('map')}>
              <MapPin size={16} /> Show Map
            </button>
          </div>
        </div>

        <div className={`event-grid ${viewMode}`}>
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} className="event-img" />
                <button className="heart-button">
                  <Heart size={20} />
                </button>
                <div className="event-date">
                  <div className="month">FEB</div>
                  <div className="day">05</div>
                </div>
              </div>
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                {event.recurring && <p className="recurring">{event.recurring}</p>}
                <div className="event-location">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
                <button className="quick-view">Quick View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
