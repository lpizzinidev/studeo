const DashboardResourceItem = ({ category, name, description }) => {
  return (
    <div className="card card-item">
      <div>
        <p className="text-footer">{category}</p>
        <p className="text-body-1">{name}</p>
        <p className="text-body-2">{description}</p>
      </div>
    </div>
  );
};

export default DashboardResourceItem;
