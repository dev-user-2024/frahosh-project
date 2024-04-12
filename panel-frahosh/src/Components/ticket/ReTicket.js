import { Box, Button, FormControl, Grid, Stack, Typography,Select,MenuItem } from '@mui/material'
import React from 'react'
import styles from './ticket.module.css'
import upload from '../../assests/image/Upload.svg'

export default function ReTicket() {
  return (
    <>
    <Grid
    item
    xs={12} 
    md={5}
    display="flex"
    direction="column"
    >
    <label >متن پیام</label>
    <textarea
    className={styles.textarea}>
    </textarea>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>فایل‌های مرتبط</Typography>
        <Button
            sx={{
                height: "48px",
                background: "#1D9BF0",
                borderRadius:"10px",
                color:"#fff",
                width: "40%",
                display: "flex",
                alignItems: "center",
                justifyContent:"center",
                "&:hover":{
                background: "#1D9BF0",
                }
            }}
  
            component="label"
            variant="outlined">
                <img src={upload} className={styles.ticketImg}/>
                <input type="file" hidden />
            بارگذاری فایل
            </Button>
    </Stack>
    
    </Grid>
    </>
  )
}
