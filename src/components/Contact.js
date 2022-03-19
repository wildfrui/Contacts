import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../actions";
import "./Contact.css";

const Contact = ({ contact, deleteContact }) => {
  const handleDelete = (id) => {
    deleteContact(id);
  };

  return (
    <div className="card contact__container">
      <div className="contact__info">
        <div className="contact__name">{contact.name}</div>
        <div className="contact__number">{contact.number}</div>
      </div>

      <button
        className="contact__delete button"
        onClick={() => handleDelete(contact.id)}
      >
        Удалить
      </button>
    </div>
  );
};

export default connect(null, { deleteContact })(Contact);
