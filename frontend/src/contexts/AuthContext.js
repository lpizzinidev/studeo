import React, { useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";

// API
import * as api from "../api/server";

// Action types
import { AUTH, LOGOUT } from "../reducers/ActionTypes";

// Create context
export const AuthContext = React.createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer);

  // Actions
  const signin = async (formData, history) => {
    try {
      const { data } = await api.signIn(formData);

      dispatch({ type: AUTH, payload: data.token });

      history.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const signup = async (formData, history) => {
    try {
      const { data } = await api.signUp(formData);

      dispatch({ type: AUTH, payload: data.token });

      history.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const logout = (history) => {
    dispatch({ type: LOGOUT });
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        signin,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
