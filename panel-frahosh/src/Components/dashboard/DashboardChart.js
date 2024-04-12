import React from "react";
import styles from "./dashboard.module.css";
import { Line } from "react-chartjs-2";
import { Stack, Select, FormControl, MenuItem, Box } from "@mui/material";
import TitleTypography from "../about/title";

export default function DashboardChart() {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Line Chart",
        },
      },
    },
  };
  return (
    <Box
      className={styles.componentStyle}
      sx={{
        height: "400px",
        overflow: "",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <TitleTypography>حضور در سامانه</TitleTypography>
        <FormControl size="small" sx={{ width: "30%", mb: 1 }}>
          <Select labelId="" id="" defaultValue={1}>
            <MenuItem value={1}>روزانه</MenuItem>
            <MenuItem value={2}>هفتگی</MenuItem>
            <MenuItem value={3}>ماهیانه</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Line data={data} options={config} className={styles.chart} />
    </Box>
  );
}
