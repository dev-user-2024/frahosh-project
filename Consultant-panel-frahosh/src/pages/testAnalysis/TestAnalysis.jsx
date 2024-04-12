import React from "react";
import TestAnalysisChart from "../../components/testAnalysis/TestAnalysisChart";
import TestAnalysisList from "../../components/testAnalysis/TestAnalysislist";
import { Box } from "@mui/material";

const TestAnalysis = () => {
  return (
    <Box  p={{xs:1,md:2}}>
      <TestAnalysisChart />
      <TestAnalysisList />
    </Box>
  );
};

export default TestAnalysis;
