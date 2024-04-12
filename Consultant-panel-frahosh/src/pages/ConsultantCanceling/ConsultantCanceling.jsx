import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import { Add, ArrowBack } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as TickCircle } from "../../assests/image/icon/tickcircle.svg";
import {
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
} from "@mui/material";

const ConsultantCanceling = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box p={{ xs: 1, md: 2 }} mt={{ xs: 3, md: 6 }}>
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
          اطلاعات جلسه
        </Typography>
      </Box>
      <Grid container spacing={2} mt={1}>
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
              flexWrap: "wrap",
            }}
          >
            <Typography fontWeight={600}>31 شهریور 1401</Typography>
            <Typography fontWeight={600}>مینا علی پور</Typography>
            <Link to="1">
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
                <Typography fontWeight={600}>2 روز مانده</Typography>
              </Box>
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Box mt={4} display="flex" alignItems="center">
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
          علت کنسل شدن جلسه
        </Typography>
      </Box>
      <Box mt={3} display="flex" alignItems="center">
        <input className="input-style" />
      </Box>
      <Box mt={5} display="flex" alignItems="center">
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
          توضیحات بیشتر
        </Typography>
      </Box>
      <Box mt={3} display="flex" alignItems="center">
        <textarea
          className="textarea"
          rows={15}
          cols={15}
          style={{
            width: "100%",
            height: "auto",
          }}
          placeholder="در این قسمت توضیحی درباره ی دلیل عدم برگذاری جلسه بدهید..."
        />
      </Box>
      <Button
        sx={{
          mt: 6,
          mb: 3,
          display: "flex",
          height: "48px",
          gap: "10px",
          borderRadius: "10px",
          fontSize: "16px",
          width: {
            xs: "100%",
            md: "187px",
          },
        }}
        variant="contained"
        onClick={handleClickOpen}
      >
        ثبت
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
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
              onClick={handleClose}
            >
              تایید
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ConsultantCanceling;
