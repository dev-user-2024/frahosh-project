import { styled } from "@mui/material";

export const Layout = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    "& .all-pages": {
        width: "80%",
        display: "flex",
        flexDirection: "column",
        padding: "0 24px 0 58px",
    "& > div": {
        width: "100%"
    },
}

}))