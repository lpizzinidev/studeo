import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ResourcesContext } from '../../../contexts/ResourcesContext';

import { ResourcesItem } from './ResourcesItem';
import { Fab } from '../../views/Fab';
import { Loading } from '../../views/Loading';
import { NoData } from '../../views/NoData';

import plusIcon from '../../../assets/icons/plus.svg';

export const ResourcesList = ({ search }) => {
  const { _id } = useParams();

  const { GetResourcesList } = useContext(ResourcesContext);
  const { loading, resources } = GetResourcesList(_id);

  if (loading) {
    return <Loading text='Loading resources...' />;
  }

  return (
    <div>
      <div className='card-list'>
        {resources.length === 0 ? (
          <NoData text='No resources found' />
        ) : (
          <>
            <p className='subtitle'>Resources</p>
            {resources
              .filter((resource) => {
                return resource.category === _id;
              })
              .filter((resource) => {
                return resource.name
                  .toUpperCase()
                  .includes(search.toUpperCase());
              })
              .map((resource) => {
                return <ResourcesItem key={resource._id} {...resource} />;
              })}
          </>
        )}
      </div>
      <Fab icon={plusIcon} destination={`/resources/${_id}`} />
    </div>
  );
};
