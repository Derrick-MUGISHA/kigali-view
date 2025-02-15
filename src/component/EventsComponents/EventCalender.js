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
    <div className="calendar-container">
      <div className="calendar-container__header">
        <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}>
          <ChevronLeft size={20} />
        </button>
        <div className="calendar-container__month-year">
          {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
        </div>
        <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}>
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="calendar-container__week-days">
        {weekDays.map(day => <div key={day} className="calendar-container__week-day">{day}</div>)}
      </div>

      <div className="calendar-container__days">
        {blanks.map(blank => <div key={`blank-${blank}`} className="calendar-container__blank" />)}
        {days.map(day => (
          <button
            key={day}
            onClick={() => onDateSelect(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
            className={`calendar-container__day ${isSelected(day) ? 'selected' : ''}`}
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
      image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F931396743%2F2570404762021%2F1%2Foriginal.20250109-115052?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=ef642832dd3754c332bfd7338cd48636",
      title: "14thAvenue - Kigali Live Music",
      location: "Kimihurura kn 20 ave Kigali, Kigali City",
      recurring: "Recurring daily until February 16, 2025"
    },
    {
      id: 2,
      image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Wanderlights",
      location: "Downtown Columbus",
      recurring: "Recurring daily until February 16, 2025"
    },
    {
      id: 3,
      image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Blues & Beyond: Micah Kesselring - FREE Happening Hour",
      location: "Natalie's Grandview",
      recurring: "Recurring daily until March 5, 2025"
    },
    {
      id: 4,
      image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Columbus Improv Comedy Meetup!",
      location: "Nest Theatre",
      recurring: null
    },
    {
      id: 5,
      image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Gallery Listening Room",
      location: "Wonderlust Studio",
      recurring: null
    },
    {
      id: 6,
      image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Hot Stuff: A Sketch Comedy and Music Show",
      location: "Short North Stage",
      recurring: null
    },
    {
      id: 7,
      image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "25 Reasons to Visit Columbus in 2025",
      location: "Downtown Columbus",
      recurring: "Recurring daily until February 16, 2025"
    },
    {
      id: 8,
      image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Columbus Improv Comedy Meetup!",
      location: "Nest Theatre",
      recurring: null

    },
    {
      id: 9,
      image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Gallery Listening Room",
      location: "Wonderlust Studio",
      recurring: null
    },
    {
      id: 10,
      image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Hot Stuff: A Sketch Comedy and Music Show",
      location: "Short North Stage",
      recurring: null

    },
    {
      id: 11,
      image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "25 Reasons to Visit Columbus in 2025",
      location: "Downtown Columbus",
      recurring: "Recurring daily until February 16, 2025"
    },
    {
      id: 12,
      image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Columbus Improv Comedy Meetup!",
      location: "Nest Theatre",
      recurring: null

    }
  ];

  return (
    <div className="events-container">
      <div className="events-sidebar">
        <div className="events-sidebar__top">
          <Rss size={24} className="events-sidebar__rss-icon" />
          <input type="text" placeholder="Search" className="events-sidebar__search-input" />
        </div>

        <div className="events-sidebar__section">
          <h2 className="events-sidebar__section-title">SHOW EVENTS FOR</h2>
          <div className="events-sidebar__date-range-buttons">
            <button className={`events-sidebar__range-button ${dateRange === 'day' ? 'active' : ''}`} onClick={() => setDateRange('day')}>Day</button>
            <button className={`events-sidebar__range-button ${dateRange === 'week' ? 'active' : ''}`} onClick={() => setDateRange('week')}>Week</button>
            <button className={`events-sidebar__range-button ${dateRange === 'weekend' ? 'active' : ''}`} onClick={() => setDateRange('weekend')}>Weekend</button>
          </div>
          <button className={`events-sidebar__range-button ${dateRange === 'month' ? 'active' : ''}`} onClick={() => setDateRange('month')}>Month</button>
          {/* <button className={`events-sidebar__range-button ${dateRange === 'all' ? 'active' : ''}`} onClick={() => setDateRange('all')}>Time</button> */}
        </div>

        <div className="events-sidebar__section">
          <h2 className="events-sidebar__section-title">DATES</h2>
          <div className="events-sidebar__date-range">Feb 5th - Feb 11th</div>
          <Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
        </div>

        <div className="events-sidebar__section">
          <h2 className="events-sidebar__section-title">CATEGORIES</h2>
          <div className="events-sidebar__category">
            <label htmlFor="music">Music/Concerts (31)<input type="checkbox" id="music" /></label>

            <label htmlFor="sports">Sports (27) <input type="checkbox" id="sports" /></label>

            <label htmlFor="arts">Arts (19) <input type="checkbox" id="arts" /></label>

            <label htmlFor="family">Family (17)  <input type="checkbox" id="family" /></label>

            <label htmlFor="festivals">Festivals (15)<input type="checkbox" id="festivals" /></label>

            <label htmlFor="other">Other (12) <input type="checkbox" id="other" /></label>

            <label htmlFor="charity">Charity (10) <input type="checkbox" id="charity" /></label>

            <label htmlFor="recreation">Recreation (9) <input type="checkbox" id="recreation" /></label>
          </div>
        </div>
      </div>

      <div className="events-main-content">
        <div className="events-view-sort">
          <div className="events-view-sort__view-buttons">
            <span>VIEW:</span>
            <button className={`events-view-sort__view-button ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')}>
              <Grid size={20} />
            </button>
            <button className={`events-view-sort__view-button ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')}>
              <List size={20} />
            </button>
          </div>

          <div className="events-view-sort__sort-buttons">
            <span>SORT:</span>
            <button className={`events-view-sort__sort-button ${sortBy === 'recommended' ? 'active' : ''}`} onClick={() => setSortBy('recommended')}>
              Recommended
            </button>
            <button className={`events-view-sort__sort-button ${sortBy === 'nearMe' ? 'active' : ''}`} onClick={() => setSortBy('nearMe')}>
              Near Me
            </button>
            <button className={`events-view-sort__sort-button ${sortBy === 'map' ? 'active' : ''}`} onClick={() => setSortBy('map')}>
              <MapPin size={16} /> Show Map
            </button>
          </div>
        </div>

        <div className={`events-grid ${viewMode}`}>
          {events.map(event => (
            <div key={event.id} className="events-grid__event-card">
              <div className="events-grid__event-image">
                <img src={event.image} alt={event.title} className="events-grid__event-img" />
                <button className="events-grid__heart-button">
                  <Heart size={20} />
                </button>
                <div className="events-grid__event-date">
                  <div className="events-grid__month">FEB</div>
                  <div className="events-grid__day">05</div>
                </div>
              </div>
              <div className="events-grid__event-details">
                <h3 className="events-grid__event-title">{event.title}</h3>
                {event.recurring && <p className="events-grid__recurring">{event.recurring}</p>}
                <div className="events-grid__event-location">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
                <button className="events-grid__quick-view">Quick View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
