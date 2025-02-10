import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/images/logo.png';
import instagram from '../assets/icons/instagram.svg';
import whatsapp from '../assets/icons/whatsapp.svg';

export default function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          {/* <img src={logo} alt="PIA Logo" /> */}
        </div>
        <ul className="nav-links">
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/projects">Project</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="social-icons">
          <a href="#gjgjgj"><img src={instagram} alt="Instagram" /></a>
          <a href="#gnngngn"><img src={whatsapp} alt="WhatsApp" /></a>
        </div>
      </nav>
    </header>
  );
}
