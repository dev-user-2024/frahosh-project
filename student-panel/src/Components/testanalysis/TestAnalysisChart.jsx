import React from 'react';
import { Grid , Box } from '@mui/material';
import { Line, Bar } from "react-chartjs-2";
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

const TestAnalysisChart = () => {
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
        <Grid my={2} mt={3} container justifyContent='center'>
        <Grid item xs={12} md={8} lg={6}>
        <Box>
        <Line data={data} options={config} />
        </Box>
        </Grid>
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

export default TestAnalysisChart;