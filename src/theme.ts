import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily:
      "'Roboto', 'Montserrat', 'Open Sans', 'Lato', 'Raleway', 'Nunito', 'Playfair Display', sans-serif",
    h1: {
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 500,
      fontSize: "2rem",
    },
    h2: {
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 400,
      fontSize: "1.5rem",
    },
    body1: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 300,
      fontSize: "1rem",
    },
    button: {
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 300,
      fontSize: "1rem",
    },
  },
});

export default theme;
