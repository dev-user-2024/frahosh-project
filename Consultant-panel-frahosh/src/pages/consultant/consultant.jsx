import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import { Add, ArrowBack } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Consultant = () => {
  const theme = useTheme();

  return (
    <Box p={{ xs: 1, md: 2 }} mt={{ xs: 3, md: 6 }}>
      <Link to="./myconsultant">
        <Button
          sx={{
            display: "flex",
            height: "48px",
            gap: "10px",
            borderRadius: "10px",
            fontSize: "16px",
            transform: {
              xs: "scale(0.8)",
              md: "scale(1)",
            },
            width: {
              xs: "100%",
              sm: "220px",
            },
          }}
          variant="contained"
        >
          <PersonOutlineOutlinedIcon />
          صفحه مشاوره من
        </Button>
      </Link>
      <Box mt={8} display="flex" alignItems="center">
        <Typography
          sx={{
            color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
            fontFamily: "Rokh-Bold",
            fontSize: "20px",
          }}
          textAlign="left" // Set text alignment to right
          fontWeight={600}
          variant="h5"
          component="p"
          flex="1" // Take remaining space
        >
          مشاوره‌های رزرو شده
        </Typography>
      </Box>
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12}>
          <Box
            display="flex"
            p={4}
            justifyContent="space-between"
            mb={2}
            alignItems="center"
            sx={{
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.grey.light
                  : "#FFFFFF",
              boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
              color: theme.palette.mode === "dark" ? "#fff" : "000",
            }}
          >
            <Typography fontWeight={600}>31 شهریور 1401</Typography>
            <Typography fontWeight={600}>مینا علی پور</Typography>
            <Link to="./Canceling">
              <Box
                container
                display="flex"
                alignItems="center"
                sx={{
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? theme.palette.grey.light
                      : "#FFFFFF",
                  color: theme.palette.mode === "dark" ? "#fff" : "000",
                }}
              >
                <Typography fontWeight={600}>2 روز مانده ← </Typography>
                <Button
                  sx={{
                    display: "flex",
                    height: "48px",
                    gap: "10px",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontSize: {
                      xs: "12px",
                      md: "16px",
                    },
                    ml: {
                      xs: 0,
                      md: 5,
                    },

                    width: {
                      xs: "100px",
                      sm: "157px",
                    },
                  }}
                  variant="contained"
                >
                  کنسل کردن مشاوره
                </Button>
              </Box>
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Box mt={8} display="flex" alignItems="center">
        <Typography
          sx={{
            color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
            fontFamily: "Rokh-Bold",
            fontSize: "20px",
          }}
          textAlign="left" // Set text alignment to right
          fontWeight={600}
          variant="h5"
          component="p"
          flex="1" // Take remaining space
        >
          مشاوره‌های انجام شده
        </Typography>
      </Box>
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12}>
          <Box
            display="flex"
            p={4}
            justifyContent="space-between"
            mb={2}
            alignItems="center"
            sx={{
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.grey.light
                  : "#FFFFFF",
              boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
              color: theme.palette.mode === "dark" ? "#bbbaba" : "#6C6C6C",
              flexWrap: "wrap",
            }}
          >
            <Typography fontWeight={600}>31 شهریور 1401</Typography>
            <Typography fontWeight={600}>مینا علی پور</Typography>
            <Link to="Counseling/Canceling">
              <Box
                container
                display="flex"
                alignItems="center"
                sx={{
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? theme.palette.grey.light
                      : "#FFFFFF",
                  color: theme.palette.mode === "dark" ? "#bbbaba" : "#6C6C6C",
                }}
              >
                <Typography fontWeight={600}> مشاهده جزییات ←</Typography>
              </Box>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Consultant;
