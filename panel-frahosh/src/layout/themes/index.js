import { createTheme } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';
export const LightTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    grey: {
      light: grey[200],
      main: grey[500],
      dark: grey[900],
    },
    danger: {
      light: red[200],
      main: red[500],
      dark: red[900],
    },
  },
  typography: {
    fontFamily: 'IRANSansX',
  },


  components: {
    // Name of the component
    MuiTab: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          '&$selected': {
            backgroundColor: 'blue',
          },
          color:"red"
        },
      },
    },
  },

});
export const DarkTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'tanha , vazir , roboto',
  },
});