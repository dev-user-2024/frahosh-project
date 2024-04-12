import React from "react";
import ScoreCharts from "../../components/score/scorecharts";
import ScoreList from "../../components/score/scorelist";
import { Box } from "@mui/material";

const Score = () => {
  return (
    <Box  p={{xs:1,md:2}}>
      <ScoreCharts />
      <ScoreList />
    </Box>
  );
};

export default Score;
