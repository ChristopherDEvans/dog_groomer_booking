import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

function BookingForm() {
    const [booking, setBooking] = useState({
        date: '',
        serviceType: '',
        petDetails: {
            name: '',
            age: '',
            breed: ''
        },
        ownerDetails: {
            name: '',
            email: '',
            phone: ''
        },
        status: 'scheduled' // This can be dynamically set or left out if handled server-side
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name.includes('.')) { // Handle nested properties like petDetails.name
            const parts = name.split('.');
            setBooking(prev => ({
                ...prev,
                [parts[0]]: {
                    ...prev[parts[0]],
                    [parts[1]]: value
                }
            }));
        } else {
            setBooking(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // POST request logic here (using Axios as shown earlier)
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h6">Create Booking</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Date"
                        name="date"
                        type="date"
                        value={booking.date}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Service Type"
                        name="serviceType"
                        value={booking.serviceType}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label="Pet Name"
                        name="petDetails.name"
                        value={booking.petDetails.name}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label="Pet Age"
                        name="petDetails.age"
                        type="number"
                        value={booking.petDetails.age}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label="Breed"
                        name="petDetails.breed"
                        value={booking.petDetails.breed}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label="Owner Name"
                        name="ownerDetails.name"
                        value={booking.ownerDetails.name}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label="Owner Email"
                        name="ownerDetails.email"
                        type="email"
                        value={booking.ownerDetails.email}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label="Owner Phone"
                        name="ownerDetails.phone"
                        type="tel"
                        value={booking.ownerDetails.phone}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" color="primary" variant="contained">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default BookingForm;
// In this code snippet, we have created a form component called BookingForm that allows users to create a new booking.
// The form includes fields for the booking date, service type, pet details (name, age, breed), and owner details (name, email, phone).
// The form also includes a submit button that will trigger a POST request to create a new booking.
// The handleChange function updates the booking state as users input data into the form fields.
// The handleSubmit function will handle the form submission logic, which can include making a POST request to the server to create a new booking.
// You can customize the form fields and styling to fit your application's needs.