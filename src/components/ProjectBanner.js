import React from "react";

function ProjectBanner({ bannerImg }) {
  return (
    <section id="project--wrapper">
      <div id="banner--wrapper">
        <figure id="banner-projects">
          <figure
            id="banner-projects-img"
            style={{ background: `url(${bannerImg})`}} // Use the bannerImg prop to set the background image URL
          ></figure>
        </figure>
      </div>
    </section>
  );
}

export default ProjectBanner;
