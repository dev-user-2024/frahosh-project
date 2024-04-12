import { display, margin } from '@mui/system';
import React from 'react';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { Calendar, DateObject } from "react-multi-date-picker"
import {useNavigate} from 'react-router-dom';
const weekDays = ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه"];
String.prototype.toEnglishDigit = function() 
{ 
  var find = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  var replace = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var replaceString = this; var regex; 
  for (var i = 0; i < find.length; i++) 
  { regex = new RegExp(find[i], "g");
  replaceString = replaceString.replace(regex, replace[i]); 
  } 
  return replaceString; };

const Calendr = (props) => {

    const {onDaysClick,desabledTime,id} =props
    const navigate = useNavigate();
    const navigateReservation=(date)=>{
    navigate(`/consultant/${id}/${date}`)
    }
    return (
        <Calendar
        calendar={persian}
        locale={persian_fa}
        onChange={(date) => {navigateReservation(new DateObject(date).format("YYYY-MM-DD").toEnglishDigit())}}
        
        // weekDays={weekDays}'
        style={{backgroundColor:"transparent" ,adding:"10px", width:"100%", display:"flex" ,justifyContent:"center" , boxShadow:"none"}}
        mapDays={({ date }) => {
          let y = false
          desabledTime.map((t) => {
            let x = new Date(t)
            let d = new Date(date)
            if(x.getFullYear() === d.getFullYear() && x.getMonth() === d.getMonth() && x.getDate() === d.getDate() ){
             return y = true
            }
          })
   
          if(y)return {
                disabled: true,
                style: { color: "#6C6C6C" ,
                background:" linear-gradient(180deg, #F1A6A0 0%, #FFF2F1 100%)",
                borderRadius:"0",
                boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.08)',
               },
                onClick: () => alert("این روز قابل رزرو نیست")
              }
              else return{
                style: { 
                color: "#000" ,
                background:"#fff",
                borderRadius:"0",
                boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.08)',
                
               },
               onClick:onDaysClick

              }
        }}
      />

    );
};


export default Calendr;

