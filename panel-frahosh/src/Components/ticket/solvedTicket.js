import React from 'react'
import { Box, Button, FormControl, Grid, Stack, Typography,Select,MenuItem } from '@mui/material'
import styles from './ticket.module.css'
import { useState } from 'react'
import ReTicket from './ReTicket'

export default function SolvedTicket(props) {
    const {status,sendingTicketDate,lesson,question,ticketTitle,receiveTicketDate,priority,answer}=props
    const [ticketToggle,setTicketToggle]=useState(false)
    const ticketToggleHandler=()=>{
        setTicketToggle(true)
    }
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
            <label>وضعیت</label>
            <Box className={styles.ticketinput}>
                <Typography>{status}</Typography>
            </Box>
            <label>تاریخ ارسال تیکت</label>
            <Box className={styles.ticketinput}>
                <Typography>{sendingTicketDate}</Typography>
            </Box>
            <label>درس</label>
            <Box className={styles.ticketinput}>
                <Typography>{lesson}</Typography>
            </Box>
            <label>متن پیام</label>
            <textarea
            className={styles.textarea}>
                {question}
            </textarea>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography>فایل‌های مرتبط</Typography>
            <Box className={styles.uploadedFile}>
            </Box>
        </Stack>
        </Grid>
        <Grid
        item
        xs={12} 
        md={5}
        display="flex"
        direction="column">
            <label>عنوان تیکت</label>
            <Box className={styles.ticketinput}>
                <Typography>{ticketTitle}</Typography>
            </Box>
            <label>تاریخ دریافت پاسخ</label>
            <Box className={styles.ticketinput}>
                <Typography>{receiveTicketDate}</Typography>
            </Box>
            <label>اولویت</label>
            <Box className={styles.ticketinput}>
                <Typography>{priority}</Typography>
            </Box>
            <label>پاسخ</label>
            <textarea 
            className={styles.textarea}>
                {answer}
            </textarea>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography>فایل‌های مرتبط</Typography>
            <Box className={styles.uploadedFile}>
            </Box>
             </Stack>
        
        </Grid>
        {ticketToggle && <ReTicket />}
    </Grid>
    {ticketToggle ? 
        <Stack
        direction="row"
        justifyContent={{xs:"start",md:"center"}}
        alignItems="center"
        >
            <button className={styles.sendTicketBtn} >ارسال تیکت</button>
        </Stack> :
                <Stack
                direction="row"
                justifyContent={{xs:"start",md:"center"}}
                alignItems="center"
                >
                    <button className={styles.sendTicketBtn} onClick={ticketToggleHandler}>ارسال مجدد تیکت</button>
                </Stack> 
        }
</FormControl>
  )
}
