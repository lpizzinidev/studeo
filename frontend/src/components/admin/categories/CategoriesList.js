import CategoriesItem from "./CategoriesItem";

import { GetCategories } from "../../../controllers/CategoriesController";

const CategoriesList = () => {
  const { loading, categories } = GetCategories();

  if (loading) {
    return "Loading categories...";
  }

  return (
    <div className="card-list-w100">
      {categories.map((category) => {
        return <CategoriesItem key={category._id} {...category} />;
      })}
    </div>
  );
};

export default CategoriesList;
