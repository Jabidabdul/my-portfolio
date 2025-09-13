import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/portfolio_logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isDarkMode]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setIsMobileMenuOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Jabid_Abdul_Hamid_ATS_3.pdf"; // Path to your file in the public directory
    link.download = "Jabid_Abdul_Hamid_4YOE.pdf"; // Specify the default file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>
      <Navbar
        expand="md"
        className={`${scrolled ? "scrolled" : ""} ${
          isDarkMode ? "dark" : "light"
        }`}
      >
        <Container>
          <Navbar.Brand href="/">
            <motion.img
              src={logo}
              style={{ width: "50px", height: "50px" }}
              alt="Logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Navbar.Brand>

          <div className="navbar-controls">
            {/* <motion.button
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.button> */}

            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={toggleMobileMenu}
              className="mobile-toggle"
            >
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <FaTimes size={20} />
                ) : (
                  <FaBars size={20} />
                )}
              </motion.span>
            </Navbar.Toggle>
          </div>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className={isMobileMenuOpen ? "show" : ""}
          >
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#experience"
                className={
                  activeLink === "experience"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("experience")}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link className={"navbar-link"} onClick={handleDownload}>
                Resume
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/jabid-abdul-hamid-955028194/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>

                <a
                  href="https://github.com/Jabidabdul"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon4} alt="Github" />
                </a>
              </div>
              <HashLink to="#connect">
                <motion.button
                  className="vvd"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Let's Connect</span>
                </motion.button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
