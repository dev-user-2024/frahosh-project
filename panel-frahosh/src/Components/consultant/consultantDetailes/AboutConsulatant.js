import { Avatar, Typography,Box,Rating, Stack } from '@mui/material'
import React, { Fragment } from 'react'
import C1 from '../../../assests/image/c1.svg'
import TitleTypography from '../title'



export default function AboutConsulatant(props) {
    const {name,text,value}=props

  return (
<Fragment>
    <Box sx={{width:"100%",boxShadow:"3px 3px 30px rgba(0, 0, 0, 0.08)",justifyContent:"center",alignItems:"center",padding:"0.7rem .9rem"}}>
    <TitleTypography>درباره مشاوره</TitleTypography>
    <Box sx={{display:"column",padding:"1.5rem 1rem",textAlign:"center"}}>
        <Avatar sx={{margin:"0 auto",width:"109px",height:"109px"}} alt="consulatantphoto" src={C1}/>
        <Typography m=".9rem 0">{name}</Typography>
        <Stack direction="row" alignContent="center" justifyContent="center" mb="2rem">
           <Typography mr=".9rem" sx={{color:"#6C6C6C"}} variant="caption">۴.۶  از ۱۵۴ نفر</Typography>
           <Rating mb="2rem" name="read-only" value={value} readOnly />
        </Stack>
        <Typography>{text}</Typography>
    </Box>
    </Box>
</Fragment>
  )
}
