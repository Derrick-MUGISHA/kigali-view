import React, { useState } from "react";
import "./ExporeKigaliintro.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>KIGALI View</h1>
      <p>
        Thank you for your interest in visiting Greater KIGALI. We offer a number of travel tools to help plan your trip. Visit one of our two Visitor Centers, request a Visitors Guide, or view one of our area maps to help you get around and explore the city.
      </p>
      <p>
        If you wish to speak with a visitor information specialist, call +250 614 221 662 or +250 800 354 2657 or use the chatbot feature on our website to find things to do in the city. Keep scrolling for more useful resources.
      </p>
    </section>
  );
};

const VisitorResources = () => {
  const [showMore, setShowMore] = useState(false);

  const resources = [
    { id: 1, title: "Maps", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    { id: 2, title: "Transportation", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    { id: 3, title: "DEIA", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    { id: 4, title: "Attractions", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    { id: 5, title: "Activities", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    { id: 6, title: "Restaurants", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    { id: 7, title: "Events", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    { id: 8, title: "Hotels", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    { id: 9, title: "Restaurants", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    { id: 10, title: "Events", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
  ];

  // Slice the resources array to show only the first 3 initially
  const displayedResources = showMore ? resources : resources.slice(0, 3);

  return (
    <section className="visitor-resources">
      <h2>Visitor Resources</h2>
      <div className="resources-grid">
        {displayedResources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <img src={resource.image} alt={resource.title} />
            <h3>{resource.title}</h3>
          </div>
        ))}
      </div>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <HeroSection />
      <VisitorResources />
    </div>
  );
};

export default App;
