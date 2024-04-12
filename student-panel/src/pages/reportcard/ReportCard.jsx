import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const ReportCard = () => {
  return (
    <Box px={2}>
      <Grid mt={3} container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={6} lg={5}>
          <Box display="flex" alignItems="center" mr={1}>
            <Typography
              textAlign="left"
              color="text.primary"
              fontWeight={700}
              sx={{ mr: 2, width: 90 }}
            >
              نوع کارنامه
            </Typography>
            <select className="input-style">
              <option>ماهانه</option>
              <option>میان ترم</option>
            </select>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Box display="flex" alignItems="center" mr={1}>
            <Typography
              textAlign="left"
              color="text.primary"
              fontWeight={700}
              sx={{ mr: 2, width: 90 }}
            >
              انتخاب ماه
            </Typography>
            <select className="input-style">
              <option>ماهانه</option>
              <option>میان ترم</option>
            </select>
          </Box>
        </Grid>
      </Grid>
      <Box mt={8}>
        <Box
          mb={5}
          display="flex"
          justifyContent="space-between"
          color="text.secondary"
          alignItems="center"
        >
          <Typography sx={{ mr: 4 }}>قران</Typography>
          <Box
            sx={{
              width: "100%",
              height: "10px",
              backgroundPosition: "bottom",
              background:
                " linear-gradient(to right,#1d9bf0 20%, rgba(255, 255, 255, 0) 0%)",
              backgroundSize: "15px 2px",
              backgroundRepeat: "repeat-x",
              opacity: "0.5",
            }}
          ></Box>
          <Typography sx={{ ml: 4 }}>20</Typography>
        </Box>
        <Box
          mb={5}
          display="flex"
          justifyContent="space-between"
          color="text.secondary"
          alignItems="center"
        >
          <Typography sx={{ mr: 4 }}>قران</Typography>
          <Box
          sx={{
            width: "100%",
            height: "10px",
            backgroundPosition: "bottom",
            background:
              " linear-gradient(to right,#1d9bf0 10%, rgba(255, 255, 255, 0) 0%)",
            backgroundSize: "15px 2px",
            backgroundRepeat: "repeat-x",
            opacity: "0.5",
          }}
          ></Box>
          <Typography sx={{ ml: 4 }}>20</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ReportCard;
