import { useState, useContext } from 'react';
import { Redirect, useParams, useHistory } from 'react-router-dom';

import { CategoriesContext } from '../../../contexts/CategoriesContext';
import { ResourcesContext } from '../../../contexts/ResourcesContext';
import { useGetCategory } from '../../../hooks/useGetCategory';

import { CategoriesEditDialog } from './CategoriesEditDialog';
import { ResourcesList } from '../resources/ResourcesList';
import { ResourcesEditDialog } from '../resources/ResourcesEditDialog';
import { DialogConfirm } from '../../views/DialogConfirm';
import SearchBar from '../../views/SearchBar';
import { Fab } from '../../views/Fab';
import { Loading } from '../../views/Loading';

import plusIcon from '../../../assets/icons/plus.svg';
import arrowLeftIcon from '../../../assets/icons/arrow-left.svg';

export const CategoriesContainer = () => {
  const { _id } = useParams();
  const history = useHistory();

  const { loading, category } = useGetCategory(_id);
  const { showEditCategory, deleteCategory } = useContext(CategoriesContext);
  const { showEditResource } = useContext(ResourcesContext);

  const [search, setSearch] = useState('');
  const [showDialogDelete, setShowDialogDelete] = useState(false);

  const handleBack = () => {
    history.goBack();
  };

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

  if (loading) {
    return <Loading text='Loading category...' />;
  }

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
        showBack={true}
      />
      <div className='list-header'>
        <img
          src={arrowLeftIcon}
          alt='Back to dashboard'
          className='icon-button'
          onClick={handleBack}
        />
        <h1 className='heading-1' data-testid='category-heading'>
          {category.name}
        </h1>
        <input
          type='button'
          className='text-button red'
          value='DELETE'
          onClick={requestDeleteCategory}
          data-testid='category-delete'
        />
        <input
          type='button'
          className='text-button'
          value='EDIT'
          onClick={handleEditCategory}
          data-testid='category-edit'
        />
      </div>
      <ResourcesList search={search} resources={category.resources} />
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
