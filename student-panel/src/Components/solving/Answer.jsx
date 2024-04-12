import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { ArrowForwardOutlined } from "@mui/icons-material";

const Answer = ({ type, setType }) => {
  return (
    <Box mt={1} p={1} color="text.secondary">
      <Typography
        sx={{ cursor: "pointer" }}
        color="text.primary"
        fontWeight={600}
        display='flex'
        alignItems='center'
        onClick={() => {
          setType("list");
        }}
      >
        <ArrowForwardOutlined />
        بازگشت به لیست سوالات
      </Typography>
      <Grid container my={3} spacing={2} justifyContent="space-between">
        <Grid item xs={12} sm={6} lg={5}>
          <Box mb={3}>
            <label htmlFor="curentPass">وضعیت</label>
            <input
              style={{
                width: "100%",
                border: "1px solid #828282",
                borderRadius: "8px",
                padding: "5px",
                marginTop: "5px",
                color: "#828282",
              }}
              name="curentPass"
              id="curentPass"
              value="پاسخ داده شده"
            />
          </Box>
          <Box mb={3}>
            <label htmlFor="password">درس</label>
            <select
              style={{
                width: "100%",
                border: "1px solid #828282",
                borderRadius: "8px",
                padding: "5px",
                marginTop: "5px",
                color: "#828282",
              }}
              name="password"
              id="password"
            >
              <option>ریاضی</option>
              <option>علوم</option>
              <option>زبان انگلیسی</option>
            </select>
          </Box>
          <Box mb={3}>
            <label htmlFor="repeatPassword"> سوال</label>
            <textarea
              style={{
                width: "100%",
                border: "1px solid #828282",
                borderRadius: "8px",
                padding: "5px",
                marginTop: "5px",
                height: "120px",
                color: "#828282",
              }}
              name="repeatPassword"
              id="repeatPassword"
            />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography width="150px">فایل های مرتبط</Typography>
            <input
              style={{
                width: "100%",
                border: "1px solid #828282",
                borderRadius: "8px",
                padding: "5px",
                marginTop: "5px",
                color: "#828282",
              }}
              name="curentPass"
              id="curentPass"
              value="answer.pdf"
              readOnly
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={5}>
          <Box mb={3}>
            <label htmlFor="curentPass">تاریخ ارسال سوال</label>
            <input
              style={{
                width: "100%",
                border: "1px solid #828282",
                borderRadius: "8px",
                padding: "5px",
                marginTop: "5px",
                color: "#828282",
              }}
              name="curentPass"
              id="curentPass"
              value="31/02/1402"
              readOnly
            />
          </Box>
          <Box mb={3}>
            <label htmlFor="password">تاریخ دریافت پاسخ</label>
            <input
              style={{
                width: "100%",
                border: "1px solid #828282",
                borderRadius: "8px",
                padding: "5px",
                marginTop: "5px",
                color: "#828282",
              }}
              name="curentPass"
              id="curentPass"
              value="31/02/1402"
              readOnly
            />
          </Box>
          <Box mb={3}>
            <label htmlFor="repeatPassword"> پاسخ</label>
            <textarea
              style={{
                width: "100%",
                border: "1px solid #828282",
                borderRadius: "8px",
                padding: "5px",
                marginTop: "5px",
                height: "120px",
                color: "#828282",
              }}
              name="repeatPassword"
              id="repeatPassword"
            />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography width="150px">فایل های مرتبط</Typography>
            <input
              style={{
                width: "100%",
                border: "1px solid #828282",
                borderRadius: "8px",
                padding: "5px",
                marginTop: "5px",
                color: "#828282",
              }}
              name="curentPass"
              id="curentPass"
              value="answer.pdf"
              readOnly
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Answer;
