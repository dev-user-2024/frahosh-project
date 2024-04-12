import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "light",
        primary: {
            main: "#1D9BF0",
        },
        secondary: {
            main: "#bd93f9",
        },
    },
    typography: {
        fontFamily: "IRANSansX, Rokh",
        fontSize: 13,
    },
    
});

export const darkTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "dark",
        primary: {
            main: "#81CCFF",
        },
        secondary: {
            main: "#bd93f9",
        },
    },
    typography: {
        fontFamily: "IRANSansX, Rokh",
         fontSize: 13,
    },
});
