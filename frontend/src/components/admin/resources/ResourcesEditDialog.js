import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ResourcesContext } from '../../../contexts/ResourcesContext';

import TextInput from '../../views/TextInput';

export const ResourcesEditDialog = () => {
  const { _id } = useParams();

  const {
    editingResource,
    showEditingResource,
    resourceErrors,
    hideEditResource,
    createResource,
    updateResource,
  } = useContext(ResourcesContext);

  const initialState = {
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
      updateResource(editingResource._id, _id, formData);
    } else {
      createResource(_id, formData);
    }
  };

  const handleCancel = () => {
    hideEditResource();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`modal ${showEditingResource ? 'open' : ''}`}>
      <div className='modal-content'>
        <h1 className='heading-2'>
          {editingResource ? 'Edit' : 'New'} resource
        </h1>
        <div className='modal-body'>
          {resourceErrors.length > 0 && (
            <ul className='list-error'>
              {resourceErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
          <form onSubmit={handleSubmit}>
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
