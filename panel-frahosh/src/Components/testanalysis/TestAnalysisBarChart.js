import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import TitleTypography from '../about/title'
import { Box, Grid ,MenuItem,Select} from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
    display:false,
    },
  },
  scales:{
    y:{
        min:0,
        max:20
    }
  }
};

const labels = ['ریاضی', 'زبان', 'علوم', 'دینی', 'اجتماعی', 'قران', 'ورزش'];
const datalist = [18,16,10,14,17.5,20,19]
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: datalist.map((item) =>item ),
      backgroundColor: ' rgba(135,206,250,.9)',
    },
  ],
};

export default function TestAnalysisBarChart() {
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
        <Grid item xs={12} sm={7}>
            <TitleTypography>نمودار نمرات به تفکیک درس</TitleTypography>
        </Grid>
        <Grid item xs={12} sm={5}>
                <Select
                sx={{
                    borderRadius:"10px",
                    width:"100%"
                }}
                id=""
                defaultValue={1}
                >
                <MenuItem value={1}>ریاضی</MenuItem>
                <MenuItem >علوم</MenuItem>
                <MenuItem >هنر</MenuItem>
                <MenuItem >زبان فارسی</MenuItem>
                <MenuItem >اجتماعی</MenuItem>
                <MenuItem >تاریخ</MenuItem>
                <MenuItem >قرآن</MenuItem>
                <MenuItem >ورزش</MenuItem>
                <MenuItem >جغرافیا </MenuItem>
                <MenuItem >دینی</MenuItem>
                </Select>
        </Grid>
    </Grid>


    <Bar options={options} data={data} />
    </Box>
  )
}
