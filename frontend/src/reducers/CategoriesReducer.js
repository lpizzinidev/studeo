import * as actionTypes from './ActionTypes';

export const CategoriesReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SHOW_EDIT_CATEGORY:
      return {
        ...state,
        editingCategory: action.payload,
        showEditingCategory: true,
      };
    case actionTypes.HIDE_EDIT_CATEGORY:
      return {
        ...state,
        editingCategory: null,
        showEditingCategory: false,
      };
    default:
      return state;
  }
};
