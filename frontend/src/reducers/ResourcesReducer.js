import {
  SET_RESOURCES_LIST,
  CREATE_RESOURCE,
  UPDATE_RESOURCE,
  DELETE_RESOURCE,
  SHOW_EDIT_RESOURCE,
  HIDE_EDIT_RESOURCE,
  SET_EDIT_RESOURCE_ERRORS,
} from './ActionTypes';

export const ResourcesReducer = (state, action) => {
  switch (action.type) {
    case SET_RESOURCES_LIST:
      return {
        ...state,
        resources: action.payload,
      };
    case CREATE_RESOURCE:
      return {
        ...state,
        resources: [...state.resources, action.payload],
        resourcesErrors: null,
      };
    case UPDATE_RESOURCE:
      const otherResources = state.resources.filter(
        (resource) => resource._id !== action.payload._id
      );
      return {
        ...state,
        resources: [...otherResources, action.payload],
        resourcesErrors: null,
      };
    case DELETE_RESOURCE:
      const remainingResources = state.resources.filter(
        (resource) => resource._id !== action.payload._id
      );
      return {
        ...state,
        resources: remainingResources,
        resourcesErrors: null,
      };
    case SHOW_EDIT_RESOURCE:
      return {
        ...state,
        editingResource: action.payload,
        showEditingResource: true,
      };
    case HIDE_EDIT_RESOURCE:
      return {
        ...state,
        editingResource: null,
        showEditingResource: false,
      };
    case SET_EDIT_RESOURCE_ERRORS:
      return {
        ...state,
        resourcesErrors: action.payload,
      };
    default:
      return state;
  }
};
