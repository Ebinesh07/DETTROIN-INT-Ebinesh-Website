import About from "../Components/About";
import Academics from "../Components/Academics";
import Admission from "../Components/Admission";
import Contact from "../Components/Contact";
import Facilities from "../Components/Facilities";
import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Testimonials from "../Components/Testimonials";
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
      <Testimonials/>
      <Admission/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;