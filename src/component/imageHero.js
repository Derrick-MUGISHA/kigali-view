import React, { useState, useEffect } from 'react';
import './imageHero.css';

const ImageCarousel = () => {
  const images = [
    {
      src: 'https://d1bvpoagx8hqbg.cloudfront.net/originals/experience-kigali-rwanda-umulinga-dbb2e0c2fe1ca0f3860d92e3ddfe41c2.jpg',
      text: 'Experience Kigali from Every Angle'
    },
    {
      src: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/0a/60/3c.jpg',
      text: 'Where Kigali Comes to Life'
    },
    {
      src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/1b/74/55/caption.jpg?w=1000&h=-1&s=1',
      text: 'Your Ultimate Kigali View'
    },
    {
      src: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/19/08/99.jpg',
      text: 'Discover Kigali s Hidden Gems'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length); // Loop through the images
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
    <div className="carousel-container">
      <div className="carousel-slide">
        <img
          src={images[currentIndex].src}
          alt="Carousel"
          className="carousel-image"
        />
        <div className="carousel-text">
          <h2>{images[currentIndex].text}</h2>
        </div>
      </div>
    </div>
    </>
  );
}

export default ImageCarousel;