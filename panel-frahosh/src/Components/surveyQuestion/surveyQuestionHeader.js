import React from 'react'
import { Grid,Stack,Typography } from '@mui/material'
import surveyQuestion from '../../assests/image/svg/stars.svg';
import sq1 from '../../assests/image/01 3@2x.png'
import sq2 from '../../assests/image/01 4@2x.png'

function SurveyQuestionHeader(props) {
    const {title,date,deadline,number}=props;
    return (
                 <Grid
                 container
                 padding="1rem .5rem"
                 sx={{
                   backgroundImage:`url(${surveyQuestion})`,
                   color:"#fff",
                   backgroundRepeat:"no-repeat",
                   backgroundSize:"cover",
                   backgroundPosition:"center",
                 }}>
                   <Grid  item  xs={12} md={6}  
                    sx={{display:"flex",
                    paddingX:"1rem",
                     flexDirection:"column",
                     alignItems:{xs:"center",md:"start"},
                     justifyContent:"space-around"}} >
                        <Stack direction="row">
                            <Typography>عنوان:</Typography>
                            <Typography>{title}</Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography>تاریخ ایجاد:</Typography>
                            <Typography>{date}</Typography>
                        </Stack>
                        <Stack direction="row" >
                            <Typography>مهلت انجام:</Typography>
                            <Typography>{deadline}</Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography>تعداد سوالات:</Typography>
                            <Typography>{number}</Typography>
                        </Stack>
                   </Grid>
                   <Grid  item  xs={12} md={6} 
                   sx={{display:"flex",
                   alignItems:"end",
                   gap:6,
                   justifyContent:"center"}}>
                           <img src={sq2} width="127px" height="200px"/>
                           <img  src={sq1} width="140px" height="180px"/>
                   </Grid>
               </Grid>  
    )
}

export default SurveyQuestionHeader
