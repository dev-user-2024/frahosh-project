import { styled } from "@mui/material";

export const Profile = styled('div')(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    "& > div": {
        marginRight: 12,
        cursor: 'pointer',
        "& > img": {
            marginTop: 8,
            width: 24,
            height: 24
        }
    }
}))