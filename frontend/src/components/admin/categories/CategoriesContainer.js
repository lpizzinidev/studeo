import { useState, useContext } from 'react';
import { Redirect, useParams, useHistory } from 'react-router-dom';

import { CategoriesContext } from '../../../contexts/CategoriesContext';
import { ResourcesContext } from '../../../contexts/ResourcesContext';

import { CategoriesEditDialog } from './CategoriesEditDialog';
import { ResourcesList } from '../resources/ResourcesList';
import { ResourcesEditDialog } from '../resources/ResourcesEditDialog';
import { DialogConfirm } from '../../views/DialogConfirm';
import SearchBar from '../../views/SearchBar';
import { Fab } from '../../views/Fab';

import plusIcon from '../../../assets/icons/plus.svg';
import editIcon from '../../../assets/icons/edit.svg';
import deleteIcon from '../../../assets/icons/delete.svg';

export const CategoriesContainer = () => {
  const { _id } = useParams();
  const history = useHistory();

  const { categories, showEditCategory, deleteCategory } =
    useContext(CategoriesContext);
  const { showEditResource } = useContext(ResourcesContext);

  const category = categories.find((category) => category._id === _id);

  const [search, setSearch] = useState('');
  const [showDialogDelete, setShowDialogDelete] = useState(false);

  const handleEditCategory = () => {
    showEditCategory(category);
  };

  const requestDeleteCategory = () => {
    setShowDialogDelete(true);
  };

  const handleDeleteCategory = () => {
    deleteCategory(_id);
    history.goBack();
  };

  const handleNewResource = () => {
    showEditResource(null);
  };

  if (!category) {
    // Se non trovo la categoria torno alla dashboard
    return <Redirect to='/dashboard'></Redirect>;
  }

  return (
    <div>
      <SearchBar
        placeholder='Search resource...'
        search={search}
        setSearch={setSearch}
      />
      <div className='list-header'>
        <h1 className='heading-1'>{category.name}</h1>
        <input
          type='button'
          className='text-button mr-15'
          value='EDIT'
          onClick={handleEditCategory}
        />
        <input
          type='button'
          className='text-button red'
          value='DELETE'
          onClick={requestDeleteCategory}
        />
      </div>
      <ResourcesList search={search} />
      <CategoriesEditDialog />
      <ResourcesEditDialog />
      <DialogConfirm
        title='Delete category'
        message='Are you sure you want to delete the category and its resources?'
        confirmAction={handleDeleteCategory}
        show={showDialogDelete}
        setShow={setShowDialogDelete}
      />
      <Fab icon={plusIcon} alt='New resource' onClick={handleNewResource} />
    </div>
  );
};
