import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const ReportCard = () => {
  const theme = useTheme();
  return (
    <Box px={2}>
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
      <Grid mt={3} container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={6} lg={5}>
          <Box display="flex" alignItems="center" mr={1}>
            <Typography
              textAlign="left"
              color="text.primary"
              fontWeight={700}
              sx={{ mr: 2, width: 90 }}
            >
              نوع کارنامه
            </Typography>
            <select className="input-style">
              <option>ماهانه</option>
              <option>میان ترم</option>
            </select>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Box display="flex" alignItems="center" mr={1}>
            <Typography
              textAlign="left"
              color="text.primary"
              fontWeight={700}
              sx={{ mr: 2, width: 90 }}
            >
              انتخاب ماه
            </Typography>
            <select className="input-style">
              <option>ماهانه</option>
              <option>میان ترم</option>
            </select>
          </Box>
        </Grid>
      </Grid>
      <Box mt={8}>
        <Box
          mb={5}
          display="flex"
          justifyContent="space-between"
          color="text.secondary"
          alignItems="center"
        >
          <Typography sx={{ mr: 4 }}>قران</Typography>
          <Box
            sx={{
              width: "100%",
              height: "10px",
              backgroundPosition: "bottom",
              background:
                " linear-gradient(to right,#1d9bf0 20%, rgba(255, 255, 255, 0) 0%)",
              backgroundSize: "15px 2px",
              backgroundRepeat: "repeat-x",
              opacity: "0.5",
            }}
          ></Box>
          <Typography sx={{ ml: 4 }}>20</Typography>
        </Box>
        <Box
          mb={5}
          display="flex"
          justifyContent="space-between"
          color="text.secondary"
          alignItems="center"
        >
          <Typography sx={{ mr: 4 }}>قران</Typography>
          <Box
          sx={{
            width: "100%",
            height: "10px",
            backgroundPosition: "bottom",
            background:
              " linear-gradient(to right,#1d9bf0 10%, rgba(255, 255, 255, 0) 0%)",
            backgroundSize: "15px 2px",
            backgroundRepeat: "repeat-x",
            opacity: "0.5",
          }}
          ></Box>
          <Typography sx={{ ml: 4 }}>20</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ReportCard;
