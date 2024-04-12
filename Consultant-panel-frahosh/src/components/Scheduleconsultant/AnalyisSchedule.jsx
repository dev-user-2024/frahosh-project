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
  ArcElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
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
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  },
};

const data2 = {
  labels: ["January", "February"],
  datasets: [
    {
      label: "Rainfall",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#a0e678",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [50, 50],
    },
  ],
};

const AnalyisSchedule = () => {
  const theme = useTheme();

  return (
    <div>
      <Grid container spacing={2} mt={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Box textAlign="left">
              <Select
                sx={{
                  borderRadius: "10px",
                  width: "200px",
                  height: "40px",
                  backgroundColor: "#fff",
                }}
                id=""
                defaultValue={1}
              >
                <MenuItem value={1}>هفتگی</MenuItem>
                <MenuItem>ماهانه</MenuItem>
                <MenuItem>دو هفتگی</MenuItem>
              </Select>
            </Box>
            <Bar options={options} data={data} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              width="100%"
              color={theme.palette.primary.main}
              fontWeight={700}
              textAlign="left"
            >
              نمودار تحقق
            </Typography>

            <Box width="70%" display="flex" justifyContent="center">
              <Doughnut data={data2} options={config} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          backgroundColor:
            theme.palette.mode === "dark" ? theme.palette.grey.light : "#FFF",
          boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
        }}
        mt={7}
      >
        <Grid
          width="100%"
          container
          display="flex"
          p={2}
          alignItems="center"
          mt={2}
          mb={2}
        >
          <Grid
            width="100%"
            container
            display="flex"
            spacing={3}
            alignItems="center"
          >
            <Grid item lg={4} md={3} xs={12} display="flex" alignItems="center">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#095385",
                  fontSize: "14px",
                }}
                textAlign="center"
                fontWeight={600}
                component="p"
              >
                یکشنبه 16 مرداد
              </Typography>
            </Grid>
            <Grid item lg={2} md={3} xs={6} display="flex" alignItems="center">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                  fontSize: "14px",
                  mr: {
                    xs: 1,
                    md: 2,
                  },
                }}
                textAlign="center"
                fontWeight={600}
                component="p"
              >
                درس
              </Typography>
              <input
                disabled
                style={{
                  width: "107px",
                }}
                className="input-style"
                value="ریاضی"
              />
            </Grid>
            <Grid item lg={2} md={3} xs={6} display="flex" alignItems="center">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                  fontSize: "14px",
                  mr: {
                    xs: 1,
                    md: 2,
                  },
                }}
                textAlign="center"
                fontWeight={600}
                component="p"
              >
                از ساعت
              </Typography>
              <input
                disabled
                style={{
                  width: "70px",
                }}
                className="input-style"
                value="17"
              />
            </Grid>
            <Grid item lg={2} md={3} xs={12} display="flex" alignItems="center">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                  fontSize: "14px",
                  mr: {
                    xs: 1,
                    md: 2,
                  },
                }}
                textAlign="center"
                fontWeight={600}
                component="p"
              >
                به مدت
              </Typography>
              <input
                disabled
                style={{
                  width: "97px",
                }}
                className="input-style"
                value="30 دقیقه"
              />
            </Grid>
            <Grid item lg={2} md={6} xs={6} display="flex" alignItems="center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <circle cx="6" cy="6.5" r="6" fill="#6C6C6C" />
              </svg>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                  fontSize: "14px",
                  ml: {
                    xs: 1,
                    md: 2,
                  },
                }}
                textAlign="center"
                fontWeight={600}
                component="p"
              >
                وضعیت: انجام نشده
              </Typography>
            </Grid>
          </Grid>
          <Grid
            mb={2}
            mt={2}
            item
            lg={12}
            md={12}
            xs={12}
            display="flex"
            alignItems="center"
          >
            <Typography
              sx={{
                color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                fontSize: "17px",
                ml: {
                  xs: 1,
                  md: 2,
                },
              }}
              textAlign="center"
              fontWeight={600}
              component="p"
            >
              دلیل عدم تحقق:
            </Typography>
            <Typography
              sx={{
                color: theme.palette.mode === "dark" ? "#cbcbcb" : "#6C6C6C",
                fontSize: "16px",
                ml: {
                  xs: 1,
                  md: 2,
                },
              }}
              textAlign="center"
              fontWeight={600}
              component="p"
            >
              مسافرت خانوادگی
            </Typography>
          </Grid>
          <textarea
            rows={0}
            cols={0}
            style={{
              width: "100%",
              height: "auto",
            }}
            className="textarea"
            placeholder="نظر و پیشنهاد خود را برای دانش آموز بنویسید..."
          />
          <Box
            width="100%"
            container
            display="flex"
            alignItems="center"
            justifyContent="flex-end" // تغییر این خط به justifyContent="flex-start" تغییر موقعیت به سمت چپ
          >
            <Button
              sx={{
                display: "flex",
                width: {
                  sm: "224px",
                  md: "224px",
                },
                height: "48px",
                gap: "10px",
                borderRadius: "10px",
                fontSize: "16px",
                color: theme.palette.mode === "dark" ? "#fff" : "#095385",
                border: "2px solid #095385",
                borderColor: theme.palette.mode === "dark" ? "#fff" : "#095385",
                mt: 2,
              }}
              variant=""
            >
              ارسال بازخورد به دانش آموز
            </Button>
          </Box>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor:
            theme.palette.mode === "dark" ? theme.palette.grey.light : "#FFF",
          boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
        }}
        mt={7}
      >
        <Grid
          width="100%"
          container
          display="flex"
          p={2}
          alignItems="center"
          mt={2}
          mb={2}
        >
          <Grid
            width="100%"
            container
            display="flex"
            spacing={3}
            alignItems="center"
          >
            <Grid item lg={4} md={3} xs={12} display="flex" alignItems="center">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#095385",
                  fontSize: "14px",
                }}
                textAlign="center"
                fontWeight={600}
                component="p"
              >
                یکشنبه 16 مرداد
              </Typography>
            </Grid>
            <Grid item lg={2} md={3} xs={6} display="flex" alignItems="center">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                  fontSize: "14px",
                  mr: {
                    xs: 1,
                    md: 2,
                  },
                }}
                textAlign="center"
                fontWeight={600}
                component="p"
              >
                درس
              </Typography>
              <input
                disabled
                style={{
                  width: "107px",
                }}
                className="input-style"
                value="ریاضی"
              />
            </Grid>
            <Grid item lg={2} md={3} xs={6} display="flex" alignItems="center">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                  fontSize: "14px",
                  mr: {
                    xs: 1,
                    md: 2,
                  },
                }}
                textAlign="center"
                fontWeight={600}
                component="p"
              >
                از ساعت
              </Typography>
              <input
                disabled
                style={{
                  width: "70px",
                }}
                className="input-style"
                value="17"
              />
            </Grid>
            <Grid item lg={2} md={3} xs={12} display="flex" alignItems="center">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                  fontSize: "14px",
                  mr: {
                    xs: 1,
                    md: 2,
                  },
                }}
                textAlign="center"
                fontWeight={600}
                component="p"
              >
                به مدت
              </Typography>
              <input
                disabled
                style={{
                  width: "97px",
                }}
                className="input-style"
                value="30 دقیقه"
              />
            </Grid>
            <Grid item lg={2} md={6} xs={6} display="flex" alignItems="center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
              >
                <g filter="url(#filter0_f_13496_60319)">
                  <circle cx="16" cy="16.5" r="6" fill="#00EA17" />
                </g>
                <circle cx="16" cy="16.5" r="6" fill="#11AA63" />
                <defs>
                  <filter
                    id="filter0_f_13496_60319"
                    x="0"
                    y="0.5"
                    width="32"
                    height="32"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="5"
                      result="effect1_foregroundBlur_13496_60319"
                    />
                  </filter>
                </defs>
              </svg>
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                  fontSize: "14px",
                  ml: {
                    xs: 1,
                    md: 2,
                  },
                }}
                textAlign="center"
                fontWeight={600}
                component="p"
              >
                وضعیت: انجام شده
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AnalyisSchedule;
