import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import database from "../api/database";
import "./Login.css";

const Login = ({ setToken }) => {
  const renderInput = ({ input, label }) => {
    return (
      <label>
        <p>{label}</p>
        <input {...input} type="text" />
      </label>
    );
  };

  const onSubmit = async (formValues) => {
    const { data } = await database.get(`/users`);
    if (data) {
      const admin = data[0];
      console.log(formValues.login);
      if (
        admin.login === formValues.login &&
        admin.password === formValues.password
      ) {
        setToken(admin.id);
      }
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">sign up</h1>

        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit} className="login__form">
                <Field name="login" component={renderInput} label="Login" />
                <Field
                  name="password"
                  component={renderInput}
                  label="Password"
                />
                <button className="login__submit">Готово</button>
              </form>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Login;
