import React from "react";
import Complete from '../assets/complete.svg';

function ContactFail({ changeState, formData }) {
  return (
    <section id="contact-section" className="success slideup-class">
      <figure id="complete--wrapper">
        <img className="logo-green" src={Complete} />
      </figure>
      <h1 className="green">Sent! Thank You {formData.firstName}</h1>
      <h2 className="green">
        I will respond to you at {formData.email} as soon as possible!
      </h2>
    </section>
  );
}

export default ContactFail;
