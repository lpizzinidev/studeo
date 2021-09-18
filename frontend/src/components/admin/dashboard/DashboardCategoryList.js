import { useContext } from "react";

import CategoriesContext from "../../../contexts/CategoriesContext";

import DashboardCategoryItem from "./DashboardCategoryItem";

import { GetCategories } from "../../../controllers/CategoriesController";

const DashboardCategoryList = ({ search }) => {
  const { dispatchCategories } = useContext(CategoriesContext);

  const { loading, categories } = GetCategories(dispatchCategories);

  if (loading) {
    return "Loading categories...";
  }

  return (
    <div className="card-list">
      {categories
        .filter((category) => {
          return category.name.toUpperCase().includes(search.toUpperCase());
        })
        .map((category) => {
          return <DashboardCategoryItem key={category._id} {...category} />;
        })}
    </div>
  );
};

export default DashboardCategoryList;
