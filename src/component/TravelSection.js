import React from 'react';
import './TravelSection.css'; // Ensure you create and import the CSS file

const TravelSection = () => {
  return (
    <div className="travel-section">
      <h2 className="travel-heading">Explore the World</h2>
      <div className="image-container">
        <img src="path_to_image_1.jpg" alt="Travel Image 1" className="travel-image" />
        <img src="path_to_image_2.jpg" alt="Travel Image 2" className="travel-image" />
      </div>
    </div>
  );
};

export default TravelSection;
