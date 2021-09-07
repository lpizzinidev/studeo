import { Link } from "react-router-dom";

const CategoriesItem = ({ _id, name }) => {
  return (
    <Link to={`/categories-edit/${_id}`}>
      <div className="card card-item">
        <div>
          <p className="text-body-1">{name}</p>
          <p className="text-footer">3 resources</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoriesItem;
