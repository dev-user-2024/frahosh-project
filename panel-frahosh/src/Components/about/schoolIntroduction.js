import { Paper,Typography } from '@mui/material'
import React from 'react'
import { Fragment } from 'react'
import TitleTypography from './title'
export default function SchoolIntroduction(props) {
const {schoolDescription,schoolName}=props
  return (
    <Fragment>
        <TitleTypography>{schoolName}</TitleTypography>
        <Paper sx={{display:"flex", alignItems:"center" ,pl:"10px", height:"200px"}}><Typography>{schoolDescription}</Typography></Paper>
    </Fragment>
  )
}
