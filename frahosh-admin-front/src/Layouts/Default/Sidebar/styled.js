import { styled } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";

export const Sidebar = styled('div')(({ theme }) => ({
    width: 296,
    background: '#fff',
    nav: {
        paddingRight: 50,
        marginTop: 67,
        "& > div > img": {
            marginRight: 12,
        }
    }
}))

export const List = styled('ul')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    listStyle: "none",
    marginTop: 55,
    li: {
        paddingRight: 0,
        "& img": {
            marginLeft: 10,
        },
        "> a , > div": {
            display: "flex",
            color: "#040C1A",
            alignItems: "center",
            marginBottom: "8px",
            borderRadius: 8,
            transition: "0.2s",
            fontSize: 16,
            textDecoration: "none",
            "> img": {
                marginLeft: 13
            }
        },
        "& .MuiListItemButton-root":{
            background: 'none'
        }
    }
}))