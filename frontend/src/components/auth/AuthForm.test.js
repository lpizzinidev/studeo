import AuthForm from './AuthForm';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('AuthForm', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('renders correctly', () => {
    act(() => {
      render(<AuthForm />, container);
    });
    expect(container.querySelector('button').textContent).toBe('LOGIN');
  });
});
