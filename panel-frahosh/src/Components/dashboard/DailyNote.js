import { Box,} from '@mui/material'
import React from 'react'
import TitleTypography from '../about/title'
import styles from './dashboard.module.css'
import dailynote from '../../assests/image/dailynote.svg'

export default function DailyNote() {
  return (
    <Box className={styles.componentStyle}
    sx={{
      height:"100%"
    }}>
    <TitleTypography>یادداشت روزانه</TitleTypography>
    <textarea
    style={{
        backgroundImage:`url(${dailynote})`,
        height:"calc(100% - 70px)",
        marginTop:3,
        width:"100%",
        lineHeight:"30px",
    }}>

    </textarea>
   </Box>
  )
}
