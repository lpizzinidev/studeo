import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const SidenavItem = ({ destination, icon, title }) => {
  const location = useLocation();

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(location.pathname === destination);
  }, [location]);

  return (
    <Link to={destination}>
      <div className={`sidenav-item` + (active ? " active" : "")}>
        <img src={icon} className="icon" alt={title} />
        <p className="text-body-2">{title}</p>
      </div>
    </Link>
  );
};

export default SidenavItem;
