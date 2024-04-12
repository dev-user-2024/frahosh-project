import { Grid, styled } from "@mui/material";

export const MaturityContainer = styled(Grid)(({ theme }) => ({
    "& > div": {
        margin: "30px 0"
    },
    "& .MuiTypography-root": {
        fontSize: 17,
        fontWeight: 700,
        marginBottom: 10,
    },
    "& .MuiTableCell-root": {
        padding: "10px 0"
    }
}))