import React from 'react';
import './introH.css';

function IntroH() { // Capitalize the component name
  const ImageSection = [
    {
      src: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png',
      alt: 'Kigali View',
      Text: 'Kigali View',
    },
  ];

  return (
    <div className="carousel-container">
      {ImageSection.map((image, index) => (
        <div key={index} className="carousel-slide">
          <img className="carousel-image" src={image.src} alt={image.alt} />
          <div className="carousel-text">
            <h1>{image.Text}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IntroH; // Ensure the export is correct
