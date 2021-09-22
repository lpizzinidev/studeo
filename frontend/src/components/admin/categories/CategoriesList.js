import { useContext } from 'react';

import { CategoriesContext } from '../../../contexts/CategoriesContext';

import { CategoriesListItem } from './CategoriesListItem';
import { Loading } from '../../views/Loading';
import { NoData } from '../../views/NoData';

export const CategoriesList = ({ search }) => {
  const { GetCategoriesList } = useContext(CategoriesContext);
  const { loading, categories } = GetCategoriesList();

  if (loading) {
    return <Loading text='Loading categories...' />;
  }

  const filteredCategories = categories.filter((category) => {
    return category.name.toUpperCase().includes(search.toUpperCase());
  });

  if (filteredCategories.length === 0) {
    return <NoData text='No categories found' />;
  }

  return (
    <>
      <p className='subtitle'>Your categories</p>
      <div className='card-list'>
        {filteredCategories.map((category) => {
          return <CategoriesListItem key={category._id} {...category} />;
        })}
      </div>
    </>
  );
};
