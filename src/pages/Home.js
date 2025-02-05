
import ImageCarousel from "../component/imageHero";
import Slide from "../component/slide";
import KigaliSection from '../component/kigaliSection';
import KigaliA from '../component/kigaliA';
import KigaliNewsSection from "../component/kigaliNewsCard";
import AppDownlod from "../component/AppDawnlod";
import Blog from "../component/Blog";
import Hottelcheck from "../component/Hottelcheck";
import Fest from "../component/fest";
import Market from "../component/Market";
import Shorts from "../component/shorts";
import TravelSection from '../component/TravelSection';
import Footer from '../component/Footer';



function pages() {
    return (
      <>
        <ImageCarousel />
        <Slide />
        <KigaliSection />
        <KigaliA />
        <KigaliNewsSection />
        <AppDownlod /> 
        <Blog />
        <Hottelcheck />
        <Fest />
        <Market />
        <Shorts />
        <TravelSection />
        <Footer />
      </>
    );
  }
  
  export default pages;