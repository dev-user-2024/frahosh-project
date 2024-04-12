import { createTheme } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';
import "../../assests/css/font.css"

export const LightTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    background: {
      paper: '#fff', // یک رنگ ابی تیره
    
    },
    text:{
      primary: '#1D9BF0',
      secondary : "#000"
    },
    primary: {
      light: '#757ce8',
      main: '#1D9BF0',
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
    MuiListItemText:{
      styleOverrides: {
        // Name of the slot
        root: {
          color:"#000"
        },
      },
    }
  },

});
export const DarkTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
    background: {
      paper: '#132C3C', // یک رنگ ابی تیره
    },
    text:{
      primary: '#81CCFF',
      secondary: "#fff"
    },
    primary: {
      light: '#81CCFF',
      main: '#1D9BF0',
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
    fontFamily: "IRANSansX",
  },
  components: {
    MuiListItemText:{
      styleOverrides: {
        // Name of the slot
        root: {
          color:"#81CCFF"
        },
      },
    },
  },
});