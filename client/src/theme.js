import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2',
    },
    secondary: {
      main: '#FF9800',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: 'linear-gradient(45deg, #FF9800, #E65100)'  // Adjusted gradient
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'linear-gradient(45deg, #FF9800, #E65100)',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root:hover': {
            boxShadow: '0 0 10px rgba(25, 118, 210, 0.5)', // Use primary color with transparency for glow effect
          },
          '& .Mui-focused': {
            borderColor: '#1976D2', // Enhanced focus style if needed
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            transform: 'translate(14px, -6px) scale(0.75)', // Ensures label shrinks and moves up when focused
          }
        }
      }
    }
  },
});

export default theme;
