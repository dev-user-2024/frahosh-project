import { Grid } from "@mui/material";
import { styled } from "@mui/system";

export const LoginContainer = styled(Grid)(({ theme }) => ({
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    "& > div": {
        width: 780,
        justifyContent: "center",
        background: "#D9D9D9",
        padding: "40px 41px",
        "& > h5": {
            fontWeight: 800,
            textAlign: "center",
            marginBottom: 40
        },
    },
    "& .MuiFormControlLabel-root": {
        marginRight: 0,
        "& > span": {
            padding: "0 0 0 10px"
        }
    },
    "& .MuiInputBase-root": {
        background: "#fff",
        marginTop: 3,
        "& > input": {
            padding: 10
        },
        "& > fieldset": {
            border: "none"
        }
    },
    "& .MuiButtonBase-root": {
        padding: 12
    },
    "& .MuiTypography-body2": {
        marginTop: 20,
        textAlign: 'center',
        "& > a": {
            textDecoration: 'none',
            color: '#000000',
        }
    }

}))