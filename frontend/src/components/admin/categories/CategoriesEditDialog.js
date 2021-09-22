import { useState, useContext } from 'react';

import { CategoriesContext } from '../../../contexts/CategoriesContext';

import TextInput from '../../views/TextInput';

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
        <form onSubmit={handleSubmit} className='auth-form'>
          <TextInput
            title='Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          <TextInput
            title='Description'
            name='description'
            value={formData.description}
            onChange={handleChange}
          />
          <input type='submit' className='button' value='SAVE' />
        </form>
      </div>
    </div>
  );
};
