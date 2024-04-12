import { Grid, styled } from "@mui/material";

export const UsersContainer = styled(Grid)(({ theme }) => ({
    "& .MuiTableCell-body, .MuiTableCell-head": {
        paddingRight: 0,
    },
    "& > div:nth-of-type(2)":{
        width: '100%',
    }
}))

export const UsersButton = styled(Grid)(({ theme }) => ({
    display: 'flex',
    marginBottom: 37,
    "& > div": {
        flex: 1,
        "& > button ": {
            width: "100%"
        }
    },

}))
export const UserOptions = styled(Grid)(({ theme }) => ({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 37,
    "& > div": {
    },
    "& span": {
        fontSize: 14,
        marginLeft: 5,
    },
    "& .MuiFormControl-root": {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
}))


