import React from 'react';
import './TravelSection.css'; // Ensure you create and import the CSS file

const Slide = () => {
    return (
        <>
            <div className="container">
                <div className="slide">
                    {/* First Slide */}
                    <div className="slide-1">
                        <div className="text">
                            <h1>Kigali: Home of the Market</h1>
                            <p>Explore our marketplaces</p>
                        </div>
                        <img src="your-image-url-1" alt="Kigali" />
                    </div>

                    {/* Second Slide */}
                    <div className="slide-2">
                        <div className="text">
                            <h1>Kigali: Home of the Market</h1>
                            <p>Explore our marketplaces</p>
                        </div>
                        <img src="your-image-url-2" alt="Kigali" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slide;
