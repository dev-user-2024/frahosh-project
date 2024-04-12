import React from 'react'
import {Typography} from '@mui/material'
export default function TitleTypography(props) {
    return (
      <Typography
        variant='h5' component="p" sx={{
        fontFamily: "Rokh-Bold",
        color:"#1D9BF0" ,
        mb:1
      }}
        {...props}
      />
    );
  }
