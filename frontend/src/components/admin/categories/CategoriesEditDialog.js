import { useState, useEffect, useContext } from 'react';

import { CategoriesContext } from '../../../contexts/CategoriesContext';
import { AuthContext } from '../../../contexts/AuthContext';

import TextInput from '../../views/TextInput';
import { ErrorInfo } from '../../views/ErrorInfo';

export const CategoriesEditDialog = () => {
  const initialFormData = {
    name: '',
  };

  const {
    editingCategory,
    showEditingCategory,
    hideEditCategory,
    createCategory,
    updateCategory,
  } = useContext(CategoriesContext);
  const { errors, clearError } = useContext(AuthContext);

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    setFormData(editingCategory ? { ...editingCategory } : initialFormData);
  }, [showEditingCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingCategory) {
      updateCategory(editingCategory._id, formData);
    } else {
      createCategory(formData);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    clearError();
  };

  return (
    <div className={`modal ${showEditingCategory ? 'open' : ''}`}>
      <div className='modal-content' data-testid='modal-categories-edit'>
        <h1 className='heading-2'>
          {editingCategory ? 'Edit' : 'New'} category
        </h1>
        <div className='modal-body'>
          <form onSubmit={handleSubmit} className='dialog-form'>
            <ErrorInfo errors={errors} />
            <TextInput
              title='Name'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
            <div className='modal-footer'>
              <input
                type='button'
                className='text-button mr-15'
                value='CANCEL'
                onClick={() => hideEditCategory()}
              />
              <input
                type='submit'
                className='button'
                value='SAVE'
                data-testid='save-category'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
