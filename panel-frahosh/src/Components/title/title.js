import React from 'react'
import {Typography} from '@mui/material'
export default function TitleTypography(props) {
    return (
      <Typography
        component="p" sx={{
        fontSize:"1.2rem",
        fontFamily: "Rokh-Bold",
        color:"#1D9BF0" ,
        mb:1
      }}
        {...props}
      />
    );
  }