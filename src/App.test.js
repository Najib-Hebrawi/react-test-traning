import { render, screen } from '@testing-library/react';
import App from './App';


// test the link that refer to learn react
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); // /learn react/i : this is because it is regular expression that makes it case insensitive.
  expect(linkElement).toBeInTheDocument();
});

// ELLER

// test the link that refer to learn react
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); // /learn react/i : this is because it is regular expression that makes it case insensitive.
  expect(linkElement).toBeChecked;
});


// test the link that refer to learn react
test('test hello najib', () => {
  render(<App />);
  const mytitle = screen.getByTestId("test1"); // /learn react/i : this is because it is regular expression that makes it case insensitive.
  expect(mytitle).toBeChecked;
});



// test the ul just we created in app.js
test('renders 3 list items', () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem"); // ("listitem") :means there role. i can finde that in https://testing-library.com/
  expect(listItems).toHaveLength(3); // we cheack theres length.
});

// ELLER

// test the ul just we created in app.js
test('renders 3 list items', () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem"); // ("listitem") :means there role. i can finde that in https://testing-library.com/
  expect(listItems.length).toBe(3) // we cheack theres length.
});





// test the sum
test('test sum 2 +2 = 6 in i span ', () => {
  render(<App />);
  const sumTest = screen.getByTitle("sum"); 
  expect(sumTest.textContent).toBe("4") 
});










