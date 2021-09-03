import { AUTH, LOGOUT } from "./ActionTypes";

export const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("token", action.payload);
      break;
    case LOGOUT:
      localStorage.clear();
      break;
    default:
      break;
  }

  return state;
};
