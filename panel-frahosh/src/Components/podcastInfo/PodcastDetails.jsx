import React from "react";
import { Box, Grid, Typography, Rating, Stack } from "@mui/material";
import IntroductionPodcast from "./IntroductionPodcast";
import PodcastComments from "./PodcastComments";

const PodcastDetails = () => {
  return (
    <Box mb={3} p={1} sx={{ width: "100%" }}>
      <IntroductionPodcast/>
      <PodcastComments/>
    </Box>
  );
};

export default PodcastDetails;
