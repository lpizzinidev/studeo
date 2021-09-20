import React, { useState, useEffect, useReducer } from "react";
import { ResourcesReducer } from "../reducers/ResourcesReducer";

// API
import * as api from "../api/server";

// Action types
import {
  SET_RESOURCES_LIST,
  CREATE_RESOURCE,
  UPDATE_RESOURCE,
  DELETE_RESOURCE,
} from "../reducers/ActionTypes";

// Initial state
const initialState = {
  resources: [],
};

// Create context
export const ResourcesContext = React.createContext();

// Provider component
export const ResourcesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ResourcesReducer, initialState);

  // Actions
  const GetResourcesList = () => {
    const [loading, setLoading] = useState(true);
    const [resources, setResources] = useState([]);

    const loadResources = async () => {
      const { data } = await api.getResourceList();

      dispatch({ type: SET_RESOURCES_LIST, payload: data });

      setResources(data);
      setLoading(false);
    };

    useEffect(() => {
      loadResources();
    }, []);

    return { loading, resources };
  };

  const getResource = (id) => {
    return state.resources.filter((resource) => resource._id === id);
  };

  const createResource = async (formData) => {
    try {
      const { data } = await api.createResource(formData);
      dispatch({ type: CREATE_RESOURCE, payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  const updateResource = async (id, formData) => {
    try {
      const { data } = await api.updateResource(id, formData);
      dispatch({ type: UPDATE_RESOURCE, payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteResource = async (id) => {
    try {
      await api.deleteResource(id);
      dispatch({ type: DELETE_RESOURCE, payload: id });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ResourcesContext.Provider
      value={{
        resources: state.resources,
        GetResourcesList,
        getResource,
        createResource,
        updateResource,
        deleteResource,
      }}
    >
      {children}
    </ResourcesContext.Provider>
  );
};
