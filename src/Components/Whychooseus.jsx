import "./Whychooseus.css";
import {
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
    desc: "Dedicated teachers who inspire students to achieve academic excellence.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Smart Learning",
    desc: "Interactive digital classrooms with advanced teaching technologies.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe Campus",
    desc: "24/7 security, CCTV surveillance and a safe learning environment.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Curriculum",
    desc: "Modern curriculum that prepares students for global opportunities.",
  },
  {
    icon: <FaTrophy />,
    title: "Academic Excellence",
    desc: "Outstanding academic results with continuous student achievements.",
  },
  {
    icon: <FaHeart />,
    title: "Holistic Development",
    desc: "Sports, arts, leadership and personality development programmes.",
  },
];

const WhyChoose = () => {
  return (
    <section className="why" id="why">
      <div className="why-container">

        <div className="section-title">
          <span>WHY CHOOSE US</span>
          <h2>Excellence Beyond Education</h2>
          <p>
            We provide an inspiring environment where students grow
            academically, creatively and personally.
          </p>
        </div>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;