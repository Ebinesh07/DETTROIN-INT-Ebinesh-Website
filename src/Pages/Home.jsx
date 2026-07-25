import About from "../Components/About";
import Hero from "../components/Hero";
import Navbar from "../Components/Navbar";

// later other components...

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
    </>
  );
};

export default Home;