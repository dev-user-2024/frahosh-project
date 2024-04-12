import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Countdown from '../../../../Components/tools/timer/countdown/Countdown'
import Stopwatch from '.././../../../Components/tools/timer/stopwatch/Stopwatch'

const solvingMain = () => {
  const [value, setValue] = useState("tab1");

  return (
    <Box p={2}>
      <Box  sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            height: "50px",
            border: "1px solid #1d9bf0",
          }}
        >
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #1d9bf0",
              color: value === "tab1" ? "#fff" : "#1d9bf0",
              backgroundColor: value === "tab1" ? "#1d9bf0" : "#fff",
              cursor: "pointer",
            }}
            onClick={() => {
              setValue("tab1");
            }}
          >
            <Typography sx={{ fontSize: { xs: "small", md: "large" } }} mx={1}>
              مستقیم
            </Typography>
          </Box>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #1d9bf0",
              color: value === "tab2" ? "#fff" : "#1d9bf0",
              backgroundColor: value === "tab2" ? "#1d9bf0" : "#fff",
              cursor: "pointer",
            }}
            onClick={() => {
              setValue("tab2");
            }}
          >
            <Typography sx={{ fontSize: { xs: "small", md: "large" } }} mx={1}>
              معکوس
            </Typography>
          </Box>
        </Box>
      </Box>
      {
        value === 'tab1' ? <Stopwatch/> :
        value === 'tab2' ? <Countdown/> : ""
      }
    </Box>
  );
};

export default solvingMain;
