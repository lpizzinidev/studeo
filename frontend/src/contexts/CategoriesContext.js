import React, { useState, useEffect, useReducer } from "react";
import { CategoriesReducer } from "../reducers/CategoriesReducer";

// API
import * as api from "../api/server";

// Action types
import {
  SET_CATEGORIES_LIST,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "../reducers/ActionTypes";

// Initial state
const initialState = {
  categories: [],
};

// Create context
export const CategoriesContext = React.createContext();

// Provider component
export const CategoriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CategoriesReducer, initialState);

  // Actions
  const GetCategoriesList = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    const loadCategories = async () => {
      const { data } = await api.getCategoriesList();

      dispatch({ type: SET_CATEGORIES_LIST, payload: data });

      setCategories(data);
      setLoading(false);
    };

    useEffect(() => {
      loadCategories();
    }, []);

    return { loading, categories };
  };

  const getCategory = (_id) => {
    return state.categories.find((category) => category._id === _id);
  };

  const createCategory = async (formData) => {
    try {
      const { data } = await api.createCategory(formData);
      dispatch({ type: CREATE_CATEGORY, payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  const updateCategory = async (id, formData) => {
    try {
      const { data } = await api.updateCategory(id, formData);

      dispatch({ type: UPDATE_CATEGORY, payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCategory = async (id) => {
    try {
      await api.deleteCategory(id);

      dispatch({ type: DELETE_CATEGORY, payload: id });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CategoriesContext.Provider
      value={{
        categories: state.categories,
        GetCategoriesList,
        getCategory,
        createCategory,
        updateCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
