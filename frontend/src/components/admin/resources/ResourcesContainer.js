import { useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../../views/SearchBar";
import ResourcesList from "./ResourcesList";

const ResourcesContainer = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} placeholder="Search resource..." />
      <div className="list-header">
        <h1 className="heading-1">Resources</h1>
        <Link to="/resources-edit">
          <button type="button" className="button">
            Add resource
          </button>
        </Link>
      </div>
      <ResourcesList search={search} />
    </div>
  );
};

export default ResourcesContainer;
