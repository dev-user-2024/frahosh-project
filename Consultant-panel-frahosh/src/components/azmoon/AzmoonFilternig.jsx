import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { useTheme } from "@mui/material";

const AzmoonFilternig = () => {
    const theme = useTheme();
  return (
    <Box mt={2}>
      <Box
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey.light
              : "#FFFFFF",
          boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
        }}
        mb={5}
        p={2}
      >
              <Typography
        sx={{color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385", fontFamily: "Rokh-Bold", fontSize: "22px"}}
        textAlign="left"
        fontWeight={600}
        mb={3}
        variant='h5' component="p"

      >
      جست‌و‌جوی دانش‌آموز
      </Typography>
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
        <Grid item xs={6} md={2}>
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
        <Grid item xs={6} md={2}>
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
        <Grid item xs={6} md={2}>
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
               نام دانش آموز
            </Typography>
            <select className="input-style" >
            <option>کلاس 102</option>
            <option>کلاس 107</option>
            <option>کلاس109</option>
            </select>
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

export default AzmoonFilternig;