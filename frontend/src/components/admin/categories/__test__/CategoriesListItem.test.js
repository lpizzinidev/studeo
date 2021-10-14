import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';

import { CategoriesListItem } from '../CategoriesListItem';

global.window = { location: { pathname: null } };

const MockCategoriesListItem = (props) => {
  return (
    <BrowserRouter>
      <CategoriesListItem {...props} />
    </BrowserRouter>
  );
};

describe('CategoriesListItem', () => {
  it('should display category name', () => {
    const testName = 'Test category';
    render(<MockCategoriesListItem name={testName} />);

    expect(screen.getByText(testName)).toBeVisible();
  });

  it('should display empty text if category has no resources', () => {
    render(<MockCategoriesListItem resources={[]} />);

    expect(screen.getByText('No resources')).toBeVisible();
  });

  it('should display singular text if category has only one resource', () => {
    render(<MockCategoriesListItem resources={['1']} />);

    expect(screen.getByText('1 resource')).toBeVisible();
  });

  it('should display plural text if category if resources are more than one', () => {
    render(<MockCategoriesListItem resources={['1', '2', '3']} />);

    expect(screen.getByText('3 resources')).toBeVisible();
  });

  it('should redirect to `categories/:_id` on click', () => {
    render(<MockCategoriesListItem _id={1} />);

    const cardElement = screen.getByTestId(/category-item/i);
    fireEvent.click(cardElement);

    expect(global.window.location.pathname).toEqual('/categories/1');
  });
});
