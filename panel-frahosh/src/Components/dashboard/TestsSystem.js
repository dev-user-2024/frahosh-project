import { Box, } from '@mui/material'
import React from 'react'
import TitleTypography from '../about/title'
import Organizer2 from '../../assests/image/svg/Organizer 2.svg'
import { Link } from 'react-router-dom'



export default function TestsSystem() {
  return (
    <Link
    to='./'>
      <Box
      sx={{
          backgroundColor:"#1D9BF0",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"center",
          height:"224px",
      }}>
          <img  src={Organizer2}
          style={{
            marginBottom:4,
          }}
          />
          <TitleTypography
          style={{
              color:"#fff",
          }}>
          ورود به  سامانه حل سوال درسی    
          </TitleTypography>
      </Box>
    </Link>
  )
}
