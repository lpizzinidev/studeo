import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { CategoriesContext } from '../../../contexts/CategoriesContext';

import TextInput from '../../views/TextInput';

export const CategoriesEdit = () => {
  let initialFormData = {
    name: '',
    description: '',
  };

  const history = useHistory();

  const { GetCategory, createCategory, updateCategory } =
    useContext(CategoriesContext);

  // Check if editing mode
  const { _id } = useParams();

  let isLoading = false;

  if (_id) {
    // Editing
    const { loading, category } = GetCategory(_id);

    isLoading = loading;
    initialFormData = { ...category };
  }

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    setFormData(initialFormData);
  }, [isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (_id) {
      updateCategory(_id, formData);
    } else {
      createCategory(formData);
    }

    history.goBack();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isLoading) {
    return 'Loading category...';
  }

  return (
    <div>
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
  );
};
