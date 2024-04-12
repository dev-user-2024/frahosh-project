import { Grid, styled } from "@mui/material";

export const ChartCards = styled(Grid)(({ theme }) => ({
    marginTop: 0,
    "& > div > div": {
        width: '100%',
        height: 285,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#FFF',
        borderRadius: 10,
        "& > div": {
            width: '100%',
            position: 'absolute',
            right: 35,
            bottom: 0,
        }
    },

    "& form": {
        width: "100%",
        "& > div": {
            width: "100%"
        }
    }
}))

export const SelectFields = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "15px 40px 15px 25px",
    "& h4": {
        color: "#095385",
        fontSize: 16,
        fontWeight: 700,
    },
    "& > div": {
        display: 'flex',
        alignItems: 'center',
        "& > label": {
            fontSize: 14,
            fontWeight: 500,
        },
        "& .MuiInputBase-formControl": {
            marginRight: 10,
            width: 129,
        }
    }
}))