import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import Sidebar from "../../components/sidebar/Sidebar"
import AppbarContainer from "../../components/navbar/AppbarContainer";
const MainLayout = () => {
    return (
        <Grid container spacing={0} mb={0}>
        <Grid item md={3} lg={2} >
        <Sidebar />
      </Grid>
      <Grid
        item
        overflow={{ Y: "scroll" }}
        xs={12}
        md={9}
        lg={10}
        sx={{ px: 2}}
      >
      <AppbarContainer/>
        <Outlet/>
      </Grid> 
        </Grid>
    );
};

export default MainLayout;