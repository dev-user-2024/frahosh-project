import styled from "@emotion/styled";
import { TextField } from "@mui/material";


export const Input = styled(TextField)(({ theme }) => ({
    height: 48,
    "& input": {
        background: "#fff",
        padding: "8px 20px",
    }
}))