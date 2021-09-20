import { AUTH, LOGOUT } from "./ActionTypes";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("token", action.payload);
      break;
    case LOGOUT:
      localStorage.clear();
      break;
    default:
      return state;
  }
};
