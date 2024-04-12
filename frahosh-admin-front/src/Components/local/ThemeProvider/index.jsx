import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo } from "react";

const ThemeProvider = ({children}) => {
    const theme = useMemo(() => createTheme({
        direction: 'rtl',
        palette: {
            primary: {
                main: '#095385',
            },
            secondary: {
                main: '#DEE4E9',
            },
        },
        typography: {
            fontFamily: "IRANSansX",
        },
    }))
    return (
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    )
}

export default ThemeProvider