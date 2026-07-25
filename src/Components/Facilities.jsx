import "./Facilities.css";
import facilityImage from "../assets/images/facilities.jpg";
import {
  FaFlask,
  FaBook,
  FaFutbol,
  FaLaptop,
  FaPaintBrush,
  FaBus,
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaFlask />,
    title: "Science Labs",
    desc: "Well-equipped laboratories for practical science learning.",
  },
  {
    icon: <FaBook />,
    title: "Digital Library",
    desc: "A rich collection of books, journals and digital resources.",
  },
  {
    icon: <FaFutbol />,
    title: "Sports Arena",
    desc: "Indoor and outdoor sports facilities for every student.",
  },
  {
    icon: <FaLaptop />,
    title: "Computer Lab",
    desc: "Modern systems with high-speed internet and coding practice.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Creative Arts",
    desc: "Music, dance, drawing and cultural activity programmes.",
  },
  {
    icon: <FaBus />,
    title: "Safe Transport",
    desc: "GPS-enabled buses with trained staff for student safety.",
  },
];

const Facilities = () => {
  return (
    <section className="facilities" id="facilities">
      <div className="facilities-container">

        <div className="facilities-title">
          <span>OUR FACILITIES</span>
          <h2>Everything Students Need to Succeed</h2>
          <p>
            Our campus provides world-class facilities that encourage
            learning, creativity and overall student development.
          </p>
        </div>

        <div className="facilities-content">

          <div className="facilities-image">
            <img src={facilityImage} alt="School Facilities" />
          </div>

          <div className="facilities-grid">
            {facilities.map((item, index) => (
              <div className="facility-card" key={index}>
                <div className="facility-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Facilities;