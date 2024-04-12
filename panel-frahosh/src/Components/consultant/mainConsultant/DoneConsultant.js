import { Paper, Stack, Typography,IconButton } from '@mui/material'
import React from 'react'
import styles from "./reservedConsultants.module.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function DoneConsultants(props) {
    const {doneDate, consultantName , detail} = props
  return (
    <Paper className={styles.paper} >
        
            <Typography className={styles.DoneConsultantsText}>
                {doneDate}
            </Typography>
            <Typography className={styles.DoneConsultantsText}>
                {consultantName}
            </Typography>
            <Stack direction='row' alignItems="center">
                <Typography className={styles.DoneConsultantsText}>
                {detail}
                </Typography>
                <IconButton onClick={()=>{console.log("clicked")}} ><ArrowBackIcon /></IconButton>
            </Stack>
       
    </Paper>
  )
}
