import React from "react";


function ProjectBanner({bannerTitle}) {

  return (
    <section id="project--wrapper">
        <div id="banner--wrapper">
          <figure id="banner-projects">
            <figure id="banner-projects-img"></figure>
          </figure>
          <h1>{bannerTitle}</h1>
        </div>
      </section>
  );
}

export default ProjectBanner;
