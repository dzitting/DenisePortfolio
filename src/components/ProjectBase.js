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
          description="This project features an open source map from Leaflet that allows users to show delivery areas from the map. There are multiple tabs for users to navigate through, as well as a place to read the different menus."
        />
      
    </div>
  );
}

export default ProjectBase;
