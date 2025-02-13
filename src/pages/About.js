import React from 'react';
import { useEffect } from "react";
import aboutImage from '../assets/images/aboutbanner.png';
import icon1 from '../assets/icons/1.svg';
import icon2 from '../assets/icons/2.svg';
import icon3 from '../assets/icons/3.svg';
import icon4 from '../assets/icons/4.svg';
import icon5 from '../assets/icons/5.svg';
import icon6 from '../assets/icons/6.svg';
import BusinessAnimation from "./BusinessAnimation.js";
import TeamSection from './Team.js';



export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []); // Вызываем один раз при монтировании страницы

  return (
    <section className="about-page">
      {/* Верхний заголовок с фоном */}
      <div className="about-header">
        <div className="overlay"></div> {/* Затемняющий слой */}
        <div className="about-header-text">
          <h1>Precision. Transparency. Excellence.</h1>
          <p>Empowering Your Projects to Succeed.</p>
        </div>
      </div>

      <div className="container">
        {/* About Us Section */}
        <div className="about-content">
          {/* Левая часть - Изображение */}
          <div className="about-image">
            <img src={aboutImage} alt="About Us" />
          </div>

          {/* Правая часть - Текстовое описание */}
          <div className="about-text">
            <h2>About us</h2>
            <p>
              At PIA Consulting & Engineering, we specialize in Project Controls Systems for PMC projects, 
              offering tailored solutions to manage cost, schedule, risk, and quality. With a focus on 
              precision and innovation, we ensure projects are delivered on time, within budget, and to 
              the highest standards.
            </p>
            <p>
              Our experienced team combines advanced tools and proven methodologies to drive efficiency, 
              transparency, and success. Partner with us to transform your vision into reality with 
              confidence and excellence.
            </p>
            <p>
              As an independent, privately-owned firm, we prioritize clients' interests, providing objective 
              recommendations without conflicts of interest. Our dedication to project management ensures 
              exceptional value and expertise.
            </p>
          </div>
          </div>

          <BusinessAnimation />
        {/* Nature of Business */}
        <section className="business-section">
    <h2 className="business-title">Nature of Business</h2>
    <p className="business-subtitle">Turning Vision into Reality, One Project at a Time</p>

    {/* Основной блок с графиком и нумерованным списком */}
    <div className="business-content">
        <div className="business-item">
            <div className="business-icon">
                <img src={icon1} alt="Step 1" />
            </div>
            <p>Assist Clients in the industrial and infrastructure sectors in achieving their ambitious project goals</p>
        </div>
        <div className="business-item">
            <div className="business-icon">
                <img src={icon2} alt="Step 2" />
            </div>
            <p>Conduct analysis of Clients' project management needs and deliver expert consulting services.</p>
        </div>
        <div className="business-item">
            <div className="business-icon">
                <img src={icon3} alt="Step 3" />
            </div>
            <p>Development of customized project management solutions, with use of local expertise and global best practices</p>
        </div>
        <div className="business-item">
            <div className="business-icon">
                <img src={icon4} alt="Step 4" />
            </div>
            <p>Assure the implementation of the solution and its maintenance throughout the whole project lifecycle.</p>
        </div>
        <div className="business-item">
            <div className="business-icon">
                <img src={icon5} alt="Step 5" />
            </div>
            <p>Facilitate the seamless adoption of the solution into the project environment</p>
        </div>
        <div className="business-item">
            <div className="business-icon">
                <img src={icon6} alt="Step 6" />
            </div>
            <p>Collaborate with Project Stakeholders to ensure effective communication and seamless task execution</p>
        </div>
    </div>
</section>

<TeamSection />

      </div>
    </section>
  );
}
