import { useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { CategoriesContext } from '../../../contexts/CategoriesContext';
import { ResourcesContext } from '../../../contexts/ResourcesContext';

import { CategoriesEditDialog } from './CategoriesEditDialog';
import { ResourcesList } from '../resources/ResourcesList';
import { ResourcesEditDialog } from '../resources/ResourcesEditDialog';
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

  const handleEditCategory = () => {
    showEditCategory(category);
  };

  const handleDeleteCategory = () => {
    deleteCategory(_id);
    history.goBack();
  };

  const handleNewResource = () => {
    showEditResource(null);
  };

  return (
    <div>
      <SearchBar
        placeholder='Search resource...'
        search={search}
        setSearch={setSearch}
      />
      <h1 className='heading-1'>{category.name}</h1>
      <img
        className='icon'
        src={editIcon}
        alt='Edit category'
        onClick={handleEditCategory}
      />
      <img
        className='icon'
        src={deleteIcon}
        alt='Delete category'
        onClick={handleDeleteCategory}
      />
      <ResourcesList search={search} />
      <CategoriesEditDialog />
      <ResourcesEditDialog />
      <Fab icon={plusIcon} alt='New resource' onClick={handleNewResource} />
    </div>
  );
};
