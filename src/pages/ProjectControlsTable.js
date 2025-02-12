import React from "react";

export default function ProjectControlsTable() {
  return (
    <section className="project-controls-table">
      <h2 className="table-title">PROJECT CONTROLS SYSTEM</h2>
      <p className="table-subtitle">We bring transparency into your project</p>

      <div className="table-container">
        {/* Заголовок таблицы */}
        <div className="table-header">
          PIA Project Controls System for Project Management Consultancy Projects (PCS-PMC)
        </div>

        {/* Основная таблица */}
        <div className="table-grid">
          {/* Заголовки колонок */}
          <div className="table-cell header"></div>
          <div className="table-cell header">External</div>
          <div className="table-cell header">Internal</div>

          {/* System-specific Documents */}
          <div className="table-cell category rotated">System-specific Documents</div>
          <div className="table-cell light">
            <p>PMC-PCS-PIA Brochure</p>
            <p>List of PMC-PCS-PIA Documents</p>
          </div>
          <div className="table-cell light">
            <p>PMC-PCS-PIA Manual</p>
            <p>PMC-PCS-PIA Guideline</p>
            <p>PMC-PCS-PIA Glossary</p>
            <p>PMC-PCS-PIA Master Documents</p>
          </div>

          {/* Project-related Documents */}
          <div className="table-cell category rotated">Project-related Documents</div>
          <div className="table-cell dark">
            <p>Project Glossary</p>
            <p>Project Management Plan</p>
            <p>Project Controls Plan</p>
            <p>Schedule Basis</p>
            <p>WBS Dictionary</p>
            <p>Resources Calculation Methodology</p>
            <p>Cost Control Procedure</p>
            <p>Progress Measurement Procedure</p>
          </div>
          <div className="table-cell dark">
            <p>Project Glossary Template</p>
            <p>Project Execution Plan Template</p>
            <p>Discipline Working Guideline</p>
            <ul>
              <li>Templates</li>
              <li>Samples</li>
            </ul>
            <p>Other Tools and Templates</p>
          </div>
        </div>

        {/* Легенда */}
        <div className="legend">
          <div className="legend-item">
            <span className="color-box dark"></span> Project-specific PCS-PMC Documentation
          </div>
          <div className="legend-item">
            <span className="color-box light"></span> System-specific generic PCS-PMC Documentation
          </div>
        </div>
      </div>
    </section>
  );
}
