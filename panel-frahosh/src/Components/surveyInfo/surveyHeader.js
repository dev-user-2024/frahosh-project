import { Box, Paper,Grid, Typography, Stack } from '@mui/material';
import React from 'react';
import { useTheme } from 'styled-components';
import survey from '../../assests/image/svg/stars.svg';
import survey1 from '../../assests/image/svg/survey1.svg'
import survey2 from '../../assests/image/svg/survey2.svg'



function SurveyHeader(props) {
    const uncompletedNumber=props.uncompletedNumber;
    const currentTheme=useTheme();
    return ( 
  
         <Grid
          container
          sx={{
            padding: ".3rem .5rem",
            backgroundImage:`url(${survey})`,
            backgroundSize: "cover",
            color:"#fff",
          
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            backgroundPosition:"center",
          }}>
            <Grid item xs={12}   md={6} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Typography>تعداد نظر سنجی های تکمیل نشده :</Typography>
                <Typography>{uncompletedNumber}</Typography>
            </Grid>
            <Grid  item xs={12}  md={6} 
             sx={{display:"flex",
             alignItems:"end",
             gap:6,
             justifyContent:"center"}}>        
                    <img src={survey1} width="127px" height="200px" />
                    <img  src={survey2} width="127px" height="200px"/>
            </Grid>
        </Grid>    
    )
}

export default SurveyHeader
