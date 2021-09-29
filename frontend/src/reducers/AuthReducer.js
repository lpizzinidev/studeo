import { AUTH, LOGOUT, SET_AUTH_ERRORS } from './ActionTypes';

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        authErrors: [],
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        authErrors: [],
      };
    case SET_AUTH_ERRORS:
      return {
        ...state,
        authErrors: action.payload,
      };
    default:
      return state;
  }
};
