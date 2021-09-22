import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';

import SearchBar from '../../views/SearchBar';
import { Fab } from '../../views/Fab';
import { CategoriesList } from '../categories/CategoriesList';
import { CategoriesEditDialog } from '../categories/CategoriesEditDialog';

import plusIcon from '../../../assets/icons/plus.svg';

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
      <CategoriesList search={search} />
      <input
        type='button'
        className='button'
        value='LOGOUT'
        onClick={handleLogout}
      />
      <CategoriesEditDialog />
      <Fab icon={plusIcon} destination='/categories' />
    </div>
  );
};

export default DashboardContainer;
