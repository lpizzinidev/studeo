import { useContext } from 'react';

import { ResourcesContext } from '../../../contexts/ResourcesContext';

import * as utils from '../../../util/util';

export const ResourcesItem = ({ resource }) => {
  const { showEditResource } = useContext(ResourcesContext);

  const handleClick = () => {
    showEditResource(resource);
  };

  return (
    <div className='card card-item' onClick={handleClick}>
      <div>
        <p className='text-footer'>
          {resource.author !== '' ? resource.author : 'No author'} -{' '}
          {utils.formatDuration(resource.duration)}
        </p>
        <p className='text-body-1'>{resource.name}</p>
      </div>
    </div>
  );
};
