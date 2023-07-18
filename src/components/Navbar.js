import React from 'react';
import '../styles/Main.css';
import logo from '../assets/DZCodes.svg';
import Navlinks from './Navlinks';


function Navbar({ changeState })
{
    return(
        <header>
            <nav>
                <figure id="logo-container">
                    <img id='logo-img' alt="logo" src={logo}  onClick={() => changeState('home')}></img>
                </figure>
                <div id='nav-links-container'>
                    <Navlinks changeState={changeState}/>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;