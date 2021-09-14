import { useState, useEffect } from "react";

import * as api from "../api/server";

export const GetResourceList = () => {
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState([]);

  const loadResources = async () => {
    const { data } = await api.getResourceList();
    setResources(data);
    setLoading(false);
  };

  useEffect(() => {
    loadResources();
  }, []);

  return { loading, resources };
};

export const GetResource = (id) => {
  const [loading, setLoading] = useState(true);
  const [resource, setResource] = useState(null);

  const loadResources = async () => {
    const { data } = await api.getResource(id);
    setResource(data);
    setLoading(false);
  };

  useEffect(() => {
    loadResources();
  }, []);

  return { loading, resource };
};

export const createResource = async (formData) => {
  try {
    await api.createResource(formData);
  } catch (err) {
    console.log(err);
  }
};

export const updateResource = async (id, formData) => {
  try {
    await api.updateResource(formData);
  } catch (err) {
    console.log(err);
  }
};

export const deleteResource = async (id) => {
  try {
    await api.deleteResource(id);
  } catch (err) {
    console.log(err);
  }
};
