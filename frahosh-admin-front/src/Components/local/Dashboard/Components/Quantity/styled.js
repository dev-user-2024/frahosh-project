import { Grid, styled } from "@mui/material";

export const QuantityCards = styled(Grid)(({ theme }) => ({
    "& > div > div": {
        height: 157,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: "10px 0",
        background: '#FFF',
        color: '#095385',
        borderRadius: 10,
        "& > h4": {
            fontSize: 16,
            fontWeight: 500,
        },
        "& > p": {
            fontSize: 32,
            fontWeight: 500
        },

    }
}))