import React from 'react';
import { Button, Typography } from '@mui/material';
import theme from '../theme';  // Ensure this is correctly imported
import { ThemeProvider } from '@mui/material/styles';

function ThemeTest() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 20 }}>
        <Typography variant="h4" color="primary">
          Welcome to Your App
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Action
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default ThemeTest;
