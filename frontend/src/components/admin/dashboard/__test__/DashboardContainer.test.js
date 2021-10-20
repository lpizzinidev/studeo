import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AuthProvider } from '../../../../contexts/AuthContext';
import { CategoriesProvider } from '../../../../contexts/CategoriesContext';
import { useGetCategoriesList } from '../../../../hooks/useGetCategoriesList';

import DashboardContainer from '../DashboardContainer';

jest.mock('../../../../hooks/useGetCategoriesList.js', () => ({
  useGetCategoriesList: jest.fn(),
}));

const MockDashboardContainer = (props) => {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <DashboardContainer {...props} />
      </CategoriesProvider>
    </AuthProvider>
  );
};

describe('DashboardContainer', () => {
  it('should display logout modal on logout button click', () => {
    useGetCategoriesList.mockReturnValue({
      loading: true,
    });

    render(<MockDashboardContainer />);

    const logoutButtonElement = screen.getByRole('button', { name: /logout/i });
    fireEvent.click(logoutButtonElement);

    expect(
      screen.getByText('Are you sure you want to exit the application?')
    ).toBeInTheDocument();
  });

  it('should display new category modal on fab click', () => {
    useGetCategoriesList.mockReturnValue({
      loading: true,
    });

    render(<MockDashboardContainer />);

    const newCategoryElement = screen.getByTestId('fab');
    fireEvent.click(newCategoryElement);

    expect(screen.getByText('New category')).toBeInTheDocument();
  });
});
