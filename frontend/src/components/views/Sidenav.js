import SidenavItem from "./SidenavItem";

const Sidenav = ({ open }) => {
  return (
    <div className={`sidenav ${open ? "open" : ""}`}>
      <SidenavItem destination="/dashboard" title="Dashboard" />
      <SidenavItem destination="/resources" title="Resources" />
      <SidenavItem destination="/categories" title="Categories" />
    </div>
  );
};

export default Sidenav;
