import React from "react";
import tableau from "../../assets/technologies/Tableau-Logo-1024x576.png";
import powerBI from "../../assets/technologies/Power-BI-Symbol.png";
import uipath from "../../assets/technologies/UiPath_2019_Corporate_Logo.png";
import powerAutomate from "../../assets/technologies/Power-Automate-Logo.webp";
import python from "../../assets/technologies/Python-Logo.png";
import apacheAirflow from "../../assets/technologies/AirflowLogo.png";
import alteryx from "../../assets/technologies/alteryx-logo.png";
import oracleDB from "../../assets/technologies/ئۆراکڵ-removebg-preview.png";
import sharepoint from "../../assets/technologies/SharePoint-Symbol.png";
import primaveraP6 from "../../assets/technologies/Oracle-Primavera-P6-800-600x600-1.webp";
import msProject from "../../assets/technologies/MS-Project-Logo-Wide.png";
import primaveraRisk from "../../assets/technologies/oracle-primavera-risk-analysis-akim-egineering-logo.png";
import aclAnalytics from "../../assets/technologies/xafG80r7sSG5VNa4GV_-gPjgzeLnjucXUM3G001hzEw.webp";


const technologies = [
  {
    category: "Business Intelligence",
    tools: [
      { name: "Tableau", logo: tableau },
      { name: "Power BI", logo: powerBI },
    ],
  },
  {
    category: "Process Automation",
    tools: [
      { name: "UiPath", logo: uipath },
      { name: "Power Automate", logo: powerAutomate },
    ],
  },
  {
    category: "Data Transformation",
    tools: [
      { name: "Python", logo: python },
      { name: "Apache Airflow", logo: apacheAirflow },
      { name: "Alteryx", logo: alteryx },
    ],
  },
  {
    category: "Data Storage",
    tools: [
      { name: "Oracle Database", logo: oracleDB },
      { name: "SharePoint", logo: sharepoint },
    ],
  },
  {
    category: "Planning & Scheduling",
    tools: [
      { name: "Primavera P6", logo: primaveraP6 },
      { name: "MS Project", logo: msProject },
    ],
  },
  {
    category: "Risk Analysis",
    tools: [
      { name: "Primavera Risk Analysis", logo: primaveraRisk },
      { name: "ACL Analytics", logo: aclAnalytics },
    ],
  },
];

export default function Technologies() {
  return (
    <section className="technologies-section">
      <h2 className="technologies-title">TECHNOLOGIES WE USE</h2>
      <p className="technologies-subtitle">We bring transparency into your project</p>
      <div className="technologies-container">
        {technologies.map((tech, index) => (
          <div key={index} className="technology-category">
            <h3 className="category-title">{tech.category}</h3>
            <div className="technology-tools">
              {tech.tools.map((tool, idx) => (
                <div key={idx} className="tool">
                  <img src={tool.logo} alt={tool.name} className="tool-logo" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
