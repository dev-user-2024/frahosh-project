import { Paper, Stack, Typography,IconButton } from '@mui/material'
import React from 'react'
import styles from "./reservedConsultants.module.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export default function ReservedConsltants(props) {
    const {reservedDate, consultantName, remainedDay , link} = props
    console.log(reservedDate, consultantName, remainedDay , link)
  return (
    <Paper className={styles.paper} >
        
            <Typography>
                {reservedDate}
            </Typography>
            <Typography>
                {consultantName}
            </Typography>
            <Stack direction='row' alignItems="center">
                <Typography>
                    {remainedDay}
                </Typography>
                <Link to={link}>
                <IconButton onClick={()=>{console.log("clicked")}} ><ArrowBackIcon /></IconButton>
                </Link>
            </Stack>
       
    </Paper>
  )
}
