import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId('count'); // Adjust the selector based on your Counter component
  expect(countElement).toHaveTextContent('0'); 
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('+'));
  const countElement = screen.getByTestId('count'); // Adjust the selector based on your Counter component
  expect(countElement).toHaveTextContent('1'); 
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('-'));
  const countElement = screen.getByTestId('count'); // Adjust the selector based on your Counter component
  expect(countElement).toHaveTextContent('-1'); 
});
