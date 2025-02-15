import React, { useRef } from "react";
import "../assets/css/skills.css";
import useInView from "../hooks/useInView";

const Skills = () => {
  const skillsRef = useRef(null);
  const isSkillsVisible = useInView(skillsRef);

  return (
    <section ref={skillsRef} className={`skills-section fade-in ${isSkillsVisible ? "visible" : ""}`}>
      <h2 className="skills-title">SKILLS</h2>
      <div className="skills-wrapper">
        <div className="skills-container">
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <ul className="skill-list">
              <li className="skill-item">3D Modeling</li>
              <li className="skill-item">Texturing & Shading</li>
              <li className="skill-item">Lighting & Rendering</li>
              <li className="skill-item">Animation & Motion Design</li>
              <li className="skill-item">VFX & Special Effects</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>2D Skills</h3>
            <ul className="skill-list">
              <li className="skill-item">2D Motion Design</li>
              <li className="skill-item">Vector & Raster Illustration</li>
              <li className="skill-item">Photo & Video Editing</li>
              <li className="skill-item">Typography & Layout Design</li>
              <li className="skill-item">UI/UX Animation</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Soft Skills</h3>
            <ul className="skill-list">
              <li className="skill-item">Client Communication</li>
              <li className="skill-item">Project Management</li>
              <li className="skill-item">Problem Solving & Creativity</li>
              <li className="skill-item">Team Collaboration</li>
              <li className="skill-item">Time Management</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Languages</h3>
            <ul className="skill-list">
              <li className="skill-item">English (B2+)</li>
              <li className="skill-item">Polish (Fluent)</li>
              <li className="skill-item">Ukrainian (Native)</li>
              <li className="skill-item">Russian (Fluent)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
