import React, { useState, useEffect, useReducer } from 'react';
import { ResourcesReducer } from '../reducers/ResourcesReducer';

// API
import * as api from '../api/server';

// Action types
import {
  SET_RESOURCES_LIST,
  CREATE_RESOURCE,
  UPDATE_RESOURCE,
  DELETE_RESOURCE,
  SHOW_EDIT_RESOURCE,
  HIDE_EDIT_RESOURCE,
  SET_EDIT_RESOURCE_ERRORS,
} from '../reducers/ActionTypes';

// Initial state
const initialState = {
  resources: [],
  editingResource: null,
  showEditingResource: false,
  resourceErrors: null,
};

// Create context
export const ResourcesContext = React.createContext();

// Provider component
export const ResourcesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ResourcesReducer, initialState);

  // Actions
  const GetResourcesList = (category) => {
    const [loading, setLoading] = useState(true);
    const [resources, setResources] = useState([]);

    const loadResources = async () => {
      const { data } = await api.getResourceList(category);

      dispatch({ type: SET_RESOURCES_LIST, payload: data });

      setResources(data);
      setLoading(false);
    };

    useEffect(() => {
      loadResources();
    }, []);

    return { loading, resources };
  };

  const createResource = async (category, formData) => {
    try {
      const { data } = await api.createResource(category, formData);
      dispatch({ type: CREATE_RESOURCE, payload: data });
    } catch (err) {
      dispatch({ type: SET_EDIT_RESOURCE_ERRORS, payload: err });
    }
  };

  const updateResource = async (id, category, formData) => {
    try {
      const { data } = await api.updateResource(id, category, formData);
      dispatch({ type: UPDATE_RESOURCE, payload: data });
    } catch (err) {
      dispatch({ type: SET_EDIT_RESOURCE_ERRORS, payload: err });
    }
  };

  const deleteResource = async (id, category) => {
    try {
      await api.deleteResource(id, category);
      dispatch({ type: DELETE_RESOURCE, payload: id });
    } catch (err) {
      dispatch({ type: SET_EDIT_RESOURCE_ERRORS, payload: err });
    }
  };

  const showEditResource = (resource) => {
    dispatch({ type: SHOW_EDIT_RESOURCE, payload: resource });
  };

  const hideEditResource = () => {
    dispatch({ type: HIDE_EDIT_RESOURCE });
  };

  return (
    <ResourcesContext.Provider
      value={{
        ...state,
        GetResourcesList,
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
