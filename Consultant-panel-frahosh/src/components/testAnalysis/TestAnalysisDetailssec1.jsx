import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
} from "@mui/material";
import { ReactComponent as TickCircle } from "../../assests/image/icon/tickcircle.svg";

const TestAnalysisDetailssec1 = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <div>
      <Box
        mt={2}
        mb={4}
        display="flex"
        alignItems="center"
        justifyContent="space-between" // Align items to the sides
      >
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
          کارنامه مهر ماه سال تحصیلی 1402-1401
        </Typography>
        <Button
          sx={{
            display: "flex",
            width: "187px",
            height: "48px",
            transform: {
              xs: "scale(0.8)",
              md: "scale(1)",
            },
            gap: "10px",
            borderRadius: "10px",
            fontSize: "16px",
          }}
          variant="contained"
          onClick={handleClickOpen}
        >
          + نوشتن نظر
        </Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="md"
        sx={{
          borderRadius: "10rem",
        }}
      >
        <DialogContent sx={{ height: "auto" }}>
          <DialogContentText textAlign="center" id="alert-dialog-description">
            <Grid width="100%" container>
              <Grid item md={12} sm={12} xs={12} mt={1}>
                <Typography
                  textAlign="left"
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                    fontWeight: "600",
                    mb: 2,
                  }}
                >
                  نوشتن نظر برای دانش آموز
                </Typography>
                <textarea
                  rows={15}
                  cols={15}
                  style={{
                    width: "95%",
                    height: "auto",
                  }}
                  className="textarea"
                  placeholder="متن مورد نظر خود را وارد کنید..."
                />
              </Grid>
            </Grid>
          </DialogContentText>
          <DialogActions sx={{ mx: "auto", mt: 5, pt: 0 }}>
            <Button onClick={handleClickOpen2} variant="contained" fullWidth>
              ارسال
            </Button>
            <Button variant="outlined" fullWidth onClick={handleClose}>
              انصراف
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        sx={{
          borderRadius: "10rem",
        }}
      >
        <DialogContent sx={{ height: "auto", borderRadius: "10px" }}>
          <DialogContentText textAlign="center" id="alert-dialog-description">
            <Grid width="100%" container>
              <Grid item md={12} sm={12} xs={12} mt={1}>
                <TickCircle />
                <Typography
                  textAlign="center"
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                    fontWeight: "600",
                    mb: 2,
                    mt: 1,
                    fontSize: "22px",
                  }}
                >
                  نظر شما با موفقیت ارسال شد.
                </Typography>
              </Grid>
            </Grid>
          </DialogContentText>
          <DialogActions
            sx={{ mx: "auto", mt: 2, pt: 0, justifyContent: "center" }}
          >
            <Button
              sx={{
                display: "flex",
                width: "173px",
                height: "48px",
                transform: {
                  xs: "scale(0.8)",
                  md: "scale(1)",
                },
                gap: "10px",
                borderRadius: "10px",
                fontSize: "16px",
              }}
              variant="contained"
              onClick={handleClose2}
            >
              تایید
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TestAnalysisDetailssec1;
