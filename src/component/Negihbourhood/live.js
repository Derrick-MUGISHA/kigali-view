import React from 'react';
import { Link } from 'react-router-dom';
import './live.css';

// Card component for individual neighborhoods
const NeighborhoodCard = ({ title, imageUrl, type, city, path }) => (
  <div className="neighborhood-card-image">
    {/* Front Tag for City */}
    <div className="city-tag">{city}</div> 

    <div className="image-container-image">
      <img src={imageUrl} alt={`${title} neighborhood`} className="image" />
      <div className="overlay">
        <h2 className="title">{title}</h2>
        <p className="image-type">{type}</p>
      </div>
    </div>
    <Link to={path} className="neighborhood-link"></Link>
  </div>
);

// Main component for rendering all neighborhoods
const NeighBorhoods = () => {
  const neighborhoods = [
    { title: 'Nyamirambo', imageUrl: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png', type: 'Urban', city: 'Kigali', path: '/nyamirambo' },
    { title: 'Kimironko', imageUrl: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png', type: 'Suburb', city: 'Kigali', path: '/kimironko' },
    { title: 'Nyarutarama', imageUrl: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png', type: 'Residential', city: 'Kigali', path: '/nyarutarama' },
    { title: 'Kigali City Centre', imageUrl: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png', type: 'City', city: 'Kigali', path: '/city-centre' },
    { title: 'Remera', imageUrl: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png', type: 'Suburb', city: 'Kigali', path: '/remera' },
    { title: 'Kabuye', imageUrl: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png', type: 'Historical', city: 'Kigali', path: '/kabuye' },
    { title: 'Gikondo', imageUrl: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png', type: 'Industrial', city: 'Kigali', path: '/gikondo' },
    { title: 'Kibagabaga', imageUrl: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png', type: 'Residential', city: 'Kigali', path: '/kibagabaga' },
    { title: 'Biryogo', imageUrl: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png', type: 'Commercial', city: 'Kigali', path: '/biryogo' },
    { title: 'Kigali Heights', imageUrl: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png', type: 'Modern', city: 'Kigali', path: '/kigali-heights' },
  ];

  return (
    <div className="page-container-image">
      <div className="neighborhood-header">
        <h1 className="Neighborhood-title">Explore Kigali Neighborhoods</h1>
        <p className="neighborhood-description">
          Discover the vibrant and unique neighborhoods of Kigali, each offering something special for residents and visitors alike.
        </p>
      </div>

      <div className="grid-container-image">
        {neighborhoods.map((neighborhood) => (
          <NeighborhoodCard
            key={neighborhood.title}
            title={neighborhood.title}
            imageUrl={neighborhood.imageUrl}
            type={neighborhood.type}
            city={neighborhood.city}
            path={neighborhood.path}
          />
        ))}
      </div>
    </div>
  );
};

export default NeighBorhoods;
