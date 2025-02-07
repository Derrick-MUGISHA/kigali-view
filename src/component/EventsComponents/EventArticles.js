// FeaturedSections.jsx
import React from 'react';
import './EventArticles.css';

const FeaturedCard = ({ image, title, type }) => (
  <div className="featured-card">
    <img src={image} alt={title} className="featured-image" />
    <div className="featured-overlay"></div>
    <div className="featured-content">
      <span className="featured-tag">{type}</span>
      <h3 className="featured-title">{title}</h3>
    </div>
  </div>
);

const SponsoredCard = ({ image, title, description }) => (
  <div className="sponsored-card">
    <div className="sponsored-image-container">
      <img src={image} alt={title} className="sponsored-image" />
      <span className="sponsored-tag">SPONSORED</span>
    </div>
    <div className="sponsored-content">
      <h3 className="sponsored-title">{title}</h3>
      <p className="sponsored-description">{description}</p>
      <button className="read-more-button">Read More</button>
    </div>
  </div>
);

const FeaturedSections = () => {
  const featuredArticles = [
    {
      image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Can't-Miss Winter Events in Columbus",
      type: "PLAY"
    },
    {
      image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "25 Reasons to Visit Columbus in 2025",
      type: "VISIT"
    },
    {
      image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Best Hotels and Staycation Ideas: Winter in Columbus",
      type: "STAY"
    }
  ];

  const sponsoredContent = [
    {
      image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Visit Our Neighborhood Tavern",
      description: "Voted #1 best neighborhood bar in UA/Grandview in the ColumBEST awards! Find American eats and craft brews at Grandview Cafe."
    },
    {
      image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Go Behind the Scenes With Tours at the Columbus Zoo",
      description: "Immerse in animal fun! Connect with a variety of wildlife species in an interactive environment with Jack Hanna's Animal Encounter Village Experience."
    }
  ];

  return (
    <div className="featured-sections">
      <div className="featured-grid">
        {featuredArticles.map((article, index) => (
          <FeaturedCard key={index} {...article} />
        ))}
      </div>
      
      <div className="sponsored-grid">
        {sponsoredContent.map((content, index) => (
          <SponsoredCard key={index} {...content} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSections;