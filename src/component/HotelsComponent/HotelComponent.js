import React, { useState } from 'react';
import { Heart, MapPin, Eye } from 'lucide-react';
import './HotelComponent.css';

const HotelListings = () => {
    const [viewType, setViewType] = useState('grid');
    const [favorites, setFavorites] = useState([]);
    const [showMap, setShowMap] = useState(false);
    const [quickViewHotel, setQuickViewHotel] = useState(null);

    const hotels = [
        {
            name: 'Courtyard By Marriott/Worthington',
            address: '7411 Vantage Drive',
            rating: 4.2,
            reviews: 182,
            featured: true,
            image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png'
        },
        {
            name: 'Hilton Columbus Downtown',
            address: '402 N. High St.',
            rating: 4.5,
            reviews: 2402,
            image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png'
        },
        {
            name: 'Hilton Columbus Downtown',
            address: '402 N. High St.',
            rating: 4.5,
            reviews: 2402,
            image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png'
        },
        {
            name: 'Hilton Columbus Downtown',
            address: '402 N. High St.',
            rating: 4.5,
            reviews: 2402,
            image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png'
        },
        {
            name: 'Hilton Columbus Downtown',
            address: '402 N. High St.',
            rating: 4.5,
            reviews: 2402,
            image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png'
        },
        {
            name: 'Hilton Columbus Downtown',
            address: '402 N. High St.',
            rating: 4.5,
            reviews: 2402,
            image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png'
        }
        // Add more hotels as needed
    ];

    const exploreOptions = [
        { title: 'Packages', image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png' },
        { title: 'Near Ohio State University', image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png' },
        { title: 'Downtown', image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png' }
    ];

    const toggleFavorite = (hotel) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.includes(hotel.name)) {
                return prevFavorites.filter((fav) => fav !== hotel.name);
            } else {
                return [...prevFavorites, hotel.name];
            }
        });
    };

    const toggleView = (view) => {
        setViewType(view);
    };

    const openQuickView = (hotel) => {
        setQuickViewHotel(hotel);
    };

    const closeQuickView = () => {
        setQuickViewHotel(null);
    };

    const toggleMapView = () => {
        setShowMap(!showMap);
    };

    return (
        <div className="container">
            {/* Promo Section */}
            <div className="promo-section">
                <h2>Book a two-night stay with us and you'll get the choice of:</h2>
                <div className="promo-grid">
                    <div className="promo-item">
                        <img src="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" alt="Delta Airlines" />
                        <h3>$100 Delta Air Lines Voucher</h3>
                    </div>
                    <div className="promo-item">
                        <img src="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" alt="Franklin Park" />
                        <h3>Two Tickets to Franklin Park Conservatory and Botanical Gardens</h3>
                    </div>
                    <div className="promo-item">
                        <img src="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" alt="Lyft" />
                        <h3>$25-$50 Lyft Credit</h3>
                    </div>
                </div>
            </div>

            {/* Filters and View Options */}
            <div className="view-options">
                <div className="view-buttons">
                    <span>VIEW:</span>
                    <button
                        className={viewType === 'grid' ? 'active' : ''}
                        onClick={() => toggleView('grid')}
                    >
                        Grid
                    </button>
                    <button
                        className={viewType === 'list' ? 'active' : ''}
                        onClick={() => toggleView('list')}
                    >
                        List
                    </button>
                </div>
                <button className="map-button" onClick={toggleMapView}>
                    <MapPin className="icon" />
                    <span>Show Map</span>
                </button>
            </div>

            {/* Hotel Grid */}
            <div className={`hotel-grid ${viewType === 'list' ? 'list-view' : ''}`}>
                {hotels.map((hotel, index) => (
                    <div key={index} className="hotel-item">
                        <div className="relative">
                            <img src={hotel.image} alt={hotel.name} />
                            {hotel.featured && (
                                <div className="featured">FEATURED</div>
                            )}
                            <button
                                className="favorite-button"
                                onClick={() => toggleFavorite(hotel)}
                            >
                                <Heart
                                    className={`icon ${favorites.includes(hotel.name) ? 'favorited' : ''}`}
                                />
                            </button>
                        </div>
                        <div className="hotel-info">
                            <h3>{hotel.name}</h3>
                            <div className="address">
                                <MapPin className="icon" />
                                <span>{hotel.address}</span>
                            </div>
                            <div className="rating">
                                <span>{'★'.repeat(Math.floor(hotel.rating))}</span>
                                <span>{hotel.reviews} reviews</span>
                            </div>
                            <div className="quick-view" onClick={() => openQuickView(hotel)}>
                                <Eye className="icon" />
                                <span>Quick View</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick View Modal */}
            {quickViewHotel && (
                <div className="quick-view-modal">
                    <div className="modal-content">
                        <h3>{quickViewHotel.name}</h3>
                        <img src={quickViewHotel.image} alt={quickViewHotel.name} />
                        <p>{quickViewHotel.address}</p>
                        <button onClick={closeQuickView}>Close</button>
                    </div>
                </div>
            )}

            {/* Explore More Section */}
            <div className="explore-section">
                <h2>EXPLORE MORE LODGING OPTIONS</h2>
                <div className="explore-grid">
                    {exploreOptions.map((option, index) => (
                        <div key={index} className="explore-item">
                            <img src={option.image} alt={option.title} />
                            <div className="overlay">
                                <h3>{option.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Map View */}
            {showMap && (
                <div className="map-view">
                    <h2>Map View (This is just a placeholder)</h2>
                </div>
            )}
        </div>
    );
};

export default HotelListings;
