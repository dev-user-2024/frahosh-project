import { Grid, styled } from "@mui/material"

export const TableHead = styled(Grid)(({ theme }) => ({
    "& > div:nth-of-type(1)": {
        padding: "10px 20px",
        borderBottom: "1px solid #095385",
        color: "#095385",
        "& p": {
            fontSize: 14,
        }
    },
}))

export const TableBody = styled(Grid)(({ theme }) => ({
    borderRadius: 10,
    "& > div": {
        padding: "10px 20px",
        display: 'flex',
        alignItems: 'center',
        margin: "20px 0",
        height: 81,
        background: "#FFF",
        // padding: 20,
        "& > div": {
            display: 'flex',
            gap: 8,
            "& p": {
                fontSize: 12,
            },
            "& img": {
                padding: 9,
                border: '1px solid #909090',
                width: 38,
                height: 38,
                "&:nth-child(1)":{
                    borderRadius: "0px 4px 4px 0px",
                },
                "&:nth-child(2)":{
                    borderRadius: "4px 0 0 4px",
                }
            },
        },
    },
    "& .MuiFormGroup-root": {
        "& .MuiButtonBase-root":{
            padding: "0 0 0 5px"
        },
        "& .MuiTypography-root":{
            fontSize: 14,
            marginLeft: 25,
        }
    }
}))