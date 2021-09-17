import CategoriesItem from "./CategoriesItem";

import { GetCategories } from "../../../controllers/CategoriesController";

const CategoriesList = ({ search }) => {
  const { loading, categories } = GetCategories();

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
          return <CategoriesItem key={category._id} {...category} />;
        })}
    </div>
  );
};

export default CategoriesList;
