import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CategoriesContext } from '../../../../contexts/CategoriesContext';

import { CategoriesEditDialog } from '../CategoriesEditDialog';

const MockCategoriesEditDialog = (props) => {
  return (
    <CategoriesContext.Provider
      value={{
        editingCategory: props.editingCategory,
      }}
    >
      <CategoriesEditDialog {...props} />
    </CategoriesContext.Provider>
  );
};

describe('CategoriesEditDialog', () => {
  it('should display `New category` if no parameter are passed', () => {
    render(<MockCategoriesEditDialog/>);

    expect(screen.getByText('New category')).toBeVisible();
  });

  it('should display `Edit category` if editing category is passed', () => {
    render(<MockCategoriesEditDialog editingCategory={{}} />);

    expect(screen.getByText('Edit category')).toBeVisible();
  });

    it('should display correct category name in editing field', () => {
      const categoryName = 'Example category name';
      
      render(<MockCategoriesEditDialog editingCategory={{
        name: categoryName
      }} />);

      expect(screen.getByRole('textbox', { value: categoryName })).toBeVisible();
    });
});
