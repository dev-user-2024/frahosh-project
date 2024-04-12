import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Line, Bar } from "react-chartjs-2";
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
      <Grid container spacing={2} mt={2} justifyContent="space-between">
        <Grid item xs={12} md={6} lg={5}>
          <Typography
            sx={{
              color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
              fontFamily: "Rokh-Bold",
              fontSize: "18px",
              mb: 4,
            }}
            textAlign="left" // Set text alignment to right
            fontWeight={700}
            variant="h5"
            component="p"
            flex="1" // Take remaining space
          >
            نمودار درصد تحقق ماهانه
          </Typography>
          <Box display="flex"  flexDirection="column">
            <Typography
              sx={{ mb: 1}}
              color="text.primary"
              fontWeight={600}
              textAlign="left"
            >
              انتخاب سال
            </Typography>
            <select style={{ width: "260px" }} className="input-style">
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
              sx={{
                color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
                fontFamily: "Rokh-Bold",
                fontSize: "18px",
                mb: 2,
                mt: 6,
              }}
              textAlign="left" // Set text alignment to right
              fontWeight={700}
              variant="h5"
              component="p"
              flex="1" // Take remaining space
            >
              تحلیل و پیشنهاد
            </Typography>
            <Typography textAlign="justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Typography
            sx={{
              color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
              fontFamily: "Rokh-Bold",
              fontSize: "18px",
              mb: 4,
            }}
            textAlign="left" // Set text alignment to right
            fontWeight={700}
            variant="h5"
            component="p"
            flex="1" // Take remaining space
          >
            نمودار درصد تحقق هفتگی
          </Typography>
          <Box display="flex"  flexDirection="column">
            <Typography
              sx={{ mb: 1}}
              color="text.primary"
              fontWeight={600}
              textAlign="left"
            >
            انتخاب ماه
            </Typography>
            <select style={{ width: "260px" }} className="input-style">
              <option>فروردین</option>
              <option>آذر</option>
              <option>دی</option>
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
              sx={{
                color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
                fontFamily: "Rokh-Bold",
                fontSize: "18px",
                mb: 2,
                mt: 6,
              }}
              textAlign="left" // Set text alignment to right
              fontWeight={700}
              variant="h5"
              component="p"
              flex="1" // Take remaining space
            >
              تحلیل و پیشنهاد
            </Typography>
            <Typography textAlign="justify">
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
