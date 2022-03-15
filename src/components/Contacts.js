import React from "react";
import ContactList from "./ContactList";
import CreateContact from "./CreateContact";

const Contacts = () => {
  return (
    <div>
      <CreateContact></CreateContact>
      <ContactList></ContactList>
    </div>
  );
};

export default Contacts;
