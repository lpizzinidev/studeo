import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AuthDescription from '../AuthDescription';

describe('AuthDescription', () => {
  describe('Login', () => {
    it('should render login image with correct resource', () => {
      render(<AuthDescription isLogin={true} />);

      const logo = screen.getByRole('img');
      expect(logo).toBeVisible();
      expect(logo.src).toContain('login');
    });

    it('should render login text', () => {
      render(<AuthDescription isLogin={true} />);

      expect(screen.getByText(/Login to unlock your potential/i)).toBeVisible();
    });
  });

  describe('Registration', () => {
    it('should render registration image with correct resource', () => {
      render(<AuthDescription isLogin={false} />);

      const logo = screen.getByRole('img');
      expect(logo).toBeVisible();
      expect(logo.src).toContain('register');
    });

    it('should render registration text', () => {
      render(<AuthDescription isLogin={false} />);

      expect(
        screen.getByText(/register to keep track of your progress/i)
      ).toBeVisible();
    });
  });
});
