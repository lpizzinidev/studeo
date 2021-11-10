import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ResourcesContext } from '../../../contexts/ResourcesContext';
import { AuthContext } from '../../../contexts/AuthContext';

import TextInput from '../../views/TextInput';
import { ErrorInfo } from '../../views/ErrorInfo';

export const ResourcesEditDialog = () => {
  const { _id } = useParams();

  const {
    editingResource,
    showEditingResource,
    hideEditResource,
    createResource,
    updateResource,
  } = useContext(ResourcesContext);
  const { errors, clearError } = useContext(AuthContext);

  const initialState = {
    name: '',
    author: '',
    duration: '',
    link: '',
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    setFormData(editingResource ? { ...editingResource } : initialState);
  }, [showEditingResource]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingResource) {
      updateResource(editingResource._id, formData);
    } else {
      createResource(_id, formData);
    }
  };

  const handleCancel = () => {
    hideEditResource();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    clearError();
  };

  return (
    <div className={`modal ${showEditingResource ? 'open' : ''}`}>
      <div className='modal-content'>
        <h1 className='heading-2'>
          {editingResource ? 'Edit' : 'New'} resource
        </h1>
        <div className='modal-body'>
          <form onSubmit={handleSubmit}>
            <ErrorInfo errors={errors} />
            <TextInput
              title='Name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              dataTestId='resource-name'
            />
            <TextInput
              title='Author'
              name='author'
              value={formData.author}
              onChange={handleChange}
              dataTestId='resource-author'
            />
            <TextInput
              title='Duration (hh:mm)'
              name='duration'
              value={formData.duration}
              onChange={handleChange}
              dataTestId='resource-duration'
              pattern='^[0-2][0-9]:[0-5][0-9]$'
            />
            <TextInput
              title='URL'
              name='link'
              value={formData.link}
              onChange={handleChange}
              dataTestId='resource-link'
            />
            <div className='modal-footer'>
              <input
                type='submit'
                className='button'
                value='SAVE'
                data-testid='save-resource'
              />
              <input
                type='button'
                className='text-button'
                value='CANCEL'
                onClick={handleCancel}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
