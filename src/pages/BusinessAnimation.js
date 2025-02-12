import React from "react";

import scheduleIcon from "../assets/icons/Hourglass Not Done.png";
import costIcon from "../assets/icons/Money Bag.png";
import riskIcon from "../assets/icons/Warning.png";
import progressIcon from "../assets/icons/Bar Chart.png";
import trainingIcon from "../assets/icons/Open Book.png";
import reportsIcon from "../assets/icons/Bookmark Tabs.png";

const services = [
  { icon: scheduleIcon, text: "Schedule Management" },
  { icon: costIcon, text: "Cost Management" },
  { icon: riskIcon, text: "Risk Management" },
  { icon: progressIcon, text: "Progress Management" },
  { icon: trainingIcon, text: "Training and Consulting" },
  { icon: reportsIcon, text: "Creating Interactive Reports" },
];

export default function BusinessAnimation() {
  return (
    <section className="business-animation">
    <h2 className="business-title-a"> Nature of Business</h2>
      <p className="business-subtitle-a">Turning Vision into Reality, One Project at a Time</p>
      <div className="scroll-container">
        <div className="scroll-content">
          {services.map((service, index) => (
            <div key={index} className="scroll-item">
              <img src={service.icon} alt={service.text} className="icon" />
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
