import database from "../api/database";

export const createContact = () => {
  return async (dispatch) => {};
};

export const changeTerm = (term) => {
  return {
    type: "CHANGE_TERM",
    payload: term,
  };
};
