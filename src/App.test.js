import { render, screen } from '@testing-library/react';
import App from './App';
import ImageCarousel from './components/ImageCarousel';

test('renders learn react link', () => {
  render(<App />);
  render(<ImageCarousel />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
