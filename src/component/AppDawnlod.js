import React from 'react';
import './AppDawnlod.css';


const App = () => {
    return (
        <section className="rewards-section">
            <div className="text-content">
                {/* Heading */}
                <h2 className="section-heading">Explore. Earn. Redeem. in Kigali!</h2>

                <div className="description-text">
                    <p>
                        Discover the best of Kigali with the KIGALI VIEW Rewards app! Find exciting events, top attractions, and exclusive local deals. Earn rewards like merchandise, gift cards, and more—all in one convenient place.
                    </p>
                    <span>
                        Download the KIGALI VIEW Rewards app now and start exploring the magic of Kigali!
                    </span>
                </div>
            </div>

            {/* Right side: Video */}
            <div className="video-container">
                <img src="your-video-url" alt="Video Thumbnail" />
            </div>
        </section>
    );
};

export default App;;
