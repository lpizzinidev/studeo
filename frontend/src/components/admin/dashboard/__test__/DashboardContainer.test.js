import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AuthProvider } from '../../../../contexts/AuthContext';
import { CategoriesProvider } from '../../../../contexts/CategoriesContext';

import DashboardContainer from '../DashboardContainer';

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
    render(<MockDashboardContainer />);
    const logoutButtonElement = screen.getByRole('button', { name: /logout/i });
    fireEvent.click(logoutButtonElement);
    expect(
      screen.getByText('Are you sure you want to exit the application?')
    ).toBeInTheDocument();
  });

  it('should display new category modal on fab click', () => {
    render(<MockDashboardContainer />);
    const newCategoryElement = screen.getByTestId('fab');
    fireEvent.click(newCategoryElement);
    expect(screen.getByText('New category')).toBeInTheDocument();
  });
});
