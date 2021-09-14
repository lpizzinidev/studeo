import { Link } from "react-router-dom";

const ResourcesItem = ({ _id, name, category }) => {
  return (
    <Link to={`/resources-edit/${_id}`}>
      <div className="card card-item">
        <div>
          <p className="text-body-1">{name}</p>
          <p className="text-footer">{category}</p>
        </div>
      </div>
    </Link>
  );
};

export default ResourcesItem;
