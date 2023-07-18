import React from "react";
import "../styles/Main.css";
import "../styles/Navbar.css";
import toggleIcon from "../assets/contrast.png";

function Navlinks({ changeState }) {

  return (
    <ul id="nav-links--list">
      <li className="nav-link--container">
        <a href="#" className="nav-link" onClick={() => changeState('home')}>
          Overview
        </a>
      </li>
      <li className="nav-link--container">
        <a href="#" className="nav-link" onClick={() => changeState('about')}>
          About
        </a>
      </li>
      <li className="nav-link--container">
        <a href="#" className="nav-link" onClick={() => changeState("contact")}>
          Contact
        </a>
      </li>
      <li className="nav-link--container">
        <a href="#" className="nav-link" onClick={() => changeState("statistics")}>
          Statistics
        </a>
      </li>
      <li className="nav-link--container">
        <a href="#" className="nav-link" onClick={() => changeState("projects")}>
          Projects
        </a>
      </li>
      <li className="nav-link--container">
        <figure id="toggleIcon--container">
          <img id="toggleIcon" src={toggleIcon} alt="Toggle Icon" />
        </figure>
      </li>
    </ul>
  );
}

export default Navlinks;
