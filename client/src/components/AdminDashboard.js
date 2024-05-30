import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function AdminDashboard() {
    return (
        <div>
            <Grid container justifyContent="center">
                <Grid item xs={10} sm={6} md={4}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h5" align="center" gutterBottom>
                            Admin Dashboard
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ marginTop: 2 }}
                            component={RouterLink}
                            to="/viewbookings"
                        >
                            View Bookings
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ marginTop: 2 }}
                            component={RouterLink}
                            to="/addservice"
                        >
                            Add Service
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default AdminDashboard;