import React, { useState } from 'react';
import './shorts.css'; // Ensure you import the CSS

const imageCards = [
    { id: 1, src: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/13/43/41/9e.jpg', alt: 'Image 1', text: 'Explore kigali city culture' },
    { id: 2, src: 'https://www.ugandarwanda-safaris.com/wp-content/uploads/2024/10/Umutsima.jpg', alt: 'Image 2', text: 'Test the food of kigali' },
    { id: 3, src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/56/69/f1/entrance.jpg?w=900&h=500&s=1', alt: 'Image 3', text: 'Discover Hidden Gems in kigali' },
    { id: 4, src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b0/fa/7d/gisozi-genocide-memorial.jpg?w=900&h=500&s=1', alt: 'Image 4', text: 'Visit Museums to know more about Rwanda' },
    { id: 5, src: 'https://www.nkuringosafaris.com/wp-content/uploads/2023/08/kinigi-kwita-izina-__.jpg', alt: 'Image 5', text: 'Explore Parks In Rwanda' },
    { id: 6, src: 'https://rdb.rw/wp-content/uploads/2023/12/DC_8157_Lv9fDXRT-1024x682.jpeg', alt: 'Image 6', text: 'Attend Local Events like Move Africa' },
    { id: 7, src: 'https://rwandaclothing.com/wp-content/uploads/2016/01/RWANDA-CLOTHING-STORE-Kigali_-36-570x380.jpg', alt: 'Image 7', text: 'Shop Unique Stores' },
    { id: 8, src: 'https://cdn.getyourguide.com/img/tour/8dfc8c93e0e94a71.jpeg/98.jpg', alt: 'Image 8', text: 'Experience Outdoor Activities' },
    { id: 9, src: 'https://en.igihe.com/local/cache-vignettes/L1000xH667/ruger-2-779fa-1843f.jpg?1733238640', alt: 'Image 9', text: 'Attend Live Performances with the African stars' },
    { id: 10, src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/56/7f/c8/exterior.jpg?w=900&h=-1&s=1', alt: 'Image 10', text: 'Explore Rerigonal Historical Sites' },
    { id: 11, src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/58/6a/5a/this-is-me-ken-an-artist.jpg?w=900&h=500&s=1', alt: 'Image 11', text: 'Attend Art Galleries' },
    { id: 12, src: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/e3/85/0e.jpg', alt: 'Image 12', text: 'Experience Local Culture' },
    { id: 13, src: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/3d/5d/3f.jpg', alt: 'Image 13', text: 'Attend Music Festivals' },
    { id: 14, src: 'https://www.rwandaclothing.com/wp-content/uploads/2016/01/RWANDA-CLOTHING-STORE-Kigali_-36-570x380.jpg', alt: 'Image 14', text: 'Shop Unique Stores' },
    { id: 15, src: 'https://www.nkuringosafaris.com/wp-content/uploads/2023/08/kinigi-kwita-izina-__.jpg', alt: 'Image 15', text: 'Explore Parks In Rwanda' },
    
    // Add more cards as needed
  ];
  
  const ColumbusSnapshots = () => {
    const [showAll, setShowAll] = useState(false);
  
    const handleToggle = () => {
      setShowAll((prevState) => !prevState);
    };
  
    const displayedCards = showAll ? imageCards : imageCards.slice(0, 5); // Display 3 cards initially
  
    return (
      <div className="columbus-snapshots">
        <h2>Yes, KIGALI </h2>
        <p>
          Share your experiences in Columbus with us on social by using{' '}
          <strong>#Kigali</strong>. We’d love to see your favorite moments,
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
  