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

const TestAnalysislist = () => {
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
          لیست کارنامه‌های بارگذاری شده
        </Typography>
        <Button
          sx={{
            display: "flex",
            width: "187px",
            height: "48px",
            gap: "10px",
            borderRadius: "10px",
            fontSize: "16px",
            transform: {
              xs: "scale(0.8)",
              md: "scale(1)",
            },
          }}
          variant="contained"
          onClick={handleClickOpen}
        >
          <FileUploadOutlined />
          بارگذاری فایل
        </Button>
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
            <Typography>کارنامه مهر ماه سال تحصیلی 1402-1401</Typography>

            <Link to="1">
              <Typography
                display="flex"
                alignItems="center"
                color={theme.palette.mode === "dark" ? "#fff" : "000"}
              >
                <ArrowBack />
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogContent sx={{ height: "auto" }}>
          <DialogContentText textAlign="center" id="alert-dialog-description">
            <Grid width="100%" container spacing={2}>
              <Grid item md={6} sm={6} xs={12}>
                <Typography
                  textAlign="left"
                  sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
                >
                  انتخاب ماه
                </Typography>
                <select className="input-style">
                  <option></option>
                  <option>دی</option>
                  <option>خرداد</option>
                </select>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <Typography
                  textAlign="left"
                  sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
                >
                  سال تحصیلی
                </Typography>
                <select className="input-style">
                  <option></option>
                  <option>1401-1402</option>
                  <option>1399-1400</option>
                </select>
              </Grid>
              <Grid item md={12} sm={12} xs={12} mt={1}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                >
                  <Button
                    sx={{
                      display: "flex",
                      width: "100%",
                      height: "40px",
                      gap: "10px",
                      borderRadius: "10px",
                      fontSize: "15px",
                    }}
                    variant="contained"
                  >
                    <Add />
                    انتخاب فایل
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </DialogContentText>
          <DialogActions sx={{ mx: "auto", mt: 5, pt: 5 }}>
            <Button variant="contained" fullWidth>
              ارسال
            </Button>
            <Button variant="outlined" fullWidth onClick={handleClose}>
              انصراف
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TestAnalysislist;
