import { Grid } from '@mui/material'
import React from 'react'
import UserHistory from './Components/UserHistory'
import Quantity from './Components/Quantity'
import Charts from './Components/Charts'

const Dashboard = () => {
    return (
        <Grid container spacing={3} marginTop={1}>
            <UserHistory/>
            <Quantity />
            <Charts />
        </Grid>
    )
}

export default Dashboard