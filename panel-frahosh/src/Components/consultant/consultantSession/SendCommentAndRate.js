import React,{useState} from 'react'
import { Typography,Stack,Breadcrumbs,Grid, Box, FormControl } from '@mui/material'
import TitleTypography from '../title'
import Rating from '@mui/material/Rating'
import Button from '../../buttons/button.component'
import style from '../consultants.module.css'

export default function SendCommentAndRate() {
  const[issend,setIssend]=useState(false)
  const [value, setValue] = React.useState(0);
    const issendHandler=()=>{
        setIssend(true)
        console.log("hi")
      }
  return (
  
    <FormControl sx={{display:issend ? "none": "" ,width:"100%"}}>
    <Grid sx={{display:"flex",justifyContent:"space-between",width:"100%"}} mt={2}>
        <TitleTypography>لطفا امتیاز و نظرت رو ثبت کن</TitleTypography>
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        />
    </Grid>
    <textarea style={{border:"1px solid #9DB2BF",height:"200px",width:"100%"}} >
    </textarea>
    <Grid  sx={{display:"flex",justifyContent:"center"}} mt="2rem">
        <button  onClick={issendHandler}  className={style.buttonStyle} >ثبت</button>
    </Grid>
    </FormControl>
  )
}
