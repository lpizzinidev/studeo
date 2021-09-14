import { useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../../views/SearchBar";
import CategoriesList from "./CategoriesList";

const CategoriesContainer = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} placeholder="Search category..." />
      <div className="list-header">
        <h1 className="heading-1">Categories</h1>
        <Link to="/categories-edit">
          <button type="button" className="button">
            Add category
          </button>
        </Link>
      </div>
      <CategoriesList search={search} />
    </div>
  );
};

export default CategoriesContainer;
