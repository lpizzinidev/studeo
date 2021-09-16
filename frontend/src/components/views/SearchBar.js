import { useContext } from "react";

import AppContext from "../../contexts/AppContext";

import menuIcon from "../../assets/icons/menu.svg";
import searchIcon from "../../assets/icons/search.svg";

const SearchBar = ({ onSearch, placeholder }) => {
  const { setSidenavOpen } = useContext(AppContext);

  const handleMenuToggle = () => {
    setSidenavOpen((sidenavOpen) => !sidenavOpen);
  };

  return (
    <div className="search-bar-layout">
      <img
        src={menuIcon}
        className="icon"
        alt="Search"
        onClick={handleMenuToggle}
      />
      <div className="search-bar-container">
        <img src={searchIcon} className="icon" alt="Search" />
        <input
          type="text"
          className="input-text-field"
          onInput={onSearch}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default SearchBar;
