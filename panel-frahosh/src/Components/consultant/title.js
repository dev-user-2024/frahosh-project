import React from 'react'
import {Typography} from '@mui/material'
export default function TitleTypography(props) {
    return (
      <Typography
        component="p" sx={{
        fontFamily: "Rokh-Bold",
        color:"#1D9BF0" ,
        mb:1,
        fontSize:"1.13rem"
      }}
        {...props}
      />
    );
  }
