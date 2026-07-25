import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Bright Future School</h2>
          <p>
            Inspiring excellence through innovation,
            knowledge and character.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Bright Future School. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;