import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid, Paper, Typography } from '@mui/material';
import { Fragment } from 'react';
import styles from './date.module.css';
import Button from '../buttons/button.component';
import TitleTypography from '../title/title';


import persian_fa from "react-date-object/locales/persian_fa"
import DateObject from 'react-date-object';
import persian from "react-date-object/calendars/persian";
import { useState } from 'react';

function isSixWeekMonth(time,monthNumber){
    time.setMonth(monthNumber);
    let weekDayOfFirst = time.toFirstOfMonth().weekDay.number; 
    let firstWeekLength = (7 - weekDayOfFirst)+1
    if (28+firstWeekLength<time.month.length) return true
    return false  
}
function createDayArray(time, monthNumber, weekNumber){
    time.setMonth(monthNumber);
    time.toFirstOfMonth();
    let weekDayOfFirst = time.weekDay.number; 
    let firstWeekLength = (7 - weekDayOfFirst)+1;
    let startDay = 0;
    weekNumber==1? startDay = 1 : startDay = 1+firstWeekLength+((weekNumber-2)*7);
    time.setDay(startDay);
    let daylst = [];
    let counter = time.weekDay.number
    while (counter <= 7 && time.month.number== monthNumber ) {
        daylst.push( {date:time.day, day: time.weekDay.name,selected: false });
        time.add(1,"days");
        counter ++;
    }
    return daylst
}

export default function Date() {
const time =  new DateObject({ calendar: persian, locale: persian_fa});
  const [month, setMonth] = useState(time.month.number);
  const [week, setWeek] = useState(1);
  const [isSix,setIssix]= useState(isSixWeekMonth(time,time.month.number)); 
  const [dayList, setDayList] = useState([]);
  const [selectedDay,setSelectedDay]=useState()
  const handleMonthChange = (event) => {
    setMonth(event.target.value); 
    setIssix(isSixWeekMonth(time,event.target.value));
    console.log(createDayArray(time,event.target.value,week));
    setDayList(createDayArray(time,event.target.value,week))

  };
  const handleWeekChange = (event) => {
    setWeek(event.target.value);
    setDayList(createDayArray(time,month,event.target.value))


  };


  const selestedDayHandler=(event)=>{
    
    
    const selectedIndex=dayList.findIndex(item=>item.selected==true);
    if(selectedIndex!= -1){
        dayList[selectedIndex].selected=false;
    }
    
    const index=dayList.findIndex(item=>item.date==event.target.id);
    console.log(index)
    dayList[index].selected=true
    setDayList([...dayList])
    setSelectedDay({day:dayList[index].date,month:month})

  }
React.useEffect(()=>{
    console.log(time.month.nimber)
})
  return (
    <Fragment >
        <Grid container sx={{display:"flex",justifyContent:"space-between" ,backgroundColor:"#FAFAFA"}}  mt={3}>
            <Grid container item xs={12}  md={4} alignItems="center" spacing={1} >
                <Grid item xs={12}  md={4}  alignItems="center">
                    <TitleTypography >انتخاب ماه</TitleTypography>
                </Grid>
                <Grid item xs={12}  md={8} >
                    <FormControl size="small" sx={{width:"100%",mb:1}}>
                        <InputLabel>ماه</InputLabel>
                        <Select
                        labelId=""
                        id=""
                        defaultValue={month}
                        label="ماه"
                        onChange={handleMonthChange}
                        >
                        <MenuItem value={1}>فروردین</MenuItem>
                        <MenuItem value={2}>اردیبهشت</MenuItem>
                        <MenuItem value={3}>خرداد</MenuItem>
                        <MenuItem value={4}>تیر</MenuItem>
                        <MenuItem value={5}>مرداد</MenuItem>
                        <MenuItem value={6}>شهریور</MenuItem>
                        <MenuItem value={7}>مهر</MenuItem>
                        <MenuItem value={8}>آبان</MenuItem>
                        <MenuItem value={9}>آذر</MenuItem>
                        <MenuItem value={10}>دی</MenuItem> 
                        <MenuItem value={11}>بهمن</MenuItem>
                        <MenuItem value={12}>اسفند</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid  container item xs={12}  md={4} alignItems="center" spacing={1}>
                <Grid  item xs={12}  md={4}  alignItems="center" >
                    <TitleTypography>انتخاب هفته</TitleTypography>
                </Grid>
                <Grid item xs={12}  md={8}>
                    <FormControl size="small" sx={{width:"100%",mb:1}} >
                        <InputLabel>هفته</InputLabel>
                        <Select
                        labelId=""
                        id=""
                        label="هفته"
                        value={week}
                        onChange={handleWeekChange}
                        >
                        <MenuItem value={1}>هفته اول</MenuItem>
                        <MenuItem value={2}>هفته دوم</MenuItem>
                        <MenuItem value={3}>هفته سوم</MenuItem>
                        <MenuItem value={4}>هفته چهارم</MenuItem>
                        <MenuItem value={5}>هفته پنجم</MenuItem>
                        {isSix && <MenuItem value={6}>هفته ششم</MenuItem>}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
        <Box sx={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}  my={6}>
            
            {dayList.map((item)=>
            <Box id={item.date} className={item.selected? styles.selectedday : styles.weekday } onClick={selestedDayHandler} mr={2}>
                <Typography id={item.date} component="p" >{item.day}</Typography>
                <Typography id={item.date} component="p">{item.date}</Typography>
            </Box>)}
        </Box>

     
    </Fragment>

  );
}
