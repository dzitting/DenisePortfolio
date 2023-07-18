import React, { useState } from 'react';
import '../styles/Main.css';
import '../styles/animations.css';
import Navbar from './Navbar';
import UserProfile from './UserProfile';
import Dashboard from './Dashboard';
import About from './About';

function Main() {
  const [currentPage, setCurrentPage] = useState("index");

  const changeState = (page) => {
    setCurrentPage(page);
  };

  if (currentPage === "index") {
    return (
      <React.StrictMode>
        {/* Replace 'UserProfile' with the appropriate component */}
        <Navbar changeState={changeState} />
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
  else {
    return <h1>Index</h1>;
  }
}

export default Main;
