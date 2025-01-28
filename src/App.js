
import Navbar from "./component/Navbar";
import ImageCarousel from "./component/imageHero";
import Slide from "./component/slide"; // Change to uppercase "Slide"

function App() {
  return (
    <>
      <Navbar />
      <ImageCarousel /> 
      <Slide /> {/* Correctly using the Slide component here */}
    </>
  );
}

export default App;