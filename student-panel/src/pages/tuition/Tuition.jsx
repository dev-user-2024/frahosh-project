import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { useState , useEffect} from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
import axios from "axios";
import { serverApi,token } from "../../confing/confing";
export const data = {
  labels: ["سررسید شده", "پرداخت شده ", "پرداخت نشده"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: ["#8DD9B6", "#83C8F5", "#aeaeae"],
      borderColor: ["#11AA63", "#1D9BF0", "#828282"],
      borderWidth: 1,
    },
  ],
};
const Tuition = () => {
  const [tab, setTab] = useState(1);
  const [login,setLogin] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLogin(true)
        const { data } = await axios.get(`${serverApi}tuitions/category`, {
          headers: { authorization: `Bearer ${token}` },
        });
        setLogin(false)
        console.log(data)
      } catch (err) {
        setLogin(false)
        console.log(err);
      }
    };
    fetchData();
  }, []);

  ChartJS.register(ArcElement, Tooltip, Legend, plugins);

  const config = {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "right",
        },
      },
    },
  };
  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md={6} lg={4}>
          <Box
            sx={{
              backgroundColor: "background.paper",
              boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
              color: "text.secondary",
            }}
            p={2}
          >
            <Typography sx={{ mb: 3 }}>
              {" "}
              مجموع مبالغ پرداخت شده: 3200000 تومان
            </Typography>
            <Typography>مانده بدهی: 1800000 تومان</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} height={300}>
          <Pie data={data} options={config.options} />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        sx={{
          width: "100%",
          height: "50px",
          border: "1px solid #1d9bf0",
        }}
      >
        <Grid
          item
          xs={4}
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
          <Typography sx={{ fontSize: { xs: "small", md: "large" } }} mx={1}>
            اقساط سررسید شده
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
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
          <Typography sx={{ fontSize: { xs: "small", md: "large" } }} mx={1}>
            اقساط پرداخت نشده
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
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
          <Typography sx={{ fontSize: { xs: "small", md: "large" } }} mx={1}>
            اقساط پرداخت شده
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={3}>
          <Grid item xs={12}>
            <Box
              display="flex"
              p={2}
              justifyContent="space-between"
              sx={{
                backgroundColor: 'background.paper',
                boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
                color: 'text.secondary'
              }}
            >
              <Typography>22 مرداد 1402</Typography>
              <Typography>200,000</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              p={2}
              justifyContent="space-between"
              sx={{
                backgroundColor: 'background.paper',
                boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
                color: 'text.secondary'
              }}
            >
              <Typography>22 مرداد 1402</Typography>
              <Typography>350,000</Typography>
            </Box>
          </Grid>
        </Grid>
    </div>
  );
};

export default Tuition;
