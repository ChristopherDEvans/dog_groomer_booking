import React from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function LoginPage() {
    return (
        <div>
            <Grid container justifyContent="center">
                <Grid item xs={10} sm={6} md={4}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h5" align="center" gutterBottom>
                            Login
                        </Typography>
                        <TextField
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            type="password"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ marginTop: 2 }}
                        >
                            Login
                        </Button>
                        <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
                            Don't have an account? <RouterLink to="/register">Register</RouterLink>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default LoginPage;