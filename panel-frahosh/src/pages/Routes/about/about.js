import { Grid, Paper } from '@mui/material'
import React from 'react'
import AboutHeader from '../../../Components/about/aboutHeader'
import schoolImg from '../../../assests/image/aboutH.svg'
import SchoolIntroduction from '../../../Components/about/schoolIntroduction'
import SchoolLocation from '../../../Components/about/schoolLocation'
import SchoolGallery from '../../../Components/about/schoolGallery'
import SchoolVideo from '../../../Components/about/schoolVideo'
export default function About() {
  return (
    
<Grid container p={3}>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} ml={2}>
        <AboutHeader schoolImg={schoolImg} establishedYear={"۱۴۰۱"} type={"غیرانتفاعی"} classNumber={"۳۲"} smartTest={"دارد"} schoolName={"مدرسه دانش"}/>
    </Grid>
    <Grid container item mt={2} spacing={2.5} xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid  item xs={12} sm={12} md={7} lg={7} xl={7}>
            <SchoolIntroduction schoolName={"مدرسه دانش"} schoolDescription={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتر"} />
        </Grid>
        <Grid  item xs={12} sm={12} md={5} lg={5} xl={5}>
            <SchoolLocation/>
        </Grid>
        <Grid  item xs={12} sm={12} md={7} lg={7} xl={7}>
            <SchoolGallery  />
        </Grid>
        <Grid  item xs={12} sm={12} md={5} lg={5} xl={5}>
            <SchoolVideo />
        </Grid>
    </Grid>
</Grid>

  )
}
