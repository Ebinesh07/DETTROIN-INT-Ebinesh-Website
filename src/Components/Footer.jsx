import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
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

      <div className="footer-container">

        {/* Logo */}

        <div className="footer-col">

          <h2 className="footer-logo">
            Bright<span>Future</span>
          </h2>

          <p>
            Empowering young minds through innovation,
            creativity and academic excellence for a brighter future.
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

        {/* Links */}

        <div className="footer-col">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>

        </div>

        {/* Contact */}

        <div className="footer-col">

          <h3>Contact</h3>

          <div className="footer-contact">

            <FaMapMarkerAlt />
            <span>Chennai, Tamil Nadu</span>

          </div>

          <div className="footer-contact">

            <FaPhoneAlt />
            <span>+91 98765 43210</span>

          </div>

          <div className="footer-contact">

            <FaEnvelope />
            <span>info@brightfuture.com</span>

          </div>

        </div>

      </div>

      <hr />

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