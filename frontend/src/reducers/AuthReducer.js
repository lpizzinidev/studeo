import * as actionTypes from './ActionTypes';

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.AUTH:
      localStorage.setItem('token', action.payload);
      break;
    case actionTypes.LOGOUT:
      localStorage.clear();
      break;
    case actionTypes.SET_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case actionTypes.CLEAR_ERROR:
      return {
        ...state,
        errors: [],
      };
    default:
      break;
  }

  return state;
};
