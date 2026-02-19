import { render, screen } from '@testing-library/react';
import App from './App';

test('renders currency converter app', () => {
  render(<App />);
  const convertButton = screen.getByText(/Convert/i);
  expect(convertButton).toBeInTheDocument();
});
