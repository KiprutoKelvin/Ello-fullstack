import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5ACCCC',  // Turquoise
      contrastText: '#FFFFFF', // White
    },
    secondary: {
      main: '#FABD33', // Yellow
      contrastText: '#FFFFFF', // White
    },
    background: {
      default: '#335C6E', // Steel Blue
      paper: '#FFFFFF', // White
    },
    text: {
      primary: '#335C6E', // Steel Blue
      secondary: '#5ACCCC', // Turquoise
    },
    custom: {
      turquoiseLight: '#CFFAFA',
      orangeRed: '#F76434',
      teal: '#008080',
      yellowDark: '#DAA520',
      turquoiseDark1: '#017373',
      orangePastel: '#F89D63',
      turquoiseDark2: '#004F4F',
    },
  },
  typography: {
    h3: {
      color: '#FFFFFF', // White
    },
    h4: {
      color: '#5ACCCC', // Turquoise
    },
  },
});

export default theme;
