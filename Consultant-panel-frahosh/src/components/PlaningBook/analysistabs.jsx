import React from 'react';
import { Grid , Typography ,  } from '@mui/material';
import { useState } from 'react';
import Analysisall from './Analysisall';
import Analysis from './Analysis';
import { useTheme } from "@mui/material";
const PlaningBook = () => {
  const theme = useTheme();
    const [tab,setTab] = useState(1)
    return (
        <div>
        <Grid
        mt={3}
        ml={3}
        container
        spacing={0}
        sx={{
          width: "260px",
          [theme.breakpoints.down("sm")]: {
            ml: 0
          },
        }}
      >
      <Grid item xs={6}
      sx={{
        width: "126px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #095385",
        color: tab === 1 ? "#fff" : "#095385",
        backgroundColor: tab === 1 ? "#095385" : "#fff",
        cursor: "pointer",
        borderRadius: "10px 0px 0px 10px",
      }}
      onClick={() => {
        setTab(1);
      }}
      >
      <Typography
      sx={{ fontSize: { xs: "small", md: "small" },   }}
      mx={1}
    >
      یک دانش آموز
    </Typography>
      </Grid>
      <Grid item xs={6}
      sx={{
        width: "126px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #095385",
        color: tab === 2 ? "#fff" : "#095385",
        backgroundColor: tab === 2 ? "#095385" : "#fff",
        cursor: "pointer",
        borderRadius: "0px 10px 10px 0px",
      }}
      onClick={() => {
        setTab(2);
      }}
      >
      <Typography
      sx={{ fontSize: { xs: "small", md: "small" },   }}
      mx={1}
    >
      همه دانش آموزآن
    </Typography>
      </Grid>
      </Grid>
      {
        tab === 1 ? <Analysis/> : 
        tab === 2 ?  <Analysisall/> :""
      }
        </div>
    );
};

export default PlaningBook;