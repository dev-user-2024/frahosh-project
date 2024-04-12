import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material";
import { Add  , ArrowBack, FileUploadOutlined} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
    Dialog,
    DialogActions,
    DialogContentText,
    DialogContent,
  } from "@mui/material";
const TicketList = () => {
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
      <Box display="flex" justifyContent="space-between">
        <Typography
          sx={{ color: theme.palette.mode === "dark" ? "#93CFF9" : "#095385" }}
          textAlign="left"
          fontWeight={600}
          mb={1}
        >
          تیکت های ارسال شده
        </Typography>
        <Button variant="contained" sx={{ ml: 2 }} onClick={handleClickOpen}>
          <Add />
          ایجاد تیکت جدید
        </Button>
      </Box>
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12}>
          <Box
            display="flex"
            p={2}
            justifyContent="space-between"
            sx={{
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.grey.light
                  : "#FFFFFF",
              boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
              color: theme.palette.mode === "dark" ? "#fff" : "000",
            }}
          >
            <Typography>22 مرداد 1402</Typography>
            <Typography>ریاضی</Typography>
            <Link to="1">
              <Typography
                display="flex"
                alignItems="center"
                color={theme.palette.mode === "dark" ? "#fff" : "000"}
              >
                در انتظار پاسخ
                <ArrowBack />
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
        <Box
          display="flex"
          p={2}
          justifyContent="space-between"
          sx={{
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.grey.light
                : "#FFFFFF",
            boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
            color: theme.palette.mode === "dark" ? "#fff" : "000",
          }}
        >
          <Typography>22 مرداد 1402</Typography>
          <Typography>ریاضی</Typography>
          <Link to="1">
            <Typography
              display="flex"
              alignItems="center"
              color={theme.palette.mode === "dark" ? "#fff" : "000"}
            >
              در انتظار پاسخ
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
      <DialogContent sx={{ height: "450px" }}>
        <DialogContentText textAlign="center" id="alert-dialog-description">
          <Grid container spacing={{xs:1,md:2}}>
           
          <Grid item xs={12} md={12}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            عنوان تیکت
          </Typography>
          <input className="input-style" />
        </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                textAlign="left"
                sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
              >
              دپارتمان
              </Typography>
              <select className="input-style">
                <option></option>
                <option>ریاضی</option>
                <option>زبان</option>
              </select>
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography
              textAlign="left"
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
            >
            الویت
            </Typography>
            <select className="input-style">
              <option>بالا</option>
              <option>متوسط</option>
              <option>کم</option>
            </select>
          </Grid>
          <Grid item xs={12} md={12}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            متن پیام
          </Typography>
          <textarea className="input-style" style={{height:"80px" , resize:"none"}} />
        </Grid>
            <Box display='flex' alignItems='center' mt={1}>
            <Typography variant="caption" mr={4}>بار گذاری فایل های مرتبط</Typography>
            <Button variant="contained" sx={{ ml: 2 }}>
            <FileUploadOutlined />
            بارگزاری فایل
          </Button>
            </Box>
          </Grid>
        </DialogContentText>
        <DialogActions sx={{ mx: "auto", mt: 5, pt: 5 }}>
          <Button variant="contained" fullWidth>
            ثبت
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

export default TicketList;
