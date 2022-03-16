import React from "react";
import Contact from "./Contact.js";
import "./ContactList.css";

const contacts = [
  { name: "Artyom", number: "+7903543444444" },
  { name: "Artyom", number: "+7903543444444" },
  { name: "Artyom", number: "+7903543444444" },
  { name: "Artyom", number: "+7903543444444" },
  { name: "Artyom", number: "+7903543444444" },
  { name: "Artyom", number: "+7903543444444" },
  { name: "Artyom", number: "+7903543444444" },
  { name: "Artyom", number: "+7903543444444" },
  { name: "Artyom", number: "+7903543444444" },
  { name: "Artyom", number: "+7903543444444" },
  { name: "Artyom", number: "+7903543444444" },
  { name: "Artyom", number: "+7903543444444" },
  { name: "Artyom", number: "+7903543444444" },
  { name: "Artyom", number: "+7903543444444" },
  { name: "Artyom", number: "+7903543444444" },
  { name: "Artyom", number: "+7903543444444" },
  { name: "Artyom", number: "+7903543444444" },
];

const ContactList = () => {
  const renderContacts = () => {
    return contacts.map((contact) => {
      return <Contact contact={contact}></Contact>;
    });
  };

  return <div className="list__container">{renderContacts()}</div>;
};

export default ContactList;
