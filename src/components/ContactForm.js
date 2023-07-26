import React, { useState } from "react";
import "../styles/Contact.css";
import Complete from '../assets/complete.svg';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSend = (event) => {
    event.preventDefault();

    setFormData({
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      message: event.target.message.value,
    });

    setIsSubmitted(true);
  };

  // Update the state on input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  if (isSubmitted) {
    return (
      <section id="contact-section" className="success slideup-class">
        <figure id="complete--wrapper">
        <img className="logo-green" src={Complete} />
        </figure>
        <h1 className="green">Sent! Thank You {formData.firstName}</h1>
        <h2 className="green">I will respond to you at {formData.email} as soon as possible!</h2>
      </section>
    );
  } else {
    return (
      <section id="contact-section">
        <h2 className="green">Let's Get in Touch!</h2>
        <form onSubmit={handleSend}>
          <div id="first-name-input">
            <p>First Name</p>
            <input
              required
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              className="contact-input"
              value={formData.firstName}
              onChange={handleChange} // Add the onChange event handler
            />
          </div>
          <div id="last-name-input">
            <p>Last Name</p>
            <input
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              className="contact-input"
              value={formData.lastName}
              onChange={handleChange} // Add the onChange event handler
            />
          </div>
          <div id="email-input">
            <p>Email</p>
            <input
              required
              name="email"
              type="text"
              placeholder="Enter your email"
              className="contact-input"
              value={formData.email}
              onChange={handleChange} // Add the onChange event handler
            />
          </div>
          <div id="message-input">
            <p>Message</p>
            <textarea
              required
              name="message"
              type="text"
              placeholder="Enter your message"
              className="contact-input"
              value={formData.message}
              onChange={handleChange} // Add the onChange event handler
            />
          </div>
          <div id="submit-btn">
            <input
              type="submit"
              value="Submit"
              className="submit-btn green"
            />
          </div>
        </form>
      </section>
    );
  }
}

export default ContactForm;
