
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Typography,Grid,IconButton, Container} from '@mui/material';
// import { withStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Date from './date';
import ScheduleProducer from './scheduleProducer';
import Button from '../buttons/button.component.jsx';
import mapGide1 from '../../assests/image/svg/mapGide1.svg'
import mapGide2 from '../../assests/image/svg/mapGide2.svg'
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import { Stack } from '@mui/system';
import TitleTypography from '../title/title'
import ProducerHeader from './producerHeader';
import { useState } from 'react';
import AddSchedule from './addSchedule';
import ScheduleCheckBox from './scheduleCheckBox';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import styles from './scheduleProducer.module.css';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" size={120} thickness={6} sx={{color:"#1D9BF0"}} {...props}  />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="subtitle1" component="div" >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
   
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const consulationScheduleList=[{id:0,description:" تمرین ریاضی",check:false}
,{id:1,description:"رسم نمودارهای کلاس دوشنبه",check:false}
,{id:2,description:"تمرین روخوانی فارسی",check:false}]

const farahoshScheduleList=[{id:0,description:"اتمام تمرین ریاضی",check:false}
,{id:1,description:"رسم نمودارهای کلاس دوشنبه",check:false}
,{id:2,description:"تمرین روخوانی فارسی",check:false}]

const userScheduleList=[{id:0,description:"اتمام تمرین ریاضی",check:false}
,{id:1,description:"رسم نمودارهای کلاس دوشنبه",check:false}
,{id:2,description:"تمرین روخوانی فارسی",check:false}]


export default function TabsContainer() {
const [value, setValue] = useState(0);
const [schedules, setschedules] = useState(consulationScheduleList);
const [pageTitle,SetpageTitle]=useState("مشاور");
const [Addstate,setAddState]=useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    Addstate && setAddState(false);
    if (newValue===0) {
      setschedules(consulationScheduleList)
      SetpageTitle("مشاور")
    } else if (newValue===1) {
      setschedules(userScheduleList)
    } else if (newValue===2) {
      setschedules(farahoshScheduleList)
      SetpageTitle("فراهوش") 
      console.log("SetpageTitle")
      console.log(pageTitle)
    }
    console.log(newValue)
  };

const AddHandler=()=>{
setAddState(true)
console.log("addHandler")
 }

const DeleteNewSchedule=()=>{
  setAddState(false)
}
const SaveNewSchedule=()=>{
  setAddState(false)
  setschedules([...schedules,{id:schedules.length, description:newuserSchedule , check:false } ])

}
const [newuserSchedule, setuserSchedule] = useState(0);
const addUserScheduleInput=(event)=>{
  setuserSchedule( event.target.value)
}

const checkedSchedule=(event)=>{
  console.log(event.target.id)
  schedules[event.target.id] = {...schedules[event.target.id],check:event.target.checked}
  setschedules([...schedules] )
  
}


const [userReason,SetuserReason]=useState()
const [reasonToggle,SetReasonToggle]=useState(true)

