import React from "react";
import TestAnalysisDetailssec1 from "../../components/testAnalysis/TestAnalysisDetailssec1";
import TestAnalysisDetailssec2 from "../../components/testAnalysis/TestAnalysisDetailssec2";
import { Box } from "@mui/material";

const TestAnalysisDetials = () => {
  return (
    <Box  p={{xs:1,md:2}}>
      <TestAnalysisDetailssec1 />
      <TestAnalysisDetailssec2 />
    </Box>
  );
};

export default TestAnalysisDetials;
