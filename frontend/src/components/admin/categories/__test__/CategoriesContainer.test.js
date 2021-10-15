import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';

import { CategoriesProvider } from '../../../../contexts/CategoriesContext';
import { ResourcesProvider } from '../../../../contexts/ResourcesContext';
import { useGetCategoriesList } from '../../../../hooks/useGetCategoriesList';

import { CategoriesContainer } from '../CategoriesContainer';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    _id: '6165a4c343a9660020b1bf1d',
  }),
}));

jest.mock('../../../../hooks/useGetCategoriesList.js', () => ({
  useGetCategoriesList: jest.fn(),
}));

global.window = { location: { pathname: null } };

const categoriesForTesting = [
  {
    resources: [],
    _id: '6165a4c343a9660020b1bf1d',
    user: '616451fdf227a6002b27d202',
    name: 'Example',
    createdAt: '2021-10-12T15:07:47.179Z',
    __v: 0,
  },
  {
    resources: [],
    _id: '6165a4c843a9660020b1bf1f',
    user: '616451fdf227a6002b27d202',
    name: 'Example 1',
    createdAt: '2021-10-12T15:07:52.196Z',
    __v: 0,
  },
  {
    resources: [],
    _id: '6165a4cc43a9660020b1bf21',
    user: '616451fdf227a6002b27d202',
    name: 'Example 2',
    createdAt: '2021-10-12T15:07:56.739Z',
    __v: 0,
  },
];

const MockCategoriesContainer = () => {
  return (
    <BrowserRouter>
      <CategoriesProvider>
        <ResourcesProvider>
          <CategoriesContainer />
        </ResourcesProvider>
      </CategoriesProvider>
    </BrowserRouter>
  );
};

describe('CategoriesList', () => {
  it('should render loading spinner if still loading', () => {
    useGetCategoriesList.mockReturnValue({
      loading: true,
    });

    render(<MockCategoriesContainer />);

    expect(screen.getByText('Loading category...')).toBeVisible();
  });

  it('should return to dashboard if no category are found', () => {
    useGetCategoriesList.mockReturnValue({
      loading: false,
    });

    render(<MockCategoriesContainer />);

    expect(global.window.location.pathname).toEqual('/dashboard');
  });

  it('should display confirmation modal on delete button click', () => {
    useGetCategoriesList.mockReturnValue({
      loading: false,
      categories: categoriesForTesting,
    });

    render(<MockCategoriesContainer />);

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(screen.getByText('Delete category')).toBeVisible();
  });

  it('should display editing pre-compiled modal on edit button click', () => {
    useGetCategoriesList.mockReturnValue({
      loading: false,
      categories: categoriesForTesting,
    });

    render(<MockCategoriesContainer />);

    const editButton = screen.getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);

    expect(screen.getByText('Example')).toBeVisible();
  });

  it('should go back to dashboard on delete action', () => {
    useGetCategoriesList.mockReturnValue({
      loading: false,
      categories: categoriesForTesting,
    });

    render(<MockCategoriesContainer />);

    const confirmButton = screen.getByRole('button', { name: /confirm/i });
    fireEvent.click(confirmButton);

    expect(global.window.location.pathname).toEqual('/dashboard');
  });
});
