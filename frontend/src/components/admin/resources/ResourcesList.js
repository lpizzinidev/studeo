import { ResourcesItem } from './ResourcesItem';
import { NoData } from '../../views/NoData';

export const ResourcesList = ({ resources, search }) => {
  const filteredResources = resources
    ? resources.filter((resource) => {
        return resource.name.toUpperCase().includes(search.toUpperCase());
      })
    : [];

  if (filteredResources.length === 0) {
    return <NoData text='No resources found' />;
  }

  return (
    <div className='card-list'>
      <p className='subtitle'>Resources</p>
      {filteredResources.map((resource) => {
        return <ResourcesItem key={resource._id} resource={resource} />;
      })}
    </div>
  );
};
