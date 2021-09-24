import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../../contexts/CategoriesContext';
import { ResourcesContext } from '../../../contexts/ResourcesContext';

import { ResourcesList } from '../resources/ResourcesList';
import SearchBar from '../../views/SearchBar';
import { Fab } from '../../views/Fab';

import plusIcon from '../../../assets/icons/plus.svg';

export const CategoriesContainer = () => {
  const { _id } = useParams();

  const { categories } = useContext(CategoriesContext);
  const { showEditResource } = useContext(ResourcesContext);

  const category = categories.find((category) => category._id === _id);

  const [search, setSearch] = useState('');

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
      <ResourcesList search={search} />
      <Fab icon={plusIcon} alt='New resource' onClick={handleNewResource} />
    </div>
  );
};
