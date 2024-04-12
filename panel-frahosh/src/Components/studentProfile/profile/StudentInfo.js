import { Avatar, Grid,Stack,Typography } from '@mui/material'
import React from 'react'
import studentProfileImg from '../../../assests/image/profilestudentlogo.svg'
import styles from './studentProfile.module.css'
import { Info } from '@mui/icons-material'



export default function StudentInfo({info}) {
    console.log(info)

  return (
  

    <Grid container sx={{
        boxShadow:"3px 3px 30px rgba(0, 0, 0, 0.08)"
        }} mt={2}>
    <Grid  item xs={7} sm={6} md={3.5} className={styles.profileImgContainer}>
            <Avatar
       
        sx={{
             width: 120,
            height: 120,
             position:"absolute",
             bottom:47, 
             left:50,
    }}
        />
    </Grid>
    <Grid container item xs={12} md={8} mb={4}  >
            <Grid item xs={4}  mt={4.5} className={styles.studentProfileGrid}>
                <Typography className={styles.text }>نام و نام خانوادگی</Typography>
            </Grid>
            <Grid item xs={8} mt={4.5} className={styles.studentProfileGrid}>
                    <Typography>{info.name} {info.family}</Typography>
            </Grid>
            <Grid item xs={4}  mt={4.5} className={styles.studentProfileGrid}>
                <Typography className={styles.text }>تاریخ تولد</Typography>
            </Grid>
            <Grid item xs={8} mt={4.5} className={styles.studentProfileGrid}>
                    <Typography></Typography>
            </Grid>
            <Grid item xs={4}  mt={4.5} className={styles.studentProfileGrid}>
                <Typography className={styles.text }>مقطع تحصیلی</Typography>
            </Grid>
            <Grid item xs={8} mt={4.5} className={styles.studentProfileGrid}>
                    <Typography></Typography>
            </Grid>
    </Grid>
    </Grid>
    
  )
}
