import { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';

import * as api from '../api/server';

export const useGetCategoriesList = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const { setError } = useContext(AuthContext);

  const loadCategories = async () => {
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
  }, []);

  return { loading, categories };
};
