import React, { useState, useEffect } from 'react';
import './ExporeKigaliImage.css'

const CustomImageCarousel = () => {
    const imageSlides = [
        {
            src: 'https://d1bvpoagx8hqbg.cloudfront.net/originals/experience-kigali-rwanda-umulinga-dbb2e0c2fe1ca0f3860d92e3ddfe41c2.jpg',
            caption: 'A countdown on Rwanda’s most trending events'
        },
        // Add more images here if needed
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % imageSlides.length); // Loop through the images
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [imageSlides.length]);

    return (
        <div className="carousel-container">
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
}

export default CustomImageCarousel;
