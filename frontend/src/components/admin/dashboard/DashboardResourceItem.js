import { Link } from "react-router-dom";

const DashboardResourceItem = ({ _id, category, name, description }) => {
  return (
    <Link to={`/resources-edit/${_id}`}>
      <div className="card card-item">
        <div>
          <p className="text-footer">{category}</p>
          <p className="text-body-1">{name}</p>
          <p className="text-body-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default DashboardResourceItem;
