import React from 'react';
import IntroPage from '../component/things/intropage';  // Capitalized "IntroPage"
import TravelSection from '../component/TravelSection';
import Footer from '../component/Footer';

function ThingsTodo() {
  return (
    <div>
      <IntroPage />
      <TravelSection />
      <Footer />
    </div>
  );
}

export default ThingsTodo;
