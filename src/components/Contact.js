import React, { useState } from "react";
import "../styles/Contact.css";
import Open from "../assets/open-email.svg";
import Close from "../assets/envelope-close.svg";
import Email from "../assets/email.svg";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import PDF from "../assets/pdf-file.svg";
import Website from "../assets/website-coding.svg";
import Resume from "../assets/Resume_DeniseZitting.pdf";
import ContactImg from "../assets/undraw_contact_us_re_4qqt.svg";

function Contact({ changeState }) {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <main id="contact" className="slideup-class">
      <aside>
        <div id="aside-title">
          <h1 className="green">Contact</h1>
        </div>
        <ul>
          {isOpen ? (<li className="contact-list-item" id="open-li">
            <figure className="contact-item--wrapper">
              <img id="open-img" className="logo-green" src={Open} />
            </figure>
            <p>Great! I'm currently accepting new opportunities!</p>
          </li>):(
            <li className="contact-list-item" id="close-li">
              <figure className="contact-item--wrapper">
                <img id="close-img" className="logo-green" src={Close} />
              </figure>
              <p>Unfortunately, I'm not accepting new opportunities at this time, but I'd love to hear from you!</p>
            </li>
          )}
          <li className="contact-list-item">
            <figure className="contact-item--wrapper">
              <img className="logo-green" src={Email} />
            </figure>
            <p>The best way to contact me is via email</p>
          </li>
          <li className="contact-list-item" id="social-contacts">
            <a target="_blank" href="https://linkedin.com/in/denise-zitting101" className="social-link">
              <figure className="social-contact-icon">
                <img className="logo-green" src={LinkedIn} />
              </figure>
            </a>
            <a target="_blank" href="https://github.com/dzitting" className="social-link">
              <figure className="social-contact-icon">
                <img className="logo-green" src={Github} />
              </figure>
            </a>
            <a target="_blank" href="https://dzitting.github.io" className="social-link">
              <figure className="social-contact-icon">
                <img className="logo-green" src={Website} />
              </figure>
            </a>
            <a target="_blank" href={Resume} className="social-link">
              <figure className="social-contact-icon">
                <img className="logo-green" src={PDF} />
              </figure>
            </a>
          </li>
        </ul>
      </aside>
      <section id="contact-section">
        <h2 className="green">Let's Get in Touch!</h2>
        <form>
          <div id="first-name-input">
            <p>First Name</p>
            <input required name="firstName" type="text" placeholder="Enter your first name" className="contact-input"/>
          </div>
          <div id="last-name-input">
            <p>Last Name</p>
            <input name="lastName" type="text" placeholder="Enter your last name" className="contact-input"/>
          </div>
          <div id="email-input">
            <p>Email</p>
            <input required name="firstName" type="text" placeholder="Enter your email" className="contact-input"/>
          </div>
          <div id="message-input">
            <p>Message</p>
            <textarea required name="message" type="text" placeholder="Enter your message" className="contact-input"/>
          </div>
          <div id="submit-btn">
            <input type="submit" value="Submit" className="submit-btn green"/>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Contact;
