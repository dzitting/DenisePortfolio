import React, { useState } from "react";
import "../styles/Main.css"; //Style for most general things
import "../styles/animations.css"; //General animations
import "../styles/dark.css"; //Dark theme style
import "../styles/light.css"; //Light theme transition
import Navbar from "./Navbar"; //NavBar Component etc
import UserProfile from "./UserProfile";
import Dashboard from "./Dashboard";
import Contact from "./Contact";
import About from "./About";
import Statistics from "./Statistics";
import Projects from "./Projects";
import Footer from "./Footer";

function Main() {
  const [currentPage, setCurrentPage] = useState("index"); //Creating an object with a state set at index

  const changeState = (page) => {
    //Calls the changeState with the correct page to update to
    setCurrentPage(page);
  };

  if (currentPage === "index") {
    return (
      <React.StrictMode>
        {/* Replace 'UserProfile' with the appropriate component */}
        <UserProfile changeState={changeState} />
      </React.StrictMode>
    );
  } else if (currentPage === "home") {
    return (
      <React.StrictMode>
        {/* Replace 'Dashboard' with the appropriate component */}
        <Navbar changeState={changeState} />
        <Dashboard changeState={changeState} />
        <Footer />
      </React.StrictMode>
    );
  } else if (currentPage === "about") {
    return (
      <React.StrictMode>
        {/* Replace 'About' with the appropriate component */}
        <Navbar changeState={changeState} />
        <About changeState={changeState} />
        <Footer />
      </React.StrictMode>
    );
  } else if (currentPage === "contact") {
    return (
      <React.StrictMode>
        {/* Replace 'About' with the appropriate component */}
        <Navbar changeState={changeState} />
        <Contact changeState={changeState} />
      </React.StrictMode>
    );
  } else if (currentPage === "statistics") {
    return (
      <React.StrictMode>
        {/* Replace 'About' with the appropriate component */}
        <Navbar changeState={changeState} />
        <Statistics changeState={changeState} />
        <Footer />
      </React.StrictMode>
    );
  } else if (currentPage === "projects") {
    return (
      <React.StrictMode>
        {/* Replace 'About' with the appropriate component */}
        <Navbar changeState={changeState} />
        <Projects changeState={changeState} />
        <Footer />
      </React.StrictMode>
    );
  } else {
    return <h1>Index</h1>;
  }
}

export default Main;
