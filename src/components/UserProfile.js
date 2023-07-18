import React from "react";
import "../styles/Main.css";
import Bell from "../assets/notification.png";
import UserImg from '../assets/undraw_female_avatar_efig.svg';
import LikeBtn from "../assets/like (1).png";

function Main({ changeState, pageTrans }) {
  return (
    <main>
      <div id="user-welcome-text">
        <h1 id="welcome-text" className="center">
          Welcome User!
        </h1>
        <h2 id="user-welcome-subtext" className="center">
          Please select the profile you'd like to view!
        </h2>
      </div>
      <div id="user-profile-container" onClick={() => {
          changeState('home');
        }}>
        <div id="iconBell--container">
          <figure id="bellIcon--wrapper">
            <img src={Bell} id="bellIcon" alt="small pink bell icon" />
          </figure>
        </div>
        <div id="profile--wrapper">
            <figure id="profile-img--wrapper">
                <img id="profile-img" alt="pink profile avatar female"src={UserImg}/>
            </figure>
        </div>
        <div id="profile-text--wrapper">
            <h2 id="name-text" className="center">Denise Zitting</h2>
            <h3 id="frontend-text" className="center">Front End Developer // Full Stack</h3>
        </div>
        <div id="text-like--wrapper">
            <p>Active 3 hours ago</p>
            <figure id="like-btn--wrapper">
                <img id="like-btn" src={LikeBtn} alt="small pink like button" />
            </figure>
        </div>
      </div>
    </main>
  );
}

export default Main;
