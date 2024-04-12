import React from 'react'
import { InputLabel,MenuItem,FormControl ,Select, Stack, Typography, Grid} from '@mui/material'
import styles from "./reservationTimePiker.module.css"
import Button from '../../buttons/button.component'
export default function ReservationTimePiker(props) {
  const {}=props
  return (
<>
<FormControl sx={{width:"100%"}}>
    <Grid container >
    
      <Grid item xs={3}  sx={{display:"flex", alignItems:"center"}} mb={5}>
        <Typography>از ساعت</Typography>
      </Grid>
      <Grid item xs={9} mb={5} sx={{display:"flex", direction:"row", alignItems:"center",  justifyContent:"center"   }}>
        <input type="number"  className={styles.timeInput}/>
        <Typography width="10%" textAlign="center">:</Typography>
        <input type="number"  className={styles.timeInput}/>
      </Grid>
      <Grid item mb={5} xs={3}   sx={{display:"flex", alignItems:"center"}}>
        <Typography>به مدت</Typography>
      </Grid>

      <Grid item xs={9} mb={5} >
      <Select
            labelId=""
            id=""
            defaultValue={15}
            // value={period}
            // label="15 دقیقه"
            // onChange={handleChange}
            sx={{width:"100%", borderRadius:"10px"}}
          >
            <MenuItem value={15}>۱۵ دقیقه</MenuItem>
            <MenuItem value={30}>۳۰ دقیقه</MenuItem>
            <MenuItem value={45}>۴۵ دقیقه</MenuItem>
            <MenuItem value={60}>۶۰ دقیقه</MenuItem>

          </Select>
      </Grid>
      <Grid item xs={3}  sx={{display:"flex", alignItems:"center"}}>
        <Typography>نوع مشاوره </Typography>
      </Grid>
      <Grid item xs={9} >
      <Select
            labelId=""
            id=""
            defaultValue={15}
            // value={period}
            // label="15 دقیقه"
            // onChange={handleChange}
            sx={{width:"100%",borderRadius:"10px"}}
          >
            <MenuItem value={15}>۱۵ دقیقه</MenuItem>
            <MenuItem value={30}>۳۰ دقیقه</MenuItem>
            <MenuItem value={45}>۴۵ دقیقه</MenuItem>
            <MenuItem value={60}>۶۰ دقیقه</MenuItem>

          </Select>
      </Grid>
      <Grid item xs={12}  sx={{
            border:"0.5px solid rgba(29, 155, 240, 0.25)",
            padding:2,
            mt:5,
            }}
            >
        <Typography>هزینه مشاوره تلفنی به مدت<span>{""}</span> دقیقه برابر است با؛ <br />
        <span>{""}</span> هزار تومان</Typography>
      </Grid>
      <Grid item xs={12}  mt={5}>
        <Button buttonType="consultantReservationBtn">رزرو و پرداخت</Button>
      </Grid>
    </Grid>
  </FormControl>



</>
  )
}
