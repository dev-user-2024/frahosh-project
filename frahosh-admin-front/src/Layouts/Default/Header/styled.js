import { styled } from "@mui/material";

export const Header = styled('div')(({theme}) => ({
    backgroundColor: "transparent",
    boxShadow: "none",
    padding: "45px 0 25px 0",
    "& > div ":{
        padding: 0,
    },
    "& > div > div":{
        justifyContent: "space-between",
        alignItems: "center",
        padding: 0,
    }
})) 