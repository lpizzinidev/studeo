import { useParams } from "react-router-dom";

import ResourcesItem from "./ResourcesItem";

import { GetResourceList } from "../../../controllers/ResourcesController";

const ResourcesList = ({ search }) => {
  const { category } = useParams();

  const { loading, resources } = GetResourceList();

  if (loading) {
    return "Loading resources...";
  }

  return (
    <div>
      <div className="card-list">
        {resources
          .filter((resource) => {
            return resource.category === category;
          })
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
