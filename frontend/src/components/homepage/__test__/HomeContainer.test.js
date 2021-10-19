import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';

import HomeContainer from '../HomeContainer';

global.window = { location: { pathname: null } };

const MockHomeContainer = (props) => {
  return (
    <BrowserRouter>
      <HomeContainer {...props} />
    </BrowserRouter>
  );
};

describe('HomeContainer', () => {
  it('should redirect at login page on button click', () => {
    render(<MockHomeContainer />);

    const signinElement = screen.getByRole('button', { name: /log in/i });
    fireEvent.click(signinElement);

    expect(global.window.location.pathname).toEqual('/signin');
  });

  it('should redirect at signup page on button click', () => {
    render(<MockHomeContainer />);

    const signinElement = screen.getByRole('button', { name: /sign up/i });
    fireEvent.click(signinElement);

    expect(global.window.location.pathname).toEqual('/signup');
  });
});
