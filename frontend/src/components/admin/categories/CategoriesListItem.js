import { Link } from 'react-router-dom';

export const CategoriesListItem = ({ _id, name, resources }) => {
  const resourcesDesc =
    !resources || resources.length === 0
      ? 'No resources'
      : resources.length === 1
      ? '1 resource'
      : `${resources.length} resources`;
  return (
    <Link to={`/categories/${_id}`}>
      <div className='card card-item' data-testid='category-item'>
        <div>
          <div>
            <p className='text-footer'>{resourcesDesc}</p>
            <p className='text-body-1'>{name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
