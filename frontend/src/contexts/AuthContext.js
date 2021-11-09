import React, { useReducer } from 'react';
import { AuthReducer } from '../reducers/AuthReducer';

// API
import * as api from '../api/server';

// Action types
import * as actionTypes from '../reducers/ActionTypes';

// Create context
export const AuthContext = React.createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer);

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
      setError(err);
    }
  };

  const signup = async (formData, history) => {
    try {
      const { data } = await api.signUp(formData);
      dispatch({ type: actionTypes.AUTH, payload: data.token });

      history.push('/dashboard');
    } catch (err) {
      setError(err);
    }
  };

  const logout = (history) => {
    dispatch({ type: actionTypes.LOGOUT });
    history.push('/');
  };

  const setError = (err) => {
    try {
      const { status, data } = err.response;

      switch (status) {
        case 400:
          // Client error
          const { errors } = data;

          if (!errors) {
            dispatch({ type: actionTypes.SET_ERROR, payload: [data.message] });
            return;
          }

          let errMsg = [];
          for (let error of errors) {
            errMsg.push(error.msg);
          }

          dispatch({ type: actionTypes.SET_ERROR, payload: errMsg });
          break;
        case 401:
          // Unauthorized
          logout();
          break;
        default:
          // Server error
          dispatch({ type: actionTypes.SET_ERROR, payload: [data.message] });
          break;
      }
    } catch (e) {
      dispatch({ type: actionTypes.SET_ERROR, payload: [e.message] });
    }
  };

  const clearError = () => {
    dispatch({ type: actionTypes.CLEAR_ERROR });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        isLogged,
        signin,
        signup,
        logout,
        setError,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
