import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './dashboard.module.css'
import wallet from "../../assests/image/svg/walletIcon.png"
import {useTheme} from '@mui/material'

export default function EarnedFaracoin(prop) {
  const theme = useTheme()

  return (
    <Box className={styles.componentStyle}
    sx={{
        height:"224px",
        overflow:"visible",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        py:0,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey.light : '#FFFFFF',

      }}>
            <img 
            alt=''
            src={wallet} 
            className={styles.coinsImg}/>
            <Typography sx={{color:theme.palette.mode === "dark" ? "#fff" : "000"}}>
              موجودی کیف پول
            </Typography>
            <Typography  sx={{color:theme.palette.mode === "dark" ? "#fff" : "000"}}variant='h4' mt={2}>12,000</Typography>
            <Typography  sx={{color:theme.palette.mode === "dark" ? "#fff" : "000"}} mt={1}>تومان</Typography>
    </Box>
  )
}
