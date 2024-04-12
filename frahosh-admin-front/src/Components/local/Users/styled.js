import { Grid, TableCell, TableRow, styled, tableCellClasses } from "@mui/material";

export const buttons = styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
    "& button": {
        gap: 10,
        borderRadius: 10,
        fontSize: 16,
        padding: "10px 17px",
    },
    "& span": {
        fontSize: 16,
    }
}))


export const UsersContainer = styled('div')(({ theme }) => ({
    "& .MuiPagination-ul": {
        display: 'flex',
        justifyContent: "center",
        marginTop: 150,
        "& .MuiPaginationItem-root": {
            borderRadius: 0,
        },
        "& .MuiPaginationItem-previousNext": {
            // backgroundColor: ''
        }
    }

}))

export const UserOptions = styled(Grid)(({ theme }) => ({
    width: "100%",
    "& form > div": {
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
    "& h4":{
        color: "#095385",
        fontSize: 16,
        fontWeight: "700",
        margin: "40px 0 10px 0",
    }
}))

export const SearchBox = styled('div')(({theme}) => ({
    "& .MuiInputBase-input": {
        borderRadius: 100,
        width: 318,
        background: "#FAFAFA",
    },
    "& .MuiOutlinedInput-notchedOutline":{
        border: 'none'
    }
}))

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        textAlign: 'right',
        paddingRight: 10,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        textAlign: 'right',
        paddingRight: 10,
    },
    [`&.${tableCellClasses.body}:nth-child(1) > div`]: {
        marginRight: 20
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));