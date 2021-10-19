import React, { useReducer, useContext } from 'react';
import { CategoriesReducer } from '../reducers/CategoriesReducer';

import { AuthContext } from './AuthContext';

// API
import * as api from '../api/server';

// Action types
import * as actionTypes from '../reducers/ActionTypes';

// Initial state
const initialState = {
  editingCategory: null,
  showEditingCategory: false,
};

// Create context
export const CategoriesContext = React.createContext();

// Provider component
export const CategoriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CategoriesReducer, initialState);

  const { setError } = useContext(AuthContext);

  // Actions
  const createCategory = async (formData) => {
    try {
      await api.createCategory(formData);
      hideEditCategory();
    } catch (err) {
      setError(err);
    }
  };

  const updateCategory = async (id, formData) => {
    try {
      await api.updateCategory(id, formData);
      hideEditCategory();
    } catch (err) {
      setError(err);
    }
  };

  const deleteCategory = async (id) => {
    try {
      await api.deleteCategory(id);
    } catch (err) {
      setError(err);
    }
  };

  const showEditCategory = (category) => {
    dispatch({ type: actionTypes.SHOW_EDIT_CATEGORY, payload: category });
  };

  const hideEditCategory = () => {
    dispatch({ type: actionTypes.HIDE_EDIT_CATEGORY });
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
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
