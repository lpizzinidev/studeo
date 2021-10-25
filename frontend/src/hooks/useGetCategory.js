import { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { CategoriesContext } from '../contexts/CategoriesContext';
import { ResourcesContext } from '../contexts/ResourcesContext';

import * as api from '../api/server';

export const useGetCategory = (_id) => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);

  const { setError } = useContext(AuthContext);
  const { refreshCategories } = useContext(CategoriesContext);
  const { refreshResources } = useContext(ResourcesContext);

  const loadCategory = async () => {
    try {
      const { data } = await api.getCategory(_id);

      setCategory(data);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    loadCategory();
  }, [refreshCategories, refreshResources]);

  return { loading, category };
};
