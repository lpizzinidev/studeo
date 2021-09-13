import DashboardCategoryItem from "./DashboardCategoryItem";

import { GetCategories } from "../../../controllers/CategoriesController";

const DashboardCategoryList = () => {
  const { loading, categories } = GetCategories();

  if (loading) {
    return "Loading categories...";
  }

  return (
    <div className="card-list">
      {categories.map((category) => {
        return <DashboardCategoryItem key={category._id} {...category} />;
      })}
    </div>
  );
};

export default DashboardCategoryList;
