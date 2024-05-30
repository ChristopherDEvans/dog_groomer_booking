import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <List>
                {['HomePage', 'Book Appointment', 'View Bookings', 'Admin Dashboard', 'Login'].map((text, index) => (
                    <ListItemButton component={RouterLink} to={text === 'Home' ? '/' : "/" + text.replace(/ /g, "").toLowerCase()} key={text}>
                    <ListItemText primary={text} />
                </ListItemButton>
                
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dog Groomer Booking
                    </Typography>
                    {/* Replace the generic Button with a RouterLink wrapped Button */}
                    <Button component={RouterLink} to="/login" color="inherit">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>
        </div>
    );
}

export default Navbar;
