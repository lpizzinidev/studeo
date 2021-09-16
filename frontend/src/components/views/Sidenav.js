import homeIcon from "../../assets/icons/home.svg";
import bookmarkIcon from "../../assets/icons/bookmark.svg";
import archiveIcon from "../../assets/icons/archive.svg";

import SidenavItem from "./SidenavItem";

const Sidenav = ({ open }) => {
  return (
    <div className={`sidenav ${open ? "open" : ""}`}>
      <SidenavItem destination="/dashboard" icon={homeIcon} title="Dashboard" />
      <SidenavItem
        destination="/resources"
        icon={bookmarkIcon}
        title="Resources"
      />
      <SidenavItem
        destination="/categories"
        icon={archiveIcon}
        title="Categories"
      />
    </div>
  );
};

export default Sidenav;
