import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import icon1 from "../../assests/image/icon/examicon1.svg";
import icon2 from "../../assests/image/icon/examicon2.svg";
import icon3 from "../../assests/image/icon/examicon3.svg";
import {useTheme} from '@mui/material'
import { useNavigate } from "react-router-dom";
const ExamHeader = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey.light : '#FFFFFF',
                boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
                cursor:"pointer"
              }}
              p={3}
              onClick={()=>{navigate(`/create-exam`, {state:"test"})}}
            >
              <img alt="" src={icon1} />
              <Typography sx={{color:theme.palette.mode === "dark" ? "#fff" : "#095385"}}  fontWeight="700">
                ساخت آزمون تستی
              </Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey.light : '#FFFFFF',
                boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
                cursor:"pointer"
              }}
              p={3}
              onClick={()=>{navigate(`/create-exam`, {state:'descriptive'})}}
            >
              <img alt="" src={icon2} />
              <Typography sx={{color:theme.palette.mode === "dark" ? "#fff" : "#095385"}}  fontWeight="700">
                ساخت آزمون تشریحی
              </Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey.light : '#FFFFFF',
                boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
                cursor:"pointer"
              }}
              p={3}
              onClick={()=>{navigate(`/create-exam`, {state:'combinatorial'})}}
            >
              <img alt="" src={icon3} />
              <Typography sx={{color:theme.palette.mode === "dark" ? "#fff" : "#095385"}}  fontWeight="700">
                ساخت آزمون ترکیبی
              </Typography>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExamHeader;
