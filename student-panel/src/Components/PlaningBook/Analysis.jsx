import React from "react";
import { Box, Grid, Typography } from "@mui/material";
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
} from "chart.js";
const Analysis = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
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
      <Grid container spacing={2} mt={2} justifyContent="space-between">
        <Grid item xs={12} md={6} lg={5}>
          <Typography
            sx={{ mb: 2 }}
            variant="h6"
            color="text.primary"
            fontWeight={700}
          >
            نمودار درصد تحقق ماهانه
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography
              sx={{ mb: 2, width: "100px" }}
              color="text.primary"
              fontWeight={600}
            >
              انتخاب سال
            </Typography>
            <select className="input-style">
              <option>1402-1401</option>
              <option>1402-1401</option>
              <option>1402-1401</option>
            </select>
          </Box>
          <Box mt={2}>
            <Line data={data} options={config} />
          </Box>
          <Box mt={3}>
            <Typography
              sx={{ mb: 2 }}
              color="text.primary"
              fontWeight={600}
            >
              تحلیل و پیشنهاد
            </Typography>
            <Typography>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Typography
            sx={{ mb: 2 }}
            variant="h6"
            color="text.primary"
            fontWeight={700}
          >
            نمودار درصد تحقق هفتگی
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography
              sx={{ mb: 2, width: "100px" }}
              color="text.primary"
              fontWeight={600}
            >
              انتخاب ماه
            </Typography>
            <select className="input-style">
              <option>فروردین</option>
              <option>فروردین</option>
              <option>فروردین</option>
              <option>فروردین</option>
            </select>
          </Box>
          <Box mt={2}>
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
          <Box mt={3}>
            <Typography
              sx={{ mb: 2 }}
              color="text.primary"
              fontWeight={600}
            >
              تحلیل و پیشنهاد
            </Typography>
            <Typography>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Analysis;
