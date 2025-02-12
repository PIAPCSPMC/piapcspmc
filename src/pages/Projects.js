import React from 'react';

import projectControlsImg from '../assets/images/aboutbanner.png';
import deliverablesImg from '../assets/images/banner.png';
import dashboardsImg from '../assets/images/contact.jpg';
import ProjectControlsTable from './ProjectControlsTable';
import ProjectControlsDeliverables from './ProjectControlsDeliverables';

export default function Projects() {
  return (
    <section className="projects-page">
      <div className="container">
        <ProjectControlsTable/>
        <ProjectControlsDeliverables/>
        {/* Project Controls System */}
        <div className="project-section">
          
        </div>

      </div>
    </section>
  );
}
