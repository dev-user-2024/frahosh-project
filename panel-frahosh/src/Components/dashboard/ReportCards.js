import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './dashboard.module.css'
import Organizer from '../../assests/image/svg/Organizer 1.svg'

export default function ReportCards(prop) {
    const{reportCard}=prop

  return (
    <Box className={styles.componentStyle}
    sx={{
        height:"224px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        py:0,
      }}>
        <img  src={Organizer}
        style={{
          marginTop:10
        }}/>
        <Typography
        variant="h3"
        mt={2.2}>
            {reportCard}
        </Typography>
        <Typography>
        کارنامه داری    
        </Typography>
</Box>
  )
}
