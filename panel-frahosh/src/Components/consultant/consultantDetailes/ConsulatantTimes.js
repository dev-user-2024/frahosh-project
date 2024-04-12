import { Stack,Box,Typography, Divider } from '@mui/material'
import React from 'react'
import TitleTypography from '../title'

export default function ConsulatantTimes(props) {
    const {morningTime,eveningTime}=props
  return (
    <Box sx={{width:"100%",boxShadow:"3px 3px 30px rgba(0, 0, 0, 0.08)",justifyContent:"center",alignItems:"center",padding:"0.7rem .9rem"}}>
        <TitleTypography>ساعت های مشاوره</TitleTypography>
        <Stack direction="row" justifyContent="space-between" alignItems="center" m="1.8rem 0">
              <Typography>{morningTime}</Typography>
              {/* <Divider variant="inset" sx={{width: '40%',bgcolor: 'red'}} /> */}
              <Typography>{eveningTime}</Typography>
        </Stack>

    </Box>
  )
}
