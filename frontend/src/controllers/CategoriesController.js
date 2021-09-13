import { useState, useEffect } from "react";

import * as api from "../api/server";

export const GetCategories = () => {
  const [loading, isLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const { data } = await api.getCategories();
    setCategories(data);
    isLoading(false);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return { loading, categories };
};

export const GetCategory = (_id) => {
  const [loading, isLoading] = useState(true);
  const [category, setCategory] = useState(null);

  const loadCategory = async () => {
    const { data } = await api.getCategory(_id);
    setCategory(data);
    isLoading(false);
  };

  useEffect(() => {
    loadCategory();
  }, []);

  return { loading, category };
};

export const createCategory = async (formData) => {
  try {
    await api.createCategory(formData);
  } catch (err) {
    console.log(err);
  }
};

export const updateCategory = async (id, formData) => {
  try {
    await api.updateCategory(id, formData);
  } catch (err) {
    console.log(err);
  }
};

export const deleteCategory = async (id) => {
  try {
    await api.deleteCategory(id);
  } catch (err) {
    console.log(err);
  }
};
