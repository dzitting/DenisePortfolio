import React from "react";

function ProjectBase({ title, description, skills=[], creators, projectLink }) {

  return (
    <div id="projects-aside--wrapper">
      <aside id="projects-aside">
        <div id="top-aside">
          <h2>Creator</h2>
          <h3>{creators}</h3>
        </div>
        <a href={projectLink} target="_blank">
          <button>Project Link</button>
        </a>
      </aside>
      <section id="project-description--wrapper">
        <div>
          <p>
            <em>Title</em>
          </p>
          <h2 id="project-title" className="green">
            {title}
          </h2>
        </div>
        <div id="skills--wrapper">
          <p>
            <em>Skills</em>
          </p>
          <ul className="skills-list">
            {skills.split(",").map((skill, index) => (
              <li key={index} className="skill unselectable">
                {skill.trim()} {/* Use trim() to remove extra whitespace */}
              </li>
            ))}
          </ul>
        </div>
        <div id="description--wrapper">
          <p>
            <em>Description</em>
          </p>
          <h3>{description}</h3>
        </div>
      </section>
    </div>
  );
}

export default ProjectBase;
