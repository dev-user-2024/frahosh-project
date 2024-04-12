import React from "react";
import pic1 from "../../../../assests/image/Frame 311.png";
import Chart from 'chart.js/auto';
import {Line , Bar} from 'react-chartjs-2';
import styles from "./section1.style.module.css";
const Section1 = () => {
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
        <div>
        <div>
        <div className={styles.bg_pic}>
        <div className={styles.text_pic}>
          <p>نمودار میانه نمرات</p>
          <p>میانه: 17.5</p>
        </div>
        <img src={pic1} alt=""  />
        </div>
        <div className={styles.chart_bg}>
        <div className={styles.linechart_bg}>
            <Line data={data} options={config} />
            </div>
            <div className={styles.barchart_bg}>
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
        </div>
        </div>
     );
}
 
export default Section1;