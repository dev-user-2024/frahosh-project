import { styled } from "@mui/material/styles";

export const InputWrapper = styled("div")(({ theme }) => ({
  "& > div": {
    display: 'flex',
    flexWrap: 'nowrap',
    WebkitFlexDirection: 'row',
    "& > label":{
      margin: 0,
    }
  },
}));
