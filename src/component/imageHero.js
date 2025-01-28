import React, { useState, useEffect } from 'react';
import './imageHero.css'; // Make sure to create this CSS file

const ImageCarousel = () => {
  const images = [
    {
      src: 'https://d1bvpoagx8hqbg.cloudfront.net/originals/experience-kigali-rwanda-umulinga-dbb2e0c2fe1ca0f3860d92e3ddfe41c2.jpg',
      text: 'Experience Kigali from Every Angle'
    },
    {
      src: 'https://media.graphassets.com/resize=width:1600/auto_image/quality=value:85/compress/rubHJ1CvSDaQ6mwnejxO',
      text: 'Where Kigali Comes to Life'
    },
    {
      src: 'https://www.kigalicity.gov.rw/index.php?eID=dumpFile&t=f&f=36793&token=79d4d4744da3652de068e5d93528e4632b3c0446',
      text: 'Your Ultimate Kigali View'
    },
    {
      src: 'https://www.kigalicity.gov.rw/index.php?eID=dumpFile&t=f&f=36823&token=ad602e29eea48d1ae25eefe83052662cbbe62ec8',
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