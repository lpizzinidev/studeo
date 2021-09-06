import { Link } from "react-router-dom";

const DashboardListHeader = ({ title, destPath }) => {
  return (
    <div className="list-header">
      <p className="text-body-1">{title}</p>
      <Link to={destPath}>
        <button type="button" className="info-button">
          See more...
        </button>
      </Link>
    </div>
  );
};

export default DashboardListHeader;
