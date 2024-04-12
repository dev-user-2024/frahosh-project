import { Grid, styled } from "@mui/material";

export const ChartCards = styled(Grid)(({ theme }) => ({
    marginTop: 0,
    "& > div > div": {
        width: '100%',
        height: 285,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#F0F0F0',
        padding: 15,
        "& > div": {
            width: '100%',
            position: 'relative',
            top: 10,
            right: 28,
        },
    },
    "& .MuiFormControl-root": {
        justifyContent: 'space-between',
        flexDirection: 'row',
        "& > div": {
            background: "#fff",
            border: "none",
            margin: "0 3px",
        },
        "& > div:nth-of-type(2)": {
            marginLeft: 60
        }
    }
}))