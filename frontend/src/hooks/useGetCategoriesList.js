import { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { CategoriesContext } from '../contexts/CategoriesContext';

import * as api from '../api/server';

export const useGetCategoriesList = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const { setError } = useContext(AuthContext);
  const { refreshCategories } = useContext(CategoriesContext);

  const loadCategories = async () => {
    setLoading(true);
    try {
      const { data } = await api.getCategoriesList();

      setCategories(data);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    loadCategories();
  }, [refreshCategories]);

  return { loading, categories };
};
