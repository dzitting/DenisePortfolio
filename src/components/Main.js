import React, { useState } from 'react';
import '../styles/Main.css';
// import Navbar from '../components/Navbar';
import UserProfile from '../components/UserProfile';

function Main() {
  const [currentPage, setCurrentPage] = useState("index");

  const changeState = (page) => {
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
        {/* Replace 'Main' with the appropriate component */}
        <Main changeState={changeState} />
      </React.StrictMode>
    );
  } else {
    return <h1>Index</h1>;
  }
}

export default Main;
