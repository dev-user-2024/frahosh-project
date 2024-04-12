import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Line, Bar } from "react-chartjs-2";
import { useTheme } from "@mui/material";
import Divider from '@mui/material/Divider';
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
  const theme = useTheme();
  return (
    <div>
      <Grid
        width="100%"
        container
        columnSpacing={2}
        mt={4}
        mb={4}
        alignItems="center"
      >
        <Grid item xs={6} md={3}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            مدرسه
          </Typography>
          <select className="input-style">
            <option>حضرت زهرا</option>
            <option>آیتی</option>
          </select>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            مقطع
          </Typography>
          <select className="input-style">
            <option>دبیرستان اول</option>
            <option>دبیرستان دوم</option>
          </select>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            پایه
          </Typography>
          <select className="input-style">
            <option>دهم</option>
            <option>یازدهم</option>
          </select>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            شماره کلاس
          </Typography>
          <select className="input-style">
            <option>102</option>
            <option>102</option>
          </select>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2} justifyContent="space-between">
        <Grid item mt={4} xs={12} md={12} lg={12}>
          <Typography
            sx={{
              color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
              fontFamily: "Rokh-Bold",
              fontSize: "18px",
              mb: 3,
            }}
            textAlign="left" // Set text alignment to right
            fontWeight={700}
            variant="h5"
            component="p"
            flex="1" // Take remaining space
          >
            نمودار درصد تحقق ماهانه
          </Typography>
          <Grid
        width="100%"
        container
        columnSpacing={4}
        mt={4}
        mb={4}
        alignItems="center"
      >
        <Grid item xs={6} md={3} lg={2}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            انتخاب سال تحصیلی
          </Typography>
          <select className="input-style">
            <option>1402</option>
            <option>1403</option>
          </select>
        </Grid>
        <Grid item xs={6} md={2} lg={1.5}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            ماه
          </Typography>
          <select className="input-style">
            <option>مهر</option>
            <option>ابان</option>
          </select>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000", fontSize: "14px" }}
          >
            تعداد دانش آموزان
          </Typography>
          <select className="input-style">
            <option>10</option>
            <option>20</option>
          </select>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
             به ترتیب
          </Typography>
          <select className="input-style">
            <option>پایین ترین درصد تحقق </option>
            <option>بالا ترین درصد تحقق</option>
          </select>
        </Grid>
      </Grid>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={2}
      style={{ width: "90%" }}
    >
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
          </div>
        </Grid>
        <Grid item mt={8} xs={12} md={12} lg={12}>
          <Typography
            sx={{
              color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
              fontFamily: "Rokh-Bold",
              fontSize: "18px",
              mb: 3,
            }}
            textAlign="left" // Set text alignment to right
            fontWeight={700}
            variant="h5"
            component="p"
            flex="1" // Take remaining space
          >
            نمودار درصد تحقق هفتگی
          </Typography>
          <Grid
        width="100%"
        container
        columnSpacing={4}
        mt={4}
        mb={4}
        alignItems="center"
      >
        <Grid item xs={6} md={3} lg={2}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            انتخاب سال تحصیلی
          </Typography>
          <select className="input-style">
            <option>1402</option>
            <option>1403</option>
          </select>
        </Grid>
        <Grid item xs={6} md={2} lg={1.5}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            ماه
          </Typography>
          <select className="input-style">
            <option>مهر</option>
            <option>ابان</option>
          </select>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000", fontSize: "14px" }}
          >
            تعداد دانش آموزان
          </Typography>
          <select className="input-style">
            <option>10</option>
            <option>20</option>
          </select>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
             به ترتیب
          </Typography>
          <select className="input-style">
            <option>پایین ترین درصد تحقق </option>
            <option>بالا ترین درصد تحقق</option>
          </select>
        </Grid>
      </Grid>
          <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={2}
      style={{ width: "90%" }}
    >
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
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Analysis;
