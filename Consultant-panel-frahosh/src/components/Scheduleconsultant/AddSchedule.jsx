import * as React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function AddSchedule(props) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const theme = useTheme();

  return (
    <Box mt={6}>
      <Box width="100%" display="flex" flexDirection="column">
        <Typography
          sx={{
            color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
            fontFamily: "Rokh-Bold",
            fontSize: "18px",
            mb: 1,
          }}
          textAlign="left" // Set text alignment to right
          fontWeight={500}
          variant="h5"
          component="p"
          flex="1" // Take remaining space
        >
          برنامه روز یکشنبه 16 مرداد
        </Typography>
        <Box mt={3} display="flex" alignItems="center" spacing={0}>
          <Checkbox
            {...label}
            defaultChecked
            sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
          />
          <Typography
            sx={{
              color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
              fontSize: "14px",
              mr: 1,
            }}
            textAlign="center"
            fontWeight={600}
            component="p"
            // Take remaining space
          >
            زمان بندی دقیق
          </Typography>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          spacing={5}
          p={{ xs: 1, md: 2 }}
          sx={{
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.grey.light
                : "#FFFFFF",
            boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Grid width="100%" container spacing={3} p= {2} alignItems="center">
            <Grid
              width="100%"
              item
              lg={3}
              md={5}
              xs={6}
              display="flex"
              alignItems="center"
            >
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                  fontSize: "14px",
                  mr: 1,
                }}
                textAlign="center"
                fontWeight={600}
                component="p"
                mr={1}
              >
                انتخاب درس
              </Typography>
              <select
                style={{
                  width: "109px",
                }}
                className="input-style"
              >
                <option>ریاضی</option>
                <option>11</option>
                <option>12</option>
              </select>
            </Grid>
            <Grid item lg={3} md={6} xs={12} display="flex" alignItems="center">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                  fontSize: "14px",
                }}
                textAlign="center"
                fontWeight={600}
                component="p"
                mr={1}
              >
                عنوان کار
              </Typography>
              <input
                style={{
                  width: "173px",
                }}
                className="input-style"
                value="تست زدن"
              />
            </Grid>
            <Grid item lg={2} md={5} xs={12} display="flex" alignItems="center">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                  fontSize: "14px",
                }}
                textAlign="center"
                fontWeight={600}
                component="p"
                mr={1}
              >
                شروع مطالعه از
              </Typography>
              <select
                style={{
                  width: "79px",
                }}
                className="input-style"
              >
                <option>17</option>
                <option>11</option>
                <option>12</option>
              </select>
            </Grid>
            <Grid item lg={2} md={4} xs={12} display="flex" alignItems="center">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                  fontSize: "14px",
                }}
                textAlign="center"
                fontWeight={600}
                component="p"
                mr={1}
              >
                به مدت
              </Typography>
              <select
                style={{
                  width: "109px",
                }}
                className="input-style"
              >
                <option>30 دقیقه</option>
                <option>11</option>
                <option>12</option>
              </select>
            </Grid>
            <Grid item lg={2} md={3} xs={12} display="flex" alignItems="center" justifyContent="center">
              <Button
                sx={{
                  display: "flex",
                  width: {
                    xs: "100%",
                    sm: "95px",
                  },
                  height: "48px",
                  gap: "10px",
                  borderRadius: "10px",
                  fontSize: "16px",
                }}
                variant="contained"
              >
                ثبت زمان
              </Button>
            </Grid>
          </Grid>

        </Box>
        <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#D40F00" : "#D40F00",
                  fontSize: "14px",
                }}
                textAlign="left"
                fontWeight={400}
                component="p"
                mt= {3}
                mb= {4}
              >
              دقت کنید فقط تا 14 روز قبل زمان برنامه ریزی درسی را  میتوانید تغییر دهید
              </Typography>
        <Button
              sx={{
                display: "flex",
                width: {
                  sm: "179px",
                  md: "179px",
                },
                height: "48px",
                gap: "10px",
                borderRadius: "10px",
                fontSize: "16px",
                color: theme.palette.mode === "dark" ? "#fff" : "#095385",
                border: "2px solid #095385",
                borderColor: theme.palette.mode === "dark" ? "#fff" : "#095385",
                mt: 2,
              }}
              variant=""
            >
              <AddCircleOutlineOutlinedIcon />
              اضافه کردن درس
            </Button>
      </Box>
    </Box>
  );
}
