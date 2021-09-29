import React, { useReducer } from 'react';
import { AuthReducer } from '../reducers/AuthReducer';

// API
import * as api from '../api/server';

import * as utils from '../util/util';

// Action types
import * as actionTypes from '../reducers/ActionTypes';

// Initial state
const initialState = {
  authErrors: [],
};

// Create context
export const AuthContext = React.createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Actions
  const isLogged = () => {
    return !!localStorage.getItem('token');
  };

  const signin = async (formData, history) => {
    try {
      const { data } = await api.signIn(formData);
      dispatch({ type: actionTypes.AUTH, payload: data.token });

      history.push('/dashboard');
    } catch (err) {
      dispatch({
        type: actionTypes.SET_AUTH_ERRORS,
        payload: utils.handleErrorObj(err),
      });
    }
  };

  const signup = async (formData, history) => {
    try {
      const { data } = await api.signUp(formData);
      dispatch({ type: actionTypes.AUTH, payload: data.token });

      history.push('/dashboard');
    } catch (err) {
      dispatch({
        type: actionTypes.SET_AUTH_ERRORS,
        payload: utils.handleErrorObj(err),
      });
    }
  };

  const logout = (history) => {
    dispatch({ type: actionTypes.LOGOUT });
    history.push('/');
  };

  const cancelAuthErrors = () => {
    dispatch({
      type: actionTypes.SET_AUTH_ERRORS,
      payload: [],
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        isLogged,
        signin,
        signup,
        logout,
        cancelAuthErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
