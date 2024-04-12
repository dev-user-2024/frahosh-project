import React from 'react';
import { Grid , Typography ,  } from '@mui/material';
import { useState } from 'react';
import Planing from '../../Components/PlaningBook/Planing';
import Analysis from '../../Components/PlaningBook/Analysis';
import HeartWritten from '../../Components/PlaningBook/HeartWritten';
const PlaningBook = () => {
    const [tab,setTab] = useState(1)
    return (
        <div>
        <Grid
        mt={3}
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
      برنامه
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
      تحلیل
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
      دلنوشته
    </Typography>
      </Grid>
      </Grid>
      {
        tab === 1 ? <Planing/> : 
        tab === 2 ?  <Analysis/> :
        tab === 3 ?  <HeartWritten/> :""
      }
        </div>
    );
};

export default PlaningBook;