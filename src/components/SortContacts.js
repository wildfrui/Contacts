import React from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { updateSort } from "../actions";
import "./SortContacts.css";

const SortContacts = ({ updateSort }) => {
  const renderInput = ({ input, label }) => {
    return (
      <label>
        <input className="radio" {...input} />
        {label}
      </label>
    );
  };

  const onSubmit = (formValues) => {
    console.log(formValues);
    updateSort(formValues);
  };

  return (
    <div className="card sort__container">
      <div className="field">
        <h2 className="card-header-title sort__title">Сортировать по:</h2>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => {
            return (
              <form className="sort__form columns" onSubmit={handleSubmit}>
                <Field
                  name="sort"
                  component={renderInput}
                  type="radio"
                  label="по дате создания"
                  value="date"
                />

                <Field
                  name="sort"
                  component={renderInput}
                  type="radio"
                  label="по имени"
                  value="contactName"
                />
                <button className="button sort__submit">Применить</button>
              </form>
            );
          }}
        ></Form>
      </div>
    </div>
  );
};
// return (
//   <div className="sort__container card">
//     <h2 className="sort__title">Сортировать по:</h2>

//     <label>
//       <input name="sort" type="radio" className="sort__checkbox radio" />
//       дате добавления
//     </label>
//     <label>
//       <input name="sort" type="radio" className="sort__checkbox radio" />
//       имени
//     </label>
//   </div>
// );

export default connect(null, { updateSort })(SortContacts);
