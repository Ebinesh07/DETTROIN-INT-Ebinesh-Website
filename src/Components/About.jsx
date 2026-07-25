import "./About.css";
import aboutImage from "../assets/images/about-school.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <img src={aboutImage} alt="School Campus" />
        </div>

        <div className="about-content">

          <span className="section-tag">
            ABOUT OUR SCHOOL
          </span>

          <h2>
            Building Bright Futures Through
            <span> Quality Education</span>
          </h2>

          <p>
            Our school is committed to providing an inspiring learning
            environment where every student develops academically,
            socially and personally. We combine innovative teaching,
            modern facilities and strong values to prepare students
            for a successful future.
          </p>

         <div className="about-features">

  <div className="feature">
    <i className="bi bi-check-circle-fill"></i>
    <span>Experienced & Caring Teachers</span>
  </div>

  <div className="feature">
    <i className="bi bi-check-circle-fill"></i>
    <span>Smart Digital Classrooms</span>
  </div>

  <div className="feature">
    <i className="bi bi-check-circle-fill"></i>
    <span>Modern Sports Facilities</span>
  </div>

  <div className="feature">
    <i className="bi bi-check-circle-fill"></i>
    <span>Safe & Secure Campus</span>
  </div>

</div>

          <a href="#academics" className="about-btn">
            Learn More
          </a>

        </div>

      </div>
    </section>
  );
};

export default About;