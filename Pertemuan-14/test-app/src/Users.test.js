import { render, screen } from '@testing-library/react';
import Users from './router/Users';

test('Render halaman users dengan benar', () => {
    render(<Users/>);

    //mencari tombol tertentu
    //pastikan button kita memiliki role="button"
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent('Back to Home');
    
});
