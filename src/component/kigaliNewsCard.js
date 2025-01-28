import React, { useState } from 'react';
import './kigaliNewsCard.css';

const ColumbusNewsSection = () => {
    const [showMore, setShowMore] = useState(false);
  
    const toggleShowMore = () => setShowMore(!showMore);
  
    // Mock data for news cards
    const newsCards = Array(20).fill({
      title: "Columbus News Headline",
      description: "Brief description about a recent event or achievement in Columbus.",
      imageUrl: "https://via.placeholder.com/300", // Replace with your image URLs
    });
  
    return (
      <div className="columbus-news-section">
        {/* Title and Subtitle */}
        <div className="columbus-news-header">
          <h2>Yes, Columbus is Making Headlines</h2>
          <h3>COLUMBUS IN THE NEWS</h3>
        </div>
  
        {/* Cards Section */}
        <div className="columbus-cards">
          {newsCards.slice(0, showMore ? newsCards.length : 8).map((card, index) => (
            <div className="columbus-card" key={index}>
              <div className="columbus-card-content">
                <img src={card.imageUrl} alt="News" className="columbus-card-image" />
                <div className="columbus-card-overlay"></div>
                <div className="columbus-card-text">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* See More Button */}
        <div className="columbus-see-more">
  <button onClick={toggleShowMore} className="see-more-button">
    {showMore ? "Show Less" : "See More"}
  </button>
</div>
      </div>
    );
  };
  
  export default ColumbusNewsSection;