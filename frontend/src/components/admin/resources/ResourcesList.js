import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ResourcesContext } from '../../../contexts/ResourcesContext';

import { ResourcesItem } from './ResourcesItem';

export const ResourcesList = ({ search }) => {
  const { _id } = useParams();

  const { GetResourcesList } = useContext(ResourcesContext);
  const { loading, resources } = GetResourcesList(_id);

  if (loading) {
    return 'Loading resources...';
  }

  return (
    <div>
      <div className='card-list'>
        {resources
          .filter((resource) => {
            return resource.category === _id;
          })
          .map((resource) => {
            return <ResourcesItem key={resource._id} {...resource} />;
          })}
      </div>
    </div>
  );
};
