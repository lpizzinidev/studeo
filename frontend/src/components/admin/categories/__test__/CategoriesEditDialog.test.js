import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AuthProvider } from '../../../../contexts/AuthContext';
import { CategoriesContext } from '../../../../contexts/CategoriesContext';

import { CategoriesEditDialog } from '../CategoriesEditDialog';

const testCategory = {
  name: 'Example category name',
};

const MockCategoriesEditDialog = (props) => {
  return (
    <AuthProvider>
      <CategoriesContext.Provider
        value={{
          editingCategory: props.editingCategory,
        }}
      >
        <CategoriesEditDialog {...props} />
      </CategoriesContext.Provider>
    </AuthProvider>
  );
};

describe('CategoriesEditDialog', () => {
  it('should display `New category` if no parameters are passed', () => {
    render(<MockCategoriesEditDialog />);

    expect(screen.getByText('New category')).toBeVisible();
  });

  it('should display `Edit category` if editing category is passed', () => {
    render(<MockCategoriesEditDialog editingCategory={testCategory} />);

    expect(screen.getByText('Edit category')).toBeVisible();
  });

  it('should display correct category name in editing field', () => {
    render(<MockCategoriesEditDialog editingCategory={testCategory} />);

    expect(screen.getByDisplayValue(testCategory.name)).toBeVisible();
  });
});
