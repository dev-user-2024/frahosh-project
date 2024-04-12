import { Grid, styled } from "@mui/material";

export const OptionsContainer = styled(Grid)(({ theme }) => ({
    width: "100%",
    "& form": {
        display: "flex",
        width: "100%",
        marginBottom: 37,
        gap: 40,
    },
    "& span": {
        fontSize: 14,
        marginLeft: 5,
    },
    "& .MuiFormControl-root": {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    "& h4": {
        color: "#095385",
        fontSize: 16,
        fontWeight: "700",
        margin: "30px 0 10px 0",
    }
}))

export const notification = styled(Grid)(({theme}) => ({
    padding: 20,
    marginBottom: 35,
    background: '#C2DAEA',
    color: "#095385",
    "& p":{
        fontSize: 14,
    },
    "& h5":{
        fontSize: 14,
    }
}))

export const buttons = styled('div')(({ theme }) => ({
    display: "flex",
    marginBottom: 20,
    gap: 30,
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