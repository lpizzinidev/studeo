import { useState, useReducer } from "react";
import { useHistory } from "react-router-dom";

import SearchBar from "../../views/SearchBar";
import DashboardCategoryList from "./DashboardCategoryList";

import { authReducer } from "../../../reducers/AuthReducer";

import CategoriesContext from "../../../contexts/CategoriesContext";
import { categoriesReducer } from "../../../reducers/CategoriesReducer";
import { categoriesInitialState } from "../../../reducers/CategoriesReducer";

import { logout } from "../../../controllers/AuthController";

const DashboardContainer = () => {
  const history = useHistory();

  const [state, dispatch] = useReducer(authReducer);
  const [stateCategories, dispatchCategories] = useReducer(
    categoriesReducer,
    categoriesInitialState
  );

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleLogout = () => {
    logout(dispatch, history);
  };

  return (
    <CategoriesContext.Provider value={{ stateCategories, dispatchCategories }}>
      <div>
        <SearchBar placeholder="Search category..." onSearch={handleSearch} />
        <h1 className="heading-1">Hello, User</h1>
        <DashboardCategoryList search={search} />
        <hr />
        <input
          type="button"
          className="button"
          value="LOGOUT"
          onClick={handleLogout}
        />
      </div>
    </CategoriesContext.Provider>
  );
};

export default DashboardContainer;
