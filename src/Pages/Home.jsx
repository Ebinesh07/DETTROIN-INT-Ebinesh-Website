import About from "../Components/About";
import Academics from "../Components/Academics";
import Facilities from "../Components/Facilities";
import Gallery from "../Components/Gallery";
import Hero from "../components/Hero";
import Navbar from "../Components/Navbar";
import WhyChoose from "../Components/Whychooseus";

// later other components...

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <WhyChoose/>
      <Academics/>
      <Facilities/>
      <Gallery/>
    </>
  );
};

export default Home;