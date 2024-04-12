import React from 'react'
import {Typography} from '@mui/material'
import { useTheme } from "@mui/material";
export default function TitleTypography(props) {
  const theme = useTheme();

    return (
      <Typography
        variant='h5' component="p" sx={{
        fontFamily: "Rokh-Bold",
        color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
        mb:1
      }}
        {...props}
      />
    );
  }
