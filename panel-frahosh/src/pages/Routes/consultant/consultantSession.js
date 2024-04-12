import React from 'react'
import { Typography,Stack,Breadcrumbs,Grid, Box } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import TitleTypography from '../../../Components/consultant/title'
import VideoConsultantation from '../../../Components/consultant/consultantSession/VideoConsultantation'
import VoiceConsultantation from '../../../Components/consultant/consultantSession/VoiceConsultantation'
import { useState } from 'react'
import ConsultantSessionHeader from '../../../Components/consultant/consultantSession/ConsultantSessionHeader'

export default function ConsultantSession() {
    const data= {
    date:"15 شهریور 1401",
    time:"ساعت 4 عصر",  
    connectionType:"صوتی",
    consulatantName:"علی حسینی",
    period:"15 دقیقه",
    coast:"125 هزار تومان"}
 

    const breadcrumbs = [
        <Typography>مشاوره</Typography>,
        <Typography>مشاور علی حسینی</Typography>,
        <Typography sx={{color:"#040C1A"}}>جلسه مشاوره</Typography>, 
      ];
  return (
    <Grid>
        <Stack spacing={2} mb="2rem">
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            {breadcrumbs}
            </Breadcrumbs>
       </Stack> 
       <Grid container   xs={12} sm={12} md={12} lg={12} xl={12} >
            <ConsultantSessionHeader date={"15 شهریور 1401"}
                time={data.time} 
                connectionType={data.connectionType}
                consulatantName={data.consulatantName}
                period={data.period}
                coast={data.coast}/>
            <Grid container   sx={{display:"flex",justifyContent:"center"}} mb="2rem">
                {data.connectionType==='تصویری' &&  <VideoConsultantation  connectionType={data.connectionType}/>}
                {data.connectionType==='صوتی' &&  <VoiceConsultantation  connectionType={data.connectionType}/>}
                {/* {connectionType==='چت' &&  <ChatConsultantation  connectionType={connectionType}/>} */}

            </Grid>
       </Grid>         
    </Grid>
  )
}
