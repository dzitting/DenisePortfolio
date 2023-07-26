import React from "react";

function ProjectSkillsList({ skills }) {
  return (
    <div id="skills--wrapper">
      <p>
        <em>Skills</em>
      </p>
      <ul className="skills-list">
        {/* Use map to dynamically populate the <li> elements */}
        {skills.map((skill, index) => (
          <li key={index} className="skill unselectable">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectSkillsList;
