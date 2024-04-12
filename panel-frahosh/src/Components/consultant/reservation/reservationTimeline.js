import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import TitleTypography from '../title'
import styles from './reservationTimePiker.module.css'

export default function ReservationTimeline() {
  const raserveableTime=[{id:1,time:"۸:۳۰-۹:۱۵"},{id:2,time:"۹:۱۵-۱۰:۰۰"},{id:3,time:"۱۱:۰۰-۱۲:۰۰"},{id:4,time:"۱۰:۳۰-۱۱:۰۰"}]
  return (
    <Box
    sx={{
      display:"flex",
      alignItems:"center",
      flexDirection:"column",
      padding:"0"
    }}>
      <TitleTypography>ساعت‌های قابل رزرو صبح</TitleTypography>
      <Box
      className={styles.reserveabletimeContaner}
      mt={2}>
        {raserveableTime.map(item=> <Box className={styles.reserveabletime}><Typography>{item.time}</Typography></Box>)}
      </Box>
      <TitleTypography>ساعت‌های قابل رزرو عصر</TitleTypography>
      <Box
      className={styles.reserveabletimeContaner}
      mt={2}>
        {raserveableTime.map(item=> <Box className={styles.reserveabletime}><Typography>{item.time}</Typography></Box>)}
      </Box>
    </Box>
  )
}
