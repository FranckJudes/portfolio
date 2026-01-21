import React, { createContext, useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { LightMode, DarkMode } from '@mui/icons-material';

const ThemeContext = createContext();

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#22b6c3',
      light: '#4dcbd6',
      dark: '#188a99',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FFB89E',
      light: '#ffcfbb',
      dark: '#e08a70',
      contrastText: '#1a1a1a',
    },
    background: {
      default: '#f5f5f7',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#666666',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: 'Manrope, sans-serif',
    h1: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: 'Manrope, sans-serif',
    },
    subtitle2: {
      fontFamily: 'Manrope, sans-serif',
    },
    body1: {
      fontFamily: 'Manrope, sans-serif',
    },
    body2: {
      fontFamily: 'Manrope, sans-serif',
    },
    button: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
    caption: {
      fontFamily: 'Manrope, sans-serif',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 700,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
  shadows: [
    'none',
    '0 2px 8px rgba(0, 0, 0, 0.04)',
    '0 4px 16px rgba(0, 0, 0, 0.08)',
    '0 8px 32px rgba(0, 0, 0, 0.12)',
    '0 12px 48px rgba(0, 0, 0, 0.16)',
    '0 16px 64px rgba(0, 0, 0, 0.2)',
  ],
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#22b6c3',
      light: '#4dcbd6',
      dark: '#188a99',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FFB89E',
      light: '#ffcfbb',
      dark: '#e08a70',
      contrastText: '#1a1a1a',
    },
    background: {
      default: '#0a0a0a',
      paper: '#141414',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#a0a0a0',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  typography: {
    fontFamily: 'Manrope, sans-serif',
    h1: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: 'Manrope, sans-serif',
    },
    subtitle2: {
      fontFamily: 'Manrope, sans-serif',
    },
    body1: {
      fontFamily: 'Manrope, sans-serif',
    },
    body2: {
      fontFamily: 'Manrope, sans-serif',
    },
    button: {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
    caption: {
      fontFamily: 'Manrope, sans-serif',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 700,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          bgcolor: '#141414',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
  shadows: [
    'none',
    '0 2px 8px rgba(0, 0, 0, 0.4)',
    '0 4px 16px rgba(0, 0, 0, 0.5)',
    '0 8px 32px rgba(0, 0, 0, 0.6)',
    '0 12px 48px rgba(0, 0, 0, 0.7)',
    '0 16px 64px rgba(0, 0, 0, 0.8)',
  ],
});

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('theme-mode');
    return savedMode || 'light';
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  const toggleColorMode = () => {
    setIsTransitioning(true);
    setMode((prev) => {
      const newMode = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme-mode', newMode);
      return newMode;
    });
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const ThemeToggleButton = () => (
    <IconButton
      onClick={toggleColorMode}
      sx={{
        width: 44,
        height: 44,
        borderRadius: 3,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        '&:hover': {
          bgcolor: 'action.hover',
          transform: 'scale(1.05)',
        },
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {mode === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode, ThemeToggleButton, isTransitioning }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
