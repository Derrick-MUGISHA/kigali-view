import React from 'react';
import IntroH from '../component/Negihbourhood/introH';
import Live from '../component/Negihbourhood/live';
import TravelSection from '../component/TravelSection';
import Footer from '../component/Footer';
 // Capitalize the component name here

function NewSection() {
  return (
    <div>
      <IntroH />
      <Live />
      <TravelSection />
        <Footer /> 
    </div>
  );
}

export default NewSection;
