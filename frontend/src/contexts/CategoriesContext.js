import React, { useState, useEffect, useReducer } from 'react';
import { CategoriesReducer } from '../reducers/CategoriesReducer';

// API
import * as api from '../api/server';

// Action types
import {
  SET_CATEGORIES_LIST,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  SHOW_EDIT_CATEGORY,
  HIDE_EDIT_CATEGORY,
  SET_EDIT_CATEGORY_ERRORS,
} from '../reducers/ActionTypes';

// Initial state
const initialState = {
  categories: [],
  editingCategory: null,
  showEditingCategory: false,
  categoryErrors: '',
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

  const createCategory = async (formData) => {
    try {
      const { data } = await api.createCategory(formData);
      dispatch({ type: CREATE_CATEGORY, payload: data });

      hideEditCategory();
    } catch (err) {
      handleCategoryError(err);
    }
  };

  const updateCategory = async (id, formData) => {
    try {
      const { data } = await api.updateCategory(id, formData);
      dispatch({ type: UPDATE_CATEGORY, payload: data });

      hideEditCategory();
    } catch (err) {
      handleCategoryError(err);
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

  const handleCategoryError = (err) => {
    const { status } = err.response;
    if (status === 400) {
      // Client error
      const { data } = err.response;
      const { errors } = data;

      let errMsg = '';
      for (let error of errors) {
        errMsg += error.msg;
      }
      dispatch({ type: SET_EDIT_CATEGORY_ERRORS, payload: errMsg });
    } else {
      // Server error
      dispatch({ type: SET_EDIT_CATEGORY_ERRORS, payload: err.message });
    }
  };

  const showEditCategory = (category) => {
    dispatch({ type: SHOW_EDIT_CATEGORY, payload: category });
  };

  const hideEditCategory = () => {
    dispatch({ type: HIDE_EDIT_CATEGORY });
  };

  const cancelCategoryErrors = () => {
    dispatch({ type: SET_EDIT_CATEGORY_ERRORS, payload: '' });
  };

  return (
    <CategoriesContext.Provider
      value={{
        ...state,
        GetCategoriesList,
        createCategory,
        updateCategory,
        deleteCategory,
        showEditCategory,
        hideEditCategory,
        cancelCategoryErrors,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
