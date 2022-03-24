import React from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import { deleteContact } from "../actions";
import "./Contact.css";

const Contact = ({ contact, deleteContact }) => {
  const handleDelete = (id) => {
    deleteContact(id);
  };

  const defineDate = () => {
    const date = new Date();
    return date.toLocaleString();
  };

  return (
    <div className="card contact__container">
      <div className="contact__info">
        <div className="contact__name">{contact.name}</div>
        <div className="contact__number">{contact.number}</div>
        <div className="contact__date">{defineDate()}</div>
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
