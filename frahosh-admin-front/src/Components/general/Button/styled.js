import { styled } from "@mui/system";
import MuiButton from '@mui/material/Button';

export const Button = styled(MuiButton)(({ theme, variant }) => ({
    boxShadow: "0px 0px 12px rgba(83, 93, 118, 0.06)",
    borderRadius: 0,
    fontWeight: 400,
    background : variant === 'outlined' && '#fff',
  
    "& .MuiButton-startIcon": {
      marginLeft: 6,
      marginRight: 0,
    },
    "& .MuiButton-endIcon": {
      marginRight: 6,
      marginLeft: 0,
    },
  
    "&.MuiButton-text": {
      backgroundColor: "#ffffff",
    },
  }));