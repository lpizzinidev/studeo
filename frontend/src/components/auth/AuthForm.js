import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import TextInput from "../views/TextInput";

const AuthForm = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(location === "/signin");
  return (
    <div>
      <h2 className="heading-2">Login</h2>
      <form>
        <TextInput name="E-mail" />
        <TextInput type="password" name="Password" />
        {isLogin || <TextInput type="password" name="Confirm password" />}
        <input type="submit" className="button" value="LOGIN" />
      </form>
      {isLogin ? (
        <p>
          Not registered?{" "}
          <Link to="/signup">
            <strong>Create an account</strong>
          </Link>
        </p>
      ) : (
        <p>
          Already registered?{" "}
          <Link to="/signin">
            <strong>Sign in</strong>
          </Link>
        </p>
      )}
    </div>
  );
};

export default AuthForm;
