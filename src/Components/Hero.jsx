import "./Hero.css";
import heroImage from "../assets/Images/hero-students.png";
import {
  FaArrowRight,
  FaGraduationCap,
  FaAward,
  FaUsers,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-blur hero-blur-one"></div>
      <div className="hero-blur hero-blur-two"></div>

      <div className="hero-container">

        {/* LEFT */}

        <div className="hero-content">

          <div className="hero-top-badge">
            <FaAward />
            <span>Trusted by 1200+ Families Since 1999</span>
          </div>

          <h1 className="hero-title">
            Inspiring
            <span> Young Minds</span>
            <br />
            Building
            <span> Future Leaders.</span>
          </h1>

          <p className="hero-description">
            We nurture curiosity, creativity and confidence through
            world-class education, innovative learning methods and
            values that empower every child to achieve excellence.
          </p>

          <div className="hero-buttons">

            <a href="#admission" className="hero-primary-btn">
              Apply Now
              <FaArrowRight />
            </a>

            <a href="#about" className="hero-secondary-btn">
              Explore Campus
            </a>

          </div>

          <div className="hero-stats">

            <div className="hero-stat-card">

              <h2>1200+</h2>

              <span>Students</span>

            </div>

            <div className="hero-stat-card">

              <h2>25+</h2>

              <span>Years of Excellence</span>

            </div>

            <div className="hero-stat-card">

              <h2>100%</h2>

              <span>Student Success</span>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-image-wrapper">

          <div className="hero-image-card">

            <img
              src={heroImage}
              alt="Students"
              className="hero-image"
            />

          </div>

          <div className="floating-card floating-card-one">

            <div className="floating-icon">
              <FaGraduationCap />
            </div>

            <div>

              <h4>Academic Excellence</h4>

              <p>Future Ready Curriculum</p>

            </div>

          </div>

          <div className="floating-card floating-card-two">

            <div className="floating-icon">
              <FaUsers />
            </div>

            <div>

              <h4>98% Parent Satisfaction</h4>

              <p>Safe & Smart Campus</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;