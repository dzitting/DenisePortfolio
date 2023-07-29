import React, { useState } from "react";
import "../styles/Projects.css";
import ProjectBanner from "./ProjectBanner";
import ProjectBase from "./ProjectBase";

function Projects() {
  const [projectInfo, setProjectInfo] = useState({
    title: "",
    creators: "",
    skills: [],
    description: "",
  });

  return (
    <main style={{height: 'max-content'}} className="slideup-class">
      <ProjectBanner />
      <ProjectBase projectInfo={projectInfo} setProjectInfo={setProjectInfo} />
      <ProjectBanner />
      <ProjectBase projectInfo={projectInfo} setProjectInfo={setProjectInfo}/>
    </main>
  );
}

export default Projects;
