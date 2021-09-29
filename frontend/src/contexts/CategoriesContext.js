import React, { useState, useEffect, useReducer } from 'react';
import { CategoriesReducer } from '../reducers/CategoriesReducer';

// API
import * as api from '../api/server';

import * as utils from '../util/util';

// Action types
import * as actionTypes from '../reducers/ActionTypes';

// Initial state
const initialState = {
  categories: [],
  editingCategory: null,
  showEditingCategory: false,
  categoryErrors: [],
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

      dispatch({ type: actionTypes.SET_CATEGORIES_LIST, payload: data });

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
      dispatch({ type: actionTypes.CREATE_CATEGORY, payload: data });

      hideEditCategory();
    } catch (err) {
      dispatch({
        type: actionTypes.SET_EDIT_CATEGORY_ERRORS,
        payload: utils.handleErrorObj(err),
      });
    }
  };

  const updateCategory = async (id, formData) => {
    try {
      const { data } = await api.updateCategory(id, formData);
      dispatch({ type: actionTypes.UPDATE_CATEGORY, payload: data });

      hideEditCategory();
    } catch (err) {
      dispatch({
        type: actionTypes.SET_EDIT_CATEGORY_ERRORS,
        payload: utils.handleErrorObj(err),
      });
    }
  };

  const deleteCategory = async (id) => {
    try {
      await api.deleteCategory(id);
      dispatch({ type: actionTypes.DELETE_CATEGORY, payload: id });
    } catch (err) {
      console.log(err);
    }
  };

  const showEditCategory = (category) => {
    dispatch({ type: actionTypes.SHOW_EDIT_CATEGORY, payload: category });
  };

  const hideEditCategory = () => {
    dispatch({ type: actionTypes.HIDE_EDIT_CATEGORY });
  };

  const cancelCategoryErrors = () => {
    dispatch({ type: actionTypes.SET_EDIT_CATEGORY_ERRORS, payload: '' });
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
