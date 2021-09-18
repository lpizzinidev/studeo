import { useState, useReducer } from "react";
import { Link, useHistory } from "react-router-dom";

import SearchBar from "../../views/SearchBar";
import DashboardCategoryList from "./DashboardCategoryList";

import { authReducer } from "../../../reducers/AuthReducer";

import { logout } from "../../../controllers/AuthController";

const DashboardContainer = () => {
  const history = useHistory();

  const [state, dispatch] = useReducer(authReducer);

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleLogout = () => {
    logout(dispatch, history);
  };

  return (
    <div>
      <SearchBar placeholder="Search category..." onSearch={handleSearch} />
      <h1 className="heading-1">Hello, User</h1>
      <Link to="/categories">
        <button type="button" className="button">
          Add category
        </button>
      </Link>
      <DashboardCategoryList search={search} />
      <hr />
      <input
        type="button"
        className="button"
        value="LOGOUT"
        onClick={handleLogout}
      />
    </div>
  );
};

export default DashboardContainer;
