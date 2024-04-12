import { Box, Stack ,Button,Paper,Typography} from '@mui/material'
import React from 'react'
import TitleTypography from '../about/title'
import upload from '../../assests/image/Upload.svg'
import link from '../../assests/image/svg/link.svg'
import { Link } from 'react-router-dom'
export default function ReportcardList(props) {
  const {reportCard}=props
  return (
    <Box
    sx={{
      width:"100%"
    }}>
      <Stack 
      direction={{ xs: 'column', md: 'row' }}
      justifyContent={{ xs: '', md: 'space-between' }}
      mb={4}>
          <TitleTypography>لیست کارنامه‌های بارگذاری شده</TitleTypography>
          <Button 
                      sx={{
                        height: "48px",
                        background: "#1D9BF0",
                        borderRadius:"10px",
                        color:"#fff",
                        width: "236px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent:"center",
                        "&:hover":{
                        background: "#1D9BF0",
                        }}}
           component="label"
           variant="outlined">  
            <img src={upload}/>
            بارگذاری کارنامه  جدید
            <input type="file" hidden />
          </Button>
      </Stack>
      <Paper
        sx={{
            display:"flex",
            justifyContent:"space-between",
            padding:"25px",
            marginBottom:"2rem"
        }}
        >
            <Box>
                <Typography
                 variant='subtitle1'
                 component='p'
                >
                    {reportCard}
                </Typography>
            </Box>
            <Box
              sx={{
                display:"flex",
                alignItems:"center",
            }}>
              <Link 
               to='/reportcards'
               >
                <img src={link} />
               </Link>
            </Box>
        </Paper>
    </Box>
  )
}
