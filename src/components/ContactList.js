import React from "react";

const contacts = [
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
      return (
        <div>
          <div>{contact.name}</div>
          <div>{contact.number}</div>
        </div>
      );
    });
  };

  return <div>{renderContacts()}</div>;
};

export default ContactList;
