import { Link, useParams } from 'react-router-dom';

import { CategoriesEdit } from './CategoriesEdit';
import { ResourcesList } from '../resources/ResourcesList';

export const CategoriesContainer = () => {
  const { _id } = useParams();

  return (
    <div>
      <h1 className='heading-1'>Edit category</h1>
      <CategoriesEdit />
      {_id && (
        <>
          <Link to={`/resources/${_id}`}>
            <button type='button' className='button'>
              Add resource
            </button>
          </Link>
          <ResourcesList />
        </>
      )}
    </div>
  );
};
