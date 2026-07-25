import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">

        <a href="#" className="logo">
          <img src={logo} alt="School Logo" />
        </a>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#academics" onClick={closeMenu}>Academics</a>
          <a href="#facilities" onClick={closeMenu}>Facilities</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a
            href="#admission"
            className="admission-btn mobile-btn"
            onClick={closeMenu}
          >
            Admission Open
          </a>
        </nav>

        <a href="#admission" className="admission-btn desktop-btn">
          Admission Open
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
        </button>

      </div>
    </header>
  );
};

export default Navbar;