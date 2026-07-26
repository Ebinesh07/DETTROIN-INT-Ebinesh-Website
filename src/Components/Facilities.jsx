import "./Gallery.css";

import {
  FaArrowRight,
  FaCamera,
  FaImages,
} from "react-icons/fa";

import img1 from "../assets/Images/gallery-1.jpg";
import img2 from "../assets/Images/gallery-2.jpg";
import img3 from "../assets/Images/gallery-3.jpg";
import img4 from "../assets/Images/gallery-4.jpg";

const images = [
  {
    image: img1,
    title: "Smart Classrooms",
    desc: "Interactive & Digital Learning",
  },
  {
    image: img2,
    title: "Campus Activities",
    desc: "Learning Beyond Books",
  },
  {
    image: img3,
    title: "Sports Excellence",
    desc: "Fitness • Teamwork • Leadership",
  },
  {
    image: img4,
    title: "Creative Events",
    desc: "Innovation & Student Talent",
  },
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">

      <div className="gallery-blur gallery-blur-one"></div>
      <div className="gallery-blur gallery-blur-two"></div>

      <div className="gallery-container">

        <div className="gallery-header">

          <div className="gallery-tag">

            <FaImages />

            <span>OUR GALLERY</span>

          </div>

          <h2 className="gallery-title">

            Capturing Every
            <span> Memorable</span>
            <br />
            Moment Of
            <span> School Life.</span>

          </h2>

          <p className="gallery-description">
            Explore our vibrant campus where education, creativity,
            innovation and unforgettable experiences come together to
            shape future leaders.
          </p>

        </div>

        <div className="gallery-grid">

          {images.map((item, index) => (

            <div className="gallery-card" key={index}>

              <img src={item.image} alt={item.title} />

              <div className="gallery-overlay">

                <div className="gallery-icon">

                  <FaCamera />

                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <span>

                  View More

                  <FaArrowRight />

                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Gallery;