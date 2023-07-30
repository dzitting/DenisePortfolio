// Projects.js
import React, { useEffect, useState } from "react";
import "../styles/Projects.css";
import ProjectBanner from "./ProjectBanner";
import ProjectBase from "./ProjectBase";
import EatsNowImg from '../assets/eats-now-img.jpg';
import CounselorImg from '../assets/counselor-img.jpg';
import ShopHub from '../assets/shop-hub.jpg';
import Clearstart from '../assets/pexels-creative-vix-9754.jpg';

function Projects() {
  const [projectInfo, setProjectInfo] = useState({
    title: "",
    creators: "",
    skills: [],
    projectLink: "",
    description: "",
  });

  return (
    <main style={{ height: "max-content" }} className="slideup-class">
      <ProjectBanner bannerImg={EatsNowImg}/>
      <ProjectBase
      title="Eats Now: A Food Service App" 
      creators="Denise Zitting" 
      description="This project features an open source map from OpenStreetMap that allows users to show delivery areas from the map. There are multiple tabs for users to navigate through, including a place to read different menus." 
      skills="HTML, CSS, Frontend, Static, API, Javascript" 
      projectLink="https://dzitting.github.io/eats-now/index.html"
      />
      <ProjectBanner bannerImg={CounselorImg} />
      <ProjectBase 
      title="Counselor Landing Page"
      creators="Denise Zitting" 
      description="This project is based off a Dribbble creation, displaying the conversion from design to UX." 
      skills="HTML, CSS, Javascript" 
      projectLink="https://dzitting.github.io/dribbble-counselor/index.html" />
      <ProjectBanner bannerImg={Clearstart} />
      <ProjectBase 
      title="Clear Start Beta"
      creators="Denise Zitting" 
      description="Clear Start Beta is my first live Chrome Extension developed in late 2022 during the Manifest updates. It features a dynamic calendar, and API call for local weather updates." 
      skills="HTML, CSS, Javascript, API, Google, json" 
      projectLink="https://dzitting.github.io/clearstartbeta/main.html" />
    </main>
  );
}

export default Projects;
