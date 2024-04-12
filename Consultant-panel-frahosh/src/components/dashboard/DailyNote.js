import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./dashboard.module.css";
import dailynote from "../../assests/image/dailynote.svg";
import { useTheme } from "@mui/material";
export default function DailyNote() {
  const theme = useTheme();
  return (
    <Box
      className={styles.componentStyle}
      sx={{
        height: "92%",
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
        یاداشت روزانه
      </Typography>
      <textarea
        style={{
          backgroundImage: `url(${dailynote})`,
          height: "calc(100% - 70px)",
          marginTop: 3,
          width: "100%",
          lineHeight: "30px",
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey.light
              : "#FFFFFF",
        }}
      ></textarea>
    </Box>
  );
}
