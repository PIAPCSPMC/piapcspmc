import React from "react";
import expert1 from "../assets/team/team1.png";
import expert2 from "../assets/team/team2.png";
import expert3 from "../assets/team/team3.png";
import expert4 from "../assets/team/team4.png";
import expert5 from "../assets/team/team5.png";
import expert6 from "../assets/team/team6.png";

const teamMembers = [
  {
    img: expert1,
    name: "Azamat Barlybayev",
    role: "Project Controls Head",
  },
  {
    img: expert2,
    name: "Yerzhan Usenov",
    role: "Cost Control Head",
  },
  {
    img: expert3,
    name: "Timur Azbenov",
    role: "Planning & Scheduling Head",
  },
  {
    img: expert4,
    name: "Aleksey Murzaliyev",
    role: "Planning & Risks Expert",
  },
  {
    img: expert5,
    name: "Alibek Manamuratov",
    role: "Lead Data Analyst",
  },
  {
    img: expert6,
    name: "Wilfredo Sacmar",
    role: "Lead Planning Engineer",
  },
];

export default function TeamSection() {
  return (
    <section className="section-team">
    <div className="team-list">
      <h2 className="team-title">PIA LEADING EXPERTS & EXPERIENCE</h2>
      <p className="team-subtitle">A Team That Transforms Challenges into Success</p>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.img} alt={member.name} className="team-photo" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div> 
      <div className="team-experience-n">
      <div className="experience-container-n">
        {/* Блок сертификаций */}
        <div className="experience-section-n">
          <h3 className="experience-title-n">Certified Experts</h3>
          <p className="experience-description-n">
            The PIA team comprises <strong>20+ internationally certified experts</strong> in Project Controls, delivering proven expertise and high-impact solutions.
          </p>
          <ul className="experience-list-n">
            <li><strong>AACE</strong> (CCP, PSP, EVP)</li>
            <li><strong>PMI</strong> (PMP, RMP)</li>
            <li><strong>IPMA</strong> Level B, C, D</li>
          </ul>
        </div>

        {/* Блок опыта и достижений */}
        <div className="experience-section-n">
          <h3 className="experience-title-n">Proven Track Record</h3>
          <p className="experience-description-n">
            Our extensive experience in project management spans across multiple industries and large-scale projects.
          </p>
          <ul className="experience-list-n">
            <li>20+ years of experience in <strong>EPC projects</strong>.</li>
            <li>Experience in projects totaling over <strong>$5 billion</strong>.</li>
            <li>Collaborated with major clients: <strong>ENI, TOTAL, FLUOR, KBR, QATAR ENERGY</strong>.</li>
          </ul>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
}
