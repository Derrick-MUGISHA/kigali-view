import React, { useState, useEffect } from 'react';
import './imageHero.css'; // Make sure to create this CSS file

const ImageCarousel = () => {
  const images = [
    {
      src: 'https://media.istockphoto.com/id/1132673374/photo/kigali-skyline-of-business-district-with-flag-rwanda.jpg?s=612x612&w=0&k=20&c=Nck-ZFMoEUJpSc2oA6AERdxXQLACqXlTPW0OYziUwx8=',
      text: 'great experience with Rwanda'
    },
    {
      src: 'https://www.kigalicity.gov.rw/index.php?eID=dumpFile&t=f&f=36821&token=b47a2e42a70a09b2b279e22f8faa8fe6c7d6e218',
      text: 'Image 2 - Adventure awaits'
    },
    {
      src: 'https://www.kigalicity.gov.rw/index.php?eID=dumpFile&t=f&f=36793&token=79d4d4744da3652de068e5d93528e4632b3c0446',
      text: 'Image 3 - Nature is calling'
    },
    {
      src: 'https://www.kigalicity.gov.rw/index.php?eID=dumpFile&t=f&f=36823&token=ad602e29eea48d1ae25eefe83052662cbbe62ec8',
      text: 'Image 4 - Beautiful places'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length); // Loop through the images
    }, 10000); // Change image every 5 seconds

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