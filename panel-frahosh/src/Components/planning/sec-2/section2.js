import { Grid, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import styles from "./section2.styles.module.css"

const Section2 = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
          }
        ]}
const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        }
      }
    },
  };
  const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
    return (  
        <div className={styles.bg_sec}>
            <div className={styles.sec}>
                <Grid container>
                <Grid md={6} xs={12}>
                    <Typography sx={{fontFamily:"Rokh-Bold" , color:"rgba(29, 155, 240, 1)", fontSize:"18px" , fontWeight:"700"}}>نمودار درصد تحقق ماهانه</Typography>
                    <div className=" w-1/2 flex flex-row align-middle items-center justify-between">
                    <Typography sx={{fontFamily:"Rokh-Bold" , color:"rgba(29, 155, 240, 1)", fontSize:"16px" , fontWeight:"600"}}>انتخاب ماه</Typography>
                <TextField dir="rtl" id="select"  value="10" select>
                <MenuItem sx={{fontFamily:"IRANSansX" , fontSize:"14px"}} value="10">ریاضی</MenuItem>
                <MenuItem sx={{fontFamily:"IRANSansX" , fontSize:"14px"}} value="20">فیزیک</MenuItem>
                </TextField>
                </div>
                <div>
                <div className=" mb-6 mt-10">
            <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
                </div>
                <div>
                        <Typography sx={{fontFamily:"Rokh-Bold" , color:"rgba(29, 155, 240, 1)", fontSize:"18px" , fontWeight:"600"}}>تحلیل و پیشنهاد</Typography>
                        <Typography sx={{fontSize:"16px" , paddingInline:"10px"}} >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع.</Typography>
                    </div>
                </Grid>
                <Grid md={6} xs={12}>
                <Typography  sx={{fontFamily:"Rokh-Bold" , color:"rgba(29, 155, 240, 1)", fontSize:"18px" , fontWeight:"700"}}>نمودار درصد تحقق هفتگی</Typography>
                    <div className=" w-1/2 flex flex-row align-middle items-center justify-between">
                    <Typography sx={{fontFamily:"Rokh-Bold" , color:"rgba(29, 155, 240, 1)", fontSize:"16px" , fontWeight:"600"}}>انتخاب سال تحصیلی</Typography>
                <TextField dir="rtl" id="select"  value="10" select>
                <MenuItem sx={{fontFamily:"IRANSansX" , fontSize:"14px"}} value="10">ریاضی</MenuItem>
                <MenuItem sx={{fontFamily:"IRANSansX" , fontSize:"14px"}} value="20">فیزیک</MenuItem>
                </TextField>
                </div>
                    <div>
                    <div className=" mb-6 mt-10">
            <Line className={styles.chart2_style} data={data} options={config} />
            </div>
                    </div>
                    <div>
                        <Typography sx={{fontFamily:"Rokh-Bold" , color:"rgba(29, 155, 240, 1)", fontSize:"18px" , fontWeight:"600"}}>تحلیل و پیشنهاد</Typography>
                        <Typography sx={{fontSize:"16px" , paddingInline:"10px"}} >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع.</Typography>
                    </div>
                </Grid>
                </Grid>
            </div>
        </div>
    );
}
 
export default Section2;