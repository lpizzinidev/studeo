import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/v1" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

/* Authentication */
export const signIn = (formData) => API.post("/signin", formData);
export const signUp = (formData) => API.post("/signup", formData);

/* Resources */
export const getResourceList = () => API.get("/resources");
export const getResource = (id) => API.get(`/resources/${id}`);
export const createResource = (formData) => API.post("/resources", formData);
export const updateResource = (id, formData) =>
  API.put(`/resource/${id}`, formData);
export const deleteResource = (id) => API.delete(`resources/${id}`);

/* Categories */
export const getCategories = () => API.get("/categories");
export const getCategory = (id) => API.get(`/categories/${id}`);
export const createCategory = (formData) => API.post("/categories", formData);
export const updateCategory = (id, formData) =>
  API.put(`/categories/${id}`, formData);
export const deleteCategory = (id) => API.delete(`/categories/${id}`);
