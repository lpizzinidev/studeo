import ResourcesItem from "./ResourcesItem";

import { GetResourceList } from "../../../controllers/ResourcesController";

const ResourcesList = ({ search }) => {
  const { loading, resources } = GetResourceList();

  if (loading) {
    return "Loading resources...";
  }

  return (
    <div>
      <div className="card-list-w100">
        {resources
          .filter((resource) => {
            return resource.name.toUpperCase().includes(search.toUpperCase());
          })
          .map((resource) => {
            return <ResourcesItem key={resource._id} {...resource} />;
          })}
      </div>
    </div>
  );
};

export default ResourcesList;
