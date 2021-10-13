import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';

import { CategoriesProvider } from '../../../../contexts/CategoriesContext';

import { CategoriesList } from '../CategoriesList';

const categoriesTest = [
  {
    resources: [],
    _id: '6165a4c343a9660020b1bf1d',
    user: '616451fdf227a6002b27d202',
    name: 'Example',
    createdAt: '2021-10-12T15:07:47.179Z',
    __v: 0,
  },
  {
    resources: [],
    _id: '6165a4c843a9660020b1bf1f',
    user: '616451fdf227a6002b27d202',
    name: 'Example 1',
    createdAt: '2021-10-12T15:07:52.196Z',
    __v: 0,
  },
  {
    resources: [],
    _id: '6165a4cc43a9660020b1bf21',
    user: '616451fdf227a6002b27d202',
    name: 'Example 2',
    createdAt: '2021-10-12T15:07:56.739Z',
    __v: 0,
  },
];

const MockCategoriesList = (props) => {
  return (
    <BrowserRouter>
      <CategoriesProvider>
        <CategoriesList {...props} />
      </CategoriesProvider>
    </BrowserRouter>
  );
};

describe('CategoriesList', () => {
  it('should render loading screen if still loading', () => {
    jest.mock('../../../../hooks/useGetCategoriesList.js', () => ({
      useGetCategoriesList: () => ({
        loading: true,
      }),
    }));

    render(<MockCategoriesList search='' />);
    expect(screen.getByText('Loading categories...')).toBeVisible();
  });

  it('should render categories list', async () => {
    jest.mock('../../../../hooks/useGetCategoriesList.js', () => ({
      useGetCategoriesList: () => ({
        loading: false,
        categories: [
          {
            resources: [],
            _id: '6165a4c343a9660020b1bf1d',
            user: '616451fdf227a6002b27d202',
            name: 'Example',
            createdAt: '2021-10-12T15:07:47.179Z',
            __v: 0,
          },
          {
            resources: [],
            _id: '6165a4c843a9660020b1bf1f',
            user: '616451fdf227a6002b27d202',
            name: 'Example 1',
            createdAt: '2021-10-12T15:07:52.196Z',
            __v: 0,
          },
          {
            resources: [],
            _id: '6165a4cc43a9660020b1bf21',
            user: '616451fdf227a6002b27d202',
            name: 'Example 2',
            createdAt: '2021-10-12T15:07:56.739Z',
            __v: 0,
          },
        ],
      }),
    }));

    render(<MockCategoriesList search='' />);

    const categoriesListItems = await screen.findAllByTestId(/category-item/i);
    expect(categoriesListItems.length).toBe(3);
  });
});
