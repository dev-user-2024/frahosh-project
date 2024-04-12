import { Box,Typography } from '@mui/material'
import React from 'react'
import TitleTypography from '../title'

export default function Coast(prop) {
    const {text}=prop
  return (
    <Box sx={{width:"100%",boxShadow:"3px 3px 30px rgba(0, 0, 0, 0.08)",justifyContent:"center",alignItems:"center",padding:"0.7rem .9rem"}}>
        <TitleTypography>ساعت های مشاوره</TitleTypography>
            <Typography>{text}</Typography>
    </Box>
  )
}
