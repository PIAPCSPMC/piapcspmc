import React from 'react';
import ProjectControlsDeliverables from './project/ProjectControlsDeliverables';
import Technologies from './project/Technologies';
import Microsoft365Page from './project/Microsoft365Page';
import { useEffect } from "react";


const roadmapData = [
  {
    category: "ROAD MAP",
    title: "Work Scope Analysis",
    description:
      "Define project goals and requirements. Develop a roadmap with key milestones.",
  },
  {
    category: "STRUCTURE (WBS)",
    title: "Project Decomposition and Work Breakdown Structure (WBS)",
    description:
      'Depending on the project phase (Pre-FED, FEED, Feasibility, Engineering, Procurement, Construction, Commissioning), determine the planning method and level of work scope detail (detail levels "2,3,4,5", planning methods “Rolling wave”, “Fast track”, “CPM”, “PERT”, “Agile planning”).',
  },
  {
    category: "PLANS AND PROCEDURES",
    title: "Development of Project Management Procedures and Plans",
    description:
      "Create a project execution plan, responsibility matrix, communication matrix, and procedures for managing reporting, progress, budget, schedule, quality, risks, and changes.",
  },
  {
    category: "BASELINE SCHEDULE",
    title:
      "Development of a Detailed Project Schedule (PNR) in Primavera P6",
    description:
      "Estimate task durations using historical data, expert assessments, and productivity methodologies. Identification of the Critical Path: Verify the realism of task durations and logical dependencies. Resource Allocation: Identify necessary resources (human, material, financial) for each task.",
  },
  {
    category: "RISK ANALYSES",
    title: "Risk Matrix Development",
    description:
      "Identify potential threats to the project. Map risks to specific tasks and resources in the schedule. Determine probability (low, medium, high) and impact (cost, schedule, quality). Monte Carlo Analysis: Conduct a Monte Carlo analysis. Resource Overload Analysis: Check for resource conflicts.",
  },
  {
    category: "MONITORING & REPORTING",
    title: "Design & Construction Monitoring",
    description:
      "Compile a Master Document Register (MDR). Prioritize the issuance of design documentation according to the critical path of construction and installation works. Site Preparation: Compile a material and equipment register based on GD/PSD/RD (material list). Develop a communication plan with the commissioning team. Construction and Installation Works: Develop a progress tracking system for the construction site (FMS progress measurement system). Prepare weekly MSG for daily delay tracking and timely decision-making. Long-Term Works: Develop a progress tracking system for PNR based on the system/subsystem principle. Reporting: Develop daily, weekly, monthly project status reports.",
  },
];


export default function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []); // Вызываем один раз при монтировании страницы

  return (
    <section className="projects-page">
      <div className="container">
        {/* Project Controls System */}
        <div className="project-section">
        <ProjectControlsDeliverables/>
          <Technologies/>
          <Microsoft365Page/>
        </div>
        <section className="roadmap-section">
      <header className="roadmap-header">
        <h2 className="roadmap-title">PLANNING & EXECUTION ROADMAP</h2>
        <p className="roadmap-subtitle">Turning Strategy into Action, Action into Results</p>
      </header>

      <div className="planning-phase">
        <h3 className="phase-title">Planning Phase</h3>
        <p className="phase-subtitle">STEP-BY-STEP EXECUTION ALGORITHM</p>
      </div>

      <div className="roadmap-table">
        {roadmapData.map((item, index) => (
          <div key={index} className="roadmap-row">
            <div className="roadmap-category">{item.category}</div>
            <div className="roadmap-content">
              <strong>{item.title}:</strong> {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
      </div>
    </section>
  );
}
