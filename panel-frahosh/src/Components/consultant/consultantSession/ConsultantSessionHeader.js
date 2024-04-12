import React from 'react'
import { Typography,Stack,Breadcrumbs,Grid, Box } from '@mui/material'
import TitleTypography from '../../../Components/consultant/title'

export default function ConsultantSessionHeader(props) {
    const{date,time,connectionType,consulatantName,period,coast}=props
  return (
    <Grid container item sx={{border:"0.5px solid #1D9BF040",padding:"1rem 1.5rem",display:"flex",justifyContent:"space-between"}} mb="2rem">
    <Grid container item xs={12} sm={12} md={5} lg={5} xl={5} sx={{display:"flex",flexDirection:"column" ,justifyContent:"space-between"}}>
            <Grid container item mb="1rem">
                <Grid item xs={12} sm={12} md={9} lg={9} xl={9} >
                    <Typography sx={{color:"#1D9BF0;"}}>تاریخ</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3} >
                    <Typography>{date}</Typography>
                </Grid>
            </Grid>
            <Grid container item  mb="1rem">
                <Grid item xs={12} sm={12} md={9} lg={9} xl={9} >
                    <Typography sx={{color:"#1D9BF0;"}}>ساعت</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3} >
                    <Typography>{time}</Typography>     
                </Grid>
            </Grid>
            <Grid container item >
                <Grid item xs={12} sm={12} md={9} lg={9} xl={9} >
                    <Typography sx={{color:"#1D9BF0;"}}>مدت زمان</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3} >
                    <Typography>{period}</Typography>
                </Grid>
            </Grid>
    </Grid>
    <Grid container item xs={12} sm={12} md={5} lg={5} xl={5} sx={{display:"flex",flexDirection:"column" ,justifyContent:"space-between"}}>
        <Grid container item mb="1rem">
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9} >
                <Typography sx={{color:"#1D9BF0;"}}>نوع ارتباط</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} >
                <Typography>{connectionType}</Typography>
            </Grid>
        </Grid>
        <Grid container item mb="1rem">
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9} >
                <Typography sx={{color:"#1D9BF0;"}}>نام مشاور</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} >
                <Typography>{consulatantName}</Typography>    
            </Grid>
        </Grid>
        <Grid container item >
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9} >
                <Typography sx={{color:"#1D9BF0;"}}>هزینه پرداخت شده</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} >
                <Typography>{coast}</Typography>
            </Grid>
        </Grid>
    </Grid>
</Grid>
  )
}
