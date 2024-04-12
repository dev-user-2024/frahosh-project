import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { useTheme } from "@mui/material";

const ExamFiltering = () => {
  const theme = useTheme();
  return (
    <Box mt={2}>
      <Typography
        sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
        textAlign="left"
        fontWeight={600}
        mb={1}
      >
        جستجوی آزمون
      </Typography>
      <Box
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey.light
              : "#FFFFFF",
          boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
        }}
        p={2}
      >
        <Grid width="100%" container spacing={4}>
          <Grid item xs={6} md={3}>
            <Typography
              textAlign="left"
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
            >
              عنوان آزمون
            </Typography>
            <input className="input-style" />
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography
              textAlign="left"
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
            >
              کد آزمون
            </Typography>
            <input className="input-style" />
          </Grid>
          <Grid item xs={6} md={3} textAlign='left' >
            <Box display='flex' flexDirection='column'>
            <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            از تاریخ
          </Typography>
              <DatePicker
              render={<InputIcon className="input-style" />}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={3} textAlign='left' >
            <Box display='flex' flexDirection='column'>
            <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            تا تاریخ
          </Typography>
              <DatePicker
              render={<InputIcon className="input-style" />}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{  width: "200px" }}
            >
              جست وجو
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ExamFiltering;
