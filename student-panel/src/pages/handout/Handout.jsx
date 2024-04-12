import React from 'react';
import { useState } from 'react';
import { Grid , Typography , Box } from '@mui/material';
import MyHandout from '../../Components/handout/MyHandout';
import FrindesHandout from '../../Components/handout/FrindesHandout';
import TeacherHandout from '../../Components/handout/TeacherHandout';
const Handout = () => {
    const [tab,setTab] = useState(1)
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
      <Grid item xs={4}
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
      <Typography
      sx={{ fontSize: { xs: "small", md: "large" } }}
      mx={1}
    >
      جزوه های من
    </Typography>
      </Grid>
      <Grid item xs={4}
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
      <Typography
      sx={{ fontSize: { xs: "small", md: "large" } }}
      mx={1}
    >
      جزوه های دوستان
    </Typography>
      </Grid>
      <Grid item xs={4}
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
      <Typography
      sx={{ fontSize: { xs: "small", md: "large" } }}
      mx={1}
    >
      جزوه های معلم
    </Typography>
      </Grid>
      </Grid>

      <Box p={2} sx={{backgroundColor:"#FAFAFA"}}>
      {
        tab === 1 ? <MyHandout/>: 
        tab === 2 ?  <FrindesHandout/> :
        tab === 3 ?  <TeacherHandout /> : ""
      }
      </Box>
        </div>
    );
};

export default Handout;