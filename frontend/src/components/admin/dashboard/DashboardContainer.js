import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';
import { CategoriesContext } from '../../../contexts/CategoriesContext';

import SearchBar from '../../views/SearchBar';
import { Fab } from '../../views/Fab';
import { CategoriesList } from '../categories/CategoriesList';
import { CategoriesEditDialog } from '../categories/CategoriesEditDialog';

import plusIcon from '../../../assets/icons/plus.svg';

const DashboardContainer = () => {
  const history = useHistory();

  const { logout } = useContext(AuthContext);
  const { showEditCategory } = useContext(CategoriesContext);

  const [search, setSearch] = useState('');

  const handleLogout = () => {
    logout(history);
  };

  const handleNewCategory = () => {
    showEditCategory(null);
  };

  return (
    <div>
      <SearchBar
        placeholder="Search category..."
        search={search}
        setSearch={setSearch}
      />
      <h1 className="heading-1">Hello, User</h1>
      <CategoriesList search={search} />
      <input
        type="button"
        className="button"
        value="LOGOUT"
        onClick={handleLogout}
      />
      <CategoriesEditDialog />
      <Fab icon={plusIcon} alt="New category" onClick={handleNewCategory} />
    </div>
  );
};

export default DashboardContainer;
