import { Box, Typography,Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './dashboard.module.css'
import link from '../../assests/image/svg/link.svg'
import {useTheme} from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
export default function NotDoneTests(props) {
    const {date1,date2,date3,lesson1,lesson2,lesson3}=props
    const theme = useTheme()

  return (
    <Box className={styles.componentStyle}
    sx={{
        height:"224px",
        overflow:"auto",
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey.light : '#FFFFFF',
      }}>
    <Typography
        variant='h5' component="p" sx={{
        fontFamily: "Rokh-Bold",
        mb:1,
        color: theme.palette.mode === "dark" ? "#fff" : "#1D9BF0"
      }}
      >
      آزمون های پیش رو
      </Typography>
    <Grid container>
        <Grid container item xs={12} mb={2} mt={2}>

            <Grid item xs={4}>
                <Typography sx={{color:theme.palette.mode === "dark" ? "#fff" : "000"}}>
                    {date1}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography sx={{color:theme.palette.mode === "dark" ? "#fff" : "000"}}>
                    {lesson1}
                </Typography>
            </Grid>
            <Grid item xs={4}
                        sx={{
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                        }}>
                    <Link
                     to='/testlist'
                     >
                        <ArrowBack sx={{color:theme.palette.mode === "dark" ? "#fff" : "000"}} />
                    </Link>
            </Grid>

        </Grid>

        <Grid container item xs={12} mb={2}>
            
            <Grid item xs={4}>
                <Typography >
                    {date2}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography>
                    {lesson2}
                </Typography>

            </Grid>
            <Grid item xs={4}
                        sx={{
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                        }}>
                    <Link
                     to='/testlist'
                     >
                        <img src={link}/>
                    </Link>
            </Grid>

        </Grid>

        <Grid container item xs={12} mb={2}>
            
            <Grid item xs={4}>
                <Typography>
                    {date3}
                </Typography>

            </Grid>
            <Grid item xs={4}>
                <Typography>
                    {lesson3}
                </Typography>
            </Grid>
            <Grid item xs={4}
            sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}>
                    <Link
                     to='/testlist'
                    >
                        <img src={link}/>
                    </Link>
            </Grid>

        </Grid>

    </Grid>

   </Box>
  )
}
