import React from "react";
import sharePointLogo from "../../assets/technologies/Снимок_экрана_2025-02-13_в_12.55.21-removebg-preview.png";
import Microsoft from '../../assets/technologies/microsoft.png';

export default function Microsoft365Page() {
  return (
    <section className="microsoft-page">
      {/* Microsoft 365 Section */}
      <div className="microsoft-header">
        <h2 className="microsoft-title">Microsoft 365</h2>
        <p className="microsoft-subtitle">Business Basic</p>
      </div>

      {/* SharePoint Section */}
      <div className="sharepoint-container">
        <div className="sharepoint-header">          
            <img src={Microsoft} alt="SharePoint" className="sharepoint-logo first" />
          <img src={sharePointLogo} alt="SharePoint" className="sharepoint-logo second" />
        </div>
      </div>

      {/* Description Section */}
      <div className="microsoft-description">
        <p>
          We enhance project transparency by leveraging Business Intelligence (BI) tools
          and process automation to provide real-time insights into project progress.
        </p>
        <p>
          With automated data collection and reporting, stakeholders can access up-to-date
          information without manual effort.
        </p>
        <p>
          By combining BI analytics with automation, we empower organizations to track
          performance, identify bottlenecks, and optimize workflows.
        </p>
      </div>
    </section>
  );
}
