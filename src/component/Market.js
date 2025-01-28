import React from "react";
import './Market.css';

const Marketplace = () => {
    const cards = [
      {
        title: "1-Day Columbus Attractions Pass",
        description:
          "Save on admission (and receive other perks!) to some of Columbus’ most popular attractions. You’ll have 24 hours to explore as many of the included stops as you’d like.",
        image: "https://via.placeholder.com/150",
      },
      {
        title: "Columbus Distillery Trail",
        description:
          "Raise a glass at local distilleries and earn impressive prizes to commemorate your journey!",
        image: "https://via.placeholder.com/150",
      },
      {
        title: "Columbus Buckeye Treat Trail",
        description:
          "Try the new Columbus Buckeye Treat Trail, featuring irresistible buckeye-flavored desserts.",
        image: "https://via.placeholder.com/150",
      },
      {
        title: "Columbus-Style Pizza Trail",
        description:
          "Find the best places to try our local pizza — edge-to-edge, square-cut and thin crust.",
        image: "https://via.placeholder.com/150",
      },
      {
        title: "Columbus Coffee Trail",
        description:
          "Embark on the Columbus Coffee Trail! Save & savor the best coffee spots in Columbus.",
        image: "https://via.placeholder.com/150",
      },
    ];
  
    return (
      <div className="marketplace-container">
        <div className="marketplace-header">
          <h1>EXPLORE OUR MARKETPLACE</h1>
          <p>
            Get to know Columbus with our free experiential trails or save on
            admission tickets to some of your favorite Columbus attractions.
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