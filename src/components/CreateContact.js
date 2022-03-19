import React from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { addContact } from "../actions";
import "./CreateContact.css";

const CreateContact = ({ addContact }) => {
  const renderInput = ({ input, label }) => {
    return (
      <label>
        <p className="label">{label}</p>
        <input className="input" {...input} type="text" />
      </label>
    );
  };

  const onSubmit = (formValues) => {
    console.log(formValues);
    addContact(formValues);
  };

  return (
    <div className="card create__container">
      <div className="field">
        <h2 className="card-header-title create__title">Создай контакт</h2>
        <div className="card-content">
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => {
              return (
                <form className="create__form columns" onSubmit={handleSubmit}>
                  <Field name="name" component={renderInput} label="Имя" />

                  <Field name="number" component={renderInput} label="Номер" />

                  <button className="button create__submit">Готово</button>
                </form>
              );
            }}
          ></Form>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addContact })(CreateContact);
