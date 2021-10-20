import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '../../../../contexts/AuthContext';
import { ResourcesProvider } from '../../../../contexts/ResourcesContext';

import { ResourcesList } from '../ResourcesList';

const resourcesForTesting = [
  {
    _id: '6165a4c343a9660020b1bf1d',
    user: '616451fdf227a6002b27d202',
    name: 'Example',
    author: 'Example',
    duration: 100,
    link: 'https://test.com',
    createdAt: '2021-10-12T15:07:47.179Z',
    __v: 0,
  },
  {
    _id: '6165a4c843a9660020b1bf1f',
    user: '616451fdf227a6002b27d202',
    name: 'Example 1',
    author: 'Example',
    duration: 100,
    link: 'https://test.com',
    createdAt: '2021-10-12T15:07:52.196Z',
    __v: 0,
  },
  {
    _id: '6165a4cc43a9660020b1bf21',
    user: '616451fdf227a6002b27d202',
    name: 'Example 2',
    author: 'Example',
    duration: 100,
    link: 'https://test.com',
    createdAt: '2021-10-12T15:07:56.739Z',
    __v: 0,
  },
];

const MockResourcesList = (props) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ResourcesProvider>
          <ResourcesList {...props} />
        </ResourcesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

describe('ResourcesList', () => {
  it('should render empty screen if no resources are passed', async () => {
    render(<MockResourcesList search='' />);

    const resourceNoData = await screen.findByText('No resources found');
    expect(resourceNoData).toBeVisible();
  });

  it('should render resources list', async () => {
    render(<MockResourcesList search='' resources={resourcesForTesting} />);

    const resourcesListItems = await screen.findAllByTestId(/resources-item/i);
    expect(resourcesListItems.length).toBe(3);
  });

  it('should render only searched resource', async () => {
    render(
      <MockResourcesList search='Example 2' resources={resourcesForTesting} />
    );

    const resourcesListItems = await screen.findAllByTestId(/resources-item/i);
    expect(resourcesListItems.length).toBe(1);
  });
});
