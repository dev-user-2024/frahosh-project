import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import { Add, ArrowBack } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
} from "@mui/material";
import { FileUploadOutlined } from "@mui/icons-material";

const Scorelist = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
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
         نمرات درس ریاضی
        </Typography>
      </Box>
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12}>
          <Box
            display="flex"
            p={4}
            justifyContent="space-between"
            mb={2}
            sx={{
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.grey.light
                  : "#FFFFFF",
              boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
              color: theme.palette.mode === "dark" ? "#fff" : "000",
            }}
          >
            <Typography>20 خرداد 1401</Typography>
            <Typography>میان ترم</Typography>
            <Typography>15 از 15</Typography>

          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Scorelist;
