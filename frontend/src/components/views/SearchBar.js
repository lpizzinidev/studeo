import { useHistory } from 'react-router-dom';

import searchIcon from '../../assets/icons/search.svg';
import clearIcon from '../../assets/icons/clear.svg';
import arrowLeftIcon from '../../assets/icons/arrow-left.svg';

const SearchBar = ({ search, setSearch, placeholder, showBack }) => {
  const history = useHistory();

  const handleBack = (e) => {
    history.goBack();
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClear = () => {
    setSearch('');
  };

  return (
    <div className='search-bar-container'>
      {showBack && (
        <img
          src={arrowLeftIcon}
          className='icon back-icon'
          alt='Back'
          onClick={handleBack}
        />
      )}
      <img
        src={search === '' ? searchIcon : clearIcon}
        className='search-icon'
        alt={search === '' ? 'Search' : 'Clear search'}
        onClick={handleClear}
      />
      <input
        type='text'
        className='input-text-field'
        value={search}
        onInput={handleSearch}
        placeholder={placeholder}
        data-testid='search-field'
      />
    </div>
  );
};

export default SearchBar;
