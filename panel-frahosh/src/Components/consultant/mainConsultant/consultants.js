import { Stack, box, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import TitleTypography from '../title'
import styles from "./consultants.module.css"
export default function Consultants(props) {
const {consultantName, consultantImage,id} =  props
  return (
            <Paper sx={{py:"18px" , px:"24px"}}>
                <div className={styles.imgContainer}>
                  <Link to={`/consultant/${id}`}>
                    <img src={consultantImage} alt="profile photo" />
                  </Link>
                </div>
                <Typography component="p" sx={{mt:"9px"}}>
                    {consultantName}
                </Typography>
            </Paper>
    
  )
}
