import { createTheme } from '@mui/material/styles';

export const getAppTheme = (mode = 'dark') => {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#38BDF8', // Cyan 400
        light: '#7DD3FC',
        dark: '#0284C7',
        contrastText: '#0B1120',
      },
      secondary: {
        main: '#818CF8', // Indigo 400
        light: '#A5B4FC',
        dark: '#4F46E5',
        contrastText: '#FFFFFF',
      },
      accent: {
        emerald: '#10B981',
        amber: '#F59E0B',
        rose: '#F43F5E',
        purple: '#A855F7',
      },
      background: {
        default: isDark ? '#0A0F1D' : '#F8FAFC',
        paper: isDark ? '#111827' : '#FFFFFF',
        elevated: isDark ? '#1E293B' : '#F1F5F9',
        glass: isDark ? 'rgba(17, 24, 39, 0.75)' : 'rgba(255, 255, 255, 0.85)',
      },
      text: {
        primary: isDark ? '#F8FAFC' : '#0F172A',
        secondary: isDark ? '#94A3B8' : '#64748B',
        disabled: isDark ? '#475569' : '#94A3B8',
      },
      divider: isDark ? 'rgba(148, 163, 184, 0.12)' : 'rgba(15, 23, 42, 0.08)',
    },
    typography: {
      fontFamily: ['"Inter"', '"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif'].join(','),
      h1: {
        fontWeight: 800,
        letterSpacing: '-0.025em',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      h3: {
        fontWeight: 700,
        letterSpacing: '-0.015em',
      },
      h4: {
        fontWeight: 600,
        letterSpacing: '-0.01em',
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollBehavior: 'smooth',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            padding: '8px 20px',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: isDark
                ? '0 6px 20px rgba(56, 189, 248, 0.25)'
                : '0 6px 16px rgba(2, 132, 199, 0.2)',
            },
          },
          containedPrimary: {
            background: 'linear-gradient(135deg, #38BDF8 0%, #2563EB 100%)',
            color: '#FFFFFF',
            '&:hover': {
              background: 'linear-gradient(135deg, #0284C7 0%, #1D4ED8 100%)',
            },
          },
          containedSecondary: {
            background: 'linear-gradient(135deg, #818CF8 0%, #6366F1 100%)',
            color: '#FFFFFF',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            backgroundImage: 'none',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: isDark
              ? '0 10px 30px rgba(0, 0, 0, 0.5)'
              : '0 10px 25px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(12px)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 600,
            borderRadius: 8,
          },
        },
      },
    },
  });
};

export default getAppTheme;
