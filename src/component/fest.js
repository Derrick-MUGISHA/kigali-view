import React from "react";
import "./fest.css";

const HotelCheck = () => {
    const festivals = [
      {
        name: "Franklinton Fridays",
        date: "Feb 14",
        location: "Franklinton Arts District",
      },
      {
        name: "Library Gets LOUD!",
        date: "Feb 17",
        location: "Westerville Public Library",
      },
      {
        name: "Cinema Revival: A Festival of Film Restoration",
        date: "Feb 20",
        location: "Wexner Center for the Arts",
      },
      {
        name: "Ohio Winter Blues Festival",
        date: "Feb 20",
        location: "Natalie's Grandview",
      },
    ];
  
    const sportingEvents = [
      {
        name: "Co-Owner",
        date: "Jan 28",
        location: "Brekkie Shack",
      },
      {
        name: "Ohio State Men's Hockey vs. Michigan State",
        date: "Jan 30",
        location: "Schottenstein Center",
      },
      {
        name: "OSU Men's Volleyball vs USC",
        date: "Jan 31",
        location: "Covelli Center",
      },
      {
        name: "Penn State vs. UCLA Men's Volleyball",
        date: "Jan 31",
        location: "Covelli Center",
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
                <div className="event-date">{event.date}</div>
                <div className="event-name">{event.name}</div>
                <div className="event-location">{event.location}</div>
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
                <div className="event-date">{event.date}</div>
                <div className="event-name">{event.name}</div>
                <div className="event-location">{event.location}</div>
              </li>
            ))}
          </div>
          <button className="view-all-btn">View All Events</button>
        </section>
      </div>
    );
  };
  
  export default HotelCheck;
