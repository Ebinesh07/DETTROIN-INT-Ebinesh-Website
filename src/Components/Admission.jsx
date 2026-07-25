import "./Admission.css";
import admissionImage from "../assets/images/admission.jpg";
import {
  FaArrowRight,
  FaCalendarCheck,
  FaGraduationCap,
} from "react-icons/fa";

const Admission = () => {
  return (
    <section className="admission" id="admission">

      <div className="admission-blur admission-blur-one"></div>
      <div className="admission-blur admission-blur-two"></div>

      <div className="admission-container">

        <div className="admission-content">

          <div className="admission-tag">

            <FaGraduationCap />

            <span>ADMISSIONS OPEN 2026 - 2027</span>

          </div>

          <h2 className="admission-title">

            Shape Your Child's
            <span> Future</span>
            <br />
            With
            <span> Excellence.</span>

          </h2>

          <p className="admission-description">
            Give your child the opportunity to learn, explore and grow
            in a nurturing environment where academic excellence,
            innovation and character development go hand in hand.
          </p>

          <div className="admission-buttons">

            <a href="#contact" className="apply-btn">

              Apply Now

              <FaArrowRight />

            </a>

            <a href="#gallery" className="visit-btn">

              <FaCalendarCheck />

              Schedule Visit

            </a>

          </div>

        </div>

        <div className="admission-image-wrapper">

          <div className="admission-image-card">

            <img
              src={admissionImage}
              alt="Admission"
              className="admission-image"
            />

          </div>

          <div className="admission-floating-card">

            <FaGraduationCap />

            <div>

              <h4>Admissions Open</h4>

              <span>Limited Seats Available</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Admission;