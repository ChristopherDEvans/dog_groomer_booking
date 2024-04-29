import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

describe('BookingForm', () => {
  it('renders correctly', () => {
    render(<BookingForm />);
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/service type/i)).toBeInTheDocument();
  });

  it('submits the form data', async () => {
    render(<BookingForm />);
    
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2024-04-30' } });
    fireEvent.change(screen.getByLabelText(/service type/i), { target: { value: 'Full Groom' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/booking created/i)).toBeInTheDocument();
    });
  });
});
