import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import VideoCarousel from "./components/VideoCarousel";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <VideoCarousel />
      {/* <Model /> */}
      {/* <Features /> */}
    </main>
  );
};

export default App;
