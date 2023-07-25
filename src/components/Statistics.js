import React from "react";
import "../styles/Statistics.css";
import Visual from "../assets/undraw_pie_graph_re_fvol.svg";
import Harvard from "../assets/Harvard_Crimson_logo_2020.png";
import Codecademy from "../assets/codecademy.svg";
import FCC from "../assets/fcc_secondary_small.svg";
import Certificates from "../assets/Certificationslist.pdf";
import Certified from "../assets/certificate.svg";
import Hours from "../assets/time.svg";

function Statistics({ changeState }) {
  return (
    <main id="statistics">
      <div id="top-section">
        <section id="two-third">
          <div className="header-spot--wrapper">
            <h2>Statistics</h2>
            <div id="content--wrapper">
              <h1>Certified Frontend Developer</h1>
              <h3>
                Lorer ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </h3>
              <div id="cta--wrapper">
                <a href={Certificates} target="_blank">
                  <button className="cta">See Certifications</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div id="one-third">
          <figure id="visual--wrapper">
            <img className="visual" src={Visual} />
          </figure>
        </div>
      </div>

      <div id="bottom--wrapper">
        <div id="certifications--wrapper">
            <img className="logo-green" src={Certified}/>
          <h3>Multiple Certifications</h3>
        </div>
        <div id="course-hours--wrapper">
            <img className="logo-green" src={Hours}/>
          <h3>Over 1000 Hours</h3>
        </div>
        <div id="providers--wrapper">
          <div className="provider">
            <img className="provider--img logo-green" src={Codecademy} />
            <p>Codecademy</p>
          </div>
          <div className="provider">
            <img className="provider--img logo-green" src={FCC} />
            <p>freeCodeCamp</p>
          </div>
          <div className="provider">
            <img className="provider--img logo-green" src={Harvard} />
            <p>Harvard</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Statistics;
