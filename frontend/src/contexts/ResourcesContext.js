import React, { useState, useEffect, useReducer } from 'react';
import { ResourcesReducer } from '../reducers/ResourcesReducer';

// API
import * as api from '../api/server';

import * as utils from '../util/util';

// Action types
import * as actionTypes from '../reducers/ActionTypes';

// Initial state
const initialState = {
  resources: [],
  editingResource: null,
  showEditingResource: false,
  resourceErrors: [],
};

// Create context
export const ResourcesContext = React.createContext();

// Provider component
export const ResourcesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ResourcesReducer, initialState);

  // Actions
  const GetResourcesList = (resource) => {
    const [loading, setLoading] = useState(true);
    const [resources, setResources] = useState([]);

    const loadResources = async () => {
      const { data } = await api.getResourceList(resource);

      dispatch({ type: actionTypes.SET_RESOURCES_LIST, payload: data });

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
      dispatch({ type: actionTypes.CREATE_RESOURCE, payload: data });

      hideEditResource();
    } catch (err) {
      dispatch({
        type: actionTypes.SET_EDIT_RESOURCE_ERRORS,
        payload: utils.handleErrorObj(err),
      });
    }
  };

  const updateResource = async (category, formData) => {
    try {
      const { data } = await api.updateResource(category, formData);
      dispatch({ type: actionTypes.UPDATE_RESOURCE, payload: data });

      hideEditResource();
    } catch (err) {
      dispatch({
        type: actionTypes.SET_EDIT_RESOURCE_ERRORS,
        payload: utils.handleErrorObj(err),
      });
    }
  };

  const deleteResource = async (id, resource) => {
    try {
      await api.deleteResource(id, resource);
      dispatch({ type: actionTypes.DELETE_RESOURCE, payload: id });
    } catch (err) {
      dispatch({ type: actionTypes.SET_EDIT_RESOURCE_ERRORS, payload: err });
    }
  };

  const showEditResource = (resource) => {
    dispatch({ type: actionTypes.SHOW_EDIT_RESOURCE, payload: resource });
  };

  const hideEditResource = () => {
    dispatch({ type: actionTypes.HIDE_EDIT_RESOURCE });
  };

  const cancelResourceErrors = () => {
    dispatch({ type: actionTypes.SET_EDIT_RESOURCE_ERRORS, payload: [] });
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
        cancelResourceErrors,
      }}
    >
      {children}
    </ResourcesContext.Provider>
  );
};
