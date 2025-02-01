import React from 'react';
import './slide.css';

const PromotionalSlider = () => {
  const slides = [
    {
      title: "EXPLORE OUR MARKETPLACE",
      subtext: "TRAILS AND ATTRACTION TICKETS",
      textColorClass: "text-cyan",
      image: "https://fusionestatesafrica.com/wp-content/uploads/2021/10/Kigali-Heights-for-website-1.jpeg"
    },
    {
      title: "BOOK A TWO-NIGHT STAY",
      subtext: "FREE ATTRACTIONS TICKETS",
      textColorClass: "text-green",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/1c/51/de/hotel-exterior.jpg?w=1100&h=-1&s=1"
    },
    {
      title: "LEARN ABOUT CBUS REWARDS",
      subtext: "DOWNLOAD AND SAVE!",
      textColorClass: "text-yellow",
      image: "https://kinyarwanda.com/wp-content/uploads/2021/12/MG_3648-Edit-1-1024x683.jpg"
    },
    {
      // title: "On this Heroes Day, we celebrate Rwanda’s past, present, and future",
      // subtext: "FREE ATTRACTIONS TICKETS",
      // textColorClass: "text-red",
      image: "https://static.vecteezy.com/system/resources/previews/034/899/406/non_2x/rwanda-heroes-day-illustration-on-february-1-with-rwandan-flag-and-soldier-memorial-who-struggled-in-national-holiday-cartoon-background-vector.jpg"
    },
  ];

  return (
    <div className="promotional-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="slide-container"
          >
            <div className="image-container">
              <img 
                src={slide.image}
                alt={slide.title}
                className="slide-image"
              />
              
              <div className="overlay" />
              
              <div className="content">
                <div>
                  <p className={`subtext ${slide.textColorClass}`}>
                    {slide.subtext}
                  </p>
                  <h2 className={`title ${slide.textColorClass}`}>
                    {slide.title}
                  </h2>
                </div>
                
                <div className={`arrow-indicator ${slide.textColorClass}`}>
                  →
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* <div className="slide-container additional-image">
          <div className="image-container">
            <img 
              src="https://www.volcanoesnationalparkrwanda.com/wp-content/uploads/2018/01/Tourism-in-Kigali-City-615x350.jpg"
              alt="Additional content"
              className="slide-image"
            />
            <p>well</p>
            <div className="overlay" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PromotionalSlider;