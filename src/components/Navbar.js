import React from 'react';
import '../styles/Main.css';
import '../styles/Navbar.css';
import logo from '../assets/DZCodes.svg';
import Navlinks from './Navlinks';


function Navbar({ changeState })
{
    const changeActive = () =>
    {
      document.querySelector(".nav-link.active").classList.remove("active");
      document.getElementById("overview").classList.add("active");
    }

    return(
        <header>
            <nav>
                <figure id="logo-container">
                    <img id='logo-img' alt="logo" src={logo}  onClick={() => {changeState('home'); changeActive()}}></img>
                </figure>
                <div id='nav-links-container'>
                    <Navlinks changeState={changeState}/>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;