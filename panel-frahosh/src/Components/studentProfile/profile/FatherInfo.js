import React from 'react'
import {Box, Grid, Typography} from '@mui/material'
import styles from './studentProfile.module.css'
export default function FatherInfo(props) {
const {name,age,education,job,phoneNamber}=props
  return (
    <Box  sx={{
        width:{xs:"100%",
        md:"48%"},
        mb:2,
        boxShadow: "3px 3px 30px rgba(0, 0, 0, 0.08)",}}
        p={5} >
            <Grid container>
                <Grid xs={6} mb={3}>
                <Typography className={styles.text }>نام پدر</Typography>
                </Grid>
                <Grid xs={6}  mb={3}>
                    <Typography>{name}</Typography>
                </Grid>
                <Grid xs={6} mb={3}>
                    <Typography className={styles.text }>سن</Typography>
                </Grid>
                <Grid xs={6}  mb={3}>
                    <Typography>{age}</Typography>
                </Grid>
                <Grid xs={6} mb={3}>
                    <Typography className={styles.text }>تحصیلات</Typography>
                </Grid>
                <Grid xs={6}  mb={3}>
                    <Typography>{education}</Typography>
                </Grid>
                <Grid xs={6} mb={3}>
                    <Typography className={styles.text }>شغل</Typography>
                </Grid>
                <Grid xs={6}  mb={3}>
                    <Typography>{job}</Typography>
                </Grid>
                <Grid xs={6} mb={3}>
                    <Typography className={styles.text }>شماره تماس</Typography>
                </Grid>
                <Grid xs={6}  mb={3}>
                    <Typography>{phoneNamber}</Typography>
                </Grid>
            </Grid>






    </Box>
  )
}
