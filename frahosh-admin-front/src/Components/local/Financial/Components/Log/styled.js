import { Grid, styled } from "@mui/material";
import MuiTableContainer from "@mui/material/TableContainer";

export const Options = styled(Grid)(({ theme }) => ({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 37,
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

export const TableContainer = styled(MuiTableContainer)(({theme}) => ({
    "& .MuiTableCell-root":{
        padding: 15
    }, 
}))