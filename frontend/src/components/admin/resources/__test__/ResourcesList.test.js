import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';

import { ResourcesProvider } from '../../../../contexts/ResourcesContext';
import { useGetCategory } from '../../../../hooks/useGetCategory';

import { ResourcesList } from '../ResourcesList';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    _id: '6165a4c343a9660020b1bf1d',
  }),
}));

jest.mock('../../../../hooks/useGetCategory.js', () => ({
  useGetCategory: jest.fn(),
}));

const categoryForTesting = [
  {
    resources: [
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
    ],
    _id: '6165a4c343a9660020b1bf1d',
    user: '616451fdf227a6002b27d202',
    name: 'Example',
    createdAt: '2021-10-12T15:07:47.179Z',
    __v: 0,
  },
];

const MockResourcesList = (props) => {
  return (
    <BrowserRouter>
      <ResourcesProvider>
        <ResourcesList {...props} />
      </ResourcesProvider>
    </BrowserRouter>
  );
};

describe('ResourcesList', () => {
  it('should render loading spinner if still loading', () => {
    useGetCategory.mockReturnValue({
      loading: true,
    });

    render(<MockResourcesList />);

    expect(screen.getByText('Loading resources...')).toBeVisible();
  });

  it('should render empty screen if no resources are found', async () => {
    useGetCategory.mockReturnValue({
      loading: false,
      category: null,
    });

    render(<MockResourcesList search='' />);

    const resourceNoData = await screen.findByText('No resources found');
    expect(resourceNoData).toBeVisible();
  });

  it('should render resources list', async () => {
    useGetCategory.mockReturnValue({
      loading: false,
      category: categoryForTesting,
    });

    render(<MockResourcesList search='' />);

    const resourcesListItems = await screen.findAllByTestId(/resources-item/i);
    expect(resourcesListItems.length).toBe(3);
  });

  it('should render only searched resource', async () => {
    useGetCategory.mockReturnValue({
      loading: false,
      category: categoryForTesting,
    });

    render(<MockResourcesList search='Example 2' />);

    const resourcesListItems = await screen.findAllByTestId(/resources-item/i);
    expect(resourcesListItems.length).toBe(1);
  });
});
