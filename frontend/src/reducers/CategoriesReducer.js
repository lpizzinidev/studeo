import {
  SHOW_EDIT_CATEGORY,
  HIDE_EDIT_CATEGORY,
  SET_EDIT_CATEGORY_ERRORS,
} from './ActionTypes';

export const CategoriesReducer = (state, action) => {
  switch (action.type) {
    case SHOW_EDIT_CATEGORY:
      return {
        ...state,
        editingCategory: action.payload,
        showEditingCategory: true,
        categoryErrors: [],
      };
    case HIDE_EDIT_CATEGORY:
      return {
        ...state,
        editingCategory: null,
        showEditingCategory: false,
      };
    case SET_EDIT_CATEGORY_ERRORS:
      return {
        ...state,
        categoryErrors: action.payload,
      };
    default:
      return state;
  }
};
