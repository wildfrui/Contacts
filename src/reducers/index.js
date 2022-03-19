import { combineReducers } from "redux";
import { termReducer } from "./termReducer";
import { contactReducer } from "./contactReducer";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  users: userReducer,
  searchTerm: termReducer,
  contacts: contactReducer,
});
