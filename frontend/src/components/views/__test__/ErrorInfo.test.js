import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ErrorInfo } from '../ErrorInfo';

describe('ErrorInfo', () => {
  it('should render first error message', () => {
    render(<ErrorInfo errors={['Error 1', 'Error 2']} />);
    expect(screen.getByText(/error 1/i)).toBeInTheDocument();
  });

  it('should not render second error message', () => {
    render(<ErrorInfo errors={['Error 1', 'Error 2']} />);
    expect(screen.queryByText(/error 2/i)).toBe(null);
  });

  it('should not render component if no errors are present', () => {
    render(<ErrorInfo errors={[]} />);
    expect(screen.queryByTestId('error-info')).toBe(null);
  });
});
