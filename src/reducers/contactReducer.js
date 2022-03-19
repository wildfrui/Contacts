import { omit, mapKeys } from "lodash";

export const contactReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return { ...state, [action.payload.id]: action.payload };
    case "GET_CONTACTS":
      return { ...state, ...mapKeys(action.payload, "id") };
    case "DELETE_CONTACT":
      return omit(state, action.payload);
    default:
      return state;
  }
};
