import {
  SET_CATEGORIES_LIST,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "./ActionTypes";

export const categoriesInitialState = {
  categories: [],
};

export const categoriesReducer = (state, action) => {
  switch (action.type) {
    case SET_CATEGORIES_LIST:
      return { ...state, categories: action.payload };
    case CREATE_CATEGORY:
      return { ...state, categories: [...state.categories, action.payload] };
    case UPDATE_CATEGORY:
      const otherCategories = state.categories.filter(
        (category) => category._id !== action.payload._id
      );
      return { ...state, categories: [...otherCategories, action.payload] };
    case DELETE_CATEGORY:
      const remainingCategories = state.categories.filter(
        (category) => category._id !== action.payload
      );
      return { ...state, categories: remainingCategories };
    default:
      return state;
  }
};
