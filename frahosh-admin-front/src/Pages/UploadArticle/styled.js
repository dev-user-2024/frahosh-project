import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const ArticleContainer = styled(Grid)(({ theme }) => ({
    "& .MuiBox-root ": {
        position: "relative",
        "& .MuiTextField-root": {
            width: "100%",
            height: 48,
            background: "#FAFAFA",
            border: 'none',
            borderRadius: 10,
            marginTop: 5,

            "& > div": {
                height: "100%",
                borderRadius: 10,
            }
        },
        "& .MuiButton-root": {
            position: "absolute",
            top: 28,
            left: 0,
            width: 146,
            height: 48,
            borderRadius: 10,
            fontSize: 16,
        },
        "& .MuiOutlinedInput-root": {
            width: "100%",
            height: 48,
            background: "#FAFAFA",
            border: 'none',
            borderRadius: 10,

            "& > .MuiSelect-select": {
                width: "100%"
            }
        }
    },
    "& .ql-container": {
        height: 270,
    },
}))