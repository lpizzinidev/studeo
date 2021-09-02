import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <div className="home-navbar">
      <Link to="/signin">
        <input type="button" className="text-button" value="LOG IN" />
      </Link>
      <Link to="/signup">
        <input type="button" className="button" value="SIGN UP" />
      </Link>
    </div>
  );
};

export default HomeNav;
