import React from "react";
import { Form, Field } from "react-final-form";

const CreateContact = () => {
  const renderInput = ({ input, label }) => {
    return (
      <label>
        <p>{label}</p>
        <input {...input} type="text" />
      </label>
    );
  };

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit} className="login__form">
              <Field name="name" component={renderInput} label="Name" />
              <Field name="number" component={renderInput} label="Number" />
              <button className="login__submit">Готово</button>
            </form>
          );
        }}
      ></Form>
    </div>
  );
};

export default CreateContact;
