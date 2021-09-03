import { useReducer } from "react";
import { useHistory } from "react-router-dom";

import { authReducer } from "../../reducers/AuthReducer";

import { logout } from "../../controllers/AuthController";

const DashboardContainer = () => {
  const history = useHistory();

  const [state, dispatch] = useReducer(authReducer);

  const handleLogout = () => {
    logout(dispatch, history);
  };

  return (
    <div>
      <h1 className="heading-1">Welcome</h1>
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
