import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Location icon
import "./fest.css";

const HotelCheck = () => {
  const festivals = [
    {
      name: "Get up & Groove",
      date: "Jan 20th",
      location: "Kigali City Center",
      link: "http://www.getupandgroove.com",
    },
    {
      name: "WNW Wednesday",
      date: "Jan 29th",
      location: "Pili Pili",
      link: "http://www.wnwwednesday.com",
    },
    {
      name: "12 Hours in His Presence",
      date: "Feb 2nd",
      location: "BK Arena",
      link: "http://www.12hoursinhispresence.com",
    },
    {
      name: "Diva Hangout Party",
      date: "Jan 31st",
      location: "Silverback Mall",
      link: "http://www.divahangoutparty.com",
    },
  ];

  const sportingEvents = [
    {
      name: "Run Through Rwanda’s Beauty – Nyungwe Marathon 2025!",
      date: "Mar 7th",
      location: "Nyungwe Forest National Park",
      link: "https://www.pantheradventures.com/",
    },
    {
      name: "Nyungwe Marathon",
      date: "Mar 8th",
      location: "Nyungwe Forest National Park",
      link: "https://www.pantheradventures.com/",
    },
    {
      name: "OSU Men's Volleyball vs USC",
      date: "Jan 31",
      location: "Covelli Center",
      link: "#", // Add a link if available
    },
    {
      name: "Penn State vs. UCLA Men's Volleyball",
      date: "Jan 31",
      location: "Covelli Center",
      link: "#", // Add a link if available
    },
  ];

  return (
    <div className="hotel-check-container">
      {/* Festivals Section */}
      <section className="events-section">
        <h3 className="section-title">Festivals</h3>
        <div className="events-list">
          {festivals.map((event, index) => (
            <li className="event-list-item" key={index}>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="event-date"
              >
                {event.date}
              </a>
              <div className="event-name">{event.name}</div>
              <div className="event-location">
                <FaMapMarkerAlt className="location-icon" /> {event.location}
              </div>
            </li>
          ))}
        </div>
        <button className="view-all-btn">View Annual Festivals</button>
      </section>

      {/* Sporting Events Section */}
      <section className="events-section">
        <h3 className="section-title">Sporting Events</h3>
        <div className="events-list">
          {sportingEvents.map((event, index) => (
            <li className="event-list-item" key={index}>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="event-date"
              >
                {event.date}
              </a>
              <div className="event-name">{event.name}</div>
              <div className="event-location">
                <FaMapMarkerAlt className="location-icon" /> {event.location}
              </div>
            </li>
          ))}
        </div>
        <button className="view-all-btn">View All Events</button>
      </section>
    </div>
  );
};

export default HotelCheck;