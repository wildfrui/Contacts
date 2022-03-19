import database from "../api/database";

export const changeTerm = (term) => {
  return {
    type: "CHANGE_TERM",
    payload: term,
  };
};

export const addContact = (formValues) => {
  return async (dispatch) => {
    const response = await database.post("/contacts", formValues);
    console.log(response.data);
    dispatch({ type: "ADD_CONTACT", payload: response.data });
  };
};

export const getContacts = () => {
  return async (dispatch) => {
    const response = await database.get("/contacts");
    dispatch({ type: "GET_CONTACTS", payload: response.data });
  };
};

export const deleteContact = (id) => {
  console.log(id);
  return async (dispatch) => {
    await database.delete(`/contacts/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
};
