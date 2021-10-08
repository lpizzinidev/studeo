import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AuthProvider } from '../../../contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';

import AuthForm from '../AuthForm';

const MockAuthForm = (props) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthForm {...props} />
      </AuthProvider>
    </BrowserRouter>
  );
};

describe('AuthForm', () => {
  describe('Login', () => {
    it('should render login form heading', () => {
      render(<MockAuthForm isLogin={true} />);
      expect(screen.getByRole('heading').textContent).toBe('Login');
    });

    it('confirm password should not be visible', () => {
      render(<MockAuthForm isLogin={true} />);
      expect(screen.queryByTestId('confirm-password')).toBe(null);
    });

    it('should render login button', () => {
      render(<MockAuthForm isLogin={true} />);
      expect(screen.getByRole('button').value).toBe('LOGIN');
    });

    it('should render create an account text', () => {
      render(<MockAuthForm isLogin={true} />);
      const paragraphElement = screen.getByText(/not registered?/i);
      expect(paragraphElement).toBeInTheDocument();
    });
  });

  describe('Registration', () => {
    it('should render registration form heading', () => {
      render(<MockAuthForm isLogin={false} />);
      expect(screen.getByRole('heading').textContent).toBe('Register');
    });

    it('confirm password should be visible', () => {
      render(<MockAuthForm isLogin={false} />);
      expect(screen.getByTestId('confirm-password')).toBeInTheDocument();
    });

    it('should render registration button', () => {
      render(<MockAuthForm isLogin={false} />);
      expect(screen.getByRole('button').value).toBe('REGISTER');
    });

    it('should render already registered text', () => {
      render(<MockAuthForm isLogin={false} />);
      const paragraphElement = screen.getByText(/already registered?/i);
      expect(paragraphElement).toBeInTheDocument();
    });
  });
});
