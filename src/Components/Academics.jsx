import "./Academics.css";
import academicsImage from "../assets/Images/academics.jpg";
import {
  FaBookOpen,
  FaFlask,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";

const programs = [
  {
    icon: <FaBookOpen />,
    title: "Primary Education",
    desc: "Strong foundation through interactive and activity-based learning.",
  },
  {
    icon: <FaFlask />,
    title: "Middle School",
    desc: "Developing analytical thinking with practical science and mathematics.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Senior Secondary",
    desc: "Preparing students for higher education and successful careers.",
  },
  {
    icon: <FaLaptopCode />,
    title: "STEM & Innovation",
    desc: "Coding, robotics and technology-driven learning experiences.",
  },
];

const Academics = () => {
  return (
    <section className="academics" id="academics">
      <div className="academics-container">

          <span className="academics-tag">
            ACADEMIC PROGRAMMES
          </span>

        <div className="academics-image">
          <img src={academicsImage} alt="Academics" />
        </div>

        <div className="academics-content">

        

          <h2>
            Empowering Every Student to
            <span> Excel</span>
          </h2>

          <p>
            Our curriculum combines academic excellence, innovation and
            practical learning to prepare students for future success.
          </p>

          <div className="academics-grid">
            {programs.map((item, index) => (
              <div className="academics-card" key={index}>
                <div className="academics-icon">
                  {item.icon}
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Academics;