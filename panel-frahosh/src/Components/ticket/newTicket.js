import React from 'react'
import { Box,Button, FormControl, Grid, Stack, Typography,Select,MenuItem } from '@mui/material'
import styles from './ticket.module.css'
import upload from '../../assests/image/Upload.svg'


export default function NewTicket() {
  return (
    <FormControl sx={{
        width:"100%",
        marginBottom:"2rem"
    }}>
    <Grid container sx={{display:"flex",justifyContent:"space-between"}}>
        <Grid
        item
        xs={12} 
        md={5}
        display="flex"
        direction="column"
        >
            <label >عنوان تیکت</label>
            <input placeholder='موضوع تیکت رو بنویس'  className={styles.ticketinput}/>
            <label >درس</label>
            <Select
            sx={{
                borderRadius:"10px",
            }}
            id=""
            // value={age}
            >
            <MenuItem value={"ریاضی"}>ریاضی</MenuItem>
            <MenuItem value={"علوم"}>علوم</MenuItem>
            <MenuItem value={"هنر"}>هنر</MenuItem>
            </Select>
            <label >اولویت</label>
            <Select
            sx={{
                borderRadius:"10px",
            }}
            id=""
            // value={age}
            >
            <MenuItem value={"بالا"}>بالا</MenuItem>
            <MenuItem value={"بالا"}>بالا</MenuItem>
            <MenuItem value={"بالا"}>بالا</MenuItem>
            </Select>
        </Grid>
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
    </Grid>
    <Stack
    direction="row"
    justifyContent={{xs:"start",md:"center"}}
    alignItems="center"
    >
        <button className={styles.sendTicketBtn}>ارسال تیکت</button>
    </Stack>
</FormControl>
  )
}
