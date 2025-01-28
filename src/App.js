
import Navbar from "./component/Navbar";
import ImageCarousel from "./component/imageHero";
import Slide from "./component/slide";
import KigaliSection from './component/kigaliSection';
import KigaliA from './component/kigaliA';
import KigaliNewsSection from "./component/kigaliNewsCard";
import AppDownlod from "./component/AppDawnlod";
import Blog from "./component/Blog";
import Hottelcheck from "./component/Hottelcheck";

function App() {
  return (
    <>
      <Navbar />
      <ImageCarousel />
      <Slide />
      <KigaliSection />
      <KigaliA />
      <KigaliNewsSection />
      <AppDownlod /> 
      <Blog />
      <Hottelcheck />

    </>
  );
}

export default App;