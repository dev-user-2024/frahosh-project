import React from 'react'
import { Grid,Stack,Typography,Breadcrumbs, Container, Box } from '@mui/material'
import ReservationHeader from '../../../Components/consultant/reservation/reservationHeader'
import ReservationTimePiker from '../../../Components/consultant/reservation/reservationTimePiker'
import ReservationTimeline from '../../../Components/consultant/reservation/reservationTimeline'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export default function ConsultantReservation() {
  const breadcrumbs = [
    <Typography>مشاوره</Typography>,
    <Typography>مشاور علی حسینی</Typography>,
    <Typography sx={{color:"#040C1A"}}>رزرو مشاوره</Typography>
  ];

  return (
    <Container >
    <Stack spacing={2} mb="2rem">
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {breadcrumbs}
        </Breadcrumbs>
    </Stack>
    <ReservationHeader date={" ۱۵ شهریور ۱۴۰۱"}/>
  <Stack direction={{xs:"column", md:"row"}} justifyContent="space-between" mt={4} mb={4}>
    <Box  sx={{
              background:"#FAFAFA",
              width:{
                xs:"100%",
                md:"45%"
              },
              boxShadow: "3px 3px 30px rgba(0, 0, 0, 0.08)",}}
              p={5} 
              mb={3}>
      <ReservationTimeline />
    </Box>
    <Box sx={{
              background:"#FAFAFA",
              width:{
                xs:"100%",
                md:"45%"
              },
              boxShadow: "3px 3px 30px rgba(0, 0, 0, 0.08)",}}
              p={5}
              mb={3}>
      <ReservationTimePiker />
    </Box>
  </Stack>

   </Container>
  )
}
