import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';

import SearchBar from '../../views/SearchBar';
import { CategoriesList } from '../categories/CategoriesList';

const DashboardContainer = () => {
  const history = useHistory();

  const { logout } = useContext(AuthContext);

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleLogout = () => {
    logout(history);
  };

  return (
    <div>
      <SearchBar placeholder='Search category...' onSearch={handleSearch} />
      <h1 className='heading-1'>Hello, User</h1>
      <Link to='/categories'>
        <button type='button' className='button'>
          Add category
        </button>
      </Link>
      <CategoriesList search={search} />
      <hr />
      <input
        type='button'
        className='button'
        value='LOGOUT'
        onClick={handleLogout}
      />
    </div>
  );
};

export default DashboardContainer;
