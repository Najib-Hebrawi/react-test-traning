import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); // /learn react/i : this is because it is regular expression that makes it case insensitive.
  expect(linkElement).toBeInTheDocument();
});
