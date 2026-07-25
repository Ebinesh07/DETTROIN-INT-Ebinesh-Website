import "./Admission.css";
import admissionImage from "../assets/images/admission.jpg";

const Admission = () => {
  return (
    <section className="admission" id="admission">

      <div className="admission-container">

        <div className="admission-content">

          <span>ADMISSIONS OPEN</span>

          <h2>
            Begin Your Child's Journey Towards
            <span> Excellence</span>
          </h2>

          <p>
            Join our vibrant learning community where students develop
            confidence, creativity and academic excellence. Admissions
            are now open for the upcoming academic year.
          </p>

          <div className="admission-buttons">
            <a href="#contact" className="apply-btn">
              Apply Now
            </a>

            <a href="#gallery" className="visit-btn">
              Schedule a Visit
            </a>
          </div>

        </div>

        <div className="admission-image">
          <img src={admissionImage} alt="Admissions" />
        </div>

      </div>

    </section>
  );
};

export default Admission;