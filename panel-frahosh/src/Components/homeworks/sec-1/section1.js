import { Stack, Typography } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from "./section1.style.module.css";
import pic1 from "../../../assests/image/Group 946.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverApi , token } from "../../../confing/confing";
import { useParams } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

export const dataChart = {
  datasets: [
    {
      label: '# of Votes',
      data: [5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};




const Section1 = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}taskQuantityOnDoneAndNotDone`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data);
        // setInfo(data);
        // console.log(dataChart["datasets"]["data"])
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
    return ( 
        <diV>
            <div className={styles.sec_bg}>
                <Stack width={"90%"} direction={{md:"row" , xs:"column"}} justifyContent={"space-between"} alignItems={{xs:"center" , md:""}}>
                <div className={styles.chart_bg}>
                <div>
                  <Typography>درصد انجام کل تکالیف</Typography>
                </div>
                <div className={styles.chart}>
                    <Doughnut data={dataChart} />
                    </div>
                </div>
                    <div>
                       <img src={pic1} />
                    </div>
                </Stack>
            </div>
        </diV>
     );
}
 
export default Section1;