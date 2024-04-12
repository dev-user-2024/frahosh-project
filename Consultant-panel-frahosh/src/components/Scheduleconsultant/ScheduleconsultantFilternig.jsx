import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { useTheme } from "@mui/material";

const CorrectionFilternig = () => {
  const theme = useTheme();
  return (
    <Box mt={2}>
         <Grid width="100%" container spacing={6} alignItems="center" mb={6}>
        <Grid item xs={6} md={3} textAlign="left">
          <Box display="flex" flexDirection="column">
            <Typography
              textAlign="left"
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000", mb: 1 }}
            >
              از تاریخ
            </Typography>
            <DatePicker
              render={<InputIcon className="input-style" />}
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
            />
          </Box>
        </Grid>
        <Grid item xs={6} md={3} textAlign="left">
          <Box display="flex" flexDirection="column">
            <Typography
              textAlign="left"
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000", mb: 1 }}
            >
              تا تاریخ
            </Typography>
            <DatePicker
              render={<InputIcon className="input-style" />}
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
            />
          </Box>
        </Grid>
        </Grid>
        <Grid width="100%" container spacing={3} alignItems="center">
          <Grid item xs={6} md={2.5}>
            <Typography
              textAlign="left"
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
            >
              مدرسه
            </Typography>
            <select className="input-style">
              <option>آیتی</option>
              <option>حضرت زهرا</option>
            </select>
          </Grid>
          <Grid item xs={6} md={2.5}>
            <Typography
              textAlign="left"
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
            >
              مقطع
            </Typography>
            <select className="input-style">
              <option>دبیرستان اول</option>
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
              <option>دوم</option>
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
              <option>کلاس 102</option>
              <option>کلاس 107</option>
              <option>کلاس109</option>
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
              <option>ممد</option>
              <option>علی اکبری</option>
              <option>کلاس109</option>
            </select>
          </Grid>
        </Grid>
      </Box>
  );
};

export default CorrectionFilternig;
