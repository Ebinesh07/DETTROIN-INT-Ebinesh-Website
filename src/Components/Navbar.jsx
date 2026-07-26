import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/Images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "academics", label: "Academics" },
  { id: "facilities", label: "Facilities" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map((link) =>
        document.getElementById(link.id)
      );

      const scrollPos = window.scrollY + 140;

      sections.forEach((section) => {
        if (!section) return;

        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {menuOpen && (
        <div
          className="nav-overlay"
          onClick={closeMenu}
        ></div>
      )}

      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="nav-container">

          <a href="#home" className="logo">
            <img src={logo} alt="School Logo" />
          </a>

          <nav
            className={`nav-links ${
              menuOpen ? "show-menu" : ""
            }`}
          >
            {links.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={
                  active === item.id ? "active-link" : ""
                }
              >
                {item.label}
              </a>
            ))}

            <a
              href="#admission"
              className="mobile-admission"
              onClick={closeMenu}
            >
              Admission Open
              <FiArrowUpRight />
            </a>
          </nav>

          <a
            href="#admission"
            className="desktop-admission"
          >
            Admission Open
            <FiArrowUpRight />
          </a>

          <button
            className="menu-toggle"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {menuOpen ? (
              <IoClose />
            ) : (
              <HiOutlineMenuAlt3 />
            )}
          </button>

        </div>
      </header>
    </>
  );
};

export default Navbar;