import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import { useState } from "react";
import { FileUploadOutlined } from "@mui/icons-material";
const Solved = () => {
  const theme = useTheme();
  const [reply, setreply] = useState(false);
  return (
    <Box px={2}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={6} lg={5}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            وضعیت
          </Typography>
          <select
            className="input-style"
            disabled
            style={{ background: "none" }}
          >
            <option>پاسخ داده شده</option>
            <option>پاسخ داده نشده</option>
          </select>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            عنوان تیکت
          </Typography>
          <input value="ticket1" className="input-style" disabled />
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            تاریخ ارسال تیکت
          </Typography>
          <input value="22/5/1402" className="input-style" disabled />
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            تاریخ دریافت تیکت
          </Typography>
          <input value="22/5/1402" className="input-style" disabled />
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            درس
          </Typography>
          <select
            className="input-style"
            disabled
            style={{ background: "none" }}
          >
            <option>ریاضی</option>
            <option>علوم</option>
          </select>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            الویت
          </Typography>
          <select
            className="input-style"
            disabled
            style={{ background: "none" }}
          >
            <option>بالا</option>
            <option>کم</option>
          </select>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            متن پیام
          </Typography>
          <textarea
            value="ticket1"
            className="input-style"
            disabled
            style={{ height: "150px", resize: "none" }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            پاسخ
          </Typography>
          <textarea
            value="ticket1"
            className="input-style"
            disabled
            style={{ height: "150px", resize: "none" }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Box display="flex" alignItems="center" mt={1}>
            <Typography variant="caption" mr={4}>
              {" "}
              فایل های مرتبط
            </Typography>
            <input
              className="input-style"
              disabled
              value="1.pdf"
              style={{ width: "200px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Box display="flex" alignItems="center" mt={1}>
            <Typography variant="caption" mr={4}>
              {" "}
              فایل های مرتبط
            </Typography>
            <input
              className="input-style"
              value="1.pdf"
              disabled
              style={{ width: "200px" }}
            />
          </Box>
        </Grid>
      </Grid>

      {!reply && (
        <Box mt={4}>
          <Button
            variant="contained"
            sx={{ width: "250px" }}
            onClick={() => {
              setreply(true);
            }}
          >
            ارسال مجدد تیکت
          </Button>
        </Box>
      )}
      {reply && (
        <Box mt={3} mb={2}>
          <Grid container>
            <Grid item xs={12} md={6} lg={5}>
              <Typography
                textAlign="left"
                sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
              >
                متن پیام
              </Typography>
              <textarea
                className="input-style"
                style={{ height: "150px", resize: "none", padding: "10px" }}
              />
            </Grid>
          </Grid>
          <Box display="flex" alignItems="center" mt={1} mb={3}>
            <Typography variant="caption" mr={4}>
              بار گذاری فایل های مرتبط
            </Typography>
            <Button variant="contained" sx={{ ml: 2 }}>
              <FileUploadOutlined />
              بارگزاری فایل
            </Button>
          </Box>
          <Box textAlign='center' mt={3}>
          <Button variant="contained" sx={{ width: "250px" }}>
            ارسال تیکت
          </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Solved;
