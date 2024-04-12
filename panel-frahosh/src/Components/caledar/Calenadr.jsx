import React from 'react';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { Calendar } from "react-multi-date-picker"

const weekDays = ["شنبه", "یکشنبه", "دوشنبه", "سهشنبه", "چهارشنبه", "پنجشنبه", "جمعه"]
const Calendr = () => {

    const desabledTime = ['2023/6/4' ,' 2023/6/2','2023/6/3','2023/6/18','2023/6/15']

    return (
        <div>
        <Calendar
        calendar={persian}
        locale={persian_fa}
        onChange={(date) => {console.log(new Date(date))}}
        // weekDays={weekDays}
        style={{padding:"10px"}}
        mapDays={({ date }) => {
          let y = false
          desabledTime.map((t) => {
            let x = new Date(t)
            let d = new Date(date)
            if(x.getFullYear() === d.getFullYear() && x.getMonth() === d.getMonth() && x.getDate() === d.getDate() ){
              // console.log("x" , x.getDate())
              // console.log("d" , d.getDate())
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
                onClick: () => alert("آخر هفته ها غیر فعال هستند")
              }
              else return{
                style: { 
                color: "#000" ,
                background:"#fff",
                borderRadius:"0",
                boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.08)',
               },

              }
        }}
      />
        </div>
    );
};

export default Calendr;