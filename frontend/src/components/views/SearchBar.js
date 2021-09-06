import searchIcon from "../../assets/icons/search.svg";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="search-bar-container">
      <img src={searchIcon} className="icon" alt="Search" />
      <input
        type="text"
        className="input-text-field"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
