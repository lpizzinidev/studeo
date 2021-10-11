import { useState } from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SearchBar from '../SearchBar';

const MockSearchBar = ({ initialSearch }) => {
  const [search, setSearch] = useState(initialSearch);
  return <SearchBar search={search} setSearch={setSearch} />;
};

describe('SearchBar', () => {
  it('should render search icon if empty', () => {
    render(<MockSearchBar initialSearch='' />);
    expect(screen.getByRole('img').src).toContain('search');
  });

  it('should render clear icon if searched', () => {
    render(<MockSearchBar initialSearch='Search' />);
    expect(screen.getByRole('img').src).toContain('clear');
  });

  it('should clear search on clear click', () => {
    render(<MockSearchBar initialSearch='Search' />);
    const clearElement = screen.getByRole('img');
    fireEvent.click(clearElement);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement.textContent).toBe('');
  });
});
