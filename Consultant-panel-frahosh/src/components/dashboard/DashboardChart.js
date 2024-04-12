import React from "react";
import styles from "./dashboard.module.css";
import { Stack, Select, FormControl, MenuItem, Box } from "@mui/material";
import { Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useTheme } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardChart() {
  const theme = useTheme();
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
  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  return (
    <Box
      className={styles.componentStyle}
      sx={{
        height: "400px",
        overflow: "",
        backgroundColor:
          theme.palette.mode === "dark" ? theme.palette.grey.light : "#FFFFFF",
      }}
    >
      <Typography variant="h6" textAlign="left">
        اطلاعات جلسات مشاوره
      </Typography>
      <Stack direction="row" justifyContent="space-between">
        <FormControl size="small" sx={{ width: "30%", mb: 1 }}>
          <Select labelId="" defaultValue={1}>
            <MenuItem value={1}>برگزار شده</MenuItem>
            <MenuItem value={2}>برگزار نشده</MenuItem>
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ width: "30%", mb: 1 }}>
          <Select labelId="" defaultValue={1}>
            <MenuItem value={1}>روزانه</MenuItem>
            <MenuItem value={2}>هفتگی</MenuItem>
            <MenuItem value={3}>ماهیانه</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </Box>
    </Box>
  );
}
