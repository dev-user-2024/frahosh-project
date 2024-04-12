import { Box,Stack,Typography } from '@mui/material'
import React from 'react'
import TitleTypography from '../title'
import Calendr from '../../calender/calender'
Calendr


export default function ReserveableDays(props) {
// const desabledTime=['2023/6/4' ,' 2023/6/2','2023/6/3','2023/6/18','2023/6/15']
const{id}=props
const onDaysClickHandler=(event)=>{
console.log(event.target.value)
}

const desabledTime=['2023/6/4' ,' 2023/6/1','2023/6/3','2023/6/18','2023/6/15']

  return (
<>
<Box sx={{width:"100%",boxShadow:"3px 3px 30px rgba(0, 0, 0, 0.08)",display:"column",justifyContent:"center",alignItems:"center",padding:"0.7rem .9rem"}}>
    <TitleTypography>روزهای قابل رزرو</TitleTypography>
      <Calendr  onDaysClick={onDaysClickHandler} desabledTime={desabledTime} id={id}/>
      <Stack direction="row"  alignItems="center" mt={2}>
        <Box sx={{width:"25px",
                  height: "25px",
                  background: "linear-gradient(180deg, #F1A6A0 0%, #FFF2F1 100%)",
                  border: "0.1px solid rgba(29, 155, 240, 0.25)",
                  boxShadow:"1px 1px 10px rgba(0, 0, 0, 0.08)"}}>
        </Box>
        <Typography>غیرقابل رزرو</Typography>
        <Box sx={{width:"25px",
                  height: "25px",
                  background:"#FEFEFE",
                  boxShadow:" 1px 1px 10px rgba(0, 0, 0, 0.08)",
                 }}>
        </Box>
        <Typography>قابل رزرو</Typography>
      </Stack>
    </Box>
</>
  )
}
