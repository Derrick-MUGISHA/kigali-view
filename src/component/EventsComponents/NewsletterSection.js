import React from 'react';
import './NewsletterSection.css';  // Import the CSS file

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="grid-container">
          <div className="text-content">
            <h2 className="title">
              Sign up for the Experience Columbus Newsletter
            </h2>
            <p className="description">
              Uncover Columbus Like a Local! Get the latest happenings, hidden gems, and travel tips delivered straight to your inbox.
            </p>
            <p className="highlighted-text">
              Subscribe now and experience the best of Columbus today!
            </p>
            <button className="signup-button">
              Newsletter Sign Up
            </button>
          </div>
          <div className="image-container">
            {/* Add an image for the newsletter section if needed */}
            <img className="image" src="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" alt="Newsletter" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
