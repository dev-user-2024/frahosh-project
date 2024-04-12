import { Box,Typography ,Stack} from '@mui/material'
import React from 'react'
import Rating from '@mui/material/Rating';


export default function CommentsRatings(props) {
    const{name,text,value}=props
  return (
    <Box sx={{width:"100%",padding:"0.7rem .9rem",border:"1px solid #B6EAFA"}}>
        <Stack direction="row" justifyContent="space-between" mb="1rem">
           <Typography  sx={{color:"#6C6C6C"}} variant="caption">{name}</Typography>
           <Box sx={{display:"flex"}}>
                <Typography>4.5</Typography>
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
           </Box>
        </Stack>
        <Typography>
            {text}
        </Typography> 
    </Box>
  )
}
