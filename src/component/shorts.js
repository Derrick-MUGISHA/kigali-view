import React, { useState } from 'react';
import './shorts.css'; // Ensure you import the CSS

const imageCards = [
    { id: 1, src: 'path_to_image_1.jpg', alt: 'Image 1', text: 'Explore Columbus' },
    { id: 2, src: 'path_to_image_2.jpg', alt: 'Image 2', text: 'Taste Local Cuisine' },
    { id: 3, src: 'path_to_image_3.jpg', alt: 'Image 3', text: 'Discover Hidden Gems' },
    { id: 4, src: 'path_to_image_4.jpg', alt: 'Image 4', text: 'Visit Museums' },
    { id: 5, src: 'path_to_image_5.jpg', alt: 'Image 5', text: 'Explore Parks' },
    { id: 6, src: 'path_to_image_6.jpg', alt: 'Image 6', text: 'Attend Local Events' },
    {}, { id: 7, src: 'path_to_image_7.jpg', alt: 'Image 7', text: 'Shop Unique Stores' },
    { id: 8, src: 'path_to_image_8.jpg', alt: 'Image 8', text: 'Experience Outdoor Activities' },
    { id: 9, src: 'path_to_image_9.jpg', alt: 'Image 9', text: 'Attend Live Performances' },
    { id: 10, src: 'path_to_image_10.jpg', alt: 'Image 10', text: 'Explore Historic Sites' },
    { id: 11, src: 'path_to_image_11.jpg', alt: 'Image 11', text: 'Attend Art Galleries' },
    { id: 12, src: 'path_to_image_12.jpg', alt: 'Image 12', text: 'Experience Local Culture' },
    
    // Add more cards as needed
  ];
  
  const ColumbusSnapshots = () => {
    const [showAll, setShowAll] = useState(false);
  
    const handleToggle = () => {
      setShowAll((prevState) => !prevState);
    };
  
    const displayedCards = showAll ? imageCards : imageCards.slice(0, 8); // Display 3 cards initially
  
    return (
      <div className="columbus-snapshots">
        <h2>Yes, KIGALI logo</h2>
        <p>
          Share your experiences in Columbus with us on social by using{' '}
          <strong>#yesColumbus</strong>. We’d love to see your favorite moments,
          whether you’re exploring the city’s hidden gems, enjoying the local food
          scene, or simply soaking in the atmosphere. Tag us and be part of the
          Columbus community!
        </p>
  
        <div className="image-cards">
          {displayedCards.map((image) => (
            <div key={image.id} className="image-card">
              <img src={image.src} alt={image.alt} />
              <div className="overlay">
                <div className="overlay-text">{image.text}</div>
              </div>
            </div>
          ))}
        </div>
  
        <button className="read-more-btn" onClick={handleToggle}>
          {showAll ? 'Show Less' : 'Read More'}
        </button>
      </div>
    );
  };
  
  export default ColumbusSnapshots;
  