import React, { useEffect, useState } from "react";
import ProjectSkillsList from "./ProjectSkillsList";


function ProjectMain({title, skills, description, setProjectInfo}) {
    useEffect(() => {
        // This code will run when the component mounts
        const newSkills = ["Frontend", "Static", "HTML", "CSS", "API Map", "Javascript"];
    
        // Combine the updates into a single call to setProjectInfo
        setProjectInfo((prevProjectInfo) => ({
          ...prevProjectInfo,
          skills: newSkills
        }));
      }, []);

  return (
    <section id="project-description--wrapper">
          <div>
            <p>
              <em>Title</em>
            </p>
            <h2 id="project-title" className="green">{title}</h2>
          </div>
          <ProjectSkillsList skills={skills}/>
          <div id="description--wrapper">
            <p>
              <em>Description</em>
            </p>
            <h3>{description}</h3>
          </div>
        </section>
  );
}

export default ProjectMain;
