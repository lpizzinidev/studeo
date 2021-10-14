import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CategoriesContext } from '../../../../contexts/CategoriesContext';

import { CategoriesEditDialog } from '../CategoriesEditDialog';

const MockCategoriesEditDialog = (props) => {
  return (
    <CategoriesContext.Provider
      value={{
        showEditingCategory: props.isVisible,
      }}
    >
      <CategoriesEditDialog {...props} />
    </CategoriesContext.Provider>
  );
};

describe('CategoriesEditDialog', () => {
  it('should be hidden if flag is false', () => {
    render(<MockCategoriesEditDialog isVisible={false} />);

    expect(screen.getByTestId(/modal-categories-edit/i)).not.toBeVisible();
  });

  it('should be visible if flag is true', () => {
    render(<MockCategoriesEditDialog isVisible={true} />);

    expect(screen.getByTestId(/modal-categories-edit/i)).toBeVisible();
  });
});
