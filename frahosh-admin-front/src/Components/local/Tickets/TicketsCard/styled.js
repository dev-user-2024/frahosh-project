import { Grid, styled } from "@mui/material";

export const ChartCards = styled(Grid)(({ theme }) => ({
    marginTop: 0,
    "& > div > div": {
        width: '100%',
        height: 284,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#FFF',
        padding: "15px 0",
        borderRadius: 10,
        "& > div:nth-of-type(2)": {
            width: '100%',
            position: 'relative',
            top: 5,
            right: 30,
        },
        "& > .MuiFormControl-root": {
            width: '100%',
            padding: '0 32px',
        },

    },
    "& .MuiFormControl-root": {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        // margin: "0 10px 15px 0",
        "& > div": {
            display: 'flex',
            background: "#fff",
            border: "none",
            gap: 20,
        },
    },
    "& > div:nth-of-type(1)": {
        color: '#095385'
    },
    "& > div:nth-of-type(2)": {
        color: '#D40F00'
    },
    "& > div:nth-of-type(3)": {
        color: '#11AA63'
    },
}))

export const TicketBox = styled(Grid)(({ theme }) => ({
    padding: "30px 0 !important",
    gap: 20,
    "& img": {
        width: 60,
        height: 60,
        marginRight: 9,
    },
    "& h4": {
        fontSize: 38,
        fontWeight: 500,
    },
    "& p": {
        fontSize: 16,
        fontWeight: 600,
    }
}))