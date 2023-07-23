import React from "react";
import "../styles/About.css";
import AboutImg from "../assets/undraw_proud_coder_re_exuy.svg";
import Fast from "../assets/icons8-quick-mode-on-96.png";
import Learner from "../assets/growth-up-book-learning.svg";
import Thinking from "../assets/thinking.svg";
import Succeed from "../assets/growth-up-book-learning.svg";
import Critical from "../assets/analytics.svg";
import Lines from "../assets/sammy-water-from-the-shower-head.png";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import PDF from "../assets/pdf-file.svg";
import Website from "../assets/website-coding.svg";
import Resume from '../assets/Resume_DeniseZitting.pdf';

function About({ changeState }) {
  return (
    <main className="unselectable">
      <div className="slideup-class" id="top-about">
        <figure id="about-img--wrapper">
          <img src={AboutImg} />
        </figure>
        <div id="about-text">
          <h1 className="green">About Me.</h1>
          <h2>I am a passionate front-end developer.</h2>
          <p>I create <strong className="green">beautiful and innovative</strong> websites, and over time, I've honed my specialization in frontend development. With <strong className="green">experience in creating static, React, and WordPress websites,</strong> I know how to create visually stunning and highly functional interfaces. But I don't just rely on my talents and experience alone - I've also invested in <strong className="green">a range of certifications that prove my expertise</strong> and knowledge in this field. For me, frontend development isn't just a job - it's an opportunity to create something truly special and meaningful every day.</p>
        </div>
      </div>
      <div className="slideup-class" id="bottom-about">
        <div id="social-links">
          <div title="LinkedIn" className="social-link logo-green">
            <a href="https://www.linkedin.com/in/denise-zitting101/" target="_blank">
              <img className="one" src={LinkedIn} />
            </a>
          </div>
          <div title="Github" className="social-link logo-green">
            <a href="https://github.com/dzitting" target="_blank">
              <img className="two" src={Github} />
            </a>
          </div>
          <div title="Resume" className="social-link logo-green">
            <a href={Resume} target="_blank" download={true}>
              <img className="three" src={PDF} />
            </a>
          </div>
        </div>
        <div id="em-points--wrapper">
          <div className="point--container">
            <h3>
            I possess a remarkable ability to quickly acquire new skills, surpassing the average individual's learning pace.
            </h3>
            <img src={Fast} className="point-icon logo-green" />
          </div>
          <div className="point--container">
            <h3>
            I possess a keen mind, allowing me to dissect complex problems and evaluate perspectives with astute precision.
            </h3>
            <img src={Thinking} className="point-icon logo-green" />
          </div>
          <div className="point--container">
            <h3>
            I hold myself accountable for my actions and constantly seek ways to improve. A drive for excellence fueling my passions.
            </h3>
            <img src={Critical} className="point-icon logo-green" />
          </div>
          <div className="point--container">
            <h3>
            I have always had a passion for acquiring knowledge and expanding my understanding of the world around me.
            </h3>
            <img src={Learner} className="point-icon logo-green" />
          </div>
        </div>
      </div>
      <div className="slideup-class" id="image-wrapper">
        <figure id="image-wrapper-figure">
          <img className="logo-green" src={Lines} />
        </figure>
      </div>
    </main>
  );
}

export default About;
