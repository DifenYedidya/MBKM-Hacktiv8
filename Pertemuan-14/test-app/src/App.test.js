import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders home correctly', () => {
  render(<App />);

  //mencari text tertentu
  const title = screen.getByText(/why do we need test ?/i);
  expect(title).toBeInTheDocument();

  //mencari button tertentu
  //pastikan button memiliki roles="button"
  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent('User List');

  //klik tombol User List
  fireEvent.click(btn)
  //mencari tombol tertentu 
  //pada halaman yang muncul karena klik tombol
  //pastikan button kita memiliki role='button'
  const btn2 = screen.getByRole('button');
  expect(btn2).toBeInTheDocument();
  expect(btn).toHaveTextContent('Back to Home');
});
