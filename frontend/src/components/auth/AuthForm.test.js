import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AuthProvider } from '../../contexts/AuthContext';

import AuthForm from './AuthForm';

describe('AuthForm', () => {
  const customRender = (ui, { providerProps }) => {
    return render(<AuthProvider {...providerProps}>{ui}</AuthProvider>);
  };

  it('renders login form correctly', () => {
    customRender(<AuthForm isLogin={true} />, {});
  });

  it('renders registration form correctly', () => {
    customRender(<AuthForm isLogin={false} />, {});
  });
});
