import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material";
import ScheduleconsultantFilternig from '../../components/Scheduleconsultant/ScheduleconsultantFilternig';
import AddSchedule from '../../components/Scheduleconsultant/AddSchedule';
import AnalyisSchedule from '../../components/Scheduleconsultant/AnalyisSchedule';

const Scheduleconsultant = () => {
    const theme = useTheme();
  return (
    <Box p={{xs:1,md:4}}  mb={2}>
            <Typography
              textAlign="left"
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "#095385", mb: 5, fontWeight: "600", fontSize: "14px"}}
            >
              در این صفحه می توانید برای دانش آموزان برنامه ریزی درسی انجام بدهید و مطالعه دانش آموزان را ارزیابی کنید.
            </Typography>
      <Box
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey.light
              : "#FAFAFA",
          boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
        }}
        p={2}
      >
        <ScheduleconsultantFilternig />
        <AddSchedule />
      </Box>
      <Box
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey.light
              : "#FAFAFA",
          boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
        }}
        p={2}
        mt={4}
      >
        <AnalyisSchedule />
      </Box>
    </Box>
  );
};

export default Scheduleconsultant;