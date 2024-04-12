import { Add } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { examContext } from "../../../context/examContext";
const FinalAndSend = () => {
  const { pattern } = useContext(examContext);
  return (
    <div>
      <Grid container spacing={2} px={1} textAlign="left" alignItems="center">
        <Grid item xs={12} md={6} my={3}>
          <Typography>تعیین شرکت کنندگان در آزمون</Typography>
          <select className="input-style">
            <option>کلاس 102</option>
            <option>کلاس 102</option>
            <option>کلاس 102</option>
            <option>کلاس 102</option>
          </select>
        </Grid>
        <Grid item xs={12} md={4} my={3} ml={4}>
          <Button variant="contained">
            <Add />
            اضافه کردن به لیست
          </Button>
        </Grid>
      </Grid>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        mt="200px"
        pb={3}
      >
        {pattern.type == 1 ? (
          <Button
            type="submit"
            variant="contained"
            sx={{ ml: 2 }}
          >
            تایید و ارسال آزمون بر روی سامانه{" "}
          </Button>
        ) : (
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "200px", ml: 2 }}
          >
            تایید و چاپ
          </Button>
        )}
        <Button type="submit" variant="outlined" sx={{ width: "200px", ml: 2 }}>
          مشاهده پیش نمایش آزمون
        </Button>
      </Box>
    </div>
  );
};

export default FinalAndSend;
