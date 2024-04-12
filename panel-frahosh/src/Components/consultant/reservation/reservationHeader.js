import React from 'react'
import { Grid,Stack,Typography } from '@mui/material'
import reservationImg from '../../../assests/image/svg/stars.svg'
import reserve1 from '../../../assests/image/reserve1.svg'
import reserve2 from '../../../assests/image/reserve2.svg'
import { useParams } from 'react-router-dom'
import { DateObject } from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
export default function ReservationHeader() {
  const {date}=useParams();
  const consultantDate = new DateObject({
    date: date,
    format: "YYYY-MM-DD",
    calendar: persian,
    locale: persian_fa
  })
  return (
    <Grid
    container
    padding="1rem .5rem"
    sx={{
      backgroundImage:`url(${reservationImg})`,
      color:"#fff",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      backgroundPosition:"center",
      
    }}>
      <Grid  item  xs={12} md={6}  
       sx={{display:"flex",
        alignItems:"center",
        justifyContent:"flex-start"}} >
               <Typography ml={2}>روز</Typography>
               <Typography>{consultantDate.day}{consultantDate.month.name}{consultantDate.year}</Typography>
      </Grid>
      <Grid  item  xs={12} md={6} 
      sx={{display:"flex",
      alignItems:"end",
      gap:6,
      justifyContent:"center"}}>
              <img src={reserve1} width="127px" height="200px"/>
              <img  src={reserve2} width="140px" height="180px"/>
      </Grid>
  </Grid> 
  )
}
