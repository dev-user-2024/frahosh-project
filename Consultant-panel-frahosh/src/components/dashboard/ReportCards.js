import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './dashboard.module.css'
import cap from '../../assests/image/svg/Graduation cap.png'
import {useTheme} from '@mui/material'

export default function ReportCards(prop) {
  const theme = useTheme()

  return (
    <Box className={styles.componentStyle}
    sx={{
        height:"224px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        py:0,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey.light : '#FFFFFF',
      }}>
        <img  src={cap}
        alt=''
        style={{
        }}/>
      
        <Typography mt={2} sx={{color:theme.palette.mode === "dark" ? "#fff" : "000"}}>
         کل دانش آموزان 
        </Typography>
        <Typography variant='h4' mt={1} sx={{color:theme.palette.mode === "dark" ? "#fff" : "000"}}>320</Typography>
        <Typography  mt={1} sx={{color:theme.palette.mode === "dark" ? "#fff" : "000"}}>دانش آموز</Typography>
</Box>
  )
}
