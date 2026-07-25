import "./Whychooseus.css";
import {
  FaArrowRight,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaShieldAlt,
  FaGlobe,
  FaTrophy,
  FaHeart,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Experienced Faculty",
    desc: "Dedicated educators inspiring students with innovative teaching methods.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Smart Learning",
    desc: "Technology-driven classrooms for engaging and interactive education.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe Campus",
    desc: "A secure environment with CCTV, safety protocols and caring staff.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Curriculum",
    desc: "Preparing students with international standards and future-ready skills.",
  },
  {
    icon: <FaTrophy />,
    title: "Academic Excellence",
    desc: "Consistently delivering outstanding academic achievements every year.",
  },
  {
    icon: <FaHeart />,
    title: "Holistic Development",
    desc: "Sports, arts, leadership and personality development under one roof.",
  },
];

const WhyChoose = () => {
  return (
    <section className="why" id="why">

      <div className="why-blur why-blur-one"></div>
      <div className="why-blur why-blur-two"></div>

      <div className="why-container">

        <div className="section-title">

          <span>WHY CHOOSE US</span>

          <h2>
            Empowering Students For
            <span> Lifelong Success.</span>
          </h2>

          <p>
            Every child deserves an education that inspires confidence,
            creativity and excellence. Our holistic learning approach
            nurtures future-ready leaders.
          </p>

        </div>

        <div className="why-grid">

          {features.map((item, index) => (

            <div className="why-card" key={index}>

              <div className="icon">

                {item.icon}

              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <a href="#contact">

                Learn More

                <FaArrowRight />

              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChoose;