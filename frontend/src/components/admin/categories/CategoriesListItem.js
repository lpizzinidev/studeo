import { Link } from 'react-router-dom';

export const CategoriesListItem = ({ _id, name, resources }) => {
  const resourcesDesc =
    resources.length +
    ' ' +
    (resources.length === 1 ? 'resource' : 'resources');
  return (
    <Link to={`/categories/${_id}`}>
      <div className='card card-item'>
        <div>
          <p className='text-footer'>{resourcesDesc}</p>
          <p className='text-body-1'>{name}</p>
        </div>
      </div>
    </Link>
  );
};
