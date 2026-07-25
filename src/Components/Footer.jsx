import "./Footer.css";
import {
  FaArrowUp,
  FaEnvelope,
  FaFacebookF,
  FaGraduationCap,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-blur footer-blur-one"></div>
      <div className="footer-blur footer-blur-two"></div>

      <div className="footer-container">

        <div className="footer-about">

          <div className="footer-logo">

            <FaGraduationCap />

            <h2>
              Bright<span>Future</span>
            </h2>

          </div>

          <p>
            Empowering students through innovation, creativity,
            academic excellence and lifelong learning in a safe,
            inspiring and future-ready environment.
          </p>

          <div className="social-links">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

          </div>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#facilities">Facilities</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-contact">

          <h3>Get In Touch</h3>

          <div className="contact-row">

            <FaMapMarkerAlt />

            <span>Chennai, Tamil Nadu</span>

          </div>

          <div className="contact-row">

            <FaPhoneAlt />

            <span>+91 98765 43210</span>

          </div>

          <div className="contact-row">

            <FaEnvelope />

            <span>info@brightfuture.com</span>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Bright Future School. All Rights Reserved.
        </p>

        <button
          className="scroll-top"
          onClick={scrollTop}
        >

          <FaArrowUp />

        </button>

      </div>

    </footer>
      );
};

export default Footer;