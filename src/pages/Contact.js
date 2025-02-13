import React from 'react';
import contactImage from '../assets/images/contact.jpg';
import MapContact from "../assets/images/map.png";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []); // Вызываем один раз при монтировании страницы

  
  return (
    <section className="contact">
      <div className="contact-header">
        <div className="container">
          <div className="contact-header-content">
            <div className="contact-text">
              <h1>We'd love to hear from you</h1>
              <p>
                Feel free to reach out to us for any inquiries or support. Our team is available to assist you
                with any questions, concerns, or feedback you may have.
              </p>
            </div>
            <div className="contact-image">
              <img src={contactImage} alt="Customer Support" />
            </div>
          </div>
        </div>
      </div>

      {/* Блоки "Talk to us" и "Email your queries" */}
      <div className="container">
        <div className="contact-info">
          <div className="info-box">
            <span className="icon-contact">📞</span>
            <h3>Talk to us</h3>
            <p>
              Got a question or need assistance? We're here to help! Whether you have an inquiry, need support,
              or just want to share your thoughts, feel free to get in touch.
            </p>
            <a href="tel:+919862055297" className="contact-link">+91 9862055297</a>
          </div>
          <div className="info-box">
            <span className="icon-contact">📧</span>
            <h3>Email your queries</h3>
            <p>
              Got a question or need assistance? We're here to help! Whether you have an inquiry, need support,
              or just want to share your thoughts, feel free to get in touch.
            </p>
            <a href="mailto:office@piapmc.com" className="contact-link">office@piapmc.com</a>
          </div>
        </div>

        {/* Блок с картой и формой */}
        <div className="contact-details">
          <div className="contact-map">
            <img src={MapContact} alt="Map" />
          </div>
          <div className="contact-form">
            <h2>Contact us</h2>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email address" required />
              <input type="text" placeholder="Number" required />
              <textarea placeholder="Your message..." required></textarea>
              <button type="submit" className="btn-submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
