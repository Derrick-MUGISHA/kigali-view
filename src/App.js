import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Things from './pages/things';
import Restaurants from './pages/Restorant';
import Hotels from './pages/Hotels';
import NeighBorhoodsPage from './pages/NeghbourhoodPage';
import ExploreKigali from './pages/ExporeKigali';
import ErrorPage from './Dropdown/Error';
import ErrorBoundary from './pages/ErrorBoundary'; // Import ErrorBoundary
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); 

 
  const logoUrl = "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png";

  useEffect(() => {
    setIsLoading(true);
    console.log(`Started loading page: ${location.pathname}`); 

  
    const logAndLoad = setTimeout(() => {
      console.log(`Loading content for ${location.pathname}...`);
      setIsLoading(false); 
      console.log(`Finished loading page: ${location.pathname}`); 
    }, 2000); 

    // Cleanup function to clear the timeout if location changes again before the timeout finishes
    return () => {
      clearTimeout(logAndLoad);
      console.log(`Navigation aborted for ${location.pathname}`); // Log when navigation is aborted (due to another route change)
    };
  }, [location]);  // Dependency on location means this effect runs every time the route changes

  // Define the inline styles for the loading screen and animation
  const loadingContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full screen height
    flexDirection: 'column',
    textAlign: 'center',
  };

  const logoStyle = {
    
    width: '150px',
    borderRadius: '50%',
    height: 'auto',
    animation: 'pop 1.5s ease-in-out infinite', // Pop animation
  };

  const loadingTextStyle = {
    marginTop: '20px',
    fontSize: '18px',
    color: '#555',
  };

  // Animation style for the pop effect (using JavaScript)
  const animationStyle = {
    '@keyframes pop': {
      '0%': {
        transform: 'scale(1)',
        opacity: '0.8',
        filter: 'none', // Original color
      },
      '50%': {
        transform: 'scale(1.2)',
        opacity: '1',
        filter: 'invert(100%)', // Inverted color
      },
      '100%': {
        transform: 'scale(1)',
        opacity: '0.8',
        filter: 'none', // Original color
      },
    },
  };

  // Inject the animation into the document's <style> tag dynamically (inline styles don't support @keyframes)
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes pop {
         0% { transform: scale(1); opacity: 0.8; filter: none; }
        50% { transform: scale(1.2); opacity: 1; filter: invert(100%); }
        100% { transform: scale(1); opacity: 0.8; filter: none; }
      }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, []);

  // Show a loading screen while logging is happening
  if (isLoading) {
    console.log("Logging activity... Please wait..."); // Log activity to console while loading
    return (
      <div style={loadingContainerStyle}>
        <img 
          src={logoUrl} 
          alt="Loading..." 
          style={logoStyle} 
        />
        <p style={loadingTextStyle}>Logging activity... Please hold on...</p>  {/* Optional text */}
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <ErrorBoundary>  {/* Wrap routes with the error boundary to catch any runtime errors */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/things' element={<Things />} />
          <Route path='/Restaurants' element={<Restaurants />} />
          <Route path='/Hotels' element={<Hotels />} />
          <Route path='/NeighBorhoods' element={<NeighBorhoodsPage />} />
          <Route path='/ExploreKigali' element={<ExploreKigali />} />
          <Route path="*" element={<ErrorPage />} />  {/* 404 route for undefined paths */}
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
