import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Parent of Grade 8 Student",
    review:
      "The teachers are caring, supportive and highly experienced. My child has grown both academically and personally.",
  },
  {
    name: "Priya Sharma",
    role: "Parent of Grade 5 Student",
    review:
      "Excellent infrastructure, modern classrooms and a wonderful learning environment. Highly recommended!",
  },
  {
    name: "Arun Prakash",
    role: "Alumni Parent",
    review:
      "The school focuses not only on academics but also on leadership, creativity and life skills.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">

        <div className="testimonials-title">
          <span>TESTIMONIALS</span>
          <h2>What Parents Say About Us</h2>
          <p>
            Hear from parents who trust us to provide the best education
            for their children.
          </p>
        </div>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>

              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="review">
                "{item.review}"
              </p>

              <h3>{item.name}</h3>

              <span>{item.role}</span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;