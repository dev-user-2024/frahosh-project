import React from 'react'
import { Box, Stack ,Typography, Container} from '@mui/material'
import TitleTypography from '../about/title'
import Button from '../buttons/button.component.jsx'
import { useState } from 'react'
import CheckBox from './checkbox'
import styles from '../ticket/ticket.module.css'


export default function ReportCards() {

  const [saveDescriptionToggle,setSaveDescriptionToggle]=useState(false)
  function saveDescriptionHandler(){
    setSaveDescriptionToggle(!saveDescriptionToggle)
    console.log(saveDescriptionToggle)
  }
  return (
    <Container>
    <Box
    sx={{
      width:"100%",
      margin:"2rem 0"
    }}>
      <Stack 
      direction={{ xs: 'column', md: 'row' }}
      justifyContent={{ xs: '', md: 'space-between' }}
      mb={4}>
          <TitleTypography>لیست کارنامه‌های بارگذاری شده</TitleTypography>
          <Button buttonType="saveDescription" onClick={saveDescriptionHandler}>  
            + ثبت توضیحات
          </Button>
      </Stack>
      <Box
      sx={{
        height:"700px",
        boxShadow:"3px 3px 30px rgba(0, 0, 0, 0.08)"
      }}
      mb={4}>

      </Box>
      {saveDescriptionToggle &&       
      <>
        <TitleTypography>توضیحات دانش‌آموز</TitleTypography>
        <textarea 
        className={styles.textarea}
        >
        </textarea>
        <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ xs: '', md: 'space-between' }}>
          <Box
          sx={{
            display:"flex",
            alignItems:"center"
          }}>
            <CheckBox></CheckBox>
            <Typography>به مشاور نشان داده شود.</Typography>
          </Box>
          <Box
           sx={{
           display:"flex",
           alignItems:"center"
           }}>
            <CheckBox></CheckBox>
            <Typography>به والدین نشان داده شود.</Typography>
          </Box>
        </Stack>
        <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ xs: '', md: 'center      ' }}
        mt={3}>
            <Button buttonType="" onClick={saveDescriptionHandler} >
            ثبت
            </Button>
            <Button buttonType="cancelDescription" onClick={saveDescriptionHandler}>
            لغو
            </Button>
        </Stack>
       </>}

    </Box>
    </Container>
  )
}
