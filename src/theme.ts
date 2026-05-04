import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#F8F7F4",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#171717",
      secondary: "#525252",
    },
    primary: {
      main: "#1F4F46",
      dark: "#163C35",
      contrastText: "#FFFFFF",
    },
    divider: "#E8E5DF",
  },
  typography: {
    fontFamily:
      "'Inter', 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.2,
      color: "#171717",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.45rem",
      lineHeight: 1.3,
      color: "#171717",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.7,
      color: "#2F2F2F",
    },
    button: {
      fontWeight: 600,
      fontSize: "0.95rem",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F8F7F4",
          color: "#171717",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 24,
          paddingBlock: 14,
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: "#1F4F46",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#163C35",
          },
        },
        outlinedPrimary: {
          backgroundColor: "#FFFFFF",
          color: "#1F4F46",
          border: "1px solid #D6D3CE",
          "&:hover": {
            backgroundColor: "#F7F7F5",
            borderColor: "#D6D3CE",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#F2F1ED",
          border: "1px solid #E5E2DC",
          color: "#2A2A2A",
          fontWeight: 500,
          height: 28,
        },
        label: {
          paddingInline: 10,
          fontSize: "0.82rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #E8E5DF",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.04)",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#1F4F46",
          "&:hover": {
            color: "#163C35",
          },
        },
      },
    },
  },
});

export default theme;
