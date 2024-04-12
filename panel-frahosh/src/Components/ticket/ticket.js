import React from 'react'
import { Box, Link, Paper, Stack, Typography } from '@mui/material'
import link from '../../assests/image/svg/link.svg'
import styles from './ticket.module.css'

export default function Ticket(props) {
    const {date,title,status}=props

  return (
 
        <Paper
        sx={{
            display:"flex",
            justifyContent:"space-between",
            padding:"25px",
            marginBottom:"2rem"
        }}
        >
            <Box>
                <Typography
                 variant='subtitle1'
                 component='p'
                >
                    {date}
                </Typography>
            </Box>
            <Box>
                <Typography
                 variant='subtitle1'
                 component='p'
                >
                    {title}
                </Typography>
            </Box>
            <Box 
           display="flex"
           alignItems="center">
                <Typography
                 variant='subtitle1'
                 component='p'
                 mr={1}
                >
                    {status}
                </Typography>
              <Link 
               href='#'
               >
                <img src={link} className={styles.ticketImg}/>
               </Link>
            </Box>
            
        </Paper>

  )
}
