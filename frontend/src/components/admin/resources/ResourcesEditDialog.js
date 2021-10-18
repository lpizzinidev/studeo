import { useState, useEffect, useContext } from 'react';

import { ResourcesContext } from '../../../contexts/ResourcesContext';

import TextInput from '../../views/TextInput';
import { ErrorInfo } from '../../views/ErrorInfo';

export const ResourcesEditDialog = () => {
  const {
    editingResource,
    showEditingResource,
    resourceErrors,
    hideEditResource,
    createResource,
    updateResource,
    cancelResourceErrors,
  } = useContext(ResourcesContext);

  const initialState = {
    _id: '',
    name: '',
    author: '',
    duration: 0,
    link: '',
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    setFormData(editingResource ? { ...editingResource } : initialState);
  }, [showEditingResource]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingResource) {
      updateResource(formData);
    } else {
      createResource(formData);
    }
  };

  const handleCancel = () => {
    hideEditResource();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    cancelResourceErrors();
  };

  return (
    <div className={`modal ${showEditingResource ? 'open' : ''}`}>
      <div className='modal-content'>
        <h1 className='heading-2'>
          {editingResource ? 'Edit' : 'New'} resource
        </h1>
        <div className='modal-body'>
          <form onSubmit={handleSubmit}>
            <ErrorInfo errors={resourceErrors} />
            <TextInput
              title='Name'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
            <TextInput
              title='Author'
              name='author'
              value={formData.author}
              onChange={handleChange}
            />
            <TextInput
              type='number'
              title='Duration (min)'
              name='duration'
              value={formData.duration}
              onChange={handleChange}
            />
            <TextInput
              title='URL'
              name='link'
              value={formData.link}
              onChange={handleChange}
            />
            <div className='modal-footer'>
              <input
                type='button'
                className='text-button mr-15'
                value='CANCEL'
                onClick={handleCancel}
              />
              <input type='submit' className='button' value='SAVE' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
