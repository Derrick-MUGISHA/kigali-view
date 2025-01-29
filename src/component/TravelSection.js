import React from 'react';
import './TravelSection.css'; // Importing the CSS file

const TravelSection = () => {
    return (
        <div className="travel-section flex w-full">
            {/* Delta SkyMiles Section */}
            <div className="delta-skyMiles relative flex-1 p-8 flex flex-col justify-center">
                <div className="max-w-md">
                    <h2 className="heading text-2xl font-semibold mb-4">
                        Join the Delta SkyMiles® Program for free
                    </h2>
                    <p className="subheading text-lg mb-6">
                        to earn miles toward travel, upgrades and more. Rules apply.
                    </p>
                    <a
                        href="#join"
                        className="cta-link inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                        Join today
                        <svg
                            className="arrow ml-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </a>
                </div>
                <div className="image-overlay absolute inset-0 opacity-10">
                    <img
                        src="https://www.airlinepros.com/wp-content/uploads/2024/01/Rwandair_press-release-jan-24.jpg"
                        alt="Airplane background"
                        className="background-img w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Columbus Tourism Section */}
            <div className="columbus-tourism relative flex-1 p-8 flex flex-col justify-center">
                <div className="max-w-md">
                    <h2 className="heading text-2xl font-semibold mb-4">
                        Insights on What to See and Do in Kigali
                    </h2>
                    <p className="subheading text-lg mb-6">
                        Plus a Seasonal Calendar of Events
                    </p>
                    <a
                        href="#guide"
                        className="cta-link inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                    >
                        Get a Free Visitors Guide
                        <svg
                            className="arrow ml-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </a>
                </div>
                <div className="image-overlay absolute inset-0 opacity-10">
                    <img
                        src="https://cdn.businesstraveller.com/wp-content/uploads/fly-images/818210/Exterior-1-916x515.jpg"
                        alt="Columbus cityscape"
                        className="background-img w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default TravelSection;
