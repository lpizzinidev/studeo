import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CategoriesProvider } from '../../../../contexts/CategoriesContext';

import { CategoriesList } from '../CategoriesList';

const MockCategoriesList = (props) => {
  return (
    <CategoriesProvider>
      <CategoriesList {...props} />
    </CategoriesProvider>
  );
};

describe('CategoriesList', () => {
  it('should render loading screen if still loading', () => {
    render(<MockCategoriesList />);
    expect(screen.getByText('Loading categories...')).toBeVisible();
  });
});
