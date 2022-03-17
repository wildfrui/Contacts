export const termReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_TERM":
      return action.payload;
    default:
      return state;
  }
};
