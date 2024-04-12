import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography, Box, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/material";

export default function Myconsultant() {
  const theme = useTheme();
  const breadcrumbs = [
    <Link
    underline="hover"
    key="1"
    href="./"
  >
    <Typography
      sx={{
        color: theme.palette.mode === "dark" ? "#93ccc3" : "#828282",
        fontWeight: "500",
        fontSize: "14px",
      }}
      key="1"
    >
      مشاوره
    </Typography>
    </Link>,
    <Link
      underline="hover"
      key="2"
      href="/consultant/myconsultant"
    >
      <Typography
        sx={{
          color: theme.palette.mode === "dark" ? "#fff" : "#000",
          fontWeight: "500",
          fontSize: "14px",
        }}
      >
        صفحه مشاوره من
      </Typography>
    </Link>,
  ];

  return (
    <Box p={{ xs: 1, md: 2 }} mt={{ xs: 3, md: 3 }}>
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<ArrowBackIosIcon fontSize="tiny" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </Box>
  );
}
