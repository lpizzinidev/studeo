import { useContext } from "react";
import { useParams } from "react-router-dom";

import { ResourcesContext } from "../../../contexts/ResourcesContext";

import CategoriesEditResourcesItem from "./CategoriesEditResourcesItem";

const CategoriesEditResourcesList = () => {
  const { _id } = useParams();

  const { GetResourcesList } = useContext(ResourcesContext);
  const { loading, resources } = GetResourcesList(_id);

  if (loading) {
    return "Loading resources...";
  }

  return (
    <div>
      <div className="card-list">
        {resources.map((resource) => {
          return (
            <CategoriesEditResourcesItem key={resource._id} {...resource} />
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesEditResourcesList;
