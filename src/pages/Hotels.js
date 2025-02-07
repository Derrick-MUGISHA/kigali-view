import React from 'react'
import Whote from '../component/HotelsComponent/Whote';
import HotelIntro from '../component/HotelsComponent/HotelIntro';
import HotelComponent from '../component/HotelsComponent/HotelComponent';
import TravelSection from '../component/TravelSection';
import Footer from '../component/Footer';

function Hotels() {
  return (
    <div>
        <HotelIntro />
      <Whote />
      <HotelComponent />
      <TravelSection />
      <Footer />
    </div>
  )
}

export default Hotels
