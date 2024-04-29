import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import BookingForm from './components/BookingForm'; // Adjust the path as necessary if your BookingForm is located differently

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides a CSS baseline */}
      <div style={{ margin: '20px' }}> {/* Provides some margin around the form */}
        <BookingForm />
      </div>
    </ThemeProvider>
  );
}

export default App;