import "./About.css";
import aboutImage from "../assets/Images/about-school.jpg";
import { FaArrowRight, FaAward, FaBookOpen, FaUserGraduate } from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-blur about-blur-one"></div>
      <div className="about-blur about-blur-two"></div>

      <div className="about-container">

        <div className="about-image-wrapper">

          <div className="about-image-card">

                   <div className="section-tag">

            <FaAward />

            <span>ABOUT OUR SCHOOL</span>

          </div>


            <img
              src={aboutImage}
              alt="School Campus"
              className="about-image"
            />

          </div>

          <div className="experience-card">

            <h2>25+</h2>

            <span>Years of Excellence</span>

          </div>

        </div>

        <div className="about-content">

   
          <h2 className="about-title">
            Inspiring
            <span> Excellence</span>
            <br />
            Empowering
            <span> Every Student.</span>
          </h2>

          <p className="about-description">
            We provide an inspiring learning environment where every
            student grows academically, creatively and personally.
            Through innovative teaching, world-class facilities and
            strong values, we prepare young minds to lead the future
            with confidence.
          </p>

          <div className="about-features">

            <div className="feature-card">

              <div className="feature-icon">

                <FaBookOpen />

              </div>

              <div>

                <h4>Innovative Learning</h4>

                <p>Smart classrooms with modern teaching methods.</p>

              </div>

            </div>

            <div className="feature-card">

              <div className="feature-icon">

                <FaUserGraduate />

              </div>

              <div>

                <h4>Student Success</h4>

                <p>Building confidence, creativity and leadership.</p>

              </div>

            </div>

          </div>

          <a href="#academics" className="about-btn">

            Learn More

            <FaArrowRight />

          </a>

        </div>

      </div>

    </section>
  );
};

export default About;