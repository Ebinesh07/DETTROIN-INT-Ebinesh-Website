import "./Gallery.css";

import img1 from "../assets/images/gallery-1.jpg";
import img2 from "../assets/images/gallery-2.jpg";
import img3 from "../assets/images/gallery-3.jpg";
import img4 from "../assets/images/gallery-4.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">

      <div className="gallery-container">

        <div className="gallery-title">

          <span>OUR GALLERY</span>

          <h2>Moments That Inspire Learning</h2>

          <p>
            Discover our vibrant campus life, modern classrooms,
            extracurricular activities and memorable student experiences.
          </p>

        </div>

        <div className="gallery-grid">

          {images.map((image, index) => (

            <div className="gallery-item" key={index}>

              <img src={image} alt={`Gallery ${index + 1}`} />

              <div className="gallery-overlay">

                <h3>School Life</h3>

                <p>Creating Bright Futures</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Gallery;