import React from 'react';
import './slide.css';

const slide = () => {
    return (
        <>
            <div className="container">
                <div className="slide">
                    <div className="slide-1">
                        <div className="text">
                            <h1>Kigali: Home of the Market</h1>
                            <p>Explore our marketplaces</p>
                        </div>
                        <img src="your-image-url-1" alt="Kigali" />
                    </div>
                    <div className="slide-2">
                        <div className="text">
                            <h1>Kigali: Home of the Market</h1>
                            <p>Explore our marketplaces</p>
                        </div>
                        <img src="your-image-url-2" alt="Kigali" />
                    </div>
                    <div className="slide-3">
                        <div className="text">
                            <h1>Kigali: Home of the Market</h1>
                            <p>Explore our marketplaces</p>
                        </div>
                        <img src="your-image-url-3" alt="Kigali" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default slide;