import { useState, useContext } from 'react';

import { CategoriesContext } from '../../../contexts/CategoriesContext';

import TextInput from '../../views/TextInput';
import { TextFieldInput } from '../../views/TextFieldInput';

export const CategoriesEditDialog = () => {
  const {
    editingCategory,
    showEditingCategory,
    hideEditCategory,
    createCategory,
    updateCategory,
  } = useContext(CategoriesContext);

  const [formData, setFormData] = useState(
    editingCategory
      ? { ...editingCategory }
      : {
          name: '',
          description: '',
        }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingCategory) {
      updateCategory(editingCategory._id, formData);
    } else {
      createCategory(formData);
    }

    hideEditCategory();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`modal ${showEditingCategory ? 'open' : ''}`}>
      <div className='modal-content'>
        <h1 className='heading-2'>
          {editingCategory ? 'Edit' : 'New'} category
        </h1>
        <form onSubmit={handleSubmit} className='dialog-form'>
          <TextInput
            title='Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          <TextFieldInput
            title='Description'
            name='description'
            value={formData.description}
            onChange={handleChange}
          />
          <div className='modal-footer'>
            <input
              type='button'
              className='text-button'
              value='CANCEL'
              onClick={() => hideEditCategory()}
            />
            <input type='submit' className='button' value='SAVE' />
          </div>
        </form>
      </div>
    </div>
  );
};
