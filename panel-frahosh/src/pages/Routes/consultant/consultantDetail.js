import { Breadcrumbs, Grid ,Box,Typography} from '@mui/material'
import React, { Fragment } from 'react'
import {Stack} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AboutConsulatant from '../../../Components/consultant/consultantDetailes/AboutConsulatant';
import ReserveableDays from '../../../Components/consultant/consultantDetailes/ReserveableDays';
import ConsulatantTimes from '../../../Components/consultant/consultantDetailes/ConsulatantTimes';
import Coast from '../../../Components/consultant/consultantDetailes/Coast';
import CommentsRatings from '../../../Components/consultant/consultantDetailes/CommentsRatings';
import TitleTypography from '../../../Components/consultant/title';
import { useParams } from 'react-router';

export default function ConsultantDetail() {
    // consulatant rating
    const [value, setValue] = React.useState(4);
    const id=useParams().id
    
    const breadcrumbs = [
        <Typography>مشاوره</Typography>,
        <Typography sx={{color:"#040C1A"}}>مشاور علی حسینی</Typography>,
      ];
  return (
    <Fragment>
            <Stack spacing={2} mb="2rem">
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                {breadcrumbs}
                </Breadcrumbs>
            </Stack>
            <Grid container spacing={5} >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <AboutConsulatant   name={"علی حسینی"} value={value} text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان"}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                     <ReserveableDays id={id} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                     <ConsulatantTimes morningTime={"صبح: ۸ الی۱۲"} eveningTime={"عصر: ۵ الی ۹"} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                     <Coast text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"}/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb="2rem">
                    <Box sx={{width:"100%",boxShadow:"3px 3px 30px rgba(0, 0, 0, 0.08)",justifyContent:"center",alignItems:"center",padding:"0.7rem .9rem"}}>
                        <TitleTypography></TitleTypography>
                        <CommentsRatings name={"سحر مرادی"} value={4.5} text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی"}/>
                    </Box>
                     
                </Grid>
            </Grid>

    </Fragment>
  )
}
