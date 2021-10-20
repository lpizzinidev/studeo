import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AuthProvider } from '../../../../contexts/AuthContext';
import { ResourcesProvider } from '../../../../contexts/ResourcesContext';

import { ResourcesItem } from '../ResourcesItem';

const testResource = {
  name: 'Example resource name',
  author: 'Example resource author',
  duration: 180,
  link: 'https://www.test.com',
};

const MockResourceItem = (props) => {
  return (
    <AuthProvider>
      <ResourcesProvider>
        <ResourcesItem {...props} />
      </ResourcesProvider>
    </AuthProvider>
  );
};

describe('ResourcesItem', () => {
  it('should display resource information', () => {
    render(<MockResourceItem resource={testResource} />);

    expect(screen.getByText('Example resource name')).toBeVisible();
  });
});
