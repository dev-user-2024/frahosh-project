import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import TitleTypography from "../about/title";
import styles from "./dashboard.module.css";

export default function ReservedConsultation(props) {
  const { date1, date2, date3, name1, name2, name3 } = props;
  return (
    <Box
      className={styles.componentStyle}
      sx={{
        height: "224px",
        overflow: "auto",
        backgroundColor: "background.paper",
      }}
    >
      <TitleTypography>مشاوره‌های رزرو</TitleTypography>
      <Grid container>
        <Grid container item xs={12} mb={2} mt={2}>
          <Grid item xs={6}>
            <Typography color="text.secondary">{date1}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color="text.secondary">{name1}</Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} mb={2}>
          <Grid item xs={6}>
            <Typography>{date2}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{name2}</Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} mb={2}>
          <Grid item xs={6}>
            <Typography>{date3}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{name3}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
