import searchIcon from "../../assets/icons/search.svg";

const SearchBar = ({ onSearch, placeholder }) => {
  return (
    <div className="search-bar-container">
      <img src={searchIcon} className="icon" alt="Search" />
      <input
        type="text"
        className="input-text-field"
        onInput={onSearch}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
