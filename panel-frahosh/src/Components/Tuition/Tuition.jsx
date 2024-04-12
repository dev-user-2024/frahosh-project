import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useEffect } from "react";
import { serverApi , token } from '../../confing/confing';
import axios from "axios";
export const data = {
    labels: ['سررسید شده', 'پرداخت شده', 'پرداخت نشده'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          '#fff2f1',
          '#E9FAF2',
          '#ddd',
        ],
        borderColor: [
          '#F1A6A0',
          '#ACEBCE',
          '#b5b5b5',
        ],
        borderWidth: 1,
      },
    ],
  };
const Tuition = () => {
  const [value, setValue] = useState("tab1");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}tuitions`, { headers: { authorization: `Bearer ${token}` }});
        console.log(data)
        // const { data2 } = await axios.get(`${serverApi}tuitions/count`, { headers: { authorization: `Bearer ${token}` }});
        // console.log(data2)
        // const { data3 } = await axios.get(`${serverApi}tuitions/category`, { headers: { authorization: `Bearer ${token}` }});
        // console.log(data3)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    }
  }

  return (
    <Box>
      <Grid container spacing={1} justifyContent='space-between' alignItems='center'>
        <Grid item lg={5}>
          <Box
            px={2}
            py={4}
            sx={{
              backgroundColor: "#fff",
              boxShadow: "3px 3px 30px rgba(0, 0, 0, 0.08)",
              textAlign: "center",
            }}
          >
            <Typography mb={2}>مجموع مبلغ پرداخت شده : 32,000 تومان</Typography>
            <Typography>مانده بدهی : 180,000 تومان</Typography>
          </Box>
        </Grid>
        <Grid item lg={5} >
        <Box sx={{width:"280px" , height:"280px"}}>
        <Pie options={options}  data={data} style={{width:"250px" , height:"250px"}}  />
        </Box>
        </Grid>
      </Grid>
      <Box mt={4} p={2}>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              height: "50px",
              border: "1px solid #1d9bf0",
            }}
          >
            <Box
              sx={{
                width: "33.33%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #1d9bf0",
                color: value === "tab1" ? "#fff" : "#1d9bf0",
                backgroundColor: value === "tab1" ? "#1d9bf0" : "#fff",
                cursor: "pointer",
              }}
              onClick={() => {
                setValue("tab1");
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "small", md: "large" } }}
                mx={1}
              >
                اقساط سررسید شده
              </Typography>
            </Box>
            <Box
              sx={{
                width: "33.33%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #1d9bf0",
                color: value === "tab2" ? "#fff" : "#1d9bf0",
                backgroundColor: value === "tab2" ? "#1d9bf0" : "#fff",
                cursor: "pointer",
              }}
              onClick={() => {
                setValue("tab2");
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "small", md: "large" } }}
                mx={1}
              >
                اقساط پرداخت نشده
              </Typography>
            </Box>
            <Box
              sx={{
                width: "33.33%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #1d9bf0",
                color: value === "tab3" ? "#fff" : "#1d9bf0",
                backgroundColor: value === "tab3" ? "#1d9bf0" : "#fff",
                cursor: "pointer",
              }}
              onClick={() => {
                setValue("tab3");
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "small", md: "large" } }}
                mx={1}
              >
                اقساط پرداخت شده
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt={2} p={2}>
        <Grid container spacing={1}>
          <Grid item xs={12} mb={2}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "50px",
                padding: "8px",
                boxShadow: "3px 3px 30px rgba(0, 0, 0, 0.08)",
                cursor: "pointer",
              }}
            >
              <Typography mr={2} variant="caption">
                26 شهریور 1401{" "}
              </Typography>
              <Typography>20,000 تومان</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} mb={2}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "50px",
                padding: "8px",
                boxShadow: "3px 3px 30px rgba(0, 0, 0, 0.08)",
                cursor: "pointer",
              }}
            >
              <Typography mr={2} variant="caption">
                26 شهریور 1401{" "}
              </Typography>
              <Typography>20,000 تومان</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} mb={2}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "50px",
                padding: "8px",
                boxShadow: "3px 3px 30px rgba(0, 0, 0, 0.08)",
                cursor: "pointer",
              }}
            >
              <Typography mr={2} variant="caption">
                26 شهریور 1401{" "}
              </Typography>
              <Typography>20,000 تومان</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Tuition;
