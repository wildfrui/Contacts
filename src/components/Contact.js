import React from "react";
import "./Contact.css";
const Contact = ({ contact }) => {
  return (
    <div className="card contact__container">
      <div className="contact__name">{contact.name}</div>
      <div className="contact__number">{contact.number}</div>
    </div>
  );
};

export default Contact;
