import React from 'react';
import { Share2 } from 'lucide-react';
import './Whote.css';

const HotelLanding = () => {
  return (
    <div className="min-h-screen">


      {/* Main Content */}
      <main className="main-content">
        <div className="share-button">
          <button className="flex items-center">
            <Share2 className="share-icon" />
            Share
          </button>
        </div>

        <h1>City Hotels</h1>
        
        <div className="content-text">
          <p>
            Looking for the perfect place to stay? Start your hotel search here. Whether you prefer one of our 5,000 downtown 
            hotel rooms in the heart of the action, or a suburban property, we've got you covered. If you're just not a hotel person, 
            check into one of our outstanding alternative properties, like <span className="link">The Riverside Lodge</span>.
          </p>

          <p>
            All properties in the downtown core are easily accessible on foot, as shown on our 
            <span className="link"> map of downtown hotels</span>. 
            The diverse selection of brands includes offerings for all price points and groups of any size.
          </p>
        </div>

        {/* Promo Section */}
        <div className="promo-section">
          <div className="promo-content">
            <div className="promo-left">
              <div className="promo-header">REWARDS CLUB</div>
            </div>
            <div className="promo-right">
              <h2 className="promo-title">TRAVEL SHOULD BE REWARDING.</h2>
              <p className="promo-description">
                Join our Rewards Program for free today and earn points toward travel, 
                upgrades and more. Program Rules apply. Terms and conditions apply.
              </p>
              <button className="join-button">
                JOIN TODAY →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HotelLanding;
