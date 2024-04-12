import React from "react";
import { useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material";
import { Add } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
} from "@mui/material";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";

const NewMeeting = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Box mt={2}>
        <Typography
          sx={{ color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385" }}
          textAlign="left"
          fontWeight={600}
          mb={1}
        >
          اطلاعات جلسه
        </Typography>
        <Box
          sx={{
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.grey.light
                : "#FFFFFF",
          }}
          p={{ xs: 2, md: 4 }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
            >
              تاریخ : 2مهر 1402
            </Typography>
            <Typography
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
            >
              ساعت : 9 صبح
            </Typography>
          </Box>
          <Box mt={5} display="flex" justifyContent="space-between">
            <Typography
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
            >
              برگزارکننده: مدیر مدرسه-آقای نیازی و مشاور مدرسه-آقای حسینی
            </Typography>
            <Typography
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
            >
              موضوع: المپیاد ریاضی سال 1401
            </Typography>
          </Box>
        </Box>

        <Box mt={4} display="flex" justifyContent="center">
          <Button variant="contained" sx={{ width: "150px" }} disabled>
            ورود به جلسه
          </Button>
          <Button variant="contained" sx={{ ml: 2 }} onClick={handleClickOpen}>
            <Add />
            ساخت جلسه جدید
          </Button>
        </Box>
        <Typography
          sx={{ color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
          variant="caption"
          mt={2}
        >
          * لینک ورود به جلسه در زمان مشخص شده فعال می‌گردد.
        </Typography>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <DialogContentText textAlign="center" id="alert-dialog-description">
            <Grid width="100%" container spacing={2}>
              <Grid item xs={12} md={12} mr={2}>
                <Typography
                  textAlign="left"
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                  }}
                >
                  عنوان جلسه
                </Typography>
                <input className="input-style" />
              </Grid>
              <Grid item xs={6} md={6}>
                <Box display="flex" flexDirection="column" mr={2}>
                  <Typography
                    textAlign="left"
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                    }}
                  >
                    تاریخ
                  </Typography>
                  <DatePicker
                    render={<InputIcon className="input-style" />}
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom-right"
                  />
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography
                  textAlign="left"
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                  }}
                >
                  دسته شرکت کنندگان
                </Typography>
                <select className="input-style">
                  <option></option>
                  <option>مدیران</option>
                  <option>معلمان</option>
                </select>
              </Grid>
              <Grid item xs={6} md={5}>
                <Typography
                  textAlign="left"
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                  }}
                >
                  مدرسه
                </Typography>
                <select className="input-style">
                  <option></option>
                  <option>مدیران</option>
                  <option>معلمان</option>
                </select>
              </Grid>
              <Grid item xs={6} md={2}>
                <Typography
                  textAlign="left"
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                  }}
                >
                  شماره کلاس
                </Typography>
                <select className="input-style">
                  <option></option>
                  <option>مدیران</option>
                  <option>معلمان</option>
                </select>
              </Grid>
              <Grid item xs={6} md={2}>
                <Typography
                  textAlign="left"
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                  }}
                >
                  پایه
                </Typography>
                <select className="input-style">
                  <option></option>
                  <option>1</option>
                  <option>معلمان</option>
                </select>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography
                  textAlign="left"
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                  }}
                >
                  مقطع
                </Typography>
                <select className="input-style">
                  <option></option>
                  <option>دبیرستان اول</option>
                  <option>معلمان</option>
                </select>
              </Grid>
              <Grid item xs={6} md={5}>
                <Typography
                  textAlign="left"
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                  }}
                >
                  نام و نام خانوادگی
                </Typography>
                <select className="input-style">
                  <option></option>
                  <option>محمد علی اکبری</option>
                  <option>معلمان</option>
                </select>
              </Grid>
              <Grid item xs={6} md={2}>
                <Button
                  sx={{
                    width: "166px",
                    height: "45px",
                    gap: "5px",
                    borderRadius: "10px",
                    fontSize: "15px",
                    mt: 2.2,
                  }}
                  variant="contained"
                >
                  <Add />
                  اضافه کردن
                </Button>
              </Grid>
            </Grid>
          </DialogContentText>
          <DialogActions sx={{ mx: "auto", mt: 5, pt: 5 }}>
            <Button variant="contained" fullWidth onClick={handleClose}>
              ایجاد
            </Button>
            <Button variant="outlined" fullWidth onClick={handleClose}>
              انصراف
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default NewMeeting;
