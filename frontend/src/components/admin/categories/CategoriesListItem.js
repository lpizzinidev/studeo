import { Link } from 'react-router-dom';

export const CategoriesListItem = ({ _id, name }) => {
  return (
    <Link to={`/categories/${_id}`}>
      <div className='card card-item'>
        <div>
          <p className='text-body-1'>{name}</p>
        </div>
      </div>
    </Link>
  );
};
