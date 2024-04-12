import React from 'react';
import { Grid , Typography ,  } from '@mui/material';
import { useState } from 'react';
import Planing from '../../components/PlaningBook/Planing';
import Analysistabs from '../../components/PlaningBook/analysistabs';
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
      <Grid item xs={6}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #095385",
        color: tab === 1 ? "#fff" : "#095385",
        backgroundColor: tab === 1 ? "#095385" : "#fff",
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
      <Grid item xs={6}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #095385",
        color: tab === 2 ? "#fff" : "#095385",
        backgroundColor: tab === 2 ? "#095385" : "#fff",
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
      </Grid>
      {
        tab === 1 ? <Planing/> : 
        tab === 2 ?  <Analysistabs/> :""
      }
        </div>
    );
};

export default PlaningBook;