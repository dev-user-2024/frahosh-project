import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import styles from "./dashboard.module.css";
import { ArrowBack } from "@mui/icons-material";
import { useTheme } from "@mui/material";

export default function UncheckedAssignments(props) {
  const theme = useTheme();

  return (
    <Box
      className={styles.componentStyle}
      sx={{
        height: "224px",
        overflow: "auto",
        backgroundColor:
          theme.palette.mode === "dark" ? theme.palette.grey.light : "#FFFFFF",
      }}
    >
      <Typography
        variant="h5"
        component="p"
        sx={{
          fontFamily: "Rokh-Bold",
          mb: 1,
          color: theme.palette.mode === "dark" ? "#fff" : "#1D9BF0",
        }}
      >
        آزمون های پیش رو
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography
          sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
        >
          22 مرداد 1402
        </Typography>
        <Typography
        sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
      >
       محمد سعیدی
      </Typography>
        <Typography
          sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
        >
          <ArrowBack />
        </Typography>
      </Box>
    </Box>
  );
}
