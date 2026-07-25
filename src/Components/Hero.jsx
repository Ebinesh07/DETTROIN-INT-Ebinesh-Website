import "./Hero.css";
import heroImage from "../assets/images/hero-students.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            ⭐ Excellence in Education
          </span>

          <h1>
            Inspiring Young Minds,
            <span> Creating Future Leaders.</span>
          </h1>

          <p>
            We provide world-class education through innovation,
            creativity and values that prepare students for a
            successful future.
          </p>

          <div className="hero-buttons">
            <a href="#admission" className="primary-btn">
              Apply Now
            </a>

            <a href="#about" className="secondary-btn">
              Explore Campus
            </a>
          </div>

          <div className="hero-stats">

            <div className="stat-card">
              <h3>1200+</h3>
              <span>Students</span>
                       </div>

            <div className="stat-card">
              <h3>25+</h3>
              <span>Years of Excellence</span>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <span>Student Success</span>
            </div>

          </div>

        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Students" />
        </div>

      </div>
    </section>
  );
};

export default Hero;