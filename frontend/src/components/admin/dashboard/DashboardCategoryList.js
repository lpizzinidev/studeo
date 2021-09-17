import DashboardCategoryItem from "./DashboardCategoryItem";

import { GetCategories } from "../../../controllers/CategoriesController";

const DashboardCategoryList = ({ search }) => {
  const { loading, categories } = GetCategories();

  if (loading) {
    return "Loading categories...";
  }

  return (
    <div className="card-list">
      <p className="text-body-1">Your categories ({categories.length})</p>
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
