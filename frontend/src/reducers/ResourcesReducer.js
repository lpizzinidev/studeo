import * as actionTypes from './ActionTypes';

export const ResourcesReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SHOW_EDIT_RESOURCE:
      return {
        ...state,
        editingResource: action.payload,
        showEditingResource: true,
      };
    case actionTypes.HIDE_EDIT_RESOURCE:
      return {
        ...state,
        editingResource: null,
        showEditingResource: false,
      };
    default:
      return state;
  }
};
