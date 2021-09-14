import DashboardResourceItem from "./DashboardResourceItem";

import { GetResourceList } from "../../../controllers/ResourcesController";

const DashboardResourceList = () => {
  const { loading, resources } = GetResourceList();

  if (loading) {
    return "Loading resources...";
  }

  return (
    <div className="card-list">
      {resources.map((resource) => {
        return <DashboardResourceItem key={resource._id} {...resource} />;
      })}
    </div>
  );
};

export default DashboardResourceList;
