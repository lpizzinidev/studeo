import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '../../../../contexts/AuthContext';
import { CategoriesProvider } from '../../../../contexts/CategoriesContext';
import { ResourcesProvider } from '../../../../contexts/ResourcesContext';
import { useGetCategory } from '../../../../hooks/useGetCategory';

import { CategoriesContainer } from '../CategoriesContainer';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    _id: '6165a4c343a9660020b1bf1d',
  }),
  useHistory: () => ({
    push: jest.fn(),
    goBack: jest.fn(),
  }),
}));

jest.mock('../../../../hooks/useGetCategory.js', () => ({
  useGetCategory: jest.fn(),
}));

global.window = { location: { pathname: null } };

const categoryForTesting = [
  {
    resources: [],
    _id: '6165a4c343a9660020b1bf1d',
    user: '616451fdf227a6002b27d202',
    name: 'Example',
    createdAt: '2021-10-12T15:07:47.179Z',
    __v: 0,
  },
];

const MockCategoriesContainer = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CategoriesProvider>
          <ResourcesProvider>
            <CategoriesContainer />
          </ResourcesProvider>
        </CategoriesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

describe('CategoriesList', () => {
  it('should render loading spinner if still loading', () => {
    useGetCategory.mockReturnValue({
      loading: true,
    });

    render(<MockCategoriesContainer />);

    expect(screen.getByText('Loading category...')).toBeVisible();
  });

  it('should return to dashboard if no category are found', () => {
    useGetCategory.mockReturnValue({
      loading: false,
    });

    render(<MockCategoriesContainer />);

    expect(global.window.location.pathname).toEqual('/dashboard');
  });

  it('should display confirmation modal on delete button click', async () => {
    useGetCategory.mockReturnValue({
      loading: false,
      category: categoryForTesting,
    });

    render(<MockCategoriesContainer />);

    const deleteButton = await screen.findByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(await screen.findByText('Delete category')).toBeVisible();
  });

  it('should go back to dashboard on delete action', async () => {
    useGetCategory.mockReturnValue({
      loading: false,
      category: categoryForTesting,
    });

    render(<MockCategoriesContainer />);

    const confirmButton = await screen.findByRole('button', {
      name: /confirm/i,
    });
    fireEvent.click(confirmButton);

    expect(global.window.location.pathname).toEqual('/dashboard');
  });
});
