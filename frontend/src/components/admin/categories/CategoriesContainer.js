import { Link, useParams } from 'react-router-dom';

import { CategoriesEdit } from './CategoriesEdit';
import { ResourcesList } from '../resources/ResourcesList';

export const CategoriesContainer = () => {
  const { _id } = useParams();

  return (
    <div>
      <h1 className='heading-2'>{_id ? 'Edit' : 'New'} category</h1>
      <div className='category-container'>
        <CategoriesEdit />
        {_id && <ResourcesList />}
      </div>
    </div>
  );
};
