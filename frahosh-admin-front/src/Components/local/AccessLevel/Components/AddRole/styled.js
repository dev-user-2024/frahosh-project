import { Grid, styled } from "@mui/material";

export const AddRoleContainer = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    '& h4': {
        color: '#095385',
        fontSize: 16,
        fontWeight: 700
    }
}))

export const AddRoleHeader = styled('div')(({ theme }) => ({
    direction: 'ltr',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: "center",
    marginBottom: 50,
    '& button': {
        width: 154,
        background: '#8896A0',
        borderRadius: 10,
        fontSize: 16,
        padding: '8px 24px',
        justifyContent: 'space-between'
    }
}))

export const FormSections = styled(Grid)(({ theme }) => ({
    marginBottom: 25,
    "& > div": {
        width: '70%',
        display: 'flex',
        "& > div": {
            width: "100%",
        },
    },
    "& input": {
        borderRadius: 10,
        fontSize: 14,
        padding: 15,
        background: "#fff"
    },
    "& textarea": {
        background: "#fff",
        padding: 12,
        borderRadius: 10,
    },
    "& .MuiFormControl-root": {
        width: "100%",
        "& .MuiSelect-select": {
            width: "100%",
        },
        "& .MuiInputBase-root": {
            width: "100%",
            borderRadius: 10,
            padding: 0,

        },
    },
    "& > div > div": {
        margin: "15px 0 0 30px",
        "& > label": {
            marginBottom: 5,
        },
    },
    "& button": {
        width: 175,
        fontSize: 16,
        borderRadius: 10,
        marginTop: 150,
    }
}))