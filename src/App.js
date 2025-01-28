
import Navbar from "./component/Navbar";
import ImageCarousel from "./component/imageHero";
import Slide from "./component/slide";
import KigaliSection from './component/kigaliSection';
import KigaliA from './component/kigaliA';
import KigaliNewsSection from "./component/kigaliNewsCard";

function App() {
  return (
    <>
      <Navbar />
      <ImageCarousel />
      <Slide />
      <KigaliSection />
      <KigaliA />
      <KigaliNewsSection />  
    </>
  );
}

export default App;