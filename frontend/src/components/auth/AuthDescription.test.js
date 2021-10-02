import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AuthDescription from './AuthDescription';

describe('AuthDescription', () => {
  it('renders login image and description correctly', () => {
    render(<AuthDescription isLogin={true} />);

    // Logo
    const logo = screen.getByAltText('Login');
    expect(logo).toBeVisible();
    expect(logo.src).toContain('login');

    // Text
    expect(screen.getByText('Login to unlock your potential')).toBeVisible();
  });

  it('renders registration image and description correctly', () => {
    render(<AuthDescription isLogin={false} />);

    // Logo
    const logo = screen.getByAltText('Register');
    expect(logo).toBeVisible();
    expect(logo.src).toContain('register');

    // Text
    expect(
      screen.getByText('Register to keep track of your progress')
    ).toBeVisible();
  });
});
