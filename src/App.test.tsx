import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import SearchField from './components/searchField';
import userEvent from '@testing-library/user-event';

const handleChangeMock = () => {}

it('renders all components', () => {
  render(<App />);
  const title = screen.getByText(/Traveller's planner/i);
  const searchField = screen.getByLabelText(/Countries I want to visit/i)
  expect(title).toBeInTheDocument();
  expect(searchField).toBeInTheDocument()
});

it('allows user to search for countries', () => {
  render(<SearchField handleChange={handleChangeMock} countryName="Norway"/>);
  const search = screen.getByPlaceholderText(/Search for countries/i)
  expect(search).toBeEnabled()
  userEvent.type(search, 'Norway')
  expect(search).toHaveValue("Norway")
})
