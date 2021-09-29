import {
  SET_CATEGORIES_LIST,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  SHOW_EDIT_CATEGORY,
  HIDE_EDIT_CATEGORY,
  SET_EDIT_CATEGORY_ERRORS,
} from './ActionTypes';

export const CategoriesReducer = (state, action) => {
  switch (action.type) {
    case SET_CATEGORIES_LIST:
      return { ...state, categories: action.payload };
    case CREATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case UPDATE_CATEGORY:
      const otherCategories = state.categories.filter(
        (category) => category._id !== action.payload._id
      );
      return {
        ...state,
        categories: [...otherCategories, action.payload],
      };
    case DELETE_CATEGORY:
      const remainingCategories = state.categories.filter(
        (category) => category._id !== action.payload
      );
      return { ...state, categories: remainingCategories };
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
