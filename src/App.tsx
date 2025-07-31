import { Carousel } from "./components/tabs/Carousel";
import { Footer } from "./components/tabs/Footer";
import { Hero } from "./components/tabs/Hero";
import { Middle } from "./components/tabs/Middle";
import { Testimonials } from "./components/tabs/Testimonials";

function App() {
  return (
    <div>
      <Hero />
      <Middle />
      <Testimonials />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
