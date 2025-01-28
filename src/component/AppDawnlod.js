import React from 'react';


const App = () => {
    return (
        <div className="columbus-awards-section">
            <div className="columbus-content">
                {/* Left side: Logo and Text */}
                <div className="columbus-left">
                    <div className="columbus-logo">
                        <img
                            src="your-logo-url-here" // Replace with your logo URL
                            alt="Columbus Logo"
                            className="logo-img"
                        />
                    </div>
                    <div className="columbus-awards-text">
                        <p>
                            Columbus has been named a Top 10 Best Big City in the U.S., One of the
                            Best Food Cities in the U.S. and One of the Friendliest Cities in the
                            U.S. by Condé Nast Traveler’s 2024 Readers’ Choice Awards.
                        </p>
                    </div>
                </div>

                {/* Right side: Video */}
                <div className="columbus-video">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/your-video-id" // Replace with your video ID
                        title="Columbus Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};
export default App;