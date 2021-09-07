import CategoriesItem from "./CategoriesItem";

import { GetCategories } from "../../../controllers/CategoriesController";

const CategoriesList = () => {
  const { loading, categories } = GetCategories();

  return (
    <div className="card-list-w100">
      {loading
        ? "Loading categories..."
        : categories.map((category) => {
            return <CategoriesItem key={category._id} {...category} />;
          })}
    </div>
  );
};

export default CategoriesList;
