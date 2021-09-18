import { useState, useEffect } from "react";

import {
  SET_CATEGORIES_LIST,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "../reducers/ActionTypes";

import * as api from "../api/server";

export const GetCategories = (dispatch) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const { data } = await api.getCategories();

    dispatch({ type: SET_CATEGORIES_LIST, payload: data });

    setCategories(data);
    setLoading(false);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return { loading, categories };
};

export const getCategory = (_id, state) => {
  return state.categories.find((category) => category._id === _id);
};

export const createCategory = async (formData, dispatch) => {
  try {
    const { data } = await api.createCategory(formData);

    dispatch({ type: CREATE_CATEGORY, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const updateCategory = async (id, formData, dispatch) => {
  try {
    const { data } = await api.updateCategory(id, formData);

    dispatch({ type: UPDATE_CATEGORY, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteCategory = async (id, dispatch) => {
  try {
    await api.deleteCategory(id);

    dispatch({ type: DELETE_CATEGORY, payload: id });
  } catch (err) {
    console.log(err);
  }
};
