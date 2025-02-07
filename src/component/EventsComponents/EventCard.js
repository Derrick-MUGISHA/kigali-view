import React from 'react';
import { ArrowRight } from 'lucide-react';
import './EventCard.css'; 

const EventCard = ({ title, description, imageUrl, sponsored = false }) => (
  <div className="event-card">
    <div className="event-card-image">
      <img 
        src={imageUrl || "/api/placeholder/400/300"} 
        alt={title} 
        className="event-card-img"
      />
      {sponsored && (
        <span className="sponsored-label">SPONSORED</span>
      )}
    </div>
    <div className="event-card-content">
      <h2 className="event-card-title">{title}</h2>
      <p className="event-card-description">{description}</p>
      <a 
        href="#" 
        className="event-card-link"
      >
        Learn More
        <ArrowRight className="event-card-arrow" />
      </a>
    </div>
  </div>
);

const EventCardsSection = () => {
  const cards = [
    {
      title: "Find the Perfect Gift at Little Sky Stone",
      description: "Real gemstones, timeless designs—perfect for every meaningful moment. Find your birthstone piece.",
      imageUrl: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      sponsored: true
    },
    {
      title: "Experience the Delicious Tastes of Oaxaca",
      description: "Enjoy authentic Mexican food at Dos Hermanos, a local staple! Try the best tacos, burritos, & bowls.",
      imageUrl: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      sponsored: true
    },
    {
      title: "Say \"Yes\" to the Sweetest Moments",
      description: "Columbus boasts some of the best pastry chefs in the Midwest.",
      imageUrl: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png"
    },
    {
      title: "Say \"Yes\" to Fun with Fido",
      description: "Here you'll find dog-friendly restaurants, lodging, shopping and attractions throughout the city.",
      imageUrl: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png"
    }
  ];

  return (
    <div className="event-cards-section">
      <div className="event-cards-grid">
        {cards.map((card, index) => (
          <EventCard 
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            sponsored={card.sponsored}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCardsSection;
