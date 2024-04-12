import React,{useState} from 'react'
import { Typography,Stack,Breadcrumbs,Grid, Box, FormControl } from '@mui/material'
import TitleTypography from '../title'
import Rating from '@mui/material/Rating'
import Button from '../../buttons/button.component'
import style from '../consultants.module.css'
import SendCommentAndRate from './SendCommentAndRate'



export default function VideoConsultantation(prop) {
  const {connectionType}=prop




  const[start,setStart]=useState(false)


  const startHandler=()=>{
    setStart(true)
    console.log(start)
  }


  return (
<>
{start?   
<>
    <Grid >
    <video controls  style={{height:"580px",width:"100%",marginTop:"1rem"}}>

    </video>
    </Grid>
    <SendCommentAndRate />

</>   
:<button onClick={startHandler} className={style.buttonStyle}>شروع مشاوره <span>{connectionType}</span></button>}
</>
  )
}
