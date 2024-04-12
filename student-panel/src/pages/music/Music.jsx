import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useState } from "react";
import MusicList from "../../Components/music/MusicList";
import SoundList from "../../Components/music/SoundList";
const Music = () => {
  const [tab, setTab] = useState(1);
  return (
    <div>
      
      <Grid
        container
        spacing={0}
        sx={{
          width: "100%",
          height: "50px",
          border: "1px solid #1d9bf0",
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #1d9bf0",
            color: tab === 1 ? "#fff" : "#1d9bf0",
            backgroundColor: tab === 1 ? "#1d9bf0" : "#fff",
            cursor: "pointer",
          }}
          onClick={() => {
            setTab(1);
          }}
        >
          <Typography sx={{ fontSize: { xs: "small", md: "large" } }} mx={1}>
            موسیقی
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #1d9bf0",
            color: tab === 2 ? "#fff" : "#1d9bf0",
            backgroundColor: tab === 2 ? "#1d9bf0" : "#fff",
            cursor: "pointer",
          }}
          onClick={() => {
            setTab(2);
          }}
        >
          <Typography sx={{ fontSize: { xs: "small", md: "large" } }} mx={1}>
            صدا
          </Typography>
        </Grid>
      </Grid>
      <Box p={2}>
        {tab === 1 ? <MusicList /> : tab === 2 ? <SoundList /> : ""}
      </Box>
    </div>
  );
};

export default Music;
