import React from "react";
import "../styles/Main.css";
import "../styles/Navbar.css";
import toggleIcon from "../assets/contrast.png";

function Navlinks({ changeState }) {

  const changeActive = (event) =>
  {
    document.querySelector(".nav-link.active").classList.remove("active");
    event.target.classList.add("active");
  }

  const toggleColors = () =>
  {
    let base = document.getElementById("root");
    base.classList.toggle("dark");
  }

  return (
    <ul id="nav-links--list">
      <li className="nav-link--container">
        <a href="#" className="nav-link active" id="overview" onClick={(event) => {changeState('home'); changeActive(event)}}>
          Overview
        </a>
      </li>
      <li className="nav-link--container">
        <a href="#" className="nav-link" id="about" onClick={(event) => {changeState('about'); changeActive(event)}}>
          About
        </a>
      </li>
      <li className="nav-link--container">
        <a href="#" className="nav-link" onClick={(event) => {changeState('contact'); changeActive(event)}}>
          Contact
        </a>
      </li>
      <li className="nav-link--container">
        <a href="#" className="nav-link" onClick={(event) => {changeState('statistics'); changeActive(event)}}>
          Statistics
        </a>
      </li>
      <li className="nav-link--container">
        <a href="#" className="nav-link" onClick={(event) => {changeState('projects'); changeActive(event)}}>
          Projects
        </a>
      </li>
      <li className="nav-link--container">
        <figure id="toggleIcon--container" onClick={() => toggleColors()}>
          <img id="toggleIcon" src={toggleIcon} alt="Toggle Icon" />
        </figure>
      </li>
    </ul>
  );
}

export default Navlinks;
