import {Avatar, Grid,Typography } from '@mui/material'
import React, {useEffect,useState} from 'react'
import styles from './editStudentProfile.module.css'
import DatePicker from "react-multi-date-picker"
import persian_fa from "react-date-object/locales/persian_fa"
import persian from "react-date-object/calendars/persian"
import uploadImage from "../../../assests/image/svg/camera.svg"
export default function EditStudentInfo(props) {
  const {name,birthday,grade,studentPhoto}=props
  const [photo, setPhoto] = useState(studentPhoto)
  const imageHandler = (event)=>{
    setPhoto(URL.createObjectURL(event.target.files[0]))
  }
  return (
    <Grid container sx={{boxShadow:"3px 3px 30px rgba(0, 0, 0, 0.08)"}} mt={2}>

    <Grid item xs={7} sm={6} md={3.5} sx={{display:"flex", alignItems:"center"}} className={styles.profileImgContainer}>
      <div >
        <img src={photo} className={styles.avatar}/>
        <img src={uploadImage} className={styles.uploadImage}/>
        <input type="file" name="avatar" onChange={imageHandler} accept="image/*"/>
        </div>
    </Grid>
    <Grid container item xs={12} lg={8} py={2} px={3} sx={{minHeight:"200px"}} >
            <Grid xs={4}   sx={{display:"flex", alignItems:"center", mb:"4px"}}>
                <Typography className={styles.text }>نام و نام خانوادگی</Typography>
            </Grid>
            <Grid item xs={8}  className={styles.studentEditProfileGrid}>
                    <input type="text" id="Sname" name="Sname" defaultValue={name}/>
            </Grid>
            <Grid item xs={4}   sx={{display:"flex", alignItems:"center" , mb:"4px"}}>
                <Typography className={styles.text }>تاریخ تولد</Typography>
            </Grid>
            <Grid item xs={8}  className={styles.studentEditProfileGrid}>
                             <DatePicker
                              format="D MMMM YYYY"
                              calendar={persian}
                              locale={persian_fa}
                              inputClass = {styles.calender}
                              containerClassName= {styles.calenderContainer}
                              calendarPosition="bottom-right"
                            />
            </Grid>
            <Grid item xs={4}   sx={{display:"flex", alignItems:"center" , mb:"4px"}}>
                <Typography className={styles.text }>مقطع تحصیلی</Typography>
            </Grid>
            <Grid item xs={8}  className={styles.studentEditProfileGrid}>
                    <input type="text" id="fname" name="fname" defaultValue={grade}/>
            </Grid>
    </Grid>
    </Grid>
  )
}
