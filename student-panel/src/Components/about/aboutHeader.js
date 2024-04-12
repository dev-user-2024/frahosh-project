import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'


export default function AboutHeader(props) {
    const {schoolImg,establishedYear,type,classNumber,smartTest,schoolName}=props
  return (
    <Grid container spacing={2}
     sx={{background:" linear-gradient(167.98deg, #1D9BF0, #0E80CC )",padding:"40px 50px" }}>
        <Grid container item xs={5}  md={3}  >
          <Stack alignItems="center" justifyContent="center" gap={2}>
            <img src={schoolImg} alt="schoolImg" />
            <Typography sx={{color:"#fff",}}>{schoolName}</Typography>
            </Stack>
          
        </Grid>
        <Grid container item xs={7}  md={9} >

            <Grid item xs={12}  md={6} mb={{xs:2,md:0}} gap={{xs:2,md:5}} sx={{display:"flex" ,flexDirection:"column", alignItems:"center"}}>
                <Typography  sx={{color:"#fff",fontFamily:"Rokh-Bold"}} variant="subtitle1">سال تاسیس:<span>{establishedYear}</span></Typography>
                <Typography sx={{color:"#fff",fontFamily:"Rokh-Bold"}}  variant="subtitle1">نوع:<span>{type}</span></Typography>
            </Grid>
            <Grid item xs={12}  md={6} gap={{xs:2,md:5}} sx={{display:"flex" ,flexDirection:"column", alignItems:"center"}}>
                <Typography sx={{color:"#fff",fontFamily:"Rokh-Bold"}}  variant="subtitle1">تعداد کلاس:<span>{classNumber}</span></Typography>
                <Typography sx={{color:"#fff",fontFamily:"Rokh-Bold"}}  variant="subtitle1">آزمون هوشمند:<span>{smartTest}</span></Typography>
            </Grid>

        </Grid>

    </Grid>
  )
}
