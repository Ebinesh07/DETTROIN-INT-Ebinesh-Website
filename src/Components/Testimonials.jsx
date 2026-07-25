import "./Testimonials.css";
import {
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaUserGraduate,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Parent • Grade 8",
    review:
      "The teachers are incredibly supportive and the learning environment has helped my child grow with confidence, discipline and academic excellence.",
  },
  {
    name: "Priya Sharma",
    role: "Parent • Grade 5",
    review:
      "Modern classrooms, excellent faculty and outstanding extracurricular activities make this school the perfect place for holistic development.",
  },
  {
    name: "Arun Prakash",
    role: "Alumni Parent",
    review:
      "Beyond academics, the school nurtures leadership, creativity and life skills that prepare every student for a successful future.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">

      <div className="testimonials-blur testimonials-blur-one"></div>
      <div className="testimonials-blur testimonials-blur-two"></div>

      <div className="testimonials-container">

        <div className="testimonials-header">

          <div className="testimonials-tag">

            <FaUserGraduate />

            <span>TESTIMONIALS</span>

          </div>

          <h2 className="testimonials-title">

            Trusted By
            <span> Parents</span>
            <br />
            Loved By
            <span> Students.</span>

          </h2>

          <p className="testimonials-description">
            Discover why families choose our institution for academic
            excellence, innovation and an inspiring learning experience.
          </p>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (

            <div className="testimonial-card" key={index}>

              <div className="quote-icon">

                <FaQuoteLeft />

              </div>

              <div className="stars">

                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}

              </div>

              <p className="review">

                "{item.review}"

              </p>

              <div className="testimonial-footer">

                <div className="testimonial-avatar">

                  {item.name.charAt(0)}

                </div>

                <div>

                  <h3>{item.name}</h3>

                  <span>{item.role}</span>

                </div>

              </div>

              <a href="#admission" className="testimonial-link">

                Read More

                <FaArrowRight />

              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;