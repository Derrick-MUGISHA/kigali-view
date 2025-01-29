import React from "react";
import './Market.css';

const Marketplace = () => {
  const cards = [
    {
      title: "1-Day Kigali City Tour Pass",
      description:
        "Explore the vibrant city of Kigali with a 24-hour pass to visit its top attractions, including the Kigali Genocide Memorial, local markets, and cultural landmarks.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b0/fa/2a/gisozi-genocide-memorial.jpg?w=1000&h=-1&s=1",
    },
    {
      title: "Kigali Coffee Experience Trail",
      description:
        "Discover Rwanda's world-renowned coffee culture. Visit local coffee shops and plantations to learn about the process from bean to cup.",
      image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/22/20/01.jpg",
    },
    {
      title: "Kigali Art and Craft Trail",
      description:
        "Immerse yourself in Kigali's thriving art scene. Visit galleries, craft markets, and workshops to see and purchase unique handmade items.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/41/34/12/ivuka-arts-centre.jpg?w=900&h=500&s=1",
    },
    {
      title: "Kigali Foodie Trail",
      description:
        "Taste your way through Kigali's culinary delights. Enjoy traditional Rwandan dishes and modern fusion cuisine at the city's best restaurants.",
      image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0f/e3/94/25.jpg",
    },
    {
      title: "Kigali Nature and Wildlife Trail",
      description:
        "Experience Kigali's natural beauty. Visit nearby parks, lakes, and wildlife reserves to see Rwanda's stunning landscapes and animals.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/31/88/df/caption.jpg?w=1000&h=-1&s=1",
    },
  ];

  return (
    <div className="marketplace-container">
      <div className="marketplace-header">
        <h1>EXPLORE OUR MARKETPLACE</h1>
        <p>
          Discover Kigali with our free experiential trails or save on admission tickets to some of the city's most popular attractions.
        </p>
        <a href="#" className="marketplace-link">
          View All Passes
        </a>
      </div>
      <div className="marketplace-grid">
        {cards.map((card, index) => (
          <div key={index} className="marketplace-card">
            <img src={card.image} alt={card.title} className="marketplace-image" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button className="marketplace-button">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;