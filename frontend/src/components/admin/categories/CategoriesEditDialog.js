import { useState, useEffect, useContext } from 'react';

import { CategoriesContext } from '../../../contexts/CategoriesContext';

import TextInput from '../../views/TextInput';

export const CategoriesEditDialog = () => {
  const initialFormData = {
    name: '',
  };

  const {
    editingCategory,
    categoryErrors,
    showEditingCategory,
    hideEditCategory,
    createCategory,
    updateCategory,
    cancelCategoryErrors,
  } = useContext(CategoriesContext);

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
    cancelCategoryErrors();
  };

  return (
    <div className={`modal ${showEditingCategory ? 'open' : ''}`}>
      <div className='modal-content'>
        <h1 className='heading-2'>
          {editingCategory ? 'Edit' : 'New'} category
        </h1>
        <div className='modal-body'>
          {categoryErrors !== '' && (
            <p className='text-error'>{categoryErrors}</p>
          )}
          <form onSubmit={handleSubmit} className='dialog-form'>
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
              <input type='submit' className='button' value='SAVE' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
