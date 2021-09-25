import { useContext } from 'react';

import { ResourcesContext } from '../../../contexts/ResourcesContext';

export const ResourcesItem = ({ resource }) => {
  const { showEditResource } = useContext(ResourcesContext);

  const handleClick = () => {
    showEditResource(resource);
  };

  return (
    <div className="card card-item" onClick={handleClick}>
      <div>
        <p className="text-body-1">{resource.name}</p>
      </div>
    </div>
  );
};
