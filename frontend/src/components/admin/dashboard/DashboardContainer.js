import { useReducer } from "react";
import { useHistory } from "react-router-dom";

import SearchBar from "../../views/SearchBar";
import DashboardListHeader from "./DashboardListHeader";
import DashboardCategoryList from "./DashboardCategoryList";
import DashboardResourceList from "./DashboardResourceList";

import { authReducer } from "../../../reducers/AuthReducer";

import { logout } from "../../../controllers/AuthController";

const DashboardContainer = () => {
  const history = useHistory();

  const [state, dispatch] = useReducer(authReducer);

  const handleLogout = () => {
    logout(dispatch, history);
  };

  return (
    <div>
      <SearchBar placeholder="Search resource..." />
      <h1 className="heading-1">Hello, User</h1>
      <DashboardListHeader title="Categories" destPath="/categories" />
      <DashboardCategoryList />
      <DashboardListHeader
        title="Recently added resources"
        destPath="/resources"
      />
      <DashboardResourceList />
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
