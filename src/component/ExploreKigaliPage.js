import React from 'react';
import './ExploreKigaliPage.css';

function ExploreKigali() {
  return (
    <div className="explore-kigali-container">
      <section className="hero-section">
        <h1>Explore Kigali</h1>
        <p>Discover the beauty of Rwanda's capital city</p>
      </section>
      
      <section className="attractions-section">
        <h2>Popular Attractions</h2>
        <div className="attractions-grid">
          <div className="attraction-card">
            <img src="/images/kigali-convention-centre.jpg" alt="Kigali Convention Centre" />
            <h3>Kigali Convention Centre</h3>
            <p>Iconic architectural masterpiece in the heart of Kigali</p>
          </div>
          <div className="attraction-card">
            <img src="/images/genocide-memorial.jpg" alt="Genocide Memorial" />
            <h3>Genocide Memorial</h3>
            <p>A place of remembrance and education</p>
          </div>
          {/* Add more attraction cards as needed */}
        </div>
      </section>

      <section className="activities-section">
        <h2>Things to Do</h2>
        <div className="activities-list">
          <div className="activity-item">
            <h3>City Tours</h3>
            <p>Guided tours through Kigali's most interesting spots</p>
          </div>
          <div className="activity-item">
            <h3>Local Markets</h3>
            <p>Experience the vibrant local culture and crafts</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExploreKigali;