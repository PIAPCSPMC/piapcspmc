import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import instagram from "../assets/icons/instagram.png";
import whatsapp from "../assets/icons/whatsapp.png";
import "../styles/index.css";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar-container ${
        isScrolled ? "scrolled-bg" : isHomePage ? "home-bg" : "other-bg"
      }`}
    >
      <nav className="navbar">
        <div className="container">
          <div className="navbar_section">
            <div className="navbar-logo">
              <img src={logo} alt="PIA Logo" />
            </div>

            {/* Бургер-меню для мобилки */}
            <div className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className={isMenuOpen ? "burger-line open" : "burger-line"}></div>
              <div className={isMenuOpen ? "burger-line open" : "burger-line"}></div>
              <div className={isMenuOpen ? "burger-line open" : "burger-line"}></div>
            </div>

            <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={() => setIsMenuOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={() => setIsMenuOpen(false)}>
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={() => setIsMenuOpen(false)}>
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={() => setIsMenuOpen(false)}>
                  Contact
                </NavLink>
              </li>
            </ul>
            
            {/* Соц. иконки (скрываем на мобилке) */}
            {!isMenuOpen && (
              <div className="social-icons">
                <a href="#">
                  <img src={instagram} alt="Instagram" />
                </a>
                <a href="#">
                  <img src={whatsapp} alt="WhatsApp" />
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
