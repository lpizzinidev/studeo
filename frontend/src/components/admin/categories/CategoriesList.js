import { useContext } from 'react';

import { CategoriesContext } from '../../../contexts/CategoriesContext';

import { CategoriesListItem } from './CategoriesListItem';

export const CategoriesList = ({ search }) => {
  const { GetCategoriesList } = useContext(CategoriesContext);
  const { loading, categories } = GetCategoriesList();

  if (loading) {
    return 'Loading categories...';
  }

  return (
    <div className='card-list'>
      {categories
        .filter((category) => {
          return category.name.toUpperCase().includes(search.toUpperCase());
        })
        .map((category) => {
          return <CategoriesListItem key={category._id} {...category} />;
        })}
    </div>
  );
};
