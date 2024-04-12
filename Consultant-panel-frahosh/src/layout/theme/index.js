import { createTheme } from "@mui/material/styles";
import { grey, red } from "@mui/material/colors";
//
// import { ListItemText } from '@mui/material';

export const LightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#095385",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    grey: {

      light: "#fff",
      main: grey[500],
      dark: grey[900],
      text: "#6C6C6C",
    },
    danger: {
      light: red[200],
      main: red[500],
      dark: red[900],
    },
  },
  typography: {
    fontFamily: "IRANSansX",
    color:"#000"
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          height:"48px"
        },
      },
    }
  }
});
export const DarkTheme = createTheme({
  direction: "rtl",
  palette: {
    // TODO: dark mode colors should change
    mode: "dark",
    primary: {
      main: "#93CFF9",
    },
    grey: {
      main: "#132C3C",
      light :"#132C3C",
      
    },
    danger: {
      light: red[200],
      main: red[500],
      dark: red[900],
    },
    background: {
      default: "#132C3C",
      paper: "#132C3C",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
      disabled: "#fff",
      grey: "#fff"
    },
    action: {
      active: "#fff",
      disabled: "#fff",
      // hover: "#000",
    },
  },
  typography: {
    fontFamily: "IRANSansX",
    color: "#fff",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          height:"48px"
        },
      },
    }
  }
});
