import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Login from './Login'

describe('Login Component', () => {
    it('renders the Login component', () => {
        render(<Login/>);
        expect(screen.getByText('Login')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    });

    it('shows success message on correct credentials', async () => {
        render(<Login />);
        fireEvent.change(screen.getByPlaceholderText('Email'), {
            target: { value: 'ruban8801@gamil.com' },
        });
        fireEvent.change(screen.getByPlaceholderText('password'), {
            target: { value: '123' },
        });
        fireEvent.click(screen.getByText('Signin'));

        expect(await screen.findByText('Loading...')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText('Successfully Loggedin')).toBeInTheDocument();
        });
    });

    it('shows error message on wrong credentials', async () => {
        render(<Login />);
        fireEvent.change(screen.getByPlaceholderText('Email'), {
            target: { value: 'wrong@example.com' },
        });
        fireEvent.change(screen.getByPlaceholderText('password'), {
            target: { value: 'wrongpass' },
        });
        fireEvent.click(screen.getByText('Signin'));

        expect(await screen.findByText('Loading...')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText('Invaild Credentaials')).toBeInTheDocument();
        });
    });
});
