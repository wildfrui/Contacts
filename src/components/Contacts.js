import React from "react";
import ContactList from "./ContactList";
import CreateContact from "./CreateContact";
import SearchBar from "./SearchBar";
import SortContacts from "./SortContacts";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="columns contacts__container">
      <div className="column is-one-third-desktop is-two-fifths-tablet">
        <CreateContact></CreateContact>
        <SortContacts></SortContacts>
      </div>
      <div className="column is-two-quarters ">
        <SearchBar></SearchBar>
        <ContactList></ContactList>
      </div>
    </div>
  );
};

export default Contacts;
