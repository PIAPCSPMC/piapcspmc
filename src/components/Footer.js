import React from 'react';
import logo from '../assets/images/logo.png'; // Укажите правильный путь к логотипу
import instagram from '../assets/icons/instagram.svg';
import whatsapp from '../assets/icons/whatsapp.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Левая часть - Логотип и описание */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="PIA Consulting & Engineering" />
            <h3>PIA Consulting & Engineering</h3>
          </div>
          <p>
            PIA Consulting & Engineering specializes in Project Controls Systems for PMC projects, ensuring efficiency, transparency, and success.
          </p>
          <div className="footer-socials">
            <a href="#"><img src={instagram} alt="Instagram" /></a>
            <a href="#"><img src={whatsapp} alt="WhatsApp" /></a>
          </div>
        </div>

        {/* Центральная часть - Ссылки */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Tourism and Visa Services</a></li>
            <li><a href="#">Leather, Textile, and Garments</a></li>
            <li><a href="#">Import and Export Support</a></li>
            <li><a href="#">Mediworld</a></li>
          </ul>
        </div>

        {/* Правая часть - Контактная информация */}
        <div className="footer-column">
          <h4>Contact us</h4>
          <ul className="footer-contact">
            <li>📍 Kazakhstan, Almaty city, 17/1 Al-Farabi street, 11 floor</li>
            <li>✉️ <a href="mailto:mkmgoc@gmail.com">office@piapmc.com</a></li>
            <li>📞 <a href="tel:+919862055297"> +7 7760066005, +420 773 026 279</a></li>
          </ul>
        </div>
      </div>

      {/* Нижняя часть */}
      <div className="footer-bottom">
        <p>© PIA Consulting & Engineering</p>
      </div>
    </footer>
  );
}
