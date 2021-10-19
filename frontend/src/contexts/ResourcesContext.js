import React, { useReducer, useContext } from 'react';
import { ResourcesReducer } from '../reducers/ResourcesReducer';

import { AuthContext } from './AuthContext';

// API
import * as api from '../api/server';

// Action types
import * as actionTypes from '../reducers/ActionTypes';

// Initial state
const initialState = {
  editingResource: null,
  showEditingResource: false,
};

// Create context
export const ResourcesContext = React.createContext();

// Provider component
export const ResourcesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ResourcesReducer, initialState);

  const { setError } = useContext(AuthContext);

  // Actions
  const createResource = async (category, formData) => {
    try {
      await api.createResource(category, formData);
      hideEditResource();
    } catch (err) {
      setError(err);
    }
  };

  const updateResource = async (category, formData) => {
    try {
      await api.updateResource(category, formData);
      hideEditResource();
    } catch (err) {
      setError(err);
    }
  };

  const deleteResource = async (id, resource) => {
    try {
      await api.deleteResource(id, resource);
    } catch (err) {
      setError(err);
    }
  };

  const showEditResource = (resource) => {
    dispatch({ type: actionTypes.SHOW_EDIT_RESOURCE, payload: resource });
  };

  const hideEditResource = () => {
    dispatch({ type: actionTypes.HIDE_EDIT_RESOURCE });
  };

  return (
    <ResourcesContext.Provider
      value={{
        ...state,
        createResource,
        updateResource,
        deleteResource,
        showEditResource,
        hideEditResource,
      }}
    >
      {children}
    </ResourcesContext.Provider>
  );
};
