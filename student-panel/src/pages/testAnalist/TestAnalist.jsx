import { Grid, Box, Typography, Button } from "@mui/material";
import React from "react";
import TestAnalysisChart from "../../Components/testanalysis/TestAnalysisChart";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
const TestAnalist = () => {
  return (
    <div>
      <Grid container spacing={2} mt={3} >
        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems='center'>
            <Typography variant="h6" color="text.primary" fontWeight={600}>
              نمودار نمرات به تفکیک درس
            </Typography>
            <select className="input-style" style={{width:"250px" , marginRight:"15px"}}>
            <option>ریاضی</option>
            <option>ریاضی</option>
            <option>ریاضی</option>
            </select>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
        <Box display="flex" alignItems='center'>
          <Typography variant="h6" color="text.primary" fontWeight={600}>
            نمودار نمرات به تفکیک ماه
          </Typography>
          <select className="input-style" style={{width:"250px" , marginRight:"15px"}}>
          <option>فروردین</option>
          <option>دی</option>
          <option>بهمن</option>
          </select>
        </Box>
      </Grid>
      </Grid>
      <TestAnalysisChart/>
      <Box mt={3} display="flex" alignItems='center' justifyContent='space-between'>
      <Typography variant="h6" color="text.primary" fontWeight={600}>
        لیست کارنامه های بارگذاری شده
      </Typography>
      <Button variant="contained">بارگذاری کارنامه جدید</Button>
    </Box>
    <Grid container spacing={2} mt={3}>
          <Grid item xs={12}>
            <Box
              display="flex"
              p={2}
              justifyContent="space-between"
              sx={{
                backgroundColor: 'background.paper',
                boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
                color: 'text.secondary'
              }}
            >
              <Typography>کارنامه مرداد ماه</Typography>
              <Link to="1">
                <Typography
                  display="flex"
                  alignItems="center"
                >
                  <ArrowBack />
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
    </div>
  );
};

export default TestAnalist;
