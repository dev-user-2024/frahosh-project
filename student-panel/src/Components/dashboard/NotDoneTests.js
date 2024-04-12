import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import TitleTypography from "../about/title";
import styles from "./dashboard.module.css";
import link from "../../assests/image/svg/link.svg";

export default function NotDoneTests(props) {
  const { date1, date2, date3, lesson1, lesson2, lesson3 } = props;

  return (
    <Box
      className={styles.componentStyle}
      sx={{
        height: "224px",
        overflow: "auto",
        backgroundColor: "background.paper",
      }}
    >
      <TitleTypography>آزمون‌های انجام نشده</TitleTypography>
      <Grid container>
        <Grid container item xs={12} mb={2} mt={2}>
          <Grid item xs={4}>
            <Typography color="text.secondary">{date1}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography color="text.secondary">{lesson1}</Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to="/testlist">
              <img src={link} />
            </Link>
          </Grid>
        </Grid>

        <Grid container item xs={12} mb={2}>
          <Grid item xs={4}>
            <Typography>{date2}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>{lesson2}</Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to="/testlist">
              <img src={link} />
            </Link>
          </Grid>
        </Grid>

        <Grid container item xs={12} mb={2}>
          <Grid item xs={4}>
            <Typography>{date3}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>{lesson3}</Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to="/testlist">
              <img src={link} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
