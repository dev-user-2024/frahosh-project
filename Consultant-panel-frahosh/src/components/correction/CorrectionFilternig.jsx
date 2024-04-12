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
      <Typography
        sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000", fontFamily: "Rokh-Bold", fontSize: "20px" }}
        textAlign="left"
        fontWeight={600}
        mb={1}
        variant='h5' component="p"
      >
        جستجوی آزمون
      </Typography>
      <Box
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey.light
              : "#FFFFFF",
          boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
        }}
        p={2}
      >
        <Grid width="100%" container spacing={3} alignItems='center'>
        <Grid item xs={6} md={3}>
            <Typography
              textAlign="left"
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
            >
              مدرسه
            </Typography>
            <select className="input-style" >
            <option>آیتی</option>
            <option>حضرت زهرا</option>
            </select>
          </Grid>
        <Grid item xs={6} md={3}>
            <Typography
              textAlign="left"
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
            >
              مقطع
            </Typography>
            <select className="input-style" >
            <option>دبیرستان اول</option>
            </select>
          </Grid>
        <Grid item xs={6} md={3}>
            <Typography
              textAlign="left"
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
            >
              پایه
            </Typography>
            <select className="input-style" >
            <option>دوم</option>
            </select>
          </Grid>
        <Grid item xs={6} md={3}>
            <Typography
              textAlign="left"
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
            >
              شماره کلاس
            </Typography>
            <select className="input-style" >
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
              عنوان آزمون
            </Typography>
            <input className="input-style" />
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography
              textAlign="left"
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
            >
              کد آزمون
            </Typography>
            <input className="input-style" />
          </Grid>
          <Grid item xs={6} md={3} textAlign='left' >
          <Box display='flex' flexDirection='column' >  
          <Typography
          textAlign="left"
          sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
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
          <Grid item xs={6} md={3} textAlign='left' >
          <Box display='flex' flexDirection='column'>
          <Typography
          textAlign="left"
          sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
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
          <Grid item xs={6} md={4}>
            <Typography
              textAlign="left"
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
            >
              درس
            </Typography>
            <select className="input-style" >
            <option>ریاضی</option>
            <option>ریاضی</option>
            <option>ریاضی</option>
            <option>ریاضی</option>
            </select>
          </Grid>
          <Grid item xs={6} md={4}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            وضعیت
          </Typography>
          <select className="input-style" >
          <option>تمام شده</option>
          <option>تمام نشده</option>
          </select>
        </Grid>
          <Grid item xs={6} md={4} mt={2}>
           <Button
           variant="contained"
           fullWidth
         >
           جست وجو
         </Button>
       
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CorrectionFilternig;