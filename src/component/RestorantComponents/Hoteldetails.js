import React, { useState } from 'react';
import { Heart, MapPin, Eye, Share2 } from 'lucide-react';
import './Hoteldetails.css'; // Import custom CSS

const RestaurantListings = () => {
  const [viewType, setViewType] = useState('grid');

  const categories = [
    { name: 'Fast Food', count: 130 },
    { name: 'Resotrants', count: 81 },
    { name: 'Coffee/Baked Goods', count: 50 },
    { name: 'Breakfast/Brunch', count: 27 },
    { name: 'Burkely', count: 22 }
  ];

  const regions = [
    { name: 'Kigali center', count: 46 },
    { name: 'Downtown', count: 37 },
    { name: 'East', count: 17 },
    { name: 'West', count: 15 },
    { name: 'city side', count: 15 }
  ];

  const restaurants = [
    {
      name: 'Fusion Restaurant',
      address: 'No 5 KN 29 Kiyovu, Kigali Rwanda',
      featured: true,
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/a2/13/c9/breakfast.jpg?w=900&h=500&s=1'
    },
    {
      name: "Filini Restaurant & Bar Kigali",
      address: '2973 N High St',
      featured: true,
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/d0/9f/5a/caption.jpg?w=900&h=-1&s=1'
    },
    {
      name: "Lindey's",
      address: '169 E. Beck St.',
      rating: 4.8,
      reviews: 1206,
      image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png'
    },
    {
      name: 'The Flying Pig', 
      address: '2500 E. Beck St.',
      rating: 4.7,
      reviews: 1550,
      image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png'
    }
  ];

  const featuredArticles = [
    {
      title: 'Must-Try Food & Drink Items During Your Trip to Columbus',
      category: 'DINE',
      image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png'
    },
    {
      title: '10 Romantic Columbus Restaurants Perfect for Any Date',
      category: 'DINE',
      image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png'
    },
    {
      title: 'Top Hotel Bars and Restaurants in Columbus',
      category: 'STAY',
      image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png'
    },
    {
      title: 'Best Restaurants in Columbus, Ohio',
      category: 'DINE',
      image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png'
    }
  ];

  return (
    <div className="restaurant-listings">
      {/* Hero Section */}
      <div className="hero-section">
        <img 
          src="https://img.freepik.com/free-photo/side-view-mushroom-frying-with-stove-fire-human-hand-pan_176474-3150.jpg?t=st=1739021913~exp=1739025513~hmac=8fa4cfe2a8361f96209ea09f080bc005fc13e597841d73ce0b16f7a69d43e28d&w=1060" 
          alt="Featured dish" 
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-text">
              <div className="sponsored">SPONSORED</div>
              <h2 className="hero-title">Great Eats in a Kigali Restaurants</h2>
              <p className="hero-description">Stop By Kigali’s Best Tavern: Enjoy Kigali Eats, Craft Brews, and a Patio Vibe</p>
              <button className="cta-button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="share-button">
          <button className="share-text">
            <Share2 className="icon" />
            Share
          </button>
        </div>

        <h1 className="main-title">Restaurants in Kigali</h1>

        <div className="content-wrapper">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="search-box">
              <input type="text" placeholder="Search" className="search-input" />
            </div>

            <div className="filters">
              <h3 className="section-title">CATEGORIES</h3>
              {categories.map((category, index) => (
                <div key={index} className="filter-item">
                  <input type="checkbox" className="filter-checkbox" />
                  <span>{category.name} ({category.count})</span>
                </div>
              ))}
              <button className="show-more">Show 19 more</button>
            </div>

            <div className="filters">
              <h3 className="section-title">REGIONS</h3>
              {regions.map((region, index) => (
                <div key={index} className="filter-item">
                  <input type="checkbox" className="filter-checkbox" />
                  <span>{region.name} ({region.count})</span>
                </div>
              ))}
              <button className="show-more">Show 24 more</button>
            </div>

            <button className="clear-filters">
              <span>Clear Filters</span>
            </button>
          </div>

          {/* Restaurant Grid */}
          <div className="restaurant-grid">
            <div className="view-sort-options">
              <div className="view-buttons">
                <span>VIEW:</span>
                <button 
                  className={`view-button ${viewType === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewType('grid')}
                >
                  Grid
                </button>
                <button 
                  className={`view-button ${viewType === 'list' ? 'active' : ''}`}
                  onClick={() => setViewType('list')}
                >
                  List
                </button>
                <span className="sort-label">SORT:</span>
                <select className="sort-select">
                  <option>Default</option>
                  <option>Near Me</option>
                </select>
              </div>
              <button className="map-button">
                <MapPin className="icon" />
                Show Map
              </button>
            </div>

            <div className={`restaurant-list ${viewType === 'grid' ? 'grid-view' : 'list-view'}`}>
              {restaurants.map((restaurant, index) => (
                <div key={index} className="restaurant-item">
                  <div className="restaurant-image-wrapper">
                    <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
                    {restaurant.featured && (
                      <div className="featured-tag">FEATURED</div>
                    )}
                    <button className="favorite-button">
                      <Heart className="icon" />
                    </button>
                  </div>
                  <div className="restaurant-details">
                    <h3 className="restaurant-name">{restaurant.name}</h3>
                    <div className="restaurant-address">
                      <MapPin className="icon" />
                      <span>{restaurant.address}</span>
                    </div>
                    {restaurant.rating && (
                      <div className="restaurant-rating">
                        <div className="rating-stars">
                          {'★'.repeat(Math.floor(restaurant.rating))}
                        </div>
                        <span className="reviews">{restaurant.reviews} reviews</span>
                        <button className="quick-view">
                          <Eye className="icon" />
                          Quick View
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        <div className="featured-articles">
          {featuredArticles.map((article, index) => (
            <div key={index} className="article-item">
              <img 
                src={article.image} 
                alt={article.title} 
                className="article-image"
              />
              <div className="article-overlay">
                <div className="article-content">
                  <div className="article-category">{article.category}</div>
                  <h3 className="article-title">{article.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantListings;
