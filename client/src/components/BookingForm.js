import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Snackbar, Alert, Card, CardContent } from '@mui/material';
import  AddIcon  from '@mui/icons-material/Add';
import PetsIcon from '@mui/icons-material/Pets';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import axios from 'axios';

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
        status: 'scheduled'  // This can be dynamically set or left out if handled server-side
    });

    const [open, setOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('info');

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
        try {
            const response = await axios.post('http://localhost:5000/api/bookings', booking);
            setSnackbarMessage('Booking created successfully!');
            setAlertSeverity('success');
            setOpen(true);
            // Optionally reset the form or handle other UI updates
        } catch (error) {
            setSnackbarMessage('Failed to create booking.');
            setAlertSeverity('error');
            setOpen(true);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={8} lg={6}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Create Booking
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            {/* Date and Service Type fields */}
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
                </Grid>
                            {/* ... */}
                            
                            {/* Pet Details Card */}
                            <Card variant="outlined" sx={{ margin: 2 }}>
                                <CardContent>
                                <Typography variant="h6" component="h2" gutterBottom>
        <PetsIcon /> Pet Details {/* Adding the Pet icon here */}
      </Typography>
                                    <Grid container spacing={2}>
                                        {/* Pet detail fields */}
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
                                        {/* ... */}

                                    </Grid>
                                </CardContent>
                            </Card>

                            {/* Owner Details Card */}
                            <Card variant="outlined" sx={{ margin: 2 }}>
                                <CardContent>
                                <Typography variant="h6" component="h2" gutterBottom>
        <PersonOutlineIcon /> Owner Details {/* Adding the Person icon here */}
      </Typography>
                                    <Grid container spacing={2}>
                                        {/* Owner detail fields */}
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
                                        {/* ... */}
                                    </Grid>
                                </CardContent>
                            </Card>

                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                fullWidth
                                size="large"
                                startIcon={<AddIcon />}
                                sx={{ marginTop: 2 }}
                            >
                                Add Booking
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alertSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Grid>
    );
}

export default BookingForm;


  