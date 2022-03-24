import React, { useEffect } from "react";
import { connect } from "react-redux";
import Contact from "./Contact.js";
import { getContacts } from "../actions";
import "./ContactList.css";

const ContactList = ({ term, contacts, getContacts, sortTerm }) => {
  useEffect(() => {
    getContacts();
    console.log(sortTerm);
  }, []);

  const renderContacts = () => {
    let newContacts = contacts;
    if (sortTerm.sort === "contactName") {
      newContacts.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }
    return newContacts.map((contact) => {
      if (term) {
        const lowerTerm = term.toLowerCase();
        if (
          contact.name.toLowerCase().includes(lowerTerm) === false &&
          contact.number.includes(term) === false
        ) {
          return;
        }
      }

      return <Contact key={contact.id} contact={contact}></Contact>;
    });
  };

  return <div className="list__container">{renderContacts()}</div>;
};

const mapStateToProps = (state) => {
  return {
    contacts: Object.values(state.contacts).reverse(),
    term: state.searchTerm,
    sortTerm: state.sortTerm,
  };
};

export default connect(mapStateToProps, { getContacts })(ContactList);
