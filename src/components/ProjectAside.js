import React from "react";


function ProjectAside({creators}) {

  return (
    <aside id="projects-aside">
          <div id="top-aside">
            <h2>Creator</h2>
            <h3>{creators}</h3>
          </div>
          <a href="#">
            <button>Project Link</button>
          </a>
        </aside>
  );
}

export default ProjectAside;
