import React from "react";
import { connect } from "react-redux";
import Contact from "./Contact.js";
import "./ContactList.css";

const contacts = [
  { name: "Artyom", number: "+7903543444444" },
  { name: "Alex", number: "+7903543444444" },
  { name: "Borya", number: "+7903543444444" },
  { name: "Sasha", number: "+7903543444444" },
  { name: "Pasha", number: "+7903543444444" },
  { name: "Artur", number: "+7903543444444" },
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

const ContactList = ({ term }) => {
  const renderContacts = () => {
    return contacts.map((contact, index) => {
      if (term) {
        const lowerTerm = term.toLowerCase();
        if (contact.name.toLowerCase().includes(lowerTerm) === false) {
          return;
        }
      }

      return <Contact key={index} contact={contact}></Contact>;
    });
  };

  return <div className="list__container">{renderContacts()}</div>;
};

const mapStateToProps = (state) => {
  return { term: state.searchTerm };
};

export default connect(mapStateToProps)(ContactList);
