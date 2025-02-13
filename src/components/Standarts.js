import React from "react";
import aaceLogo from "../assets/icons/standards1.png";
import isoLogo from "../assets/icons/standards2.png";
import pmiLogo from "../assets/icons/standards3.png";

export default function Standards() {
  return (
    <section className="standards">
      <div className="container">
        <h2 className="section-title">Standards We Follow</h2>
        <div className="divider"></div> {/* Разделительная линия */}
        <div className="standards-logos">
          <div className="logo-box">
            <img src={aaceLogo} alt="AACE International" />
          </div>
          <div className="logo-box">
            <img src={isoLogo} alt="ISO 21500" />
          </div>
          <div className="logo-box">
            <img src={pmiLogo} alt="Project Management Institute" />
          </div>
        </div>
      </div>
    </section>
  );
}
