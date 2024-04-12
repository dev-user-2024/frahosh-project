import React from 'react'
import Button from '../buttons/button.component';
import TitleTypography from '../title/title';
import {Grid } from '@mui/material';
export default function ProducerHeader(prop) {
    const {pageIndex}=prop
  return (
      
    <Grid container sx={{display:"flex",justifyContent:"space-between"}} mb="5rem">
    <Grid container item xs={12} sm={12} md={4} lg={4} xl={4}>
        <TitleTypography>برنامه روز یکشنبه ۱۶ مرداد</TitleTypography>
    </Grid>
    {pageIndex===1 &&   
    <Grid container item xs={12} sm={12} md={5} lg={5} xl={5} sx={{display:"flex",justifyContent:"space-between"}}>
            <Button>+ جدید</Button>
            <Button>حذف</Button>
    </Grid>

}
</Grid>
  )
}
