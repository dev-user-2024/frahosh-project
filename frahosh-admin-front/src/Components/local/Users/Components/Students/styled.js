import { Grid, styled } from "@mui/material";

export const StudentInfo = styled(Grid)(({ theme }) => ({
    textAlign: 'center',
    alignItems: 'end',
    "& > div": {
        "& > p": {
            marginBottom: 20
        }
    },
    "& .MuiAvatar-root": {
        margin: "0 auto"
    },
}))

export const StudentInfoBody = styled(Grid)(({ theme }) => ({
    marginTop: 30,
    justifyContent: 'center',
    "& > div": {
        height: 282,
        margin: 10,
        border: "1px solid #B5B5B5",
        "& > div": {
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            "& > h2":{
                fontSize: 36,
                fontWeight: 500,
            },
        },
        "& > p":{
            textAlign: 'center',
            "& > a":{
                textDecoration: 'none'
            }
        }
    },
}))