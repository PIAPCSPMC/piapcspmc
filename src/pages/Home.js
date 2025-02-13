import React from 'react';
import '../styles/index.css';
import hero from "../assets/images/hero.jpg";
import Calendar from '../assets/icons/Calendar.png';
import Money from '../assets/icons/Money Bag.png';
import Trophy from '../assets/icons/Trophy.png';
import Warning from '../assets/icons/Warning.png';
import Map from '../assets/icons/World Map.png';
import Standards from '../components/Standarts';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []); // Вызываем один раз при монтировании страницы

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div> {/* Затемняющий слой */}
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">PIA Consulting & Engineering</h1>
            <p className="hero-text">PROJECT CONTROLS SYSTEM FOR PROJECT MANAGEMENT CONSULTANCY (PCS-PMC)</p>
            <div className="hero-buttons">
              <button className="btn-primary">Contact Us</button>
              <button className="btn-secondary">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Company Section */}
      <section className="our-company">
        <div className="container company-flex">
          {/* Текстовая часть */}
          <div className="company-text">
            <h3>OUR COMPANY</h3>
            <h2>Precision. Transparency. Excellence. Empowering Your Projects to Succeed.</h2>
            <p>
            At PIA Consulting & Engineering, we specialize in Project Controls Systems for PMC projects, offering tailored solutions to
manage cost, schedule, risk, and quality. With a focus on precision and innovation, we ensure projects are delivered on
time, within budget, and to the highest standards.
            </p>
            <button className="btn-primary">Get a Quote</button>
          <div className="stats-grid">
          <div className="stat-item">
            <h2>20+</h2>
            <p>Years of Experience</p>
          </div>
          <div className="stat-item">
            <h2>$5B+</h2>
            <p>Project Experience</p>
          </div>
          <div className="stat-item last-item">
            <h2>7</h2>
            <p>Leading experts</p>
          </div>
        </div>
        </div>
          {/* Изображение */}
          <div className="company-image">
            <img src={hero} alt="Construction Worker" />
          </div>
        </div>
      </section>
{/* Why Choose Us Section */}
<section className="why-choose">
  <div className="container">
    

  <div className="why-grid">
  <div className="why-item why-title">
    <h2>Why choose us?</h2>
  </div>

  <div className="why-item">
    <img src = {Map} className='home-icon'></img>
  <h3>Scope Control</h3>
    <p>Benefit from our extensive industry knowledge and strategic insights, empowering your business to navigate global markets.</p>
  </div>

  <div className="why-item-l">
  <img src = {Calendar} className='home-icon'></img>
  <p>Rest assured with our commitment to reliability, durability, and operational efficiency, ensuring consistent high standards.</p>
  </div>

  <div className="why-item">
  <img src = {Warning} className='home-icon'></img>
  <p>Enjoy personalized service that prioritizes your unique needs, fostering trust and achieving mutual success.</p>
  </div>

  <div className="why-item">
  <img src = {Trophy} className='home-icon'></img>
  <p>Optimize your budget with our efficient and value-driven services, delivering superior outcomes without unnecessary expenses.</p>
  </div>

  <div className="why-item-l">
  <img src = {Money} className='home-icon'></img>
  <p>Ensure optimal financial planning and efficiency, helping you maximize project profitability.</p>
  </div>
</div>

<Standards/>
  </div>
</section>
    </>
  );
}
