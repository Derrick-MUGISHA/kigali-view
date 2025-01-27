import React, { useState, useEffect } from 'react';
import './imageHero.css'; // Make sure to create this CSS file

const ImageCarousel = () => {
  const images = [
    {
      src: 'https://media.istockphoto.com/id/1132673374/photo/kigali-skyline-of-business-district-with-flag-rwanda.jpg?s=612x612&w=0&k=20&c=Nck-ZFMoEUJpSc2oA6AERdxXQLACqXlTPW0OYziUwx8=', 
      text: 'Image 1 - Explore the world'
    },
    {
      src: 'https://via.placeholder.com/800x400?text=Image+2', 
      text: 'Image 2 - Adventure awaits'
    },
    {
      src: 'https://via.placeholder.com/800x400?text=Image+3', 
      text: 'Image 3 - Nature is calling'
    },
    {
      src: 'https://via.placeholder.com/800x400?text=Image+4', 
      text: 'Image 4 - Beautiful places'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length); // Loop through the images
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);   

    return (
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
      );
}

export default ImageCarousel;