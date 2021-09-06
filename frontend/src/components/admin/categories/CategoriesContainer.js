import { Link } from "react-router-dom";

import SearchBar from "../../views/SearchBar";
import CategoriesList from "./CategoriesList";

const CategoriesContainer = () => {
  return (
    <div>
      <SearchBar placeholder="Search category..." />
      <div className="list-header">
        <h1 className="heading-1">Categories</h1>
        <Link to="/categories-edit">
          <button type="button" className="button">
            Add category
          </button>
        </Link>
      </div>
      <CategoriesList />
    </div>
  );
};

export default CategoriesContainer;
