import { AUTH, LOGOUT } from "../reducers/ActionTypes";

import * as api from "../api/server";

export const signin = async (formData, dispatch, history) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, payload: data.token });

    history.push("/dashboard");
  } catch (err) {
    console.log(err);
  }
};

export const signup = async (formData, dispatch, history) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, payload: data.token });

    history.push("/dashboard");
  } catch (err) {
    console.log(err);
  }
};

export const logout = (dispatch, history) => {
  dispatch({ type: LOGOUT });
  history.push("/");
};
