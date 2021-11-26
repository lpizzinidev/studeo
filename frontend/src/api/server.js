import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5001/api/v1' });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

/* Authentication */
export const signIn = (formData) => API.post('/signin', formData);
export const signUp = (formData) => API.post('/signup', formData);

/* Resources */
const resourcesPath = '/resources';

export const createResource = (category, formData) =>
  API.post(`${resourcesPath}/${category}`, formData);
export const updateResource = (id, formData) =>
  API.put(`${resourcesPath}/${id}`, formData);
export const deleteResource = (id) => API.delete(`${resourcesPath}/${id}`);

/* Categories */
const categoriesPath = '/categories';

export const getCategoriesList = () => API.get(categoriesPath);
export const getCategory = (id) => API.get(`${categoriesPath}/${id}`);
export const createCategory = (formData) => API.post(categoriesPath, formData);
export const updateCategory = (id, formData) =>
  API.put(`${categoriesPath}/${id}`, formData);
export const deleteCategory = (id) => API.delete(`${categoriesPath}/${id}`);
