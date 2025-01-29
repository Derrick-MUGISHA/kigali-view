import React from 'react';
import './kigaliA.css';

const ColumbusAwardsSection = () => {
  return (
    <div className="columbus-awards-section">
      <div className="columbus-content">
        {/* Left side: Logo and Text */}
        <div className="columbus-left">
          <div className="columbus-logo">
            <img
              src="your-logo-url-here" // Replace with your logo URL
              alt="Columbus Logo"
              className="logo-img"
            />
          </div>
          <div className="columbus-awards-text">
            <p>

              Kigali has been celebrated as one of Africa’s Cleanest Cities, a Top Destination for Innovation and Sustainability, and one of the Friendliest and Safest Cities in the World by global travel experts and organizations like Condé Nast Traveler and the World Travel Awards.

              With its vibrant culture, breathtaking scenery, and a culinary scene that’s gaining international acclaim, Kigali is not just a city—it’s an experience. From its lush green hills to its thriving arts and tech hubs, Kigali is a city that continues to inspire and amaze.
            </p>
          </div>
        </div>

        {/* Right side: Video */}
        <div className="columbus-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/v1SIZoSfoIc?autoplay=1&mute=1&si=rllBckTDhm9Ke4aT"
            title="Columbus Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

        </div>
      </div>
    </div>
  );
};

export default ColumbusAwardsSection;

