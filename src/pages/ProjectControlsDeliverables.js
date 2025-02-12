import React from "react";

const phases = [
  {
    phase: "1 Initiation Phase",
    strategy: [
      "Analyzing Client Needs",
      "Provide Solution",
      "Project Execution Plan",
    ],
    value: [
      "Identified Client Pain Points",
      "Tailored Solution Delivered",
      "Clear PMC Execution Roadmap",
    ],
  },
  {
    phase: "2 Planning Phase",
    strategy: [
      "Define Scope",
      "Decomposition WBS",
      "Project Schedule",
      "Resources",
      "Risk Analysis",
      "Procedures and Plans",
    ],
    value: [
      "Clear Project Boundaries",
      "Focused Task Prioritization",
      "Timeline with Critical Milestones",
      "Optimal Resource Utilization",
      "Minimized Project Risks",
      "Seamless Stakeholder Communication",
    ],
  },
  {
    phase: "3 Monitoring Phase",
    strategy: [
      "Reporting",
      "Maintain Schedule",
      "Value Engineering",
      "Look Ahead",
    ],
    value: [
      "Clear visibility of project status",
      "Delay management",
      "Clear KPI monitoring",
      "Resources optimization",
      "Effective Communication",
    ],
  },
];

export default function ProjectControlsDeliverables() {
  return (
    <section className="project-controls-deliverables">
      <h2 className="table-title">PROJECT CONTROLS DELIVERABLES</h2>
      <p className="table-subtitle">Delivering Value at Every Stage</p>

      <div className="table-container">
        {/* Заголовки таблицы */}
        <div className="table-header-2">
          <div className="header-cell phases">PHASES</div>
          <div className="header-cell strategy">PMC STRATEGY</div>
          <div className="header-cell value">VALUE THIS DELIVERS</div>
        </div>

        {/* Контент таблицы */}
        {phases.map((phaseData, index) => (
          <div key={index} className="table-row">
            <div className="table-cell phase">{phaseData.phase}</div>
            <div className="table-cell strategy">
              <ul>
                {phaseData.strategy.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="table-cell value">
              <ul>
                {phaseData.value.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
