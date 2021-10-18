import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ResourcesProvider } from '../../../../contexts/ResourcesContext';

import { ResourcesItem } from '../ResourcesItem';

const MockResourceItem = (props) => {
  return (
    <ResourcesProvider>
      <ResourcesItem {...props} />
    </ResourcesProvider>
  );
};

const testResource = {
  name: 'Example resource name',
  author: 'Example resource author',
  duration: 180,
  link: 'https://www.test.com',
};

describe('ResourcesItem', () => {
  it('should display resource information', () => {
    render(<MockResourceItem resource={testResource} />);

    expect(screen.getByText('Example resource name')).toBeVisible();
  });
});
