import { combineReducers } from "redux";

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
});
