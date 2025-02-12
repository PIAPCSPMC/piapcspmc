import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import instagram from '../assets/icons/instagram.png';
import whatsapp from '../assets/icons/whatsapp.png';
import '../styles/index.css';

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className={`navbar-container ${isHomePage ? 'home-bg' : 'other-bg'}`}>
      <nav className="navbar">
        <div className="container">
          <div className="navbar_section">
            <div className="navbar-logo">
              <img src={logo} alt="PIA Logo" />
            </div>
            <ul className="nav-links">
              <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About us</NavLink></li>
              <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>Project</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink></li>
            </ul>
            <div className="social-icons">
              <a href="#"><img src={instagram} alt="Instagram" /></a>
              <a href="#"><img src={whatsapp} alt="WhatsApp" /></a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
