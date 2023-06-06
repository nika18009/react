import React from "react";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";
import { useState } from "react";

const ContactForm = () => {
  const [ContactsInput, setContactsInput] = useState([]);
  const [namevalue, setNameValue] = useState("");
  const [emailvalue, setEmailValue] = useState("");
  const [textvalue, setTextValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleContactChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      setNameValue(value);
    } else if (name === "email") {
      setEmailValue(value);
    } else if (name === "text") {
      setTextValue(value);
    }
  };

  const handleNewContact = () => {
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailvalue)) {
      setEmailError(true);
      setSubmitted(false)
      return;
    }

    const contact = {
      id: Math.random() * 10000,
      name: namevalue,
      email: emailvalue,
      message: textvalue,
    };

    let contacts = ContactsInput.concat(contact);
    setContactsInput(contacts);
    setNameValue("");
    setEmailValue("");
    setTextValue("");
    setSubmitted(true);
    setEmailError(false);
  };

  return (
    <div>
      <Navbar />
      <div className="contactForm">
        <div className="inputArea">
          <h2>Contact Us</h2>
          <input
            type="text"
            name="name"
            onChange={handleContactChange}
            value={namevalue}
            placeholder="Enter your name"
          />
          <input
            type="email"
            name="email"
            onChange={handleContactChange}
            value={emailvalue}
            placeholder="Enter your email"
          />

          <textarea
            type="textarea"
            name="text"
            onChange={handleContactChange}
            value={textvalue}
            rows={4}
            placeholder="Tell us your plans"
          />
          <button onClick={handleNewContact}>Submit</button>
          {emailError && (
            <p >Please enter a valid email address</p>
          )}
          {submitted && <p>Thank you for contacting us!</p>}
        </div>
        <div>
          <img src="https://wallpaperaccess.com/full/2099528.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
