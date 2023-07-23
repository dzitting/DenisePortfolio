import React, { useState } from 'react';
import '../styles/Main.css'; //Style for most general things
import '../styles/animations.css'; //General animations 
import '../styles/dark.css'; //Dark theme style
import '../styles/light.css'; //Light theme transition
import Navbar from './Navbar'; //NavBar Component etc
import UserProfile from './UserProfile';
import Dashboard from './Dashboard';
import About from './About';

function Main() {
  const [currentPage, setCurrentPage] = useState("about"); //Creating an object with a state set at index

  const changeState = (page) => { //Calls the changeState with the correct page to update to
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
      </React.StrictMode>
    );
  }else if (currentPage === "about")
  {
    return (
      <React.StrictMode>
        {/* Replace 'About' with the appropriate component */}
        <Navbar changeState={changeState} />
        <About changeState={changeState} />
      </React.StrictMode>
    ); 
  }
  else if (currentPage === "contact")
  {
    return (
      <React.StrictMode>
        {/* Replace 'About' with the appropriate component */}
        <Navbar changeState={changeState} />
      </React.StrictMode>
    );
  } 
  else if (currentPage === "statistics")
  {
    return (
      <React.StrictMode>
        {/* Replace 'About' with the appropriate component */}
        <Navbar changeState={changeState} />
      </React.StrictMode>
    );
  } 
  else if (currentPage === "projects")
  {
    return (
      <React.StrictMode>
        {/* Replace 'About' with the appropriate component */}
        <Navbar changeState={changeState} />
      </React.StrictMode>
    );
  } 
  else {
    return <h1>Index</h1>;
  }
}

export default Main;
