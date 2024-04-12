import React from 'react';
import { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { serverApi, token } from "../../confing/confing";
import { Box  , Grid, Typography} from '@mui/material';
import { Line, Bar } from "react-chartjs-2";
import styles from "../../Components/exams/test.module.css"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
  } from 'chart.js';
const AverageChart = () => {
    const [info, setInfo] = useState({});
    const { id } = useParams();
    const [login, setLogin] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
          try {
            setLogin(true)
            const { data } = await axios.get(`${serverApi}diagramReport/${id}`, {
              headers: { authorization: `Bearer ${token}` },
            });
            console.log(data);
            setInfo(data);
            setLogin(false)
          } catch (err) {
            console.log(err);
            setLogin(false)
          }
        };
        fetchData();
      }, []);

      
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
  );

      const data = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Rainfall",
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: [65, 59, 80, 81, 56],
          },
        ],
      };
      const config = {
        type: "line",
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
        <Box className={styles.chart_header_box}>
            <Typography color='#fff' p={4}>نمودار میانگین نمرات</Typography>
            <Typography color='#fff' p={4}>میانیگن: 17.25</Typography>
        </Box>
        <Grid  mt={3} container justifyContent='center'>
        <Grid item xs={12} md={8} lg={6}>
        <Box>
        <Line data={data} options={config} />
        </Box>
        </Grid>
        </Grid>
        <Grid mt={3} container justifyContent='center'>
        <Grid item xs={12} md={8} lg={6}>
        <Box>
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
        </Box>
        </Grid>
        </Grid>
        </div>
    );
};

export default AverageChart;