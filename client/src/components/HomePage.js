import React from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';



function HomePage() {
    return (
        <div>
            <Grid container justifyContent="center">
                <Grid item xs={10} sm={6} md={4}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h5" align="center" gutterBottom>
                            Home Page
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ marginTop: 2 }}
                            component={RouterLink}
                            to="/bookappointment"
                        >
                            Book Appointment
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default HomePage;