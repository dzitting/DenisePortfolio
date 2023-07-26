import React, { useEffect, useState } from "react";
import ProjectMain from "./ProjectMain";
import ProjectAside from "./ProjectAside";

function ProjectBase({ projectInfo, setProjectInfo }) {

  return (
    <div id="projects-aside--wrapper">
      <ProjectAside creators="Denise Zitting" />
      <ProjectMain
        title="Eats Now: A Food Service App"
        setProjectInfo={setProjectInfo}
        skills={projectInfo.skills}
        description="This is a project description."
      />
    </div>
  );
}

export default ProjectBase;
