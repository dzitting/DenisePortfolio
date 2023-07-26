import React, { useState } from "react";
import "../styles/Projects.css";
import ProjectBanner from "./ProjectBanner";
import ProjectBase from "./ProjectBase";

function Projects() {
  const [projectInfo, setProjectInfo] = useState({
    bannerTitle: "",
    title: "",
    creators: "",
    skills: [],
    description: "",
  });

  return (
    <main className="slideup-class">
      <ProjectBanner bannerTitle="Eats Now" />
      <ProjectBase projectInfo={projectInfo} setProjectInfo={setProjectInfo} />
    </main>
  );
}

export default Projects;
