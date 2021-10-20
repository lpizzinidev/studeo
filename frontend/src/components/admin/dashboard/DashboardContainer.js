import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';
import { CategoriesContext } from '../../../contexts/CategoriesContext';

import SearchBar from '../../views/SearchBar';
import { Fab } from '../../views/Fab';
import { CategoriesList } from '../categories/CategoriesList';
import { CategoriesEditDialog } from '../categories/CategoriesEditDialog';
import { DialogConfirm } from '../../views/DialogConfirm';

import plusIcon from '../../../assets/icons/plus.svg';

const DashboardContainer = () => {
  const history = useHistory();

  const { logout } = useContext(AuthContext);
  const { showEditCategory } = useContext(CategoriesContext);

  const [search, setSearch] = useState('');
  const [showDialogLogout, setShowDialogLogout] = useState(false);

  const requestLogout = () => {
    setShowDialogLogout(true);
  };

  const handleLogout = () => {
    logout(history);
    setShowDialogLogout(false);
  };

  const handleNewCategory = () => {
    showEditCategory(null);
  };

  return (
    <div>
      <SearchBar
        placeholder='Search category...'
        search={search}
        setSearch={setSearch}
      />
      <div className='list-header'>
        <h1 className='heading-1'>Welcome back!</h1>
        <input
          type='button'
          className='text-button red'
          value='LOGOUT'
          onClick={requestLogout}
        />
      </div>
      <CategoriesList search={search} />
      <CategoriesEditDialog />
      <DialogConfirm
        title='Logout'
        message='Are you sure you want to exit the application?'
        confirmAction={handleLogout}
        show={showDialogLogout}
        setShow={setShowDialogLogout}
      />
      <Fab icon={plusIcon} alt='New category' onClick={handleNewCategory} />
    </div>
  );
};

export default DashboardContainer;
