import { useParams } from 'react-router-dom';

import { useGetCategory } from '../../../hooks/useGetCategory';

import { ResourcesItem } from './ResourcesItem';
import { Loading } from '../../views/Loading';
import { NoData } from '../../views/NoData';

export const ResourcesList = ({ search }) => {
  const { _id } = useParams();

  const { loading, category } = useGetCategory(_id);

  if (loading) {
    return <Loading text='Loading resources...' />;
  }

  const filteredResources =
    category && category[0]
      ? category[0].resources.filter((resource) => {
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
