import React from 'react'
import TitleTypography from '../about/title'
import { Box, Grid ,MenuItem,Select} from '@mui/material';
import {Line} from 'react-chartjs-2';

export default function TestAnalysisChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]}
const config = {
type: 'line',
data: data,
options: {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    }
  }
},
}; 
  return (
    <Box
    sx={{
      width:"100%"
    }}>
      <Grid container 
      sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
      }}
      mb={5}>
          <Grid item xs={7}>
              <TitleTypography>نمودار تحلیل ماهانه</TitleTypography>
          </Grid>
          <Grid item xs={5}>
                  <Select
                  sx={{
                      borderRadius:"10px",
                      width:"100%"
                  }}
                  id=""
                  defaultValue={1}
                  >
                  <MenuItem value={1}>فروردین</MenuItem>
                  <MenuItem >اردیبهشت</MenuItem>
                  <MenuItem >خرداد</MenuItem>
                  <MenuItem >تیر</MenuItem>
                  <MenuItem >مرداد</MenuItem>
                  <MenuItem >شهریور</MenuItem>
                  <MenuItem >مهر</MenuItem>
                  <MenuItem >آبان</MenuItem>
                  <MenuItem >آذر </MenuItem>
                  <MenuItem >دی</MenuItem>
                  <MenuItem >بهمن</MenuItem>
                  <MenuItem >اسفند</MenuItem>

                  </Select>
          </Grid>
      </Grid>
      <Line data={data} options={config}  />
    </Box>
  )
}
