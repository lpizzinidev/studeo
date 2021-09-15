import { Link } from "react-router-dom";

const SidenavItem = ({ destination, title }) => {
  return (
    <Link to={destination}>
      <div className="text-body-2">{title}</div>
    </Link>
  );
};

export default SidenavItem;
