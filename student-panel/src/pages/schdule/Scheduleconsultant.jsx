import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import ConsultantProgram from "../../Components/schedule/ConsultantProgram";
import MyProgram from "../../Components/schedule/MyProgram";
import FrahoshProgram from "../../Components/schedule/FrahoshProgram";
const Scheduleconsultant = () => {
  const [tab, setTab] = useState(1);

  return (
    <Box
      mt={2}
      sx={{
        backgroundColor: "background.paper",
        boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
        color: "text.secondary",
      }}
    >
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
          xs={4}
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
            برنامه پیشنهادی مشاور
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
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
            برنامه من
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #1d9bf0",
            color: tab === 3 ? "#fff" : "#1d9bf0",
            backgroundColor: tab === 3 ? "#1d9bf0" : "#fff",
            cursor: "pointer",
          }}
          onClick={() => {
            setTab(3);
          }}
        >
          <Typography sx={{ fontSize: { xs: "small", md: "large" } }} mx={1}>
            برنامه پیشنهادی فراهوش
          </Typography>
        </Grid>
      </Grid>
      {tab === 1 ? (
        <ConsultantProgram />
      ) : tab === 2 ? (
        <MyProgram />
      ) : tab === 3 ? (
        <FrahoshProgram />
      ) : (
        " "
      )}
    </Box>
  );
};

export default Scheduleconsultant;
