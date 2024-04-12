import { MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Chart from 'chart.js/auto';
import {Line , Bar} from 'react-chartjs-2';
import styles from "./section1.style.module.css"
import { Swiper,SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverApi, token } from "../../../../confing/confing";

const Section1 = () => {
    const [age, setAge] = React.useState('10');
      useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}getMarksOfCourseGroupedByDate/${age}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data);
        // setInfo(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
    const handleChange = (event) => {
      setAge(event.target.value);
    };
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
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Line Chart",
        },
      },
    },
  };
  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  return (
    <div>
      <div className={styles.sec}>
        <Stack direction={"row"} alignItems={"center"} gap={"0.5rem"}>
          <Typography
            sx={{
              fontFamily: "Rokh-Bold",
              color: " #1D9BF0",
              fontSize: "18px",
              lineHeight: "23px",
            }}
          >
            انتخاب درس
          </Typography>
          <TextField id="select" value={age} onChange={handleChange} select>
            <MenuItem value="10">ریاضی</MenuItem>
            <MenuItem value="20">فیزیک</MenuItem>
            <MenuItem value="30">فیک</MenuItem>
          </TextField>
        </Stack>
        <div className={styles.chart_bg}>
          <div className={styles.linechart_bg}>
            <Line data={data} options={config} />
          </div>
          <div className={styles.barchart_bg}>
            <Bar
              data={state}
              options={{
                title: {
                  display: true,
                  text: "Average Rainfall per month",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </div>
        <div>
          <Typography
            sx={{
              fontFamily: "Rokh-Bold",
              color: " #1D9BF0",
              fontSize: "18px",
              lineHeight: "23px",
              marginBottom: "0.7rem",
            }}
          >
            نمرات درس ریاضی
          </Typography>
          <div>
            <Swiper className={styles.slider} direction={"vertical"}>
              <SwiperSlide className={styles.Slide}>
                <div className="flex  justify-between h-full">
                  <div className="flex flex-row align-middle items-center w-full gap-6 justify-between ">
                    <div className="flex flex-row items-start align-middle">
                      <p className={styles.numberFracoins}>20 خرداد 1401</p>
                    </div>
                    <p className={styles.date_time}>میانترم</p>
                    <p className={styles.date_time}>15 از 15</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.Slide}>
                <div className="flex justify-between h-full">
                  <div className="flex flex-row align-middle items-center w-full gap-6 justify-between ">
                    <div className="flex flex-row items-start align-middle">
                      <p className={styles.numberFracoins}>20 خرداد 1401</p>
                    </div>
                    <p className={styles.date_time}>میانترم</p>
                    <p className={styles.date_time}>15 از 15</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.Slide}>
                <div className="flex justify-between h-full">
                  <div className="flex flex-row align-middle items-center w-full gap-6 justify-between ">
                    <div className="flex flex-row items-start align-middle">
                      <p className={styles.numberFracoins}>20 خرداد 1401</p>
                    </div>
                    <p className={styles.date_time}>میانترم</p>
                    <p className={styles.date_time}>15 از 15</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.Slide}>
                <div className="flex justify-between  h-full">
                  <div className="flex flex-row align-middle items-center w-full gap-6 justify-between ">
                    <div className="flex flex-row items-start align-middle">
                      <p className={styles.numberFracoins}>20 خرداد 1401</p>
                    </div>
                    <p className={styles.date_time}>میانترم</p>
                    <p className={styles.date_time}>15 از 15</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.Slide}>
                <div className="flex justify-between  h-full">
                  <div className="flex flex-row align-middle items-center w-full gap-6 justify-between ">
                    <div className="flex flex-row items-start align-middle">
                      <p className={styles.numberFracoins}>20 خرداد 1401</p>
                    </div>
                    <p className={styles.date_time}>میانترم</p>
                    <p className={styles.date_time}>15 از 15</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
