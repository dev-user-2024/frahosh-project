import { Box, Typography, } from '@mui/material'
import React from 'react'
import Organizer2 from '../../assests/image/svg/Organizer 2.svg'
import { Link } from 'react-router-dom'
import {useTheme} from '@mui/material'
export default function TestsSystem() {
  const theme = useTheme()

  return (
    <Link
    to='./'>
      <Box
      sx={{
          backgroundColor:"#095385",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"center",
          height:"224px",
      }}>
          <img  src={Organizer2}
          alt=''
          style={{
            marginBottom:4,
          }}
          />
          <Typography
        variant='h5' component="p" sx={{
        fontFamily: "Rokh-Bold",
        mb:1,
        color: theme.palette.mode === "dark" ? "#fff" : "#1D9BF0"
      }}
      >
      ورود به  سامانه بانک سوال فراهوش  

      </Typography>
      </Box>
    </Link>
  )
}
