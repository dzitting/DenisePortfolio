import React from "react";
import "../styles/Footer.css";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import PDF from "../assets/pdf-file.svg";
import Website from "../assets/website-coding.svg";
import Resume from "../assets/Resume_DeniseZitting.pdf";

function Footer() {
  return (
    <footer className="regular">
      <div id="inner-footer">
        <div id="name-section">
          <h2>
            <strong className="regular">Denise Zitting</strong>
          </h2>
        </div>
        <div id="header-links-container">
            <div id="links-header">
                <h2 className="regular">Socials</h2>
            </div>
            <div id="social-links-footer">
                <div className="link-container">
                    <a title="LinkedIn" href="https://www.linkedin.com/in/denise-zitting101/" target="_blank">
                        <img className="social-icon logo-regular" src={LinkedIn} />
                    </a>
                </div>
                <div className="link-container">
                    <a title="GitHub" href="https://github.com/dzitting" target="_blank">
                        <img className="social-icon logo-regular" src={Github} />
                    </a>
                </div>
                <div className="link-container">
                    <a title="Portfolio" href="https://dzitting.github.io/" target="_blank">
                        <img className="social-icon logo-regular" src={Website} />
                    </a>
                </div>
                <div className="link-container">
                    <a title="Resume" href={Resume} target="_blank" download={true} target="_blank">
                        <img className="social-icon logo-regular" src={PDF} />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
