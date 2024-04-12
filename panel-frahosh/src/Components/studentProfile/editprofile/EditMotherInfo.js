import React from 'react'
import styles from './editStudentProfile.module.css'
import { Box, Grid, Typography } from '@mui/material'



export default function EditMotherInfo(props) {
    const {name,age,education,job,phoneNamber}=props

  return (
    <Box  sx={{
        width:{xs:"100%",
        md:"48%"},
        mb:2,
        boxShadow: "3px 3px 30px rgba(0, 0, 0, 0.08)",}}
        p={5} >
            <Grid container className={styles.studentEditProfileGrid}>
                <Grid item xs={3} mb={3} sx={{display:"flex", alignItems:"center"}}>
                    <Typography className={styles.text }>نام مادر</Typography>
                </Grid>
                <Grid item  xs={9}  mb={3}>
                    <input  type="text" id="fname" name="fname" defaultValue={name}/>
                </Grid>
                <Grid item  xs={3} mb={3} sx={{display:"flex", alignItems:"center"}}>
                    <Typography className={styles.text }>سن</Typography>
                </Grid>
                <Grid item xs={9}  mb={3}>
                    <input  type="text" id="fname" name="fname" defaultValue={age}/>
                </Grid>
                <Grid item xs={3} mb={3} sx={{display:"flex", alignItems:"center"}}>
                    <Typography className={styles.text }>تحصیلات</Typography>
                </Grid>
                <Grid item  xs={9}  mb={3}>
                    <input  type="text" id="fname" name="fname" defaultValue={education}/>
                </Grid>
                <Grid item  xs={3} mb={3} sx={{display:"flex", alignItems:"center"}}>
                    <Typography className={styles.text }>شغل</Typography>
                </Grid>
                <Grid item  xs={9}  mb={3}>
                    <input  type="text" id="fname" name="fname" defaultValue={job}/>
                </Grid>
                <Grid item  xs={3} mb={3} sx={{display:"flex", alignItems:"center"}}>
                    <Typography className={styles.text }>شماره تماس</Typography>
                </Grid>
                <Grid item xs={9}  mb={3}>
                    <input type="text" id="fname" name="fname" defaultValue={phoneNamber}/> 
                </Grid>
            </Grid>
    </Box>
  )
}