const AddReasonToggleHandler=()=>{
  SetReasonToggle(false)
}
const addUserReasonInput=(event)=>{
  let reason=(event.target.value)
  console.log(userReason)
}
const DeleteNewReason=()=>{
  SetReasonToggle(true)
}
const SaveNewReason=()=>{
  SetuserReason(reason)
}

  return (
    <Container sx={{marginTop:3,mb:4}}>
      <Box sx={{border:"1px solid #1D9BF0",backgroundColor:"#FAFAFA" ,color:"#1D9BF0",}}>
        <Tabs value={value} onChange={handleChange}   variant="fullWidth" 
          aria-label="full width tabs example">
          <Tab label="برنامه پیشنهادی مشاور" {...a11yProps(0)}  sx={{fontSize:"1.2rem",fontFamily: "Rokh-Bold",color:"#1D9BF0"}}/>
          <Tab label="برنامه من " {...a11yProps(1)} sx={{fontSize:"1.2rem",fontFamily: "Rokh-Bold",color:"#1D9BF0"}}/>
          <Tab label="برنامه پیشنهادی فراهوش" {...a11yProps(2)} sx={{fontSize:"1.2rem",fontFamily: "Rokh-Bold",color:"#1D9BF0"}} />
        </Tabs>
      </Box>
     
        <Date />
    <Stack  direction="row" justifyContent="space-between" alignItems="center" mb={4}>
      
          <TitleTypography>برنامه روز یکشنبه ۱۶ مرداد</TitleTypography>
     
    {value===1 &&   
    
            <button onClick={AddHandler} className={styles.scheduleBtn}>+  جدید</button>
   
}
</Stack>
        {schedules.map(item=> 
                           
                              <Stack spacing={2} alignItems="center" mb={2} direction="row">
                                <ScheduleCheckBox defaultChecked={item.check} id={item.id} onChange={checkedSchedule} />
                                <Box sx={{boxShadow:"3px 3px 30px rgba(0, 0, 0, 0.08)",width:"100%",padding:"30px 20px"}} className={item.check && styles.donedText}>{item.description}</Box>
                              </Stack>
                            
 )}

        {Addstate && 
      
        <Stack spacing={2}  alignItems="center" mb={2} direction="row">
          <ScheduleCheckBox disabled />
          <Box sx={{boxShadow:"3px 3px 30px rgba(0, 0, 0, 0.08)",width:"100%",padding:"30px 20px",display:"flex"}}>
            <input style={{border:"none",background:"none",width:"100%"}} onChange={addUserScheduleInput} />
            <IconButton onClick={DeleteNewSchedule} ><DeleteIcon /></IconButton>
            <IconButton onClick={SaveNewSchedule}><SaveAltIcon /></IconButton>
          </Box>
        </Stack>
     }

        <Grid container sx={{display:"flex",justifyContent:"space-between"}} mt="7rem" >

            {reasonToggle ?<Grid container item xs={12} justifyContent="flex-end">
                       <Button  buttonType="addSchedule"  onClick={AddReasonToggleHandler} >اضافه کردن دلیل </Button>
                    </Grid> :
                <Grid container >
                <Grid container item xs={12} sx={{display:"flex",justifyContent:"space-between"}} >
                <Grid  item xs={12} sm={12} md={6}  sx={{display:"flex",flexDirection:"column"}} mb={2}>
                                        <Box mb={5}><TitleTypography >دلایل عدم تحقق  </TitleTypography></Box>
                                        <Box sx={{boxShadow:"3px 3px 30px rgba(0, 0, 0, 0.08)",width:"100%",padding:"30px 20px",display:"flex"}}>
                                            <input style={{border:"none",background:"none",width:"100%"}} onChange={addUserReasonInput} />
                                          <IconButton onClick={DeleteNewReason} ><DeleteIcon /></IconButton>
                                            <IconButton><SaveAltIcon /></IconButton> 
                                        </Box>
                </Grid>
                <Grid container item sm={12} md={5}  sx={{display:"flex",flexDirection:"column"}} mb={2}>
                                              <Box mb={5}><TitleTypography >نمودار تحقق   </TitleTypography></Box>
                                              <Stack direction="row" mb={2}><img src={mapGide1}/><Typography ml={1} >انجام شده</Typography></Stack>
                                              <Stack direction="row"><img src={mapGide2} /><Typography ml={1}>انجام نشده</Typography></Stack>
                                              <Grid item xs={12} sm={12} md={7} lg={7} xl={7} mt={5}>
                                                  <CircularProgressWithLabel value={80} />
                                              </Grid>
                </Grid> 
                </Grid>                       
                <Grid item xs={12} >
                                              <Box mb={5}> 
                                                  <TitleTypography>توصیه <span>{pageTitle}</span></TitleTypography>
                                              </Box>
                                              <Box sx={{boxShadow:"3px 3px 30px rgba(0, 0, 0, 0.08)",width:"100%",padding:"30px 20px"}} mb={6}>
                                                  <Typography>با آرزوی سلامتی شما
                                                    برای جبران برنامه انجام نشده، نمودار درس جدید و درس قبلی را باهم رسم کرده و جلسه بعدی به معلم ریاضی تحویل دهید.</Typography>
                                              </Box>
                </Grid>
                </Grid>                     

            }



       </Grid>
     

    </Container>
  );
}

