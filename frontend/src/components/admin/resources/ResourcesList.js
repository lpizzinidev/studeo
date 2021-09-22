import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ResourcesContext } from '../../../contexts/ResourcesContext';

import { ResourcesItem } from './ResourcesItem';
import { Loading } from '../../views/Loading';
import { NoData } from '../../views/NoData';

export const ResourcesList = ({ search }) => {
  const { _id } = useParams();

  const { GetResourcesList } = useContext(ResourcesContext);
  const { loading, resources } = GetResourcesList(_id);

  if (loading) {
    return <Loading text='Loading resources...' />;
  }

  const filteredResources = resources.filter((resource) => {
    return resource.name.toUpperCase().includes(search.toUpperCase());
  });

  if (filteredResources.length === 0) {
    return <NoData text='No resources found' />;
  }

  return (
    <div className='card-list'>
      <p className='subtitle'>Resources</p>
      {filteredResources.map((resource) => {
        return <ResourcesItem key={resource._id} {...resource} />;
      })}
    </div>
  );
};
