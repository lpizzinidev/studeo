import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesEdit } from './CategoriesEdit';
import { ResourcesList } from '../resources/ResourcesList';
import SearchBar from '../../views/SearchBar';

export const CategoriesContainer = () => {
  const { _id } = useParams();

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <SearchBar placeholder='Search resource...' onSearch={handleSearch} />
      <h1 className='heading-1'>{_id ? 'Edit' : 'New'} category</h1>
      <div className='category-container'>
        <CategoriesEdit />
        {_id && <ResourcesList search={search} />}
      </div>
    </div>
  );
};
