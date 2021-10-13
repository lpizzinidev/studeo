import React, { useState, useEffect, useReducer } from 'react';
import { CategoriesReducer } from '../reducers/CategoriesReducer';

// API
import * as api from '../api/server';
import * as utils from '../util/util';

// Action types
import * as actionTypes from '../reducers/ActionTypes';

// Initial state
const initialState = {
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
  const createCategory = async (formData) => {
    try {
      await api.createCategory(formData);
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
      await api.updateCategory(id, formData);
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
