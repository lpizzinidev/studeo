import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { ResourcesContext } from '../../../contexts/ResourcesContext';

import TextInput from '../../views/TextInput';

export const ResourcesEdit = () => {
  let initialFormData = {
    name: '',
    link: '',
    description: '',
  };

  const history = useHistory();

  const { GetResource, createResource, updateResource } =
    useContext(ResourcesContext);

  // Check if editing mode
  const { _id, category } = useParams();

  let isLoading = false;

  if (_id) {
    // Editing
    const { loading, resource } = GetResource(_id, category);

    isLoading = loading;
    initialFormData = { ...resource };
  }

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    setFormData(initialFormData);
  }, [isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (_id) {
      updateResource(_id, category, formData);
    } else {
      createResource(category, formData);
    }

    history.goBack();
  };

  const handleCancel = () => {
    history.goBack();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isLoading) {
    return 'Loading resource...';
  }

  return (
    <div>
      <h1 className='heading-1'>{_id ? 'Edit' : 'New'} resource</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          title='Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <TextInput
          title='URL'
          name='link'
          value={formData.link}
          onChange={handleChange}
        />
        <TextInput
          title='Description'
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type='button'
          className='text-button'
          value='CANCEL'
          onClick={handleCancel}
        />
        <input type='submit' className='button' value='SAVE' />
      </form>
    </div>
  );
};
