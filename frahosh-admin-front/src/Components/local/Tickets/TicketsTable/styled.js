import { Grid, styled } from "@mui/material";

export const TicketOption = styled(Grid)(({ theme }) => ({
    width: "100%",
    "& form": {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        marginBottom: 37,

    },
    "& span": {
        fontSize: 14,
        marginLeft: 5,
    },
    "& .MuiFormControl-root": {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
}))

export const TicketTableContainer = styled(Grid)(({ theme }) => ({
    "& > div:nth-of-type(1)": {
        padding: "10px 20px",
        borderBottom: "1px solid #095385",
        color: "#095385",

    },
}))

export const TableContainer = styled(Grid)(({ theme }) => ({
    borderRadius: "10px",
    "& > div": {
        display: 'flex',
        alignItems: 'center',
        margin: "20px 0",
        height: 81,
        background: "#FFF",
        padding: 20,
        "& > div":{
            display: 'flex',
            gap: 8,
        }
    }
}))

export const Text = styled('p')(({ status, theme }) => ({
    color: status ? "#11AA63" : "#D40F00"
}))