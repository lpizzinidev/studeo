import { Link } from "react-router-dom";

const DashboardCategoryItem = ({ _id, name }) => {
  return (
    <Link to={`/categories-edit/${_id}`}>
      <div className="card card-item">
        <div>
          <p className="text-body-1">{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default DashboardCategoryItem;
