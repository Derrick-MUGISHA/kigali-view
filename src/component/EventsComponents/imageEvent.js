import React, { useState, useEffect } from 'react';
import './imageEvent.css';

const CustomImageCarousel = () => {
  const imageSlides = [
    {
      src: 'https://media.gettyimages.com/id/534432456/photo/a-statue-honouring-the-strength-of-rwandese-women-and-the.webp?s=2048x2048&w=gi&k=20&c=w6r9s5kMp1th8Ep2BjjxlBAPGoKMoiyko-tfYhJQG-0=',
      caption: 'A countdown on Rwanda’s most trending events'
    },
    {
      src: 'https://ams3.digitaloceanspaces.com/rwbuildpod/eventsbash-production/images/AGBwkfJ73DUmr4nWMRzqxJShRX5snsv5qK3hBJjO.png',
      caption: 'A countdown on Rwanda’s most trending events 666'
    },
    {
      src: 'https://365rwanda.com/wp-content/uploads/sites/130/2025/01/25.png',
      caption: 'A countdown on Rwanda’s most trending events 666'
    },
    {
      src: 'https://365rwanda.com/wp-content/uploads/sites/130/2025/01/124.jpg',
      caption: 'A countdown on Rwanda’s most trending events 666'
    },
    {
      src: 'https://365rwanda.com/wp-content/uploads/sites/130/2025/01/148.jpg',
      caption: 'A countdown on Rwanda’s most trending events 666'
    },
    {
      src: 'https://kifc.rw/wp-content/uploads/2024/10/Web-Thumbnail_IFF25-1024x597.jpg',
      caption: 'Inclusive FinTech Forum 2025'
    },
    {
      src: 'https://www.ktpress.rw/wp-content/uploads/2019/11/Screen-Shot-2019-11-26-at-9.14.48-AM-768x488.png',
      caption: 'Global Gender Summit Kigali: The Colorful Gala Dinner'
    },
    
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % imageSlides.length); // Loop through the images
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [imageSlides.length]);

  return (
    <div className="image-carousel-container">
      <div className="carousel-slide">
        <img
          src={imageSlides[activeIndex].src}
          alt="Carousel"
          className="carousel-image"
        />
        <div className="carousel-caption">
          <h2>{imageSlides[activeIndex].caption}</h2>
        </div>
      </div>
    </div>
  );
};

export default CustomImageCarousel;
