import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ResourcesContext } from '../../../contexts/ResourcesContext';

import TextInput from '../../views/TextInput';

export const ResourcesEditDialog = () => {
  const { category } = useParams();

  const {
    editingResource,
    showEditingResource,
    hideEditResource,
    createResource,
    updateResource,
  } = useContext(ResourcesContext);

  const [formData, setFormData] = useState(
    editingResource
      ? { ...editingResource }
      : {
          name: '',
          link: '',
          description: '',
        }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingResource) {
      updateResource(editingResource._id, category, formData);
    } else {
      createResource(category, formData);
    }

    hideEditResource();
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
        <h1 className='heading-1'>
          {editingResource ? 'Edit' : 'New'} resource
        </h1>
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
    </div>
  );
};
