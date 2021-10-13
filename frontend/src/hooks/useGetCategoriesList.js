import { useState, useEffect } from 'react';

import * as api from '../api/server';

export const useGetCategoriesList = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const { data } = await api.getCategoriesList();

    setCategories(data);
    setLoading(false);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return { loading, categories };
};
