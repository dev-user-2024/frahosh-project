import React from "react";
import { Grid, Box } from "@mui/material";
import pic1 from "../../assests/image/Group 946.png";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";

export const data = {
    labels: ['انجام شده', 'در حال انجام', 'انجام نشده'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        '#8DD9B6',
        '#83C8F5',
        '#aeaeae',
      ],
      borderColor: [
        '#11AA63',
        '#1D9BF0',
        '#828282',
      ],
      borderWidth: 1,
    },
  ],
};
const HomeWorkChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend, plugins);

  const config = {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "right",
        },
        title: {
          display: true,
          text: "آمار انجام تکالیف",
          color: `text.primary`,
        },
      },
    },
  };
  return (
    <div>
      <Grid mb={2} container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "background.paper",
              height: "300px",
            }}
          >
            <Doughnut data={data} options={config.options} />
          </Box>
        </Grid>
        <Grid item xs={0} md={6} display={{xs:"none", md:"block"}}>
          <img alt="" src={pic1} />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeWorkChart;
