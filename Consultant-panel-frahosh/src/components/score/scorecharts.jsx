import React from "react";
import { Button, Typography, Box, Grid, Select, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar  , Line} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 20,
    },
  },
};

const labels = ["ریاضی", "زبان", "علوم", "دینی", "اجتماعی", "قران", "ورزش"];
const datalist = [18, 16, 10, 14, 17.5, 20, 19];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: datalist.map((item) => item),
      backgroundColor: " rgba(135,206,250,.9)",
    },
  ],
};

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

    const data2 = {
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

const Scorecharts = () => {
  const theme = useTheme();

  return (
    <div>
      <Grid width="100%" container columnSpacing={2} mt={4} alignItems="center">
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
        <Grid item xs={6} md={3}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            نام دانش آموز  
          </Typography>
          <select className="input-style">
            <option>محمد علی بهارلویی</option>
            <option>سید رضا احمدی</option>
          </select>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={4}>
        <Grid item xs={12} md={6}>
        <Box>
          <Box    textAlign="left">
            <Typography
              width="100%"
              color={theme.palette.primary.main}
           
              fontWeight={700}
            >
             نمودار نمرات به تفکیک درس
            </Typography>
            <Select
              sx={{
                borderRadius: "10px",
                width:"200px",
                height:"40px",
                backgroundColor:"#fff",
                mt: 1,
              }}
              id=""
              defaultValue={1}
            >
            <MenuItem value={1}>فروردین</MenuItem>
            <MenuItem >اردیبهشت</MenuItem>
            <MenuItem >خرداد</MenuItem>
            <MenuItem >تیر</MenuItem>
            <MenuItem >مرداد</MenuItem>
            <MenuItem >شهریور</MenuItem>
            <MenuItem >مهر</MenuItem>
            <MenuItem >آبان</MenuItem>
            <MenuItem >آذر </MenuItem>
            <MenuItem >دی</MenuItem>
            <MenuItem >بهمن</MenuItem>
            <MenuItem >اسفند</MenuItem>
            </Select>
          </Box>
          <Line data={data2} options={config}  />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
          <Box>
            <Box    textAlign="left">
              <Typography
                width="100%"
                color={theme.palette.primary.main}
                fontWeight={700}
              >
                نمودار تحلیل ماهانه
              </Typography>
              <Select
                sx={{
                  borderRadius: "10px",
                  width:"200px",
                  height:"40px",
                  backgroundColor:"#fff",
                  mt: 1,
                }}
                id=""
                defaultValue={1}
              >
                <MenuItem value={1}>ریاضی</MenuItem>
                <MenuItem>علوم</MenuItem>
                <MenuItem>هنر</MenuItem>
                <MenuItem>زبان فارسی</MenuItem>
                <MenuItem>اجتماعی</MenuItem>
                <MenuItem>تاریخ</MenuItem>
                <MenuItem>قرآن</MenuItem>
                <MenuItem>ورزش</MenuItem>
                <MenuItem>جغرافیا </MenuItem>
                <MenuItem>دینی</MenuItem>
              </Select>
            </Box>
            <Bar options={options} data={data} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Scorecharts;
