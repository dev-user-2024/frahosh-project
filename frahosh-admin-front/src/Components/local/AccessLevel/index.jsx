import React from 'react'
import Options from './Components/Options'
import Table from './Components/Table'
import { Grid } from '@mui/material'

const AccessLevel = () => {
  return (
    <Grid container>
      <Options />
      <Table />
    </Grid>
  )
}

export default AccessLevel