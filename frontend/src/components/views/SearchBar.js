import searchIcon from '../../assets/icons/search.svg';
import clearIcon from '../../assets/icons/clear.svg';

const SearchBar = ({ search, setSearch, placeholder }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClear = () => {
    setSearch('');
  };

  return (
    <div className='search-bar-container'>
      <img
        src={search === '' ? searchIcon : clearIcon}
        className='icon'
        alt={search === '' ? 'Search' : 'Clear search'}
        onClick={handleClear}
      />
      <input
        type='text'
        className='input-text-field'
        value={search}
        onInput={handleSearch}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
